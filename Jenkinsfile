namespace = "default"
serviceName = "spepas-webadmin"
service = "Spepas Webadmin"

def groovyMethods

m1 = System.currentTimeMillis()

pipeline {
  agent {
    label 'Jenkins-Agent'
  }

  tools {
    nodejs "NodeJS"
    dockerTool "Docker"
  }

  environment {
    DOCKER_CREDENTIALS = credentials("dockerhub")
    ELASTIC_APM_SERVER = credentials("elastic-apm-server")
    ELASTIC_APM_SERVER_TOKEN = credentials("elastic-apm-server-token")
    IMAGE_NAME = "jboadi" + "/" + "spepas-webadmin"
    IMAGE_TAG = "stable-${BUILD_NUMBER}"
  }

  stages {
    stage("Cleanup Workspace") {
      steps {
        cleanWs()
      }
    }

    stage("Prepare Environment") {
      steps {
        sh "[ -d pipeline ] || mkdir pipeline"
        dir("pipeline") {
          // Add your jenkins automation url to url field
          git branch: 'main', credentialsId: 'github', url: 'https://github.com/spepas-dev/spepas-jenkins-automation'
          script {
            groovyMethods = load("functions.groovy")
          }
        }
        // Add your client app github url to url field
        git branch: 'main', credentialsId: 'github', url: 'https://github.com/spepas-dev/test-admin-deployment'
        sh """
          echo VITE_NODE_ENV=production > .env
          echo VITE_API_URL=https://api.spepas.com >> .env
          echo VITE_ELASTIC_APM_SERVER=$ELASTIC_APM_SERVER >> .env
          echo VITE_ELASTIC_APM_SERVER_TOKEN=$ELASTIC_APM_SERVER_TOKEN >> .env
          cat .env
        """
        sh 'pnpm install'
      }
    }

    // stage("Lint Check") {
    //   steps {
    //     sh 'pnpm run lint:check'
    //   }
    // }

    stage("Code Format Check") {
      steps {
        sh 'pnpm run prettier:check'
      }
    }

    stage("Build and Push") {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'dockerhub', 
             usernameVariable: 'DOCKERHUB_CREDENTIAL_USR', 
             passwordVariable: 'DOCKERHUB_CREDENTIALS_PSW')]) {
            sh 'docker login -u $DOCKERHUB_CREDENTIAL_USR --password $DOCKERHUB_CREDENTIALS_PSW'
          }
        }
        sh "docker build -t $IMAGE_NAME ."
        sh "docker tag $IMAGE_NAME $IMAGE_NAME:$IMAGE_TAG"
        sh "docker tag $IMAGE_NAME $IMAGE_NAME:stable"
        sh "docker push $IMAGE_NAME:$IMAGE_TAG"
        sh "docker push $IMAGE_NAME:stable"
      }
    }

    stage("Clean Artifacts") {
      steps {
        sh "docker rmi $IMAGE_NAME:$IMAGE_TAG"
        sh "docker rmi $IMAGE_NAME:stable"
      }
    }

    stage("Create New Pods") {
      steps {
        withKubeCredentials(kubectlCredentials: [[caCertificate: '', clusterName: 'staging-spepasapp', contextName: 'staging-spepasapp', credentialsId: 'jenkins-k8s-token', namespace: '', serverUrl: 'https://spepas-h4xvz0de.hcp.northeurope.azmk8s.io:443']]) {
          script {
            def pods = groovyMethods.findPodsFromName("${namespace}", "${serviceName}")
            for (podName in pods) {
              sh """
                kubectl delete -n ${namespace} pod ${podName}
                sleep 10s
              """
            }
          }
        }
      }
    }
  }
  post {
    success {
      script {
        m2 = System.currentTimeMillis()
        def durTime = groovyMethods.durationTime(m1, m2)
        def author = groovyMethods.readCommitAuthor()
        groovyMethods.notifySlack("", "spepas-jenkins", [
        				[
        					title: "BUILD SUCCEEDED: ${service} Service with build number ${env.BUILD_NUMBER}",
        					title_link: "${env.BUILD_URL}",
        					color: "good",
        					text: "Created by: ${author}",
        					"mrkdwn_in": ["fields"],
        					fields: [
        						[
        							title: "Duration Time",
        							value: "${durTime}",
        							short: true
        						],
        						[
        							title: "Stage Name",
        							value: "Production",
        							short: true
        						],
        					]
        				]
        		]
        )
      }
    }
    failure {
      script {
        m2 = System.currentTimeMillis()
        def durTime = groovyMethods.durationTime(m1, m2)
        def author = groovyMethods.readCommitAuthor()
        groovyMethods.notifySlack("", "spepas-jenkins", [
        				[
        					title: "BUILD FAILED: ${service} Service with build number ${env.BUILD_NUMBER}",
        					title_link: "${env.BUILD_URL}",
        					color: "error",
        					text: "Created by: ${author}",
        					"mrkdwn_in": ["fields"],
        					fields: [
        						[
        							title: "Duration Time",
        							value: "${durTime}",
        							short: true
        						],
        						[
        							title: "Stage Name",
        							value: "Production",
        							short: true
        						],
        					]
        				]
        		]
        )
      }
    }
  }
}
