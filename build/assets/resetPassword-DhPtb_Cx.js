import{j as e,m as t,a as o,o as h}from"./index-DerKfh_i.js";import{u as p,s as f,o as j,F as y,b as n,c as i,d as c,j as l,e as d,f as m,h as u}from"./form-BqdHsX1y.js";import{I as x}from"./input-D3bTOU5h.js";const w=j({otp:u().min(6,"OTP must be at least 6 characters"),newPassword:u().min(8,"Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter, one lowercase letter, and one number")});function g({onSubmit:a}){const s=p({resolver:f(w),defaultValues:{otp:"",newPassword:""}});return e.jsx(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"w-full",children:e.jsx(y,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(a),className:"space-y-6",children:[e.jsx(n,{control:s.control,name:"otp",render:({field:r})=>e.jsxs(i,{children:[e.jsx(c,{className:"text-foreground",children:"OTP Code"}),e.jsx(l,{className:"text-muted-foreground",children:"Enter the verification code sent to your email"}),e.jsx(d,{children:e.jsx(x,{placeholder:"Enter OTP code",className:"bg-input text-foreground placeholder:text-muted-foreground",...r})}),e.jsx(m,{className:"text-destructive"})]})}),e.jsx(n,{control:s.control,name:"newPassword",render:({field:r})=>e.jsxs(i,{children:[e.jsx(c,{className:"text-foreground",children:"New Password"}),e.jsx(l,{className:"text-muted-foreground",children:"Create a strong password with at least 8 characters"}),e.jsx(d,{children:e.jsx(x,{type:"password",placeholder:"Enter new password",className:"bg-input text-foreground placeholder:text-muted-foreground",...r})}),e.jsx(m,{className:"text-destructive"})]})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{type:"submit",className:"w-full bg-secondary hover:bg-secondary-light text-secondary-foreground",children:"Reset Password"}),e.jsx(o,{type:"button",variant:"outline",className:"w-full hover:bg-muted",onClick:()=>window.history.back(),children:"Back to Login"})]})]})})})}function P(){const a=async s=>{console.log(s)};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background",children:e.jsxs(t.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},className:"w-full max-w-md space-y-8 p-8 bg-card rounded-[--radius] shadow-lg",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs(t.div,{initial:{y:-20},animate:{y:0},transition:{duration:.5,delay:.2},className:"flex items-center gap-2",children:[e.jsx(h,{className:"w-16 h-16"}),e.jsx("h1",{className:"text-3xl font-bold text-secondary",children:"SpePas"})]}),e.jsx(t.h2,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},className:"mt-6 text-3xl font-bold text-foreground",children:"Create New Password"}),e.jsx(t.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"mt-2 text-sm text-muted-foreground text-center",children:"Enter the verification code and create your new password"})]}),e.jsx(g,{onSubmit:a})]})})}export{P as default};
