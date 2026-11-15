(()=>{var gs={0:"\u808C\u8089",1:"\u808C\u8171\uFF0F\u8171\u819C\uFF0F\u652F\u6301\u5E36",7:"\u6DF1\u7B4B\u819C",2:"\u9AA8\u9ABC",3:"\u8EDF\u9AA8",4:"\u7259\u9F52",9:"\u773C\u7403",5:"\u97CC\u5E36",6:"\u95DC\u7BC0\u56CA",8:"\u6ED1\u6DB2\u56CA\uFF0F\u8171\u9798",10:"\u808C\u8089\u9644\u8457\u5340",11:"\u6BDB\u9AEE"},bc={0:"muscle",1:"tendon",7:"fascia",2:"bone",3:"cart",4:"bone",9:"eye",5:"lig",6:"bursa",8:"bursa",10:"ins",11:"hair"},qi=["","\u9838\u90E8","\u80A9\u90E8","\u80F8\u90E8","\u80CC\u90E8","\u8179\u90E8","\u4E0A\u81C2","\u524D\u81C2","\u81C0\u90E8","\u5927\u817F","\u5C0F\u817F"],Ve=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Ne=4,Je=760,En=2.2,Ge=2;async function oo(i){window.__MODEL_B64||await new Promise(s=>{let r=document.createElement("script");r.src="model.js",r.onload=s,r.onerror=s,document.head.appendChild(r)});let t;if(window.__MODEL_B64){let s=window.__MODEL_B64,r=0,o=s.map(c=>{let h=atob(c);return r+=h.length,h}),a=new Uint8Array(r),l=0;for(let c of o){for(let h=0;h<c.length;h++)a[l+h]=c.charCodeAt(h);l+=c.length}window.__MODEL_B64=null,t=new Blob([a]),i&&i(1)}else{let s=await fetch("model.bin");if(!s.ok)throw new Error("\u6A21\u578B\u8CC7\u6599\u4E0B\u8F09\u5931\u6557\uFF08"+s.status+"\uFF09");t=await s.blob(),i&&i(1)}window.__PATCH||await new Promise(s=>{let r=document.createElement("script");r.src="patches.js",r.onload=s,r.onerror=s,document.head.appendChild(r)});let e=new Uint8Array(await t.slice(0,2).arrayBuffer()),n=e[0]===31&&e[1]===139?await new Response(t.stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():await t.arrayBuffer();return new Ar(n,window.__PATCH||null)}var Ar=class{constructor(t,e){let s=new DataView(t).getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s)));this.meta=r;let o=this.lm=r.lm,a=4+s,l=(P,N)=>{let X=new P(t,a,N);return a=a+N*P.BYTES_PER_ELEMENT+3&-4,X},c=this.NV=r.NV,h=this.NT=r.NT,p=this.NVd=r.NVd,d=this.NS=r.NS,u=this.NTs=r.NTs,g=l(Uint16Array,c*3),_=l(Uint16Array,h*3);this.F=l(Int8Array,p*3),this.VRG=l(Uint8Array,p),this.MIX=l(Uint8Array,c);let m=l(Uint16Array,d*3),f=l(Uint16Array,u*3),v=l(Int8Array,d*3),x=l(Int8Array,d*3),E=l(Int8Array,d*3),A=l(Uint8Array,d);this.scls=l(Uint8Array,d),this.srg=l(Uint8Array,d);let T=l(Uint8Array,d),C=l(Int8Array,d*3),j=l(Uint8Array,d);this.VRG2=l(Uint8Array,p),this.VFR=l(Uint8Array,p),this.srg2=l(Uint8Array,d),this.sfr=l(Uint8Array,d);let b=r.bmin,w=r.bsz,V=(P,N)=>{let X=new Float32Array(N*3);for(let $=0;$<N*3;$++)X[$]=b[$%3]+P[$]/65535*w[$%3];return X},O=(P,N)=>{let X=new Float32Array(P.length);for(let $=0;$<P.length;$++)X[$]=P[$]*N;return X};this.base=V(g,c),this.sbase=V(m,d),this.fk=r.inflScale/127,this.sn=O(v,1/127);for(let P=0;P<d;P++){let N=Math.hypot(this.sn[P*3],this.sn[P*3+1],this.sn[P*3+2])||1;this.sn[P*3]/=N,this.sn[P*3+1]/=N,this.sn[P*3+2]/=N}this.sF=O(x,this.fk),this.sFem=O(E,r.femScale/127),this.tb=O(A,r.tbScale),this.sgap=O(T,.02),this.sSm=O(C,r.smScale/127),this.sSmN=new Float32Array(d);for(let P=0;P<d;P++){let N=P*3,X=this.sSm[N]*this.sn[N]+this.sSm[N+1]*this.sn[N+1]+this.sSm[N+2]*this.sn[N+2];this.sSmN[P]=X,this.sSm[N]-=X*this.sn[N],this.sSm[N+1]-=X*this.sn[N+1],this.sSm[N+2]-=X*this.sn[N+2]}this.stri=new Uint32Array(u*3),this.stri.set(f);{let P=new Uint32Array(d+1);for(let $=0;$<u*3;$++)P[this.stri[$]+1]+=2;for(let $=0;$<d;$++)P[$+1]+=P[$];let N=new Uint32Array(P[d]),X=P.slice(0,d);for(let $=0;$<u;$++){let z=this.stri[$*3],tt=this.stri[$*3+1],lt=this.stri[$*3+2];N[X[z]++]=tt,N[X[z]++]=lt,N[X[tt]++]=lt,N[X[tt]++]=z,N[X[lt]++]=z,N[X[lt]++]=tt}this.sAdj={ptr:P,nb:N}}this.lw=new Float32Array(d);for(let P=0;P<d;P++)this.lw[P]=this.scls[P]&8?0:1;this.lw=this.smoothS(this.lw,4);{let P=new Map;for(let $=0;$<u;$++)for(let z=0;z<3;z++){let tt=this.stri[$*3+z],lt=this.stri[$*3+(z+1)%3],_t=tt<lt?tt*d+lt:lt*d+tt;P.set(_t,(P.get(_t)||0)+1)}let N=new Float32Array(d);for(let[$,z]of P)z===1&&(N[Math.floor($/d)]=1,N[$%d]=1);let X=this.smoothS(N,3);for(let $=0;$<d;$++){let z=Math.max(0,1-3*X[$]);this.sSmN[$]*=z,this.sSm[$*3]*=z,this.sSm[$*3+1]*=z,this.sSm[$*3+2]*=z}}this.parts=r.parts.map((P,N)=>({i:N,t:P[0],side:P[1],v0:P[2],nv:P[3],t0:P[4],nt:P[5],rg:P[6],kind:P[7]&3,seg:P[7]>>2&1,en:P[8],zh:P[9],grp:P[10],vol0:P[12],len0:P[13],layer:bc[P[0]],male:P[7]>>3&1})),this.idx=new Uint32Array(h*3);for(let P of this.parts)for(let N=P.t0*3,X=(P.t0+P.nt)*3;N<X;N++)this.idx[N]=_[N]+P.v0;this.pos=new Float32Array(c*3),this.nrm=new Float32Array(c*3),this.spos=new Float32Array(d*3),this.snrm=new Float32Array(d*3),this.box=new Float32Array(this.parts.length*6);let K=o.shoulder[0],L=(P,N)=>Ve(K-1,K+2,Math.abs(P))*Ve(o.yChest-8,o.yChest-2,N);this.armW=new Float32Array(c);for(let P of this.parts)for(let N=P.v0;N<P.v0+P.nv;N++)this.armW[N]=P.seg?1:L(this.base[N*3],this.base[N*3+1]);this.sarmW=O(j,1/255),this.addPatches(e);let U=P=>{let N=new Float32Array(Je+1);for(let X=0;X<=Je;X++)N[X]=P(X/Ne);return N};this.ZS=U(P=>ro(o.zs,P)),this.LEGW=U(P=>Ve(o.hipJ[1]-2,o.hipJ[1]-12,P)),this.SX=U(()=>1),this.SZ=U(()=>1),this.YM=U(P=>P);let H=[o.wrist3[0]-o.shoulder3[0],o.wrist3[1]-o.shoulder3[1],o.wrist3[2]-o.shoulder3[2]],q=Math.hypot(H[0],H[1],H[2]);this.armU=H.map(P=>P/q),this.r0=o.yTroch/o.H0,this.pr={leg:this.r0,arm:1,shoulder:1},this.g=new Float32Array(11),this.gSex=new Array(11).fill(0),this.s=1,this.f=1,this.A=0,this.kf={C:1,W:1,H:1},this.sex="M",this.tbEff=new Float32Array(this.NSall),this.bump=new Float32Array(this.NSall*3),this.wB=new Float32Array(this.NSall),this.setSex("M");let W=[];for(let P=0;P<u;P++){let N=this.stri[P*3],X=this.stri[P*3+1],$=this.stri[P*3+2];this.scls[N]<16&&this.scls[X]<16&&this.scls[$]<16&&W.push(P)}this.bodyTris=Uint32Array.from(W),this.band={};for(let[P,N]of[["C",o.yChest],["U",o.yUnder],["W",o.yWaist],["H",o.yHip]])this.band[P]=this.makeBand(this.bodyTris,N,9);this.hull=new Float32Array(4e4),this.buildLUT()}makeBand(t,e,n){let s=[],r=new Set,o=this.sbase,a=this.stri;for(let l of t){let c=a[l*3],h=a[l*3+1],p=a[l*3+2],d=Math.min(o[c*3+1],o[h*3+1],o[p*3+1]);Math.max(o[c*3+1],o[h*3+1],o[p*3+1])>e-n&&d<e+n&&(s.push(l),r.add(c),r.add(h),r.add(p))}return{tris:Uint32Array.from(s),verts:Uint32Array.from(r),y:e}}addPatches(t){let e=this.NS,n=t&&t.NS===e?t.verts.length/3:0,s=this.NSall=e+n,r=(u,g,_)=>{let m=new u.constructor(s*g);if(m.set(u),n)for(let f=0;f<n;f++)for(let v=0;v<g;v++)m[(e+f)*g+v]=_(f,v);return m},o=t?t.interp:[],a=(u,g)=>(_,m)=>{let f=0;for(let[v,x]of o[_])f+=u[v*g+m]*x;return f},l=u=>g=>{let _=o[g][0];for(let m of o[g])m[1]>_[1]&&(_=m);return u[_[0]]},c=new Float32Array(e*3);for(let u=0;u<3;u++){let g=new Float32Array(e);for(let m=0;m<e;m++)g[m]=this.sn[m*3+u];let _=this.smoothS(g,8);for(let m=0;m<e;m++)c[m*3+u]=_[m]}for(let u=0;u<e;u++){let g=Math.hypot(c[u*3],c[u*3+1],c[u*3+2])||1;c[u*3]/=g,c[u*3+1]/=g,c[u*3+2]/=g}if(this.snB=r(c,3,a(c,3)),this.sbase=r(this.sbase,3,(u,g)=>t.verts[u*3+g]),this.sn=r(this.sn,3,(u,g)=>t.normals[u*3+g]),t&&t.femDisp)for(let[u,g,_,m]of t.femDisp)this.sFem[u*3]=g,this.sFem[u*3+1]=_,this.sFem[u*3+2]=m;if(this.sF=r(this.sF,3,a(this.sF,3)),this.sFem=r(this.sFem,3,()=>0),this.tb=r(this.tb,1,a(this.tb,1)),this.sgap=r(this.sgap,1,a(this.sgap,1)),this.sSm=r(this.sSm,3,a(this.sSm,3)),this.sSmN=r(this.sSmN,1,a(this.sSmN,1)),this.sarmW=r(this.sarmW,1,a(this.sarmW,1)),this.lw=r(this.lw,1,a(this.lw,1)),this.scls=r(this.scls,1,l(this.scls)),this.srg=r(this.srg,1,l(this.srg)),this.srg2=r(this.srg2,1,l(this.srg2)),this.sfr=r(this.sfr,1,u=>Math.round(a(this.sfr,1)(u,0))),this.spos=new Float32Array(s*3),this.snrm=new Float32Array(s*3),this.clear=new Float32Array(s),t&&t.clear)for(let[u,g]of t.clear)u<s&&(this.clear[u]=g);if(this.femV=null,t&&t.femDispV&&t.femDispV.length){this.femV=new Float32Array(this.NV*3);for(let[u,g,_,m]of t.femDispV)this.femV[u*3]=g,this.femV[u*3+1]=_,this.femV[u*3+2]=m}if(this.pInterp=o,this.scolM=new Float32Array(s*3).fill(1),this.scolF=new Float32Array(s*3).fill(1),this.skinTriF=null,!n)return;let h=new Uint8Array(this.NTs);for(let u of t.removeTris)h[u]=1;let p=[];for(let u=0;u<this.NTs;u++)h[u]||p.push(this.stri[u*3],this.stri[u*3+1],this.stri[u*3+2]);this.skinTriF=Uint32Array.from(p.concat(t.tris));let d=[.8,.64,.6];for(let u=0;u<n;u++){let g=t.areola[u];for(let _=0;_<3;_++)this.scolF[(e+u)*3+_]=1+(d[_]-1)*g}}extS(t,e){if(this.NSall===this.NS)return t;let n=new Float32Array(this.NSall*e);n.set(t);for(let s=0;s<this.pInterp.length;s++)for(let r=0;r<e;r++){let o=0;for(let[a,l]of this.pInterp[s])o+=t[a*e+r]*l;n[(this.NS+s)*e+r]=o}return n}skinTris(){return this.sex==="F"&&this.skinTriF?this.skinTriF:this.stri}smoothS(t,e){let{ptr:n,nb:s}=this.sAdj,r=t,o=new Float32Array(t.length);for(let a=0;a<e;a++){for(let l=0;l<t.length;l++){let c=0,h=n[l+1];for(let p=n[l];p<h;p++)c+=r[s[p]];o[l]=h>n[l]?.5*r[l]+.5*c/(h-n[l]):r[l]}[r,o]=[o,r]}return r}setSex(t){this.sex=t;let e=this.lm,n=t==="F",s=this.NSall,r=this.sbase,o=this.sn,a=e.nipple,c=[[e.yAnkle+3,.2,.2],[e.yKnee-8,.45,.55],[e.yKnee+6,.6,.85],[e.yCrotch-12,.8,1.2],[e.yHip,.95,1.3],[e.yWaist,1,.95],[e.yChest-6,.9,.9],[e.yChest+4,.75,.85],[e.shoulder[1]+4,.4,.4]].map(h=>[h[0],n?h[2]:h[1]]);for(let h=0;h<s;h++){let p=this.scls[h],d=r[h*3+1],u;if(p&8)u=.1;else if((p&7)===5)u=.3;else if((p&7)===1||(p&7)===2)u=d>e.yElbow?.75:.45;else{u=ro(c,d);let m=Ve(e.yHip-4,e.yHip+6,d)*(1-Ve(e.yChest-12,e.yChest-4,d));u*=1+m*((n?.25:.45)*Math.max(0,o[h*3+2])+.2*Math.abs(o[h*3]))}this.tbEff[h]=u*(.5*Math.min(2,Math.max(.3,this.tb[h]))+.4),this.bump[h*3]=n?this.sFem[h*3]:0,this.bump[h*3+1]=n?this.sFem[h*3+1]:0,this.bump[h*3+2]=n?this.sFem[h*3+2]:0;let g=0,_=this.snB;if(n&&p===0&&_[h*3+2]>-.3){let m=Math.abs(r[h*3])-a[0],f=d-a[1];m>-7&&m<7.5&&f>-8&&f<11&&(g=Ve(-.3,.35,_[h*3+2]))}this.wB[h]=g}this.k0=n?{C:.88,W:.92,H:1.05,S:1}:{C:1,W:1,H:1,S:1},this.gSex=n?[0,-.3,-.45,-.5,-.45,-.3,-.45,-.4,-.15,-.25,-.25]:new Array(11).fill(0),this.phi0=n?.33:.25,this.air=n?1.9:2.4,this.kf={C:this.k0.C,W:this.k0.W,H:this.k0.H},this.A=0}setProportions(t){this.pr={leg:t.leg||this.r0,arm:t.arm||1,shoulder:t.shoulder||1}}buildLUT(){let t=this.lm,e=this.kf,n=this.k0,s=t.shoulder[1],r=(1+.7*(e.C/n.C-1))*n.S*this.pr.shoulder,o=[[t.yHip,e.H],[t.yWaist,e.W],[t.yUnder,e.C],[t.yChest,e.C],[s,r],[s+9,1]],a=[[t.yHip,1+(e.H-1)*.6],[t.yWaist,1+(e.W-1)*1.15],[t.yUnder,1+(e.C-1)*.9],[t.yChest,1+(e.C-1)*.9],[s,1+(r-1)*.4],[s+9,1]],l=t.H0,c=t.hipJ[1],h=E=>Ve(c-2,c+8,E),p=0,d=0,u=Math.round(l*Ne),g=Math.round(t.yTroch*Ne);for(let E=0;E<u;E++){let A=h((E+.5)/Ne)/Ne;p+=A,E<g&&(d+=A)}let _=l-p,m=t.yTroch-d,f=(this.pr.leg*l-l*d/p)/(m-_*d/p),v=(l-f*_)/p;this.legScale=f,this.upScale=v,this.legK={I0:_,I1:p,T0:m,T1:d};let x=0;this.YM[0]=0;for(let E=0;E<=Je;E++){let A=E/Ne;if(this.SX[E]=ao(o,A),this.SZ[E]=ao(a,A),E>0){let T=h((E-.5)/Ne);x+=(f+(v-f)*T)/Ne,this.YM[E]=x}}this.sxHip=this.SX[Math.round(c*Ne)],this.sxSh=this.SX[Math.round(s*Ne)],this.yShM=this.ymap(t.shoulder3[1])}ctOn(){return this.ct&&this.ct.on?this.ct:null}anchorWarp(){let t=this.lm,[e,n,s]=this.ct.anchor,r=n*Ne,o=r|0;o<0?o=0:o>=Je&&(o=Je-1);let a=this.LEGW[o],l=s-this.ZS[o],c=l>Ge?l-Ge:l<-Ge?.3*(l+Ge):0;return[e,this.YM[o]+(r-o)*(this.YM[o+1]-this.YM[o]),s+(1-a)*(this.SZ[o]-1)*c]}setCT(t){if(!t)return this.ct=null,null;let e=new DataView(t),n=e.getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n)));if(s.NV!==this.NV||s.NS!==this.NS)throw new Error("\u500B\u6848\u6A94\u8207\u76EE\u524D\u6A21\u578B\u7248\u672C\u4E0D\u7B26");let r=4+n,o=(g,_)=>{let m=new g(t,r,_);return r=r+_*g.BYTES_PER_ELEMENT+3&-4,m},a=(g,_)=>{let m=new Float32Array(g.length);for(let f=0;f<g.length;f++)m[f]=g[f]*_;return m},l=a(o(Uint8Array,this.NV),1/255),c=a(o(Int16Array,this.NV*3),.01),h=a(o(Uint8Array,this.NS),1/255),p=a(o(Int16Array,this.NS*3),.01),d=s.overlays.map(g=>({...g,V:a(o(Int16Array,g.nv*3),.01),F:new Uint32Array(o(Uint32Array,g.nt*3))})),u={};for(let g in this.band){let _=0,m=this.band[g].verts;for(let f of m)_+=h[f];u[g]=_/m.length}return this.ct={hdr:s,w:l,u:c,ws:this.extS(h,1),us:this.extS(p,3),ov:d,anchor:s.anchor,s_ct:s.s_ct,band:u,on:!0},this.ct}ymap(t){let e=t*Ne,n=e|0;return n<0?n=0:n>=Je&&(n=Je-1),this.YM[n]+(e-n)*(this.YM[n+1]-this.YM[n])}deformSkin(t,e,n){let s=this.lm,r=this.sbase,o=this.sn,a=this.sF,l=this.g,c=this.SX,h=this.SZ,p=this.ZS,d=this.YM,u=this.LEGW,g=this.tbEff,_=this.sgap,m=this.sarmW,f=this.srg,v=this.srg2,x=this.sfr,E=this.bump,A=this.sSm,T=this.sSmN,C=this.wB,j=s.shoulder[0],b=s.hipJ[0],w=(this.sxSh-1)*(j-En),V=(this.sxHip-1)*(b-En),O=n?this.s:1,K=this.f-1,L=Math.max(this.sex==="F"?.6:0,K>0?Math.min(1,K/1.2)*.85:0),U=this.A,H=s.shoulder3,q=this.armU,W=this.pr.arm-1,P=this.yShM,N=e?e.length:this.NSall,X=s.nipple[0],$=s.nipple[1],z=this.sxSh,tt=j-5,lt=j-.5,_t=s.yChest-10,vt=s.yChest-3,It=this.sex==="F"?.18:0,Pt=this.ctOn(),Ct=Pt?Pt.ws:null,Nt=Pt?Pt.us:null,G=1/this.s,[$t,gt,St]=Pt?this.anchorWarp():[0,0,0],mt=this.lw,Qt=this.clear;for(let Et=0;Et<N;Et++){let M=e?e[Et]:Et,y=M*3,k=r[y],nt=r[y+1],it=r[y+2],st=g[M]*K+T[M]*L;st<-_[M]&&(st=-_[M]),st+=It*mt[M]+Qt[M];let Mt=x[M]/255,dt=l[f[M]]*Mt+l[v[M]]*(1-Mt),pt=_[M]>.6?L:L*_[M]/.6;k+=o[y]*st+a[y]*dt+E[y]+A[y]*pt,nt+=o[y+1]*st+a[y+1]*dt+E[y+1]+A[y+1]*pt,it+=o[y+2]*st+a[y+2]*dt+E[y+2]+A[y+2]*pt;let bt=k>=0?1:-1;if(U>0&&C[M]>0){let I=(r[y]<0?-r[y]:r[y])-X,ot=r[y+1]-$,ht=Math.min(X-1.6,4.2+.18*U),Lt=Math.min(14.6-X,5.2+.25*U),At=6.2+.28*U,Kt=4+.2*U,jt=I>=0?I/Lt:-I/ht,ce=ot>=0?ot/At:-ot/Kt,fe=jt*jt+ce*ce;if(fe<1){let te=Math.sqrt(fe),be=Math.pow(1-fe,1.25),ke=Math.pow(1-te,1.6)*(1+1.6*te),ki=Ve(-1,1.5,ot),Hi=U*C[M]*(be*(1-ki)+ke*ki),ri=r[y]>=0?1:-1,ai=this.snB,Fn=.45*ai[y]+.12*ri,Vi=.45*ai[y+1]-.1-.006*U,Gi=.45*ai[y+2]+.55,Wi=Math.hypot(Fn,Vi,Gi)||1;k+=Hi*Fn/Wi,nt+=Hi*Vi/Wi,it+=Hi*Gi/Wi}}let Ut=nt*Ne,Q=Ut|0;Q<0?Q=0:Q>=Je&&(Q=Je-1);let Ft=m[M],R=u[Q],rt=k*bt,ut=rt>En?rt-En:0,at=it-p[Q],Tt=at>Ge?at-Ge:at<-Ge?.3*(at+Ge):0,Ht=c[Q];rt>tt&&nt>_t&&(Ht+=(z-Ht)*Ve(tt,lt,rt)*Ve(_t,vt,nt));let Gt=k+bt*(R*V+(1-R)*(Ht-1)*ut),Bt=d[Q]+(Ut-Q)*(d[Q+1]-d[Q]),ct=it+(1-R)*(h[Q]-1)*Tt;if(Ft>0){let I=((k-bt*H[0])*q[0]*bt+(nt-H[1])*q[1]+(it-H[2])*q[2])*W;Gt+=Ft*(k+I*q[0]*bt+bt*w-Gt),Bt+=Ft*(P+(nt-H[1])+I*q[1]-Bt),ct+=Ft*(it+I*q[2]-ct)}if(Ct){let I=Ct[M];I>0&&(Gt+=I*($t+Nt[y]*G-Gt),Bt+=I*(gt+Nt[y+1]*G-Bt),ct+=I*(St+Nt[y+2]*G-ct))}t[y]=Gt*O,t[y+1]=Bt*O,t[y+2]=ct*O}}deformStructure(){let t=this.lm,e=this.base,n=this.pos,s=this.F,r=this.VRG,o=this.VRG2,a=this.VFR,l=this.g,c=this.fk,h=this.SX,p=this.SZ,d=this.ZS,u=this.YM,g=this.LEGW,_=this.armW,m=this.NVd,f=this.s,v=this.box,x=t.shoulder[0],E=t.hipJ[0],A=(this.sxSh-1)*(x-En),T=(this.sxHip-1)*(E-En),C=t.shoulder3,j=this.armU,b=this.pr.arm-1,w=this.yShM,V=this.sxSh,O=x-5,K=x-.5,L=t.yChest-10,U=t.yChest-3,H=this.ctOn(),q=H?H.w:null,W=H?H.u:null,P=1/f,[N,X,$]=H?this.anchorWarp():[0,0,0],z=this.sex==="F"?this.femV:null;for(let tt of this.parts){let lt=1e9,_t=1e9,vt=1e9,It=-1e9,Pt=-1e9,Ct=-1e9;for(let Nt=tt.v0,G=tt.v0+tt.nv;Nt<G;Nt++){let $t=Nt*3,gt=e[$t],St=e[$t+1],mt=e[$t+2];if(z&&(gt+=z[$t],St+=z[$t+1],mt+=z[$t+2]),Nt<m){let Q=a[Nt],Ft=(l[r[Nt]]*Q+l[o[Nt]]*(255-Q))*c/255;Ft!==0&&(gt+=s[$t]*Ft,St+=s[$t+1]*Ft,mt+=s[$t+2]*Ft)}let Qt=St*Ne,Et=Qt|0;Et<0?Et=0:Et>=Je&&(Et=Je-1);let M=_[Nt],y=g[Et],k=gt>=0?1:-1,nt=gt*k,it=nt>En?nt-En:0,st=mt-d[Et],Mt=st>Ge?st-Ge:st<-Ge?.3*(st+Ge):0,dt=h[Et];nt>O&&St>L&&(dt+=(V-dt)*Ve(O,K,nt)*Ve(L,U,St));let pt=gt+k*(y*T+(1-y)*(dt-1)*it),bt=u[Et]+(Qt-Et)*(u[Et+1]-u[Et]),Ut=mt+(1-y)*(p[Et]-1)*Mt;if(M>0){let Q=((gt-k*C[0])*j[0]*k+(St-C[1])*j[1]+(mt-C[2])*j[2])*b;pt+=M*(gt+Q*j[0]*k+k*A-pt),bt+=M*(w+(St-C[1])+Q*j[1]-bt),Ut+=M*(mt+Q*j[2]-Ut)}if(q){let Q=q[Nt];Q>0&&(pt+=Q*(N+W[$t]*P-pt),bt+=Q*(X+W[$t+1]*P-bt),Ut+=Q*($+W[$t+2]*P-Ut))}gt=pt*f,St=bt*f,mt=Ut*f,n[$t]=gt,n[$t+1]=St,n[$t+2]=mt,gt<lt&&(lt=gt),gt>It&&(It=gt),St<_t&&(_t=St),St>Pt&&(Pt=St),mt<vt&&(vt=mt),mt>Ct&&(Ct=mt)}v.set([lt,_t,vt,It,Pt,Ct],tt.i*6)}}normals(t,e,n,s,r,o,a){n.fill(0,o*3,a*3);for(let l=s*3,c=r*3;l<c;l+=3){let h=e[l]*3,p=e[l+1]*3,d=e[l+2]*3,u=t[p]-t[h],g=t[p+1]-t[h+1],_=t[p+2]-t[h+2],m=t[d]-t[h],f=t[d+1]-t[h+1],v=t[d+2]-t[h+2],x=g*v-_*f,E=_*m-u*v,A=u*f-g*m;n[h]+=x,n[h+1]+=E,n[h+2]+=A,n[p]+=x,n[p+1]+=E,n[p+2]+=A,n[d]+=x,n[d+1]+=E,n[d+2]+=A}for(let l=o*3,c=a*3;l<c;l+=3){let h=Math.hypot(n[l],n[l+1],n[l+2])||1;n[l]/=h,n[l+1]/=h,n[l+2]/=h}}girthAt(t,e,n,s){let r=this.stri,o=this.hull,a=0;for(let g=0;g<e.length;g++){let _=e[g]*3,m=r[_]*3,f=r[_+1]*3,v=r[_+2]*3,x=t[m+1]-n,E=t[f+1]-n,A=t[v+1]-n;if(!(x<0==E<0&&E<0==A<0)){if(x<0!=E<0){let T=x/(x-E);o[a++]=t[m]+T*(t[f]-t[m]),o[a++]=t[m+2]+T*(t[f+2]-t[m+2])}if(E<0!=A<0){let T=E/(E-A);o[a++]=t[f]+T*(t[v]-t[f]),o[a++]=t[f+2]+T*(t[v+2]-t[f+2])}if(A<0!=x<0){let T=A/(A-x);o[a++]=t[v]+T*(t[m]-t[v]),o[a++]=t[v+2]+T*(t[m+2]-t[v+2])}if(a>o.length-8)break}}let l=a/2;if(l<3)return s?{len:0,pts:[]}:0;let c=new Uint32Array(l);for(let g=0;g<l;g++)c[g]=g;c.sort((g,_)=>o[g*2]-o[_*2]||o[g*2+1]-o[_*2+1]);let h=[],p=(g,_,m)=>(o[_*2]-o[g*2])*(o[m*2+1]-o[g*2+1])-(o[_*2+1]-o[g*2+1])*(o[m*2]-o[g*2]);for(let g=0;g<l;g++){for(;h.length>=2&&p(h[h.length-2],h[h.length-1],c[g])<=0;)h.pop();h.push(c[g])}let d=h.length+1;for(let g=l-2;g>=0;g--){for(;h.length>=d&&p(h[h.length-2],h[h.length-1],c[g])<=0;)h.pop();h.push(c[g])}h.pop();let u=0;for(let g=0;g<h.length;g++){let _=h[g],m=h[(g+1)%h.length];u+=Math.hypot(o[_*2]-o[m*2],o[_*2+1]-o[m*2+1])}return s?{len:u,pts:h.map(g=>[o[g*2],n,o[g*2+1]])}:u}skinVolume(t){let e=this.stri,n=0;for(let s=0,r=this.NTs*3;s<r;s+=3){let o=e[s]*3,a=e[s+1]*3,l=e[s+2]*3;n+=t[o]*(t[a+1]*t[l+2]-t[a+2]*t[l+1])-t[o+1]*(t[a]*t[l+2]-t[a+2]*t[l])+t[o+2]*(t[a]*t[l+1]-t[a+1]*t[l])}return Math.abs(n)/6e3}bandGirth(t){let e=this.band[t];return this.deformSkin(this.spos,e.verts,!1),this.girthAt(this.spos,e.tris,this.ymap(e.y))}setG(t,e){for(let n=1;n<=10;n++)this.g[n]=Math.min(2,Math.max(-.95,(this.gCT?this.gCT[n]:t+this.gSex[n])+(e&&e[n]||0)));this.g[0]=0}solve(t){t.sex!==this.sex&&this.setSex(t.sex);let e=this.ctOn(),n=t.H/this.lm.H0;if(this.setProportions({leg:t.leg,arm:t.arm,shoulder:e?e.s_ct/n*(t.shoulder||1):t.shoulder}),e&&t.legAuto){this.buildLUT();let O=this.legK,K=e.s_ct/n,L=(this.lm.H0-K*O.I1)/O.I0;this.pr.leg=(L*O.T0+K*O.T1)/this.lm.H0}let s=O=>e&&e.band[O]>.5,r=this.s=t.H/this.lm.H0,o=r**3,a=this.k0,l=this.air,c=this.phi0,h=t.sex==="F",p=h?t.under>0?t.under:Math.min(t.chest-7,Math.max(t.chest-22,.5*(.75*t.waist+22)+.5*(t.chest-13))):0,d={C:t.chest/r,U:p/r,W:t.waist/r,H:t.hip/r},u=t.W/o,g={},_=()=>(this.deformSkin(this.spos,null,!1),this.skinVolume(this.spos)),m=(O,K,L,U,H)=>{let q=O(),W=NaN;this.buildLUT();let P=this.bandGirth(L);for(let N=0;N<7&&Math.abs(P-d[L])>.02;N++){let X=isFinite(W)&&Math.abs(W)>1e-6?q+(d[L]-P)/W:q*(1+1.15*(d[L]/P-1));if(X=Math.min(H,Math.max(U,X)),X===q)break;K(X),this.buildLUT();let $=this.bandGirth(L);W=($-P)/(X-q),q=X,P=$}},f=()=>{for(let O of["H","W"])s(O)||m(()=>this.kf[O],K=>{this.kf[O]=K},O,.55*a[O],1.9*a[O]);if(s("C"))this.A=0,this.kf.C=a.C;else if(h){this.A=0,m(()=>this.kf.C,K=>{this.kf.C=K},"U",.55*a.C,1.9*a.C),this.buildLUT();let O=this.bandGirth("C");if(d.C>O+.05){let K=Math.max(.5,this.Aprev||3);this.A=K;let L=this.bandGirth("C"),U=(L-O)/K;for(let H=0;H<7&&Math.abs(L-d.C)>.03&&U>1e-6;H++){let q=Math.min(13,Math.max(0,K+(d.C-L)/U));if(q===K)break;this.A=q;let W=this.bandGirth("C");U=(W-L)/(q-K),K=q,L=W}this.Aprev=this.A}else d.C<O-.05&&m(()=>this.kf.C,K=>{this.kf.C=K},"C",.55*a.C,1.9*a.C)}else this.A=0,m(()=>this.kf.C,O=>{this.kf.C=O},"C",.55*a.C,1.9*a.C);this.buildLUT()},v=0,x=O=>{this.setG(O,t.off),this.f=1,this.A=0,this.kf={C:a.C,W:a.W,H:a.H},this.buildLUT(),v=_()},E=O=>{this.f=O,f();let K=_(),L=this.A;this.f=1,this.A=0;let U=_();this.f=O,this.A=L;let H=U-v,q=Math.max(.03*K,c*v+(H>0?.75:.3)*H+(K-U)),W=.9007*q+1.1*(K-q-l);return{M:W,V:K,Vfat:q,bf:.9007*q/W*100}},A=(O,K,L,U,H,q)=>{let W=O(K)-U;if(W>=0)return{x:K,clamp:-1};let P=O(L)-U;if(P<=0)return{x:L,clamp:1};let N=0,X=K;for(let $=0;$<q;$++){X=(K*P-L*W)/(P-W);let z=O(X)-U;if(Math.abs(z)<H)break;z<0?(K=X,W=z,N===-1&&(P/=2),N=-1):(L=X,P=z,N===1&&(W/=2),N=1)}return{x:X,clamp:0}},T=null,C=O=>{x(O);let K=A(L=>E(L).M,.3,12,u,.03,12);return T=E(K.x),T.fclamp=K.clamp,T.f=K.x,T},j=t.muscle,b=null,w="";if(this.gCT=null,t.auto&&e&&e.hdr.g&&e.hdr.g.all!=null){let O=e.hdr.g;j=O.all,this.gCT=[0,O.all,O.chest??O.all,O.chest??O.all,O.back??O.all,O.all,O.all,O.all,O.all,O.all,O.all],w="CT \u808C\u8089\u91CF\uFF0B\u9AD4\u91CD"}else if(t.auto){let O=(h?76:64)-20*t.H/t.waist;t.bf>0?(b=t.bf,w="\u5BE6\u6E2C\u8F38\u5165"):(b=Math.min(h?52:45,Math.max(h?14:6,O)),w="RFM \u63A8\u4F30");let K=A(L=>{let U=C(L);return U.fclamp<0?5:U.fclamp>0?-100:-U.bf},-.8,1.5,-b,.12,10);j=K.x,K.clamp&&(g.g=K.clamp)}let V=C(j);return V.fclamp&&(g.f=V.fclamp),{gG:j,f:V.f,A:this.A,under:p,kf:{...this.kf},k0:{...a},bfPrior:b,bfSrc:w,note:g,legScale:this.legScale,upScale:this.upScale,leg:this.pr.leg,ct:e?{band:e.band}:null,mass:{M:V.M*o,V:V.V*o,Vfat:V.Vfat*o,bf:V.bf}}}apply(t){this.buildLUT(),this.deformStructure(),this.deformSkin(this.spos,null,!0);let e=this.parts,n=e.findIndex(o=>o.v0>=this.NVd),s=n<0?e.length:n;t||this.ctOn()?this.normals(this.pos,this.idx,this.nrm,0,this.NT,0,this.NV):this.normals(this.pos,this.idx,this.nrm,0,e[s-1].t0+e[s-1].nt,0,this.NVd);let r=this.skinTris();this.normals(this.spos,r,this.snrm,0,r.length/3,0,r===this.stri?this.NS:this.NSall)}partVolume(t){let e=this.pos,n=this.idx,s=0;for(let r=t.t0*3,o=(t.t0+t.nt)*3;r<o;r+=3){let a=n[r]*3,l=n[r+1]*3,c=n[r+2]*3;s+=e[a]*(e[l+1]*e[c+2]-e[l+2]*e[c+1])-e[a+1]*(e[l]*e[c+2]-e[l+2]*e[c])+e[a+2]*(e[l]*e[c+1]-e[l+1]*e[c])}return Math.abs(s)/6}findPart(t,e,n){return this.parts.find(s=>s.en===t&&s.side===e&&(n===void 0||s.t===n))}measure(){let t=this.lm,e=this.s,n=this.spos,s=this.stri,r=this.scls,o=this.sbase,a={},l=v=>this.ymap(v)*e,c=v=>this.girthAt(n,this.band[v].tris,l(this.band[v].y));a.chest=c("C"),a.under=c("U"),a.waist=c("W"),a.hip=c("H");let h=v=>{let x=[];for(let E=0;E<this.NTs;E++){let A=s[E*3],T=s[E*3+1],C=s[E*3+2];v(A)&&v(T)&&v(C)&&x.push(E)}return Uint32Array.from(x)};this.mTris||(this.mTris={arm:h(v=>(r[v]&7)===1),leg:h(v=>r[v]<16&&o[v*3]>.4&&o[v*3+1]<t.yCrotch-1)});let p=v=>(this.yShM+(v-t.shoulder3[1])*(1+(this.pr.arm-1)*this.armU[1]*this.armU[1]))*e,d=(v,x,E,A)=>{let T=0;for(let C=x;C<=E;C+=1)T=Math.max(T,this.girthAt(n,v,A(C)));return T};a.upperArm=this.girthAt(n,this.mTris.arm,p((t.shoulder[1]+t.yElbow)/2)),a.forearm=d(this.mTris.arm,t.yWrist+6,t.yElbow-2,p),a.thigh=this.girthAt(n,this.mTris.leg,l((t.yCrotch-1+t.yKnee)/2)),a.calf=d(this.mTris.leg,t.yAnkle+8,t.yKnee-4,l);let u=(v,x)=>{let E=this.findPart(v,x,2);return E?this.box.subarray(E.i*6,E.i*6+6):null},g=v=>{let x=u(v,0),E=u(v,1);return x&&E?x[3]-E[0]:0};a.biacromial=g("Scapula"),a.biiliac=g("Hip bone");let _=(v,x)=>{let E=this.findPart(v,0,2);return E?E.len0*x*e:0};a.femur=_("Femur",this.legScale),a.tibia=_("Tibia",this.legScale),a.humerus=_("Humerus",this.pr.arm),a.radius=_("Radius",this.pr.arm),a.troch=l(t.yTroch),a.crotch=l(t.yCrotch),a.legRatio=a.troch/(t.H0*e)*100,a.sitting=t.H0*e-l(t.yCrotch-1.5);let m=0,f=new Float32Array(11);for(let v of this.parts)if(v.t===0){let x=this.partVolume(v);m+=x,f[v.rg]+=x}return a.muscleVol=m/1e3,a.regVol=Array.from(f,v=>v/1e3),a}};function ro(i,t){if(t<=i[0][0])return i[0][1];let e=i.length;if(t>=i[e-1][0])return i[e-1][1];for(let n=1;n<e;n++)if(t<=i[n][0]){let s=(t-i[n-1][0])/(i[n][0]-i[n-1][0]);return i[n-1][1]+s*(i[n][1]-i[n-1][1])}return i[e-1][1]}function ao(i,t){if(t<=i[0][0])return i[0][1];let e=i.length;if(t>=i[e-1][0])return i[e-1][1];for(let n=1;n<e;n++)if(t<=i[n][0]){let s=(t-i[n-1][0])/(i[n][0]-i[n-1][0]),r=s*s*(3-2*s);return i[n-1][1]+r*(i[n][1]-i[n-1][1])}return i[e-1][1]}var Cr={soft:[400,40,"\u8EDF\u7D44\u7E54"],lung:[1500,-600,"\u80BA"],bone:[1800,400,"\u9AA8"]},_s=class{constructor(t,e,n){this.M=t,this.V=e,this.host=n,this.vol=null,this.win="soft",this.cache=null,this.show={skin:!0,bone:!0,muscle:!1,plane:!0},this.el=document.createElement("div"),this.el.id="ctv",this.el.hidden=!0,n.appendChild(this.el),this.el.innerHTML=`<div class="ctv-h"><b>CT \u5F71\u50CF</b><span class="ctv-i" id="ctv-i"></span><button class="ctv-x" title="\u95DC\u9589">\xD7</button></div>
      <canvas class="ctv-ax" width="420" height="420"></canvas>
      <div class="ctv-row"><canvas class="ctv-sa" width="206" height="206"></canvas><canvas class="ctv-co" width="206" height="206"></canvas></div>
      <input type="range" class="ctv-sl" min="0" max="0" value="0">
      <div class="ctv-c"><span class="seg ctv-w">${Object.entries(Cr).map(([o,a])=>`<button data-w="${o}">${a[2]}</button>`).join("")}</span></div>
      <div class="ctv-c"><label><input type="checkbox" data-k="skin" checked><i style="background:#ff9a3c"></i>\u6A21\u578B\u76AE\u819A</label><label><input type="checkbox" data-k="muscle"><i style="background:#ff4d6d"></i>\u6A21\u578B\u808C\u8089</label><label><input type="checkbox" data-k="bone" checked><i style="background:#ffe14d"></i>\u6A21\u578B\u9AA8\u9ABC</label><label><input type="checkbox" data-k="plane" checked>3D \u5207\u9762</label></div>
      <p class="ctv-n">\u6ED1\u9F20\u6EFE\u8F2A\u63DB\u5C64\uFF1B\u9EDE\u77E2\u72C0\u9762\u6216\u51A0\u72C0\u9762\u8DF3\u5230\u8A72\u4F4D\u7F6E\u3002\u8F2A\u5ED3\u662F\u76EE\u524D 3D \u6A21\u578B\u5728\u9019\u4E00\u5C64\u7684\u622A\u9762\uFF0C\u53EF\u76F4\u63A5\u5C0D\u7167\u5F71\u50CF\u5224\u65B7\u662F\u5426\u543B\u5408\u3002</p>`;let s=o=>this.el.querySelector(o);this.cv={ax:s(".ctv-ax"),sa:s(".ctv-sa"),co:s(".ctv-co")},this.sl=s(".ctv-sl"),this.info=s("#ctv-i"),s(".ctv-x").onclick=()=>this.close(),this.sl.oninput=()=>{this.k=+this.sl.value,this.render()},s(".ctv-w").onclick=o=>{let a=o.target.closest("button");a&&(this.win=a.dataset.w,this.render(!0))};for(let o of this.el.querySelectorAll("input[type=checkbox]"))o.onchange=()=>{this.show[o.dataset.k]=o.checked,this.render()};let r=o=>a=>{a.preventDefault();let l=a.deltaY>0?-1:1;o==="ax"?this.k=un(this.k+l,0,this.vol.nz-1):o==="sa"?this.i=un(this.i+l,0,this.vol.nx-1):this.j=un(this.j+l,0,this.vol.ny-1),this.render()};for(let o of["ax","sa","co"])this.cv[o].addEventListener("wheel",r(o),{passive:!1}),this.cv[o].addEventListener("pointerdown",a=>this.click(o,a))}load(t){let e=new DataView(t),n=e.getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n))),[r,o,a]=s.size;this.vol={nx:r,ny:o,nz:a,sp:s.spacing,o:s.origin,a:new Int16Array(t.slice(4+n,4+n+r*o*a*2))},this.k=Math.round(a/2),this.i=Math.round(r/2),this.j=Math.round(o/2),this.sl.max=a-1,this.cache=null}open(){this.vol&&(this.el.hidden=!1,this.render(!0))}close(){this.el.hidden=!0,this.V.setSlicePlane(null)}get isOpen(){return!this.el.hidden}invalidate(){this.cache=null,this.isOpen&&this.render()}xf(){let t=this.M.ct,e=t.hdr.ct2rel,n=this.M.s,s=this.M.anchorWarp(),r=e.M,o=e.b,a=r[0]*(r[4]*r[8]-r[5]*r[7])-r[1]*(r[3]*r[8]-r[5]*r[6])+r[2]*(r[3]*r[7]-r[4]*r[6]),l=[(r[4]*r[8]-r[5]*r[7])/a,(r[2]*r[7]-r[1]*r[8])/a,(r[1]*r[5]-r[2]*r[4])/a,(r[5]*r[6]-r[3]*r[8])/a,(r[0]*r[8]-r[2]*r[6])/a,(r[2]*r[3]-r[0]*r[5])/a,(r[3]*r[7]-r[4]*r[6])/a,(r[1]*r[6]-r[0]*r[7])/a,(r[0]*r[4]-r[1]*r[3])/a],c=[o[0]+n*s[0],o[1]+n*s[1],o[2]+n*s[2]];return{toLPS:(h,p,d,u,g)=>{let _=h-c[0],m=p-c[1],f=d-c[2];u[g]=l[0]*_+l[1]*m+l[2]*f,u[g+1]=l[3]*_+l[4]*m+l[5]*f,u[g+2]=l[6]*_+l[7]*m+l[8]*f},toWorld:h=>[r[0]*h[0]+r[1]*h[1]+r[2]*h[2]+c[0],r[3]*h[0]+r[4]*h[1]+r[5]*h[2]+c[1],r[6]*h[0]+r[7]*h[1]+r[8]*h[2]+c[2]]}}meshes(){if(this.cache)return this.cache;let t=this.M,e=this.xf(),n=t.skinTris(),s=t.NSall||t.NS,r=new Float32Array(s*3);for(let h=0;h<s;h++)e.toLPS(t.spos[h*3],t.spos[h*3+1],t.spos[h*3+2],r,h*3);let o=h=>{let p=0;for(let g of t.parts)h(g)&&(p+=g.nt);let d=new Uint32Array(p*3),u=0;for(let g of t.parts)h(g)&&(d.set(t.idx.subarray(g.t0*3,(g.t0+g.nt)*3),u),u+=g.nt*3);return d},a=o(h=>h.t===2&&!(t.sex==="F"&&h.male)),l=o(h=>h.t===0&&!(t.sex==="F"&&h.male)),c=new Float32Array(t.NV*3);for(let h=0;h<t.NV;h++)e.toLPS(t.pos[h*3],t.pos[h*3+1],t.pos[h*3+2],c,h*3);return this.cache={skin:[r,n],bone:[c,a],muscle:[c,l],f:e}}cut(t,e,n,s){let r=(n+1)%3,o=(n+2)%3,a=[],l=n===2?0:n===0?1:0,c=n===2?1:2;for(let h=0;h<e.length;h+=3){let p=e[h]*3,d=e[h+1]*3,u=e[h+2]*3,g=t[p+n]-s,_=t[d+n]-s,m=t[u+n]-s;if(g>0&&_>0&&m>0||g<0&&_<0&&m<0)continue;let f=[],v=(x,E,A,T)=>{if(E>0!=T>0){let C=E/(E-T);f.push(t[x+l]+C*(t[A+l]-t[x+l]),t[x+c]+C*(t[A+c]-t[x+c]))}};v(p,g,d,_),v(d,_,u,m),v(u,m,p,g),f.length>=4&&a.push(f[0],f[1],f[2],f[3])}return a}click(t,e){let n=e.target.getBoundingClientRect(),s=this.map[t];if(!s)return;let r=(e.clientX-n.left)*e.target.width/n.width,o=(e.clientY-n.top)*e.target.height/n.height,[a,l]=s.inv(r,o),c=this.vol;t==="ax"?(this.i=un(Math.round((a-c.o[0])/c.sp[0]),0,c.nx-1),this.j=un(Math.round((l-c.o[1])/c.sp[1]),0,c.ny-1)):t==="sa"?(this.j=un(Math.round((a-c.o[1])/c.sp[1]),0,c.ny-1),this.k=un(Math.round((l-c.o[2])/c.sp[2]),0,c.nz-1)):(this.i=un(Math.round((a-c.o[0])/c.sp[0]),0,c.nx-1),this.k=un(Math.round((l-c.o[2])/c.sp[2]),0,c.nz-1)),this.render()}slice(t){let e=this.vol,[n,s]=Cr[this.win],r=s-n/2,o=e.a,a=t==="ax"?e.nx:t==="sa"?e.ny:e.nx,l=t==="ax"?e.ny:e.nz,c=document.createElement("canvas");c.width=a,c.height=l;let h=c.getContext("2d"),p=h.createImageData(a,l),d=p.data;for(let u=0;u<l;u++)for(let g=0;g<a;g++){let _;t==="ax"?_=o[(this.k*e.ny+u)*e.nx+g]:t==="sa"?_=o[((e.nz-1-u)*e.ny+g)*e.nx+this.i]:_=o[((e.nz-1-u)*e.ny+this.j)*e.nx+g];let m=Math.max(0,Math.min(255,(_-r)/n*255)),f=(u*a+g)*4;d[f]=d[f+1]=d[f+2]=m,d[f+3]=_<=-1e3?0:255}return h.putImageData(p,0,0),c}render(){if(!this.vol||this.el.hidden)return;let t=this.vol,e=t.sp,n=t.o;this.sl.value=this.k;let s=[n[0]-e[0]/2,n[1]-e[1]/2,n[2]-e[2]/2],r=[t.nx*e[0],t.ny*e[1],t.nz*e[2]],o=s[2]+r[2],a={ax:[0,1,s[0],s[1],r[0],r[1],!1],sa:[1,2,s[1],o,r[1],r[2],!0],co:[0,2,s[0],o,r[0],r[2],!0]};this.map={};let l=this.meshes();for(let[d,[u,g,_,m,f,v,x]]of Object.entries(a)){let E=this.cv[d],A=E.getContext("2d"),T=Math.min(E.width/f,E.height/v),C=(E.width-f*T)/2,j=(E.height-v*T)/2,b=(q,W)=>[C+(q-_)*T,j+(x?m-W:W-m)*T];this.map[d]={inv:(q,W)=>[_+(q-C)/T,x?m-(W-j)/T:m+(W-j)/T]},A.fillStyle="#000",A.fillRect(0,0,E.width,E.height),A.imageSmoothingEnabled=!0;let w=this.slice(d);A.drawImage(w,C,j,f*T,v*T),d==="ax"&&(this.axImg=w);let V=d==="ax"?2:d==="sa"?0:1,O=d==="ax"?n[2]+this.k*e[2]:d==="sa"?n[0]+this.i*e[0]:n[1]+this.j*e[1];for(let[q,W]of[["muscle","#ff4d6d"],["bone","#ffe14d"],["skin","#ff9a3c"]]){if(!this.show[q])continue;let[P,N]=l[q],X=this.cut(P,N,V,O);A.strokeStyle=W,A.lineWidth=d==="ax"?1.4:1,A.beginPath();for(let $=0;$<X.length;$+=4){let[z,tt]=b(X[$],X[$+1]),[lt,_t]=b(X[$+2],X[$+3]);A.moveTo(z,tt),A.lineTo(lt,_t)}A.stroke()}A.strokeStyle="rgba(80,200,255,.85)",A.lineWidth=1,A.setLineDash([4,3]),A.beginPath();let K=n[0]+this.i*e[0],L=n[1]+this.j*e[1],U=n[2]+this.k*e[2],H=(q,W,P,N)=>{let[X,$]=b(q,W),[z,tt]=b(P,N);A.moveTo(X,$),A.lineTo(z,tt)};d==="ax"?(H(K,s[1],K,s[1]+r[1]),H(s[0],L,s[0]+r[0],L)):d==="sa"?(H(s[1],U,s[1]+r[1],U),H(L,s[2],L,o)):(H(s[0],U,s[0]+r[0],U),H(K,s[2],K,o)),A.stroke(),A.setLineDash([]),d!=="ax"?(A.fillStyle="rgba(80,200,255,.9)",A.font="11px system-ui",A.fillText(d==="sa"?"\u77E2\u72C0\u9762\uFF08\u5DE6\u70BA\u524D\uFF09":"\u51A0\u72C0\u9762\uFF08\u5DE6\u70BA\u75C5\u4EBA\u53F3\u5074\uFF09",6,14)):(A.fillStyle="rgba(80,200,255,.9)",A.font="11px system-ui",A.fillText("\u524D",E.width/2-6,j+14),A.fillText("\u75C5\u4EBA\u53F3",C+4,E.height/2))}let c=n[2]+this.k*e[2],h=this.M.ct,p=h.hdr.ylim_rel;if(this.info.textContent=`\u7B2C ${this.k+1} / ${t.nz} \u5C64 \xB7 z ${c.toFixed(1)} mm \xB7 ${Cr[this.win][2]}\u7A97`,this.show.plane){let d=l.f,u=[[s[0],s[1],c],[s[0]+r[0],s[1],c],[s[0]+r[0],s[1]+r[1],c],[s[0],s[1]+r[1],c]].map(d.toWorld);this.V.setSlicePlane(u,this.axImg)}else this.V.setSlicePlane(null)}},un=(i,t,e)=>Math.max(t,Math.min(e,i));var ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sc=0,lo=1,Ec=2;var Fl=1,wc=2,_n=3,ln=0,Ce=1,Ae=2;var In=0,Ai=1,co=2,ho=3,uo=4,Tc=5,Xn=100,Ac=101,Cc=102,fo=103,po=104,Rc=200,Pc=201,Lc=202,Ic=203,aa=204,oa=205,Uc=206,Dc=207,Nc=208,Oc=209,Fc=210,Bc=211,zc=212,kc=213,Hc=214,Vc=0,Gc=1,Wc=2,$n=3,Xc=4,qc=5,Yc=6,Zc=7,Bl=0,Jc=1,$c=2,Un=0,Kc=1,jc=2,Qc=3,th=4,eh=5,nh=6;var zl=300,Pi=301,Li=302,la=303,ca=304,pr=306,ha=1e3,tn=1001,ua=1002,Ue=1003,mo=1004;var Rr=1005;var Xe=1006,ih=1007;var es=1008;var Dn=1009,sh=1010,rh=1011,Ga=1012,kl=1013,Pn=1014,Ln=1015,ns=1016,Hl=1017,Vl=1018,Yn=1020,ah=1021,en=1023,oh=1024,lh=1025,Zn=1026,Ii=1027,ch=1028,Gl=1029,hh=1030,Wl=1031,Xl=1033,Pr=33776,Lr=33777,Ir=33778,Ur=33779,go=35840,_o=35841,xo=35842,yo=35843,ql=36196,vo=37492,Mo=37496,bo=37808,So=37809,Eo=37810,wo=37811,To=37812,Ao=37813,Co=37814,Ro=37815,Po=37816,Lo=37817,Io=37818,Uo=37819,Do=37820,No=37821,Dr=36492,Oo=36494,Fo=36495,uh=36283,Bo=36284,zo=36285,ko=36286;var Vs=2300,Gs=2301,Nr=2302,Ho=2400,Vo=2401,Go=2402;var Yl=3e3,Jn=3001,dh=3200,fh=3201,Zl=0,ph=1,qe="",pe="srgb",yn="srgb-linear",Wa="display-p3",mr="display-p3-linear",Ws="linear",se="srgb",Xs="rec709",qs="p3";var oi=7680;var Wo=519,mh=512,gh=513,_h=514,Jl=515,xh=516,yh=517,vh=518,Mh=519,Xo=35044;var qo="300 es",da=1035,xn=2e3,Ys=2001,cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=1234567,Ki=Math.PI/180,is=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Xa(i,t){return(i%t+t)%t}function bh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sh(i,t,e){return i!==t?(e-i)/(t-i):0}function ji(i,t,e){return(1-e)*i+e*t}function Eh(i,t,e,n){return ji(i,t,1-Math.exp(-e*n))}function wh(i,t=1){return t-Math.abs(Xa(i,t*2)-t)}function Th(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ah(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ch(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rh(i,t){return i+Math.random()*(t-i)}function Ph(i){return i*(.5-Math.random())}function Lh(i){i!==void 0&&(Yo=i);let t=Yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ih(i){return i*Ki}function Uh(i){return i*is}function fa(i){return(i&i-1)===0&&i!==0}function Dh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var us={DEG2RAD:Ki,RAD2DEG:is,generateUUID:Bi,clamp:Te,euclideanModulo:Xa,mapLinear:bh,inverseLerp:Sh,lerp:ji,damp:Eh,pingpong:wh,smoothstep:Th,smootherstep:Ah,randInt:Ch,randFloat:Rh,randFloatSpread:Ph,seededRandom:Lh,degToRad:Ih,radToDeg:Uh,isPowerOfTwo:fa,ceilPowerOfTwo:Dh,floorPowerOfTwo:Zs,setQuaternionFromProperEuler:Nh,normalize:Le,denormalize:Si},kt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],u=n[5],g=n[8],_=s[0],m=s[3],f=s[6],v=s[1],x=s[4],E=s[7],A=s[2],T=s[5],C=s[8];return r[0]=o*_+a*v+l*A,r[3]=o*m+a*x+l*T,r[6]=o*f+a*E+l*C,r[1]=c*_+h*v+p*A,r[4]=c*m+h*x+p*T,r[7]=c*f+h*E+p*C,r[2]=d*_+u*v+g*A,r[5]=d*m+u*x+g*T,r[8]=d*f+u*E+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=e*p+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=p*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Or=new Jt;function $l(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){let i=Js("canvas");return i.style.display="block",i}var Zo={};function Qi(i){i in Zo||(Zo[i]=!0,console.warn(i))}var Jo=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$o=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[yn]:{transfer:Ws,primaries:Xs,toReference:i=>i,fromReference:i=>i},[pe]:{transfer:se,primaries:Xs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mr]:{transfer:Ws,primaries:qs,toReference:i=>i.applyMatrix3($o),fromReference:i=>i.applyMatrix3(Jo)},[Wa]:{transfer:se,primaries:qs,toReference:i=>i.convertSRGBToLinear().applyMatrix3($o),fromReference:i=>i.applyMatrix3(Jo).convertLinearToSRGB()}},Fh=new Set([yn,mr]),ee={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=xs[t].toReference,s=xs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return xs[i].primaries},getTransfer:function(i){return i===qe?Ws:xs[i].transfer}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var li,$s=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=Js("canvas")),li.width=t.width,li.height=t.height;let n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bh=0,Ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Br(s[o].image)):r.push(Br(s[o]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$s.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zh=0,Ye=class i extends cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=tn,s=tn,r=Xe,o=es,a=en,l=Dn,c=i.DEFAULT_ANISOTROPY,h=qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Bi(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Jn?pe:qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Jn:Yl}set encoding(t){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?pe:qe}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=zl;Ye.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],u=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,E=(u+1)/2,A=(f+1)/2,T=(h+d)/4,C=(p+_)/4,j=(g+m)/4;return x>E&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):E>A?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=j/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=j/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(p-_)*(p-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(p-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends cn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?pe:qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},js=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==d||c!==u||h!==g){let m=1-a,f=l*d+c*u+h*g+p*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,f*v);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}let E=a*v;if(l=l*m+d*E,c=c*m+u*E,h=h*m+g*E,p=p*m+_*E,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=A,c*=A,h*=A,p*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*u-c*d,t[e+1]=l*g+h*d+c*p-a*u,t[e+2]=c*g+h*u+a*d-l*p,t[e+3]=h*g-a*p-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"YXZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"ZXY":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"ZYX":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"YZX":this._x=d*h*p+c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p-d*u*g;break;case"XZY":this._x=d*h*p-c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+a+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>p){let u=2*Math.sqrt(1+n-a-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>p){let u=2*Math.sqrt(1+a-n-p);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=r*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zr=new F,Ko=new nn,Kn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),vs.subVectors(this.max,Yi),ci.subVectors(t.a,Yi),hi.subVectors(t.b,Yi),ui.subVectors(t.c,Yi),wn.subVectors(hi,ci),Tn.subVectors(ui,hi),kn.subVectors(ci,ui);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-kn.z,kn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,kn.z,0,-kn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-kn.y,kn.x,0];return!kr(e,ci,hi,ui,vs)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,ci,hi,ui,vs))?!1:(Ms.crossVectors(wn,Tn),e=[Ms.x,Ms.y,Ms.z],kr(e,ci,hi,ui,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new F,new F,new F,new F,new F,new F,new F,new F],$e=new F,ys=new Kn,ci=new F,hi=new F,ui=new F,wn=new F,Tn=new F,kn=new F,Yi=new F,vs=new F,Ms=new F,Hn=new F;function kr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);let a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var kh=new Kn,Zi=new F,Hr=new F,Ui=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);let e=Zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Hr)),this.expandByPoint(Zi.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new F,Vr=new F,bs=new F,An=new F,Gr=new F,Ss=new F,Wr=new F,jn=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Vr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bs),a=An.dot(this.direction),l=-An.dot(bs),c=An.lengthSq(),h=Math.abs(1-o*o),p,d,u,g;if(h>0)if(p=o*l-a,d=o*a-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let _=1/h;p*=_,d*=_,u=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Vr).addScaledVector(bs,d),u}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,s,r){Gr.subVectors(e,t),Ss.subVectors(n,t),Wr.crossVectors(Gr,Ss);let o=this.direction.dot(Wr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);let l=a*this.direction.dot(Ss.crossVectors(An,Ss));if(l<0)return null;let c=a*this.direction.dot(Gr.cross(An));if(c<0||l+c>o)return null;let h=-a*An.dot(Wr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,o,a,l,c,h,p,d,u,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,d,u,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,p,d,u,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),o=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*p,g=a*h,_=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*p,g=c*h,_=c*p;e[0]=d+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*p,g=c*h,_=c*p;e[0]=d-_*a,e[4]=-o*p,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*p,g=a*h,_=a*p;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+_,e[1]=l*p,e[5]=_*c+d,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*p,e[8]=g*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*p+g,e[10]=d-_*p}else if(t.order==="XZY"){let d=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+_,e[5]=o*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=a*h,e[10]=_*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hh,t,Vh)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Cn.crossVectors(n,Fe),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Cn.crossVectors(n,Fe)),Cn.normalize(),Es.crossVectors(Fe,Cn),s[0]=Cn.x,s[4]=Es.x,s[8]=Fe.x,s[1]=Cn.y,s[5]=Es.y,s[9]=Fe.y,s[2]=Cn.z,s[6]=Es.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],x=n[7],E=n[11],A=n[15],T=s[0],C=s[4],j=s[8],b=s[12],w=s[1],V=s[5],O=s[9],K=s[13],L=s[2],U=s[6],H=s[10],q=s[14],W=s[3],P=s[7],N=s[11],X=s[15];return r[0]=o*T+a*w+l*L+c*W,r[4]=o*C+a*V+l*U+c*P,r[8]=o*j+a*O+l*H+c*N,r[12]=o*b+a*K+l*q+c*X,r[1]=h*T+p*w+d*L+u*W,r[5]=h*C+p*V+d*U+u*P,r[9]=h*j+p*O+d*H+u*N,r[13]=h*b+p*K+d*q+u*X,r[2]=g*T+_*w+m*L+f*W,r[6]=g*C+_*V+m*U+f*P,r[10]=g*j+_*O+m*H+f*N,r[14]=g*b+_*K+m*q+f*X,r[3]=v*T+x*w+E*L+A*W,r[7]=v*C+x*V+E*U+A*P,r[11]=v*j+x*O+E*H+A*N,r[15]=v*b+x*K+E*q+A*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],u=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*p-s*c*p-r*a*d+n*c*d+s*a*u-n*l*u)+_*(+e*l*u-e*c*d+r*o*d-s*o*u+s*c*h-r*l*h)+m*(+e*c*p-e*a*u-r*o*p+n*o*u+r*a*h-n*c*h)+f*(-s*a*h-e*l*p+e*a*d+s*o*p-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],u=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=p*m*c-_*d*c+_*l*u-a*m*u-p*l*f+a*d*f,x=g*d*c-h*m*c-g*l*u+o*m*u+h*l*f-o*d*f,E=h*_*c-g*p*c+g*a*u-o*_*u-h*a*f+o*p*f,A=g*p*l-h*_*l-g*a*d+o*_*d+h*a*m-o*p*m,T=e*v+n*x+s*E+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=v*C,t[1]=(_*d*r-p*m*r-_*s*u+n*m*u+p*s*f-n*d*f)*C,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*C,t[3]=(p*l*r-a*d*r-p*s*c+n*d*c+a*s*u-n*l*u)*C,t[4]=x*C,t[5]=(h*m*r-g*d*r+g*s*u-e*m*u-h*s*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*u+e*l*u)*C,t[8]=E*C,t[9]=(g*p*r-h*_*r-g*n*u+e*_*u+h*n*f-e*p*f)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*p*r-h*n*c+e*p*c+o*n*u-e*a*u)*C,t[12]=A*C,t[13]=(h*_*s-g*p*s+g*n*d-e*_*d-h*n*m+e*p*m)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*p*s-h*a*s+h*n*l-e*p*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,d=r*c,u=r*h,g=r*p,_=o*h,m=o*p,f=a*p,v=l*c,x=l*h,E=l*p,A=n.x,T=n.y,C=n.z;return s[0]=(1-(_+f))*A,s[1]=(u+E)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(u-E)*T,s[5]=(1-(d+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*C,s[9]=(m-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=di.set(s[0],s[1],s[2]).length(),o=di.set(s[4],s[5],s[6]).length(),a=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);let c=1/r,h=1/o,p=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=p,Ke.elements[9]*=p,Ke.elements[10]*=p,e.setFromRotationMatrix(Ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),u,g;if(a===xn)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ys)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn){let l=this.elements,c=1/(e-t),h=1/(n-s),p=1/(o-r),d=(e+t)*c,u=(n+s)*h,g,_;if(a===xn)g=(o+r)*p,_=-2*p;else if(a===Ys)g=r*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},di=new F,Ke=new me,Hh=new F(0,0,0),Vh=new F(1,1,1),Cn=new F,Es=new F,Fe=new F,jo=new me,Qo=new nn,Qs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qs.DEFAULT_ORDER="XYZ";var ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gh=0,tl=new F,fi=new nn,pn=new me,ws=new F,Ji=new F,Wh=new F,Xh=new nn,el=new F(1,0,0),nl=new F(0,1,0),il=new F(0,0,1),qh={type:"added"},Yh={type:"removed"},Re=class i extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Qs,n=new nn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ji,ws,this.up):pn.lookAt(ws,Ji,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(pn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new F(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=new F,mn=new F,Xr=new F,gn=new F,pi=new F,mi=new F,sl=new F,qr=new F,Yr=new F,Zr=new F,Ts=!1,Ei=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),mn.subVectors(n,e),Xr.subVectors(t,e);let o=je.dot(je),a=je.dot(mn),l=je.dot(Xr),c=mn.dot(mn),h=mn.dot(Xr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(t,e,n,s,r,o,a,l){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),mn.subVectors(t,e),je.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),je.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;pi.subVectors(s,n),mi.subVectors(r,n),qr.subVectors(t,n);let l=pi.dot(qr),c=mi.dot(qr);if(l<=0&&c<=0)return e.copy(n);Yr.subVectors(t,s);let h=pi.dot(Yr),p=mi.dot(Yr);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(pi,o);Zr.subVectors(t,r);let u=pi.dot(Zr),g=mi.dot(Zr);if(g>=0&&u<=g)return e.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(mi,a);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return sl.subVectors(r,s),a=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(sl,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},As={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Xa(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Jr(o,r,t+1/3),this.g=Jr(o,r,t),this.b=Jr(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return ee.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=pe){ee.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(As);let n=ji(Rn.h,As.h,e),s=ji(Rn.s,As.s,e),r=ji(Rn.l,As.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new qt;qt.NAMES=Kl;var Zh=0,Nn=class extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Ai,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=$n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$n&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mn=class extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new F,Cs=new kt,ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),t}};var tr=class extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var er=class extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ze=class extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Jh=0,We=new me,$r=new Re,gi=new F,Be=new Kn,$i=new Kn,ve=new F,Pe=class i extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?er:tr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Be.min,$i.min),Be.expandByPoint(ve),ve.addVectors(Be.max,$i.max),Be.expandByPoint(ve)):(Be.expandByPoint($i.min),Be.expandByPoint($i.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(t,c),ve.add(gi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new F,h[w]=new F;let p=new F,d=new F,u=new F,g=new kt,_=new kt,m=new kt,f=new F,v=new F;function x(w,V,O){p.fromArray(s,w*3),d.fromArray(s,V*3),u.fromArray(s,O*3),g.fromArray(o,w*2),_.fromArray(o,V*2),m.fromArray(o,O*2),d.sub(p),u.sub(p),_.sub(g),m.sub(g);let K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(u,-_.y).multiplyScalar(K),v.copy(u).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(K),c[w].add(f),c[V].add(f),c[O].add(f),h[w].add(v),h[V].add(v),h[O].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,V=E.length;w<V;++w){let O=E[w],K=O.start,L=O.count;for(let U=K,H=K+L;U<H;U+=3)x(n[U+0],n[U+1],n[U+2])}let A=new F,T=new F,C=new F,j=new F;function b(w){C.fromArray(r,w*3),j.copy(C);let V=c[w];A.copy(V),A.sub(C.multiplyScalar(C.dot(V))).normalize(),T.crossVectors(j,V);let K=T.dot(h[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=K}for(let w=0,V=E.length;w<V;++w){let O=E[w],K=O.start,L=O.count;for(let U=K,H=K+L;U<H;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,p=new F;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[u++]}return new ne(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=new me,Vn=new jn,Rs=new Ui,al=new F,_i=new F,xi=new F,yi=new F,Kr=new F,Ps=new F,Ls=new kt,Is=new kt,Us=new kt,ol=new F,ll=new F,cl=new F,Ds=new F,Ns=new F,ue=class extends Re{constructor(t=new Pe,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(Kr.fromBufferAttribute(p,t),o?Ps.addScaledVector(Kr,h):Ps.addScaledVector(Kr.sub(e),h))}e.add(Ps)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Rs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Rs,al)===null||Vn.origin.distanceToSquared(al)>(t.far-t.near)**2))&&(rl.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(rl),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let E=v,A=x;E<A;E+=3){let T=a.getX(E),C=a.getX(E+1),j=a.getX(E+2);s=Os(this,f,t,n,c,h,p,T,C,j),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){let v=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=Os(this,o,t,n,c,h,p,v,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let E=v,A=x;E<A;E+=3){let T=E,C=E+1,j=E+2;s=Os(this,f,t,n,c,h,p,T,C,j),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,f=_;m<f;m+=3){let v=m,x=m+1,E=m+2;s=Os(this,o,t,n,c,h,p,v,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function $h(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ln,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:i}}function Os(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,_i),i.getVertexPosition(l,xi),i.getVertexPosition(c,yi);let h=$h(i,t,e,n,_i,xi,yi,Ds);if(h){s&&(Ls.fromBufferAttribute(s,a),Is.fromBufferAttribute(s,l),Us.fromBufferAttribute(s,c),h.uv=Ei.getInterpolation(Ds,_i,xi,yi,Ls,Is,Us,new kt)),r&&(Ls.fromBufferAttribute(r,a),Is.fromBufferAttribute(r,l),Us.fromBufferAttribute(r,c),h.uv1=Ei.getInterpolation(Ds,_i,xi,yi,Ls,Is,Us,new kt),h.uv2=h.uv1),o&&(ol.fromBufferAttribute(o,a),ll.fromBufferAttribute(o,l),cl.fromBufferAttribute(o,c),h.normal=Ei.getInterpolation(Ds,_i,xi,yi,ol,ll,cl,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new F,materialIndex:0};Ei.getNormal(_i,xi,yi,p.normal),h.face=p}return h}var rs=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(p,2));function g(_,m,f,v,x,E,A,T,C,j,b){let w=E/C,V=A/j,O=E/2,K=A/2,L=T/2,U=C+1,H=j+1,q=0,W=0,P=new F;for(let N=0;N<H;N++){let X=N*V-K;for(let $=0;$<U;$++){let z=$*w-O;P[_]=z*v,P[m]=X*x,P[f]=L,c.push(P.x,P.y,P.z),P[_]=0,P[m]=0,P[f]=T>0?1:-1,h.push(P.x,P.y,P.z),p.push($/C),p.push(1-N/j),q+=1}}for(let N=0;N<j;N++)for(let X=0;X<C;X++){let $=d+X+U*N,z=d+X+U*(N+1),tt=d+(X+1)+U*(N+1),lt=d+(X+1)+U*N;l.push($,z,lt),l.push(z,tt,lt),W+=6}a.addGroup(u,W,b),u+=W,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=Di(i[e]);for(let s in n)t[s]=n[s]}return t}function Kh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jl(i){return i.getRenderTarget()===null?i.outputColorSpace:ee.workingColorSpace}var jh={clone:Di,merge:Ie},Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},nr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},De=class extends nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,Mi=1,ga=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(vi,Mi,t,e);s.layers=this.layers,this.add(s);let r=new De(vi,Mi,t,e);r.layers=this.layers,this.add(r);let o=new De(vi,Mi,t,e);o.layers=this.layers,this.add(o);let a=new De(vi,Mi,t,e);a.layers=this.layers,this.add(a);let l=new De(vi,Mi,t,e);l.layers=this.layers,this.add(l);let c=new De(vi,Mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ir=class extends Ye{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Jn?pe:qe),this.texture=new ir(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:In});r.uniforms.tEquirect.value=e;let o=new ue(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Xe),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},jr=new F,eu=new F,nu=new Jt,Qe=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jr.subVectors(n,e).cross(eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nu.getNormalMatrix(t),s=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Ui,Fs=new F,as=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,o=new Qe){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],p=s[6],d=s[7],u=s[8],g=s[9],_=s[10],m=s[11],f=s[12],v=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,m-u,E-f).normalize(),n[1].setComponents(l+r,d+c,m+u,E+f).normalize(),n[2].setComponents(l+o,d+h,m+g,E+v).normalize(),n[3].setComponents(l-o,d-h,m-g,E-v).normalize(),n[4].setComponents(l-a,d-p,m-_,E-x).normalize(),e===xn)n[5].setComponents(l+a,d+p,m+_,E+x).normalize();else if(e===Ys)n[5].setComponents(a,p,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ql(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function iu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let p=c.array,d=c.usage,u=p.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,p,d),c.onUploadCallback();let _;if(p instanceof Float32Array)_=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=i.SHORT;else if(p instanceof Uint32Array)_=i.UNSIGNED_INT;else if(p instanceof Int32Array)_=i.INT;else if(p instanceof Int8Array)_=i.BYTE;else if(p instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,p){let d=h.array,u=h._updateRange,g=h.updateRanges;if(i.bindBuffer(p,c),u.count===-1&&g.length===0&&i.bufferSubData(p,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let f=g[_];e?i.bufferSubData(p,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(p,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}u.count!==-1&&(e?i.bufferSubData(p,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(p,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);if(p===void 0)n.set(c,s(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,h),p.version=c.version}}return{get:o,remove:a,update:l}}var xa=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,d=e/l,u=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let v=f*d-o;for(let x=0;x<c;x++){let E=x*p-r;g.push(E,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let x=v+c*f,E=v+c*(f+1),A=v+1+c*(f+1),T=v+1+c*f;u.push(x,E,T),u.push(E,A,T)}this.setIndex(u),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Au=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Du="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Of=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:xu,clipping_planes_fragment:yu,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:bu,color_fragment:Su,color_pars_fragment:Eu,color_pars_vertex:wu,color_vertex:Tu,common:Au,cube_uv_reflection_fragment:Cu,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Pu,displacementmap_vertex:Lu,emissivemap_fragment:Iu,emissivemap_pars_fragment:Uu,colorspace_fragment:Du,colorspace_pars_fragment:Nu,envmap_fragment:Ou,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Bu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:Ku,envmap_vertex:ku,fog_vertex:Hu,fog_pars_vertex:Vu,fog_fragment:Gu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:$u,lights_toon_fragment:ju,lights_toon_pars_fragment:Qu,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:ad,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:yd,morphtarget_vertex:vd,normal_fragment_begin:Md,normal_fragment_maps:bd,normal_pars_fragment:Sd,normal_pars_vertex:Ed,normal_vertex:wd,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Pd,opaque_fragment:Ld,packing:Id,premultiplied_alpha_fragment:Ud,project_vertex:Dd,dithering_fragment:Nd,dithering_pars_fragment:Od,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:kd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Vd,skinbase_vertex:Gd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:Zd,tonemapping_fragment:Jd,tonemapping_pars_fragment:$d,transmission_fragment:Kd,transmission_pars_fragment:jd,uv_pars_fragment:Qd,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:af,backgroundCube_frag:of,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:uf,distanceRGBA_vert:df,distanceRGBA_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:xf,meshbasic_frag:yf,meshlambert_vert:vf,meshlambert_frag:Mf,meshmatcap_vert:bf,meshmatcap_frag:Sf,meshnormal_vert:Ef,meshnormal_frag:wf,meshphong_vert:Tf,meshphong_frag:Af,meshphysical_vert:Cf,meshphysical_frag:Rf,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:If,points_frag:Uf,shadow_vert:Df,shadow_frag:Nf,sprite_vert:Of,sprite_frag:Ff},ft={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},an={basic:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ie([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ie([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ie([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ie([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ie([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ie([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ie([ft.common,ft.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ie([ft.lights,ft.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};an.physical={uniforms:Ie([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Bs={r:0,b:0,g:0};function Bf(i,t,e,n,s,r,o){let a=new qt(0),l=r===!0?0:1,c,h,p=null,d=0,u=null;function g(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===pr)?(h===void 0&&(h=new ue(new rs(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Di(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ee.getTransfer(x.colorSpace)!==se,(p!==x||d!==x.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=x,d=x.version,u=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ue(new xa(2,2),new bn({name:"BackgroundMaterial",uniforms:Di(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ee.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,p=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Bs,jl(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function zf(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function p(L,U,H,q,W){let P=!1;if(o){let N=_(q,H,U);c!==N&&(c=N,u(c.object)),P=f(L,q,H,W),P&&v(L,q,H,W)}else{let N=U.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==N)&&(c.geometry=q.id,c.program=H.id,c.wireframe=N,P=!0)}W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,j(L,U,H,q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,H){let q=H.wireframe===!0,W=a[L.id];W===void 0&&(W={},a[L.id]=W);let P=W[U.id];P===void 0&&(P={},W[U.id]=P);let N=P[q];return N===void 0&&(N=m(d()),P[q]=N),N}function m(L){let U=[],H=[],q=[];for(let W=0;W<s;W++)U[W]=0,H[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:L,attributes:{},index:null}}function f(L,U,H,q){let W=c.attributes,P=U.attributes,N=0,X=H.getAttributes();for(let $ in X)if(X[$].location>=0){let tt=W[$],lt=P[$];if(lt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),tt===void 0||tt.attribute!==lt||lt&&tt.data!==lt.data)return!0;N++}return c.attributesNum!==N||c.index!==q}function v(L,U,H,q){let W={},P=U.attributes,N=0,X=H.getAttributes();for(let $ in X)if(X[$].location>=0){let tt=P[$];tt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let lt={};lt.attribute=tt,tt&&tt.data&&(lt.data=tt.data),W[$]=lt,N++}c.attributes=W,c.attributesNum=N,c.index=q}function x(){let L=c.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function E(L){A(L,0)}function A(L,U){let H=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;H[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),W[L]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),W[L]=U)}function T(){let L=c.newAttributes,U=c.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==L[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function C(L,U,H,q,W,P,N){N===!0?i.vertexAttribIPointer(L,U,H,W,P):i.vertexAttribPointer(L,U,H,q,W,P)}function j(L,U,H,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let W=q.attributes,P=H.getAttributes(),N=U.defaultAttributeValues;for(let X in P){let $=P[X];if($.location>=0){let z=W[X];if(z===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let tt=z.normalized,lt=z.itemSize,_t=e.get(z);if(_t===void 0)continue;let vt=_t.buffer,It=_t.type,Pt=_t.bytesPerElement,Ct=n.isWebGL2===!0&&(It===i.INT||It===i.UNSIGNED_INT||z.gpuType===kl);if(z.isInterleavedBufferAttribute){let Nt=z.data,G=Nt.stride,$t=z.offset;if(Nt.isInstancedInterleavedBuffer){for(let gt=0;gt<$.locationSize;gt++)A($.location+gt,Nt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let gt=0;gt<$.locationSize;gt++)E($.location+gt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let gt=0;gt<$.locationSize;gt++)C($.location+gt,lt/$.locationSize,It,tt,G*Pt,($t+lt/$.locationSize*gt)*Pt,Ct)}else{if(z.isInstancedBufferAttribute){for(let Nt=0;Nt<$.locationSize;Nt++)A($.location+Nt,z.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Nt=0;Nt<$.locationSize;Nt++)E($.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Nt=0;Nt<$.locationSize;Nt++)C($.location+Nt,lt/$.locationSize,It,tt,lt*Pt,lt/$.locationSize*Nt*Pt,Ct)}}else if(N!==void 0){let tt=N[X];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv($.location,tt);break;case 3:i.vertexAttrib3fv($.location,tt);break;case 4:i.vertexAttrib4fv($.location,tt);break;default:i.vertexAttrib1fv($.location,tt)}}}}T()}function b(){O();for(let L in a){let U=a[L];for(let H in U){let q=U[H];for(let W in q)g(q[W].object),delete q[W];delete U[H]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let H in U){let q=U[H];for(let W in q)g(q[W].object),delete q[W];delete U[H]}delete a[L.id]}function V(L){for(let U in a){let H=a[U];if(H[L.id]===void 0)continue;let q=H[L.id];for(let W in q)g(q[W].object),delete q[W];delete H[L.id]}}function O(){K(),h=!0,c!==l&&(c=l,u(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:K,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:E,disableUnusedAttributes:T}}function kf(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,p){i.drawArrays(r,h,p),e.update(p,r,1)}function l(h,p,d){if(d===0)return;let u,g;if(s)u=i,g="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](r,h,p,d),e.update(p,r,d)}function c(h,p,d){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d;g++)this.render(h[g],p[g]);else{u.multiDrawArraysWEBGL(r,h,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=p[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Hf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,E=o||t.has("OES_texture_float"),A=x&&E,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:T}}function Vf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Qe,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,u){let g=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,x=v*4,E=f.clippingState||null;l.value=E,E=h(g,d,x,u);for(let A=0;A!==x;++A)E[A]=e[A];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,u,g){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=u+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,E=u;x!==_;++x,E+=4)o.copy(p[x]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gf(i){let t=new WeakMap;function e(o,a){return a===la?o.mapping=Pi:a===ca&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===la||a===ca)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _a(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var sr=class extends nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wi=4,hl=[.125,.215,.35,.446,.526,.582],qn=20,Qr=new sr,ul=new qt,ta=null,ea=0,na=0,Wn=(1+Math.sqrt(5))/2,bi=1/Wn,dl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Wn,bi),new F(0,Wn,-bi),new F(bi,0,Wn),new F(-bi,0,Wn),new F(Wn,bi,0),new F(-Wn,bi,0)],rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ns,format:en,colorSpace:yn,depthBuffer:!1},s=fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(r)),this._blurMaterial=Xf(r,t,e)}return s}_compileMaterial(t){let e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s){let a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(ul),h.toneMapping=Un,h.autoClear=!1;let u=new Mn({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new ue(new rs,u),_=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(ul),_=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;zs(s,v*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=dl[(s-1)%dl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new ue(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*qn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);let f=[],v=0;for(let C=0;C<qn;++C){let j=C/_,b=Math.exp(-j*j/2);f.push(b),C===0?v+=b:C<m&&(v+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let E=this._sizeLods[s],A=3*E*(s>x-wi?s-x+wi:0),T=4*(this._cubeSize-E);zs(e,A,T,3*E,2*E),l.setRenderTarget(e),l.render(p,Qr)}};function Wf(i){let t=[],e=[],n=[],s=i,r=i-wi+1+hl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-wi?l=hl[o-i+wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],u=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*u),x=new Float32Array(m*g*u),E=new Float32Array(f*g*u);for(let T=0;T<u;T++){let C=T%3*2/3-1,j=T>2?0:-1,b=[C,j,0,C+2/3,j,0,C+2/3,j+1,0,C,j,0,C+2/3,j+1,0,C,j+1,0];v.set(b,_*g*T),x.set(d,m*g*T);let w=[T,T,T,T,T,T];E.set(w,f*g*T)}let A=new Pe;A.setAttribute("position",new ne(v,_)),A.setAttribute("uv",new ne(x,m)),A.setAttribute("faceIndex",new ne(E,f)),t.push(A),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fl(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xf(i,t,e){let n=new Float32Array(qn),s=new F(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function pl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ml(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===la||l===ca,h=l===Pi||l===Li;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=t.get(a);return e===null&&(e=new rr(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),t.set(a,p),p.texture}else{if(t.has(a))return t.get(a).texture;{let p=a.image;if(c&&p&&p.height>0||h&&p&&s(p)){e===null&&(e=new rr(i));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zf(i,t,e,n){let s={},r=new WeakMap;function o(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(p){let d=p.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let u=p.morphAttributes;for(let g in u){let _=u[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(p){let d=[],u=p.index,g=p.attributes.position,_=0;if(u!==null){let v=u.array;_=u.version;for(let x=0,E=v.length;x<E;x+=3){let A=v[x+0],T=v[x+1],C=v[x+2];d.push(A,T,T,C,C,A)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,E=v.length/3-1;x<E;x+=3){let A=x+0,T=x+1,C=x+2;d.push(A,T,T,C,C,A)}}else return;let m=new($l(d)?er:tr)(d,1);m.version=_;let f=r.get(p);f&&t.remove(f),r.set(p,m)}function h(p){let d=r.get(p);if(d){let u=p.index;u!==null&&d.version<u.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Jf(i,t,e,n){let s=n.isWebGL2,r;function o(u){r=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,g){i.drawElements(r,g,a,u*l),e.update(g,r,1)}function p(u,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,u*l,_),e.update(g,r,_)}function d(u,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(u[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,u,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=d}function $f(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kf(i,t){return i[0]-t[0]}function jf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Qf(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,p){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=u!==void 0?u.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],j=0;v===!0&&(j=1),x===!0&&(j=2),E===!0&&(j=3);let b=h.attributes.position.count*j,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let V=new Float32Array(b*w*4*g),O=new js(V,b,w,g);O.type=Ln,O.needsUpdate=!0;let K=j*4;for(let U=0;U<g;U++){let H=A[U],q=T[U],W=C[U],P=b*w*4*U;for(let N=0;N<H.count;N++){let X=N*K;v===!0&&(o.fromBufferAttribute(H,N),V[P+X+0]=o.x,V[P+X+1]=o.y,V[P+X+2]=o.z,V[P+X+3]=0),x===!0&&(o.fromBufferAttribute(q,N),V[P+X+4]=o.x,V[P+X+5]=o.y,V[P+X+6]=o.z,V[P+X+7]=0),E===!0&&(o.fromBufferAttribute(W,N),V[P+X+8]=o.x,V[P+X+9]=o.y,V[P+X+10]=o.z,V[P+X+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:O,size:new kt(b,w)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let f=h.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",f),p.getUniforms().setValue(i,"morphTargetInfluences",d),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let u=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==u){g=[];for(let x=0;x<u;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<u;x++){let E=g[x];E[0]=x,E[1]=d[x]}g.sort(jf);for(let x=0;x<8;x++)x<u&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Kf);let _=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let E=a[x],A=E[0],T=E[1];A!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[A]&&h.setAttribute("morphTarget"+x,_[A]),m&&h.getAttribute("morphNormal"+x)!==m[A]&&h.setAttribute("morphNormal"+x,m[A]),s[x]=T,f+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(i,"morphTargetBaseInfluence",v),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function tp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return p}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ar=class extends Ye{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Zn,h!==Zn&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zn&&(n=Pn),n===void 0&&h===Ii&&(n=Yn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},tc=new Ye,ec=new ar(1,1);ec.compareFunction=Jl;var nc=new js,ic=new ma,sc=new ir,gl=[],_l=[],xl=new Float32Array(16),yl=new Float32Array(9),vl=new Float32Array(4);function zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gl[s];if(r===void 0&&(r=new Float32Array(s),gl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gr(i,t){let e=_l[t];e===void 0&&(e=new Int32Array(t),_l[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;vl.set(n),i.uniformMatrix2fv(this.addr,!1,vl),_e(e,n)}}function ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),_e(e,n)}}function op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;xl.set(n),i.uniformMatrix4fv(this.addr,!1,xl),_e(e,n)}}function lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function dp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ec:tc;e.setTexture2D(t||r,s)}function _p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ic,s)}function xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sc,s)}function yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nc,s)}function vp(i){switch(i){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return yp}}function Mp(i,t){i.uniform1fv(this.addr,t)}function bp(i,t){let e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Sp(i,t){let e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ep(i,t){let e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function wp(i,t){let e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tp(i,t){let e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ap(i,t){let e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cp(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Pp(i,t){i.uniform3iv(this.addr,t)}function Lp(i,t){i.uniform4iv(this.addr,t)}function Ip(i,t){i.uniform1uiv(this.addr,t)}function Up(i,t){i.uniform2uiv(this.addr,t)}function Dp(i,t){i.uniform3uiv(this.addr,t)}function Np(i,t){i.uniform4uiv(this.addr,t)}function Op(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||tc,r[o])}function Fp(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ic,r[o])}function Bp(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sc,r[o])}function zp(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nc,r[o])}function kp(i){switch(i){case 5126:return Mp;case 35664:return bp;case 35665:return Sp;case 35666:return Ep;case 35674:return wp;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Ip;case 36294:return Up;case 36295:return Dp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}var ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vp(e.type)}},va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}},Ma=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ia=/(\w+)(\])?(\[|\.)?/g;function Ml(i,t){i.seq.push(t),i.map[t.id]=t}function Hp(i,t,e){let n=i.name,s=n.length;for(ia.lastIndex=0;;){let r=ia.exec(n),o=ia.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ml(e,c===void 0?new ya(a,i,t):new va(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Ma(a),Ml(e,p)),e=p}}}var Ri=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vp=37297,Gp=0;function Wp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Xp(i){let t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(i),n;switch(t===e?n="":t===qs&&e===Xs?n="LinearDisplayP3ToLinearSRGB":t===Xs&&e===qs&&(n="LinearSRGBToLinearDisplayP3"),i){case yn:case mr:return[n,"LinearTransferOETF"];case pe:case Wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wp(i.getShaderSource(t),o)}else return s}function qp(i,t){let e=Xp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yp(i,t){let e;switch(t){case Kc:e="Linear";break;case jc:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case th:e="ACESFilmic";break;case nh:e="AgX";break;case eh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function Jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ti).join(`
`)}function $p(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ti(i){return i!==""}function El(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(i){return i.replace(jp,tm)}var Qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tm(i,t){let e=Xt[t];if(e===void 0){let n=Qp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ba(e)}var em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(i){return i.replace(em,nm)}function nm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Al(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function sm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Li&&(t="ENVMAP_MODE_REFRACTION"),t}function am(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bl:t="ENVMAP_BLENDING_MULTIPLY";break;case Jc:t="ENVMAP_BLENDING_MIX";break;case $c:t="ENVMAP_BLENDING_ADD";break}return t}function om(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=im(e),c=sm(e),h=rm(e),p=am(e),d=om(e),u=e.isWebGL2?"":Zp(e),g=Jp(e),_=$p(r),m=s.createProgram(),f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ti).join(`
`),f.length>0&&(f+=`
`),v=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ti).join(`
`),v.length>0&&(v+=`
`)):(f=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),v=[u,Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,qp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),o=ba(o),o=El(o,e),o=wl(o,e),a=ba(a),a=El(a,e),a=wl(a,e),o=Tl(o),a=Tl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=x+f+o,A=x+v+a,T=bl(s,s.VERTEX_SHADER,E),C=bl(s,s.FRAGMENT_SHADER,A);s.attachShader(m,T),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function j(O){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(C).trim(),H=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,C);else{let W=Sl(s,T,"vertex"),P=Sl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+W+`
`+P)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||U==="")&&(q=!1);q&&(O.diagnostics={runnable:H,programLog:K,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:v}})}s.deleteShader(T),s.deleteShader(C),b=new Ri(s,m),w=Kp(s,m)}let b;this.getUniforms=function(){return b===void 0&&j(this),b};let w;this.getAttributes=function(){return w===void 0&&j(this),w};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,Vp)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var cm=0,Sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ea(t),e.set(t,n)),n}},Ea=class{constructor(t){this.id=cm++,this.code=t,this.usedTimes=0}};function hm(i,t,e,n,s,r,o){let a=new ss,l=new Sa,c=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,w,V,O,K){let L=O.fog,U=K.geometry,H=b.isMeshStandardMaterial?O.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),W=q&&q.mapping===pr?q.image.height:null,P=g[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let N=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,X=N!==void 0?N.length:0,$=0;U.morphAttributes.position!==void 0&&($=1),U.morphAttributes.normal!==void 0&&($=2),U.morphAttributes.color!==void 0&&($=3);let z,tt,lt,_t;if(P){let fe=an[P];z=fe.vertexShader,tt=fe.fragmentShader}else z=b.vertexShader,tt=b.fragmentShader,l.update(b),lt=l.getVertexShaderID(b),_t=l.getFragmentShaderID(b);let vt=i.getRenderTarget(),It=K.isInstancedMesh===!0,Pt=K.isBatchedMesh===!0,Ct=!!b.map,Nt=!!b.matcap,G=!!q,$t=!!b.aoMap,gt=!!b.lightMap,St=!!b.bumpMap,mt=!!b.normalMap,Qt=!!b.displacementMap,Et=!!b.emissiveMap,M=!!b.metalnessMap,y=!!b.roughnessMap,k=b.anisotropy>0,nt=b.clearcoat>0,it=b.iridescence>0,st=b.sheen>0,Mt=b.transmission>0,dt=k&&!!b.anisotropyMap,pt=nt&&!!b.clearcoatMap,bt=nt&&!!b.clearcoatNormalMap,Ut=nt&&!!b.clearcoatRoughnessMap,Q=it&&!!b.iridescenceMap,Ft=it&&!!b.iridescenceThicknessMap,R=st&&!!b.sheenColorMap,rt=st&&!!b.sheenRoughnessMap,ut=!!b.specularMap,at=!!b.specularColorMap,Tt=!!b.specularIntensityMap,Ht=Mt&&!!b.transmissionMap,Gt=Mt&&!!b.thicknessMap,Bt=!!b.gradientMap,ct=!!b.alphaMap,I=b.alphaTest>0,ot=!!b.alphaHash,ht=!!b.extensions,Lt=!!U.attributes.uv1,At=!!U.attributes.uv2,Kt=!!U.attributes.uv3,jt=Un;return b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:h,shaderID:P,shaderType:b.type,shaderName:b.name,vertexShader:z,fragmentShader:tt,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:_t,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Pt,instancing:It,instancingColor:It&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:yn,map:Ct,matcap:Nt,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:W,aoMap:$t,lightMap:gt,bumpMap:St,normalMap:mt,displacementMap:d&&Qt,emissiveMap:Et,normalMapObjectSpace:mt&&b.normalMapType===ph,normalMapTangentSpace:mt&&b.normalMapType===Zl,metalnessMap:M,roughnessMap:y,anisotropy:k,anisotropyMap:dt,clearcoat:nt,clearcoatMap:pt,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ut,iridescence:it,iridescenceMap:Q,iridescenceThicknessMap:Ft,sheen:st,sheenColorMap:R,sheenRoughnessMap:rt,specularMap:ut,specularColorMap:at,specularIntensityMap:Tt,transmission:Mt,transmissionMap:Ht,thicknessMap:Gt,gradientMap:Bt,opaque:b.transparent===!1&&b.blending===Ai,alphaMap:ct,alphaTest:I,alphaHash:ot,combine:b.combine,mapUv:Ct&&_(b.map.channel),aoMapUv:$t&&_(b.aoMap.channel),lightMapUv:gt&&_(b.lightMap.channel),bumpMapUv:St&&_(b.bumpMap.channel),normalMapUv:mt&&_(b.normalMap.channel),displacementMapUv:Qt&&_(b.displacementMap.channel),emissiveMapUv:Et&&_(b.emissiveMap.channel),metalnessMapUv:M&&_(b.metalnessMap.channel),roughnessMapUv:y&&_(b.roughnessMap.channel),anisotropyMapUv:dt&&_(b.anisotropyMap.channel),clearcoatMapUv:pt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&_(b.sheenRoughnessMap.channel),specularMapUv:ut&&_(b.specularMap.channel),specularColorMapUv:at&&_(b.specularColorMap.channel),specularIntensityMapUv:Tt&&_(b.specularIntensityMap.channel),transmissionMapUv:Ht&&_(b.transmissionMap.channel),thicknessMapUv:Gt&&_(b.thicknessMap.channel),alphaMapUv:ct&&_(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(mt||k),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:At,vertexUv3s:Kt,pointsUvs:K.isPoints===!0&&!!U.attributes.uv&&(Ct||ct),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ae,flipSided:b.side===Ce,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ht&&b.extensions.derivatives===!0,extensionFragDepth:ht&&b.extensions.fragDepth===!0,extensionDrawBuffers:ht&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let V in b.defines)w.push(V),w.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(v(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function v(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function E(b){let w=g[b.type],V;if(w){let O=an[w];V=jh.clone(O.uniforms)}else V=b.uniforms;return V}function A(b,w){let V;for(let O=0,K=c.length;O<K;O++){let L=c[O];if(L.cacheKey===w){V=L,++V.usedTimes;break}}return V===void 0&&(V=new lm(i,w,b,r),c.push(V)),V}function T(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:j}}function um(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function dm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,d,u,g,_,m){let f=i[t];return f===void 0?(f={id:p.id,object:p,geometry:d,material:u,groupOrder:g,renderOrder:p.renderOrder,z:_,group:m},i[t]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=u,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=_,f.group=m),t++,f}function a(p,d,u,g,_,m){let f=o(p,d,u,g,_,m);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):e.push(f)}function l(p,d,u,g,_,m){let f=o(p,d,u,g,_,m);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):e.unshift(f)}function c(p,d){e.length>1&&e.sort(p||dm),n.length>1&&n.sort(d||Cl),s.length>1&&s.sort(d||Cl)}function h(){for(let p=t,d=i.length;p<d;p++){let u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Rl,i.set(n,[o])):s>=r.length?(o=new Rl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function mm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gm=0;function _m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xm(i,t){let e=new pm,n=mm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new me,a=new me;function l(h,p){let d=0,u=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,f=0,v=0,x=0,E=0,A=0,T=0,C=0,j=0,b=0;h.sort(_m);let w=p===!0?Math.PI:1;for(let O=0,K=h.length;O<K;O++){let L=h[O],U=L.color,H=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*H*w,u+=U.g*H*w,g+=U.b*H*w;else if(L.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(L.sh.coefficients[P],H);b++}else if(L.isDirectionalLight){let P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let N=L.shadow,X=n.get(L);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,s.directionalShadow[_]=X,s.directionalShadowMap[_]=W,s.directionalShadowMatrix[_]=L.shadow.matrix,E++}s.directional[_]=P,_++}else if(L.isSpotLight){let P=e.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy(U).multiplyScalar(H*w),P.distance=q,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,s.spot[f]=P;let N=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,N.updateMatrices(L),L.castShadow&&j++),s.spotLightMatrix[f]=N.matrix,L.castShadow){let X=n.get(L);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,s.spotShadow[f]=X,s.spotShadowMap[f]=W,T++}f++}else if(L.isRectAreaLight){let P=e.get(L);P.color.copy(U).multiplyScalar(H),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=P,v++}else if(L.isPointLight){let P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity*w),P.distance=L.distance,P.decay=L.decay,L.castShadow){let N=L.shadow,X=n.get(L);X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,X.shadowCameraNear=N.camera.near,X.shadowCameraFar=N.camera.far,s.pointShadow[m]=X,s.pointShadowMap[m]=W,s.pointShadowMatrix[m]=L.shadow.matrix,A++}s.point[m]=P,m++}else if(L.isHemisphereLight){let P=e.get(L);P.skyColor.copy(L.color).multiplyScalar(H*w),P.groundColor.copy(L.groundColor).multiplyScalar(H*w),s.hemi[x]=P,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=g;let V=s.hash;(V.directionalLength!==_||V.pointLength!==m||V.spotLength!==f||V.rectAreaLength!==v||V.hemiLength!==x||V.numDirectionalShadows!==E||V.numPointShadows!==A||V.numSpotShadows!==T||V.numSpotMaps!==C||V.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+C-j,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=b,V.directionalLength=_,V.pointLength=m,V.spotLength=f,V.rectAreaLength=v,V.hemiLength=x,V.numDirectionalShadows=E,V.numPointShadows=A,V.numSpotShadows=T,V.numSpotMaps=C,V.numLightProbes=b,s.version=gm++)}function c(h,p){let d=0,u=0,g=0,_=0,m=0,f=p.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let E=h[v];if(E.isDirectionalLight){let A=s.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),d++}else if(E.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let A=s.point[u];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),u++}else if(E.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Pl(i,t){let e=new xm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(p){n.push(p)}function a(p){s.push(p)}function l(p){e.setup(n,p)}function c(p){e.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ym(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Pl(i,t),e.set(r,[l])):o>=a.length?(l=new Pl(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var wa=class extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bm(i,t,e){let n=new as,s=new kt,r=new kt,o=new Me,a=new wa({depthPacking:fh}),l=new Ta,c={},h=e.maxTextureSize,p={[ln]:Ce,[Ce]:ln,[Ae]:Ae},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:vm,fragmentShader:Mm}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let f=this.type;this.render=function(T,C,j){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),O=i.state;O.setBlending(In),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let K=f!==_n&&this.type===_n,L=f===_n&&this.type!==_n;for(let U=0,H=T.length;U<H;U++){let q=T[U],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let P=W.getFrameExtents();if(s.multiply(P),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/P.x),s.x=r.x*P.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/P.y),s.y=r.y*P.y,W.mapSize.y=r.y)),W.map===null||K===!0||L===!0){let X=this.type!==_n?{minFilter:Ue,magFilter:Ue}:{};W.map!==null&&W.map.dispose(),W.map=new vn(s.x,s.y,X),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let N=W.getViewportCount();for(let X=0;X<N;X++){let $=W.getViewport(X);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(o),W.updateMatrices(q,X),n=W.getFrustum(),E(C,j,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===_n&&v(W,j),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,V)};function v(T,C){let j=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,j,d,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,j,u,_,null)}function x(T,C,j,b){let w=null,V=j.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)w=V;else if(w=j.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=w.uuid,K=C.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let U=L[K];U===void 0&&(U=w.clone(),L[K]=U,C.addEventListener("dispose",A)),w=U}if(w.visible=C.visible,w.wireframe=C.wireframe,b===_n?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:p[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=i.properties.get(w);O.light=j}return w}function E(T,C,j,b,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===_n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld);let K=t.update(T),L=T.material;if(Array.isArray(L)){let U=K.groups;for(let H=0,q=U.length;H<q;H++){let W=U[H],P=L[W.materialIndex];if(P&&P.visible){let N=x(T,P,b,w);T.onBeforeShadow(i,T,C,j,K,N,W),i.renderBufferDirect(j,null,K,N,T,W),T.onAfterShadow(i,T,C,j,K,N,W)}}}else if(L.visible){let U=x(T,L,b,w);T.onBeforeShadow(i,T,C,j,K,U,null),i.renderBufferDirect(j,null,K,U,T,null),T.onAfterShadow(i,T,C,j,K,U,null)}}let O=T.children;for(let K=0,L=O.length;K<L;K++)E(O[K],C,j,b,w)}function A(T){T.target.removeEventListener("dispose",A);for(let j in c){let b=c[j],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function Sm(i,t,e){let n=e.isWebGL2;function s(){let I=!1,ot=new Me,ht=null,Lt=new Me(0,0,0,0);return{setMask:function(At){ht!==At&&!I&&(i.colorMask(At,At,At,At),ht=At)},setLocked:function(At){I=At},setClear:function(At,Kt,jt,ce,fe){fe===!0&&(At*=ce,Kt*=ce,jt*=ce),ot.set(At,Kt,jt,ce),Lt.equals(ot)===!1&&(i.clearColor(At,Kt,jt,ce),Lt.copy(ot))},reset:function(){I=!1,ht=null,Lt.set(-1,0,0,0)}}}function r(){let I=!1,ot=null,ht=null,Lt=null;return{setTest:function(At){At?Pt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(At){ot!==At&&!I&&(i.depthMask(At),ot=At)},setFunc:function(At){if(ht!==At){switch(At){case Vc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Wc:i.depthFunc(i.LESS);break;case $n:i.depthFunc(i.LEQUAL);break;case Xc:i.depthFunc(i.EQUAL);break;case qc:i.depthFunc(i.GEQUAL);break;case Yc:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=At}},setLocked:function(At){I=At},setClear:function(At){Lt!==At&&(i.clearDepth(At),Lt=At)},reset:function(){I=!1,ot=null,ht=null,Lt=null}}}function o(){let I=!1,ot=null,ht=null,Lt=null,At=null,Kt=null,jt=null,ce=null,fe=null;return{setTest:function(te){I||(te?Pt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(te){ot!==te&&!I&&(i.stencilMask(te),ot=te)},setFunc:function(te,be,ke){(ht!==te||Lt!==be||At!==ke)&&(i.stencilFunc(te,be,ke),ht=te,Lt=be,At=ke)},setOp:function(te,be,ke){(Kt!==te||jt!==be||ce!==ke)&&(i.stencilOp(te,be,ke),Kt=te,jt=be,ce=ke)},setLocked:function(te){I=te},setClear:function(te){fe!==te&&(i.clearStencil(te),fe=te)},reset:function(){I=!1,ot=null,ht=null,Lt=null,At=null,Kt=null,jt=null,ce=null,fe=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,p=new WeakMap,d={},u={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,E=null,A=null,T=null,C=null,j=null,b=new qt(0,0,0),w=0,V=!1,O=null,K=null,L=null,U=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,P=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(N)[1]),W=P>=1):N.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),W=P>=2);let X=null,$={},z=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),lt=new Me().fromArray(z),_t=new Me().fromArray(tt);function vt(I,ot,ht,Lt){let At=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(I,Kt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<ht;jt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ot,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ot+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Kt}let It={};It[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(i.DEPTH_TEST),l.setFunc($n),Et(!1),M(lo),Pt(i.CULL_FACE),mt(In);function Pt(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Ct(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Nt(I,ot){return u[I]!==ot?(i.bindFramebuffer(I,ot),u[I]=ot,n&&(I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot)),!0):!1}function G(I,ot){let ht=_,Lt=!1;if(I)if(ht=g.get(ot),ht===void 0&&(ht=[],g.set(ot,ht)),I.isWebGLMultipleRenderTargets){let At=I.texture;if(ht.length!==At.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,jt=At.length;Kt<jt;Kt++)ht[Kt]=i.COLOR_ATTACHMENT0+Kt;ht.length=At.length,Lt=!0}}else ht[0]!==i.COLOR_ATTACHMENT0&&(ht[0]=i.COLOR_ATTACHMENT0,Lt=!0);else ht[0]!==i.BACK&&(ht[0]=i.BACK,Lt=!0);Lt&&(e.isWebGL2?i.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function $t(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let gt={[Xn]:i.FUNC_ADD,[Ac]:i.FUNC_SUBTRACT,[Cc]:i.FUNC_REVERSE_SUBTRACT};if(n)gt[fo]=i.MIN,gt[po]=i.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(gt[fo]=I.MIN_EXT,gt[po]=I.MAX_EXT)}let St={[Rc]:i.ZERO,[Pc]:i.ONE,[Lc]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[Fc]:i.SRC_ALPHA_SATURATE,[Nc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Ic]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Dc]:i.ONE_MINUS_DST_ALPHA,[Bc]:i.CONSTANT_COLOR,[zc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[Hc]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(I,ot,ht,Lt,At,Kt,jt,ce,fe,te){if(I===In){f===!0&&(Ct(i.BLEND),f=!1);return}if(f===!1&&(Pt(i.BLEND),f=!0),I!==Tc){if(I!==v||te!==V){if((x!==Xn||T!==Xn)&&(i.blendEquation(i.FUNC_ADD),x=Xn,T=Xn),te)switch(I){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.ONE,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,A=null,C=null,j=null,b.set(0,0,0),w=0,v=I,V=te}return}At=At||ot,Kt=Kt||ht,jt=jt||Lt,(ot!==x||At!==T)&&(i.blendEquationSeparate(gt[ot],gt[At]),x=ot,T=At),(ht!==E||Lt!==A||Kt!==C||jt!==j)&&(i.blendFuncSeparate(St[ht],St[Lt],St[Kt],St[jt]),E=ht,A=Lt,C=Kt,j=jt),(ce.equals(b)===!1||fe!==w)&&(i.blendColor(ce.r,ce.g,ce.b,fe),b.copy(ce),w=fe),v=I,V=!1}function Qt(I,ot){I.side===Ae?Ct(i.CULL_FACE):Pt(i.CULL_FACE);let ht=I.side===Ce;ot&&(ht=!ht),Et(ht),I.blending===Ai&&I.transparent===!1?mt(In):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Lt=I.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),k(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(I){O!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),O=I)}function M(I){I!==Sc?(Pt(i.CULL_FACE),I!==K&&(I===lo?i.cullFace(i.BACK):I===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),K=I}function y(I){I!==L&&(W&&i.lineWidth(I),L=I)}function k(I,ot,ht){I?(Pt(i.POLYGON_OFFSET_FILL),(U!==ot||H!==ht)&&(i.polygonOffset(ot,ht),U=ot,H=ht)):Ct(i.POLYGON_OFFSET_FILL)}function nt(I){I?Pt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function it(I){I===void 0&&(I=i.TEXTURE0+q-1),X!==I&&(i.activeTexture(I),X=I)}function st(I,ot,ht){ht===void 0&&(X===null?ht=i.TEXTURE0+q-1:ht=X);let Lt=$[ht];Lt===void 0&&(Lt={type:void 0,texture:void 0},$[ht]=Lt),(Lt.type!==I||Lt.texture!==ot)&&(X!==ht&&(i.activeTexture(ht),X=ht),i.bindTexture(I,ot||It[I]),Lt.type=I,Lt.texture=ot)}function Mt(){let I=$[X];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(I){lt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function Ht(I){_t.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function Gt(I,ot){let ht=p.get(ot);ht===void 0&&(ht=new WeakMap,p.set(ot,ht));let Lt=ht.get(I);Lt===void 0&&(Lt=i.getUniformBlockIndex(ot,I.name),ht.set(I,Lt))}function Bt(I,ot){let Lt=p.get(ot).get(I);h.get(ot)!==Lt&&(i.uniformBlockBinding(ot,Lt,I.__bindingPointIndex),h.set(ot,Lt))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},X=null,$={},u={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,E=null,A=null,T=null,C=null,j=null,b=new qt(0,0,0),w=0,V=!1,O=null,K=null,L=null,U=null,H=null,lt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:Ct,bindFramebuffer:Nt,drawBuffers:G,useProgram:$t,setBlending:mt,setMaterial:Qt,setFlipSided:Et,setCullFace:M,setLineWidth:y,setPolygonOffset:k,setScissorTest:nt,activeTexture:it,bindTexture:st,unbindTexture:Mt,compressedTexImage2D:dt,compressedTexImage3D:pt,texImage2D:ut,texImage3D:at,updateUBOMapping:Gt,uniformBlockBinding:Bt,texStorage2D:R,texStorage3D:rt,texSubImage2D:bt,texSubImage3D:Ut,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ft,scissor:Tt,viewport:Ht,reset:ct}}function Em(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,p,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return u?new OffscreenCanvas(M,y):Js("canvas")}function _(M,y,k,nt){let it=1;if((M.width>nt||M.height>nt)&&(it=nt/Math.max(M.width,M.height)),it<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let st=y?Zs:Math.floor,Mt=st(it*M.width),dt=st(it*M.height);p===void 0&&(p=g(Mt,dt));let pt=k?g(Mt,dt):p;return pt.width=Mt,pt.height=dt,pt.getContext("2d").drawImage(M,0,0,Mt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Mt+"x"+dt+")."),pt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return fa(M.width)&&fa(M.height)}function f(M){return a?!1:M.wrapS!==tn||M.wrapT!==tn||M.minFilter!==Ue&&M.minFilter!==Xe}function v(M,y){return M.generateMipmaps&&y&&M.minFilter!==Ue&&M.minFilter!==Xe}function x(M){i.generateMipmap(M)}function E(M,y,k,nt,it=!1){if(a===!1)return y;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let st=y;if(y===i.RED&&(k===i.FLOAT&&(st=i.R32F),k===i.HALF_FLOAT&&(st=i.R16F),k===i.UNSIGNED_BYTE&&(st=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(st=i.R8UI),k===i.UNSIGNED_SHORT&&(st=i.R16UI),k===i.UNSIGNED_INT&&(st=i.R32UI),k===i.BYTE&&(st=i.R8I),k===i.SHORT&&(st=i.R16I),k===i.INT&&(st=i.R32I)),y===i.RG&&(k===i.FLOAT&&(st=i.RG32F),k===i.HALF_FLOAT&&(st=i.RG16F),k===i.UNSIGNED_BYTE&&(st=i.RG8)),y===i.RGBA){let Mt=it?Ws:ee.getTransfer(nt);k===i.FLOAT&&(st=i.RGBA32F),k===i.HALF_FLOAT&&(st=i.RGBA16F),k===i.UNSIGNED_BYTE&&(st=Mt===se?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function A(M,y,k){return v(M,k)===!0||M.isFramebufferTexture&&M.minFilter!==Ue&&M.minFilter!==Xe?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function T(M){return M===Ue||M===mo||M===Rr?i.NEAREST:i.LINEAR}function C(M){let y=M.target;y.removeEventListener("dispose",C),b(y),y.isVideoTexture&&h.delete(y)}function j(M){let y=M.target;y.removeEventListener("dispose",j),V(y)}function b(M){let y=n.get(M);if(y.__webglInit===void 0)return;let k=M.source,nt=d.get(k);if(nt){let it=nt[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(M),Object.keys(nt).length===0&&d.delete(k)}n.remove(M)}function w(M){let y=n.get(M);i.deleteTexture(y.__webglTexture);let k=M.source,nt=d.get(k);delete nt[y.__cacheKey],o.memory.textures--}function V(M){let y=M.texture,k=n.get(M),nt=n.get(y);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(k.__webglFramebuffer[it]))for(let st=0;st<k.__webglFramebuffer[it].length;st++)i.deleteFramebuffer(k.__webglFramebuffer[it][st]);else i.deleteFramebuffer(k.__webglFramebuffer[it]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[it])}else{if(Array.isArray(k.__webglFramebuffer))for(let it=0;it<k.__webglFramebuffer.length;it++)i.deleteFramebuffer(k.__webglFramebuffer[it]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let it=0;it<k.__webglColorRenderbuffer.length;it++)k.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[it]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let it=0,st=y.length;it<st;it++){let Mt=n.get(y[it]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(y[it])}n.remove(y),n.remove(M)}let O=0;function K(){O=0}function L(){let M=O;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),O+=1,M}function U(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function H(M,y){let k=n.get(M);if(M.isVideoTexture&&Qt(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){let nt=M.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(k,M,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function q(M,y){let k=n.get(M);if(M.version>0&&k.__version!==M.version){lt(k,M,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function W(M,y){let k=n.get(M);if(M.version>0&&k.__version!==M.version){lt(k,M,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function P(M,y){let k=n.get(M);if(M.version>0&&k.__version!==M.version){_t(k,M,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let N={[ha]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},X={[Ue]:i.NEAREST,[mo]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ih]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},$={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[Jl]:i.LEQUAL,[_h]:i.EQUAL,[vh]:i.GEQUAL,[xh]:i.GREATER,[yh]:i.NOTEQUAL};function z(M,y,k){if(k?(i.texParameteri(M,i.TEXTURE_WRAP_S,N[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,N[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,N[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,X[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,X[y.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==tn||y.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Ue&&y.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ue||y.minFilter!==Rr&&y.minFilter!==es||y.type===Ln&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===ns&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(M,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function tt(M,y){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",C));let nt=y.source,it=d.get(nt);it===void 0&&(it={},d.set(nt,it));let st=U(y);if(st!==M.__cacheKey){it[st]===void 0&&(it[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[st].usedTimes++;let Mt=it[M.__cacheKey];Mt!==void 0&&(it[M.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(y)),M.__cacheKey=st,M.__webglTexture=it[st].texture}return k}function lt(M,y,k){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);let it=tt(M,y),st=y.source;e.bindTexture(nt,M.__webglTexture,i.TEXTURE0+k);let Mt=n.get(st);if(st.version!==Mt.__version||it===!0){e.activeTexture(i.TEXTURE0+k);let dt=ee.getPrimaries(ee.workingColorSpace),pt=y.colorSpace===qe?null:ee.getPrimaries(y.colorSpace),bt=y.colorSpace===qe||dt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ut=f(y)&&m(y.image)===!1,Q=_(y.image,Ut,!1,s.maxTextureSize);Q=Et(y,Q);let Ft=m(Q)||a,R=r.convert(y.format,y.colorSpace),rt=r.convert(y.type),ut=E(y.internalFormat,R,rt,y.colorSpace,y.isVideoTexture);z(nt,y,Ft);let at,Tt=y.mipmaps,Ht=a&&y.isVideoTexture!==!0&&ut!==ql,Gt=Mt.__version===void 0||it===!0,Bt=A(y,Q,Ft);if(y.isDepthTexture)ut=i.DEPTH_COMPONENT,a?y.type===Ln?ut=i.DEPTH_COMPONENT32F:y.type===Pn?ut=i.DEPTH_COMPONENT24:y.type===Yn?ut=i.DEPTH24_STENCIL8:ut=i.DEPTH_COMPONENT16:y.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Zn&&ut===i.DEPTH_COMPONENT&&y.type!==Ga&&y.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Pn,rt=r.convert(y.type)),y.format===Ii&&ut===i.DEPTH_COMPONENT&&(ut=i.DEPTH_STENCIL,y.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Yn,rt=r.convert(y.type))),Gt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,ut,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ut,Q.width,Q.height,0,R,rt,null));else if(y.isDataTexture)if(Tt.length>0&&Ft){Ht&&Gt&&e.texStorage2D(i.TEXTURE_2D,Bt,ut,Tt[0].width,Tt[0].height);for(let ct=0,I=Tt.length;ct<I;ct++)at=Tt[ct],Ht?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,at.width,at.height,R,rt,at.data):e.texImage2D(i.TEXTURE_2D,ct,ut,at.width,at.height,0,R,rt,at.data);y.generateMipmaps=!1}else Ht?(Gt&&e.texStorage2D(i.TEXTURE_2D,Bt,ut,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,R,rt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,ut,Q.width,Q.height,0,R,rt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,ut,Tt[0].width,Tt[0].height,Q.depth);for(let ct=0,I=Tt.length;ct<I;ct++)at=Tt[ct],y.format!==en?R!==null?Ht?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,at.width,at.height,Q.depth,R,at.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,ut,at.width,at.height,Q.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,at.width,at.height,Q.depth,R,rt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,ut,at.width,at.height,Q.depth,0,R,rt,at.data)}else{Ht&&Gt&&e.texStorage2D(i.TEXTURE_2D,Bt,ut,Tt[0].width,Tt[0].height);for(let ct=0,I=Tt.length;ct<I;ct++)at=Tt[ct],y.format!==en?R!==null?Ht?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,at.width,at.height,R,at.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,ut,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,at.width,at.height,R,rt,at.data):e.texImage2D(i.TEXTURE_2D,ct,ut,at.width,at.height,0,R,rt,at.data)}else if(y.isDataArrayTexture)Ht?(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,ut,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,R,rt,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,Q.width,Q.height,Q.depth,0,R,rt,Q.data);else if(y.isData3DTexture)Ht?(Gt&&e.texStorage3D(i.TEXTURE_3D,Bt,ut,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,R,rt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ut,Q.width,Q.height,Q.depth,0,R,rt,Q.data);else if(y.isFramebufferTexture){if(Gt)if(Ht)e.texStorage2D(i.TEXTURE_2D,Bt,ut,Q.width,Q.height);else{let ct=Q.width,I=Q.height;for(let ot=0;ot<Bt;ot++)e.texImage2D(i.TEXTURE_2D,ot,ut,ct,I,0,R,rt,null),ct>>=1,I>>=1}}else if(Tt.length>0&&Ft){Ht&&Gt&&e.texStorage2D(i.TEXTURE_2D,Bt,ut,Tt[0].width,Tt[0].height);for(let ct=0,I=Tt.length;ct<I;ct++)at=Tt[ct],Ht?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,R,rt,at):e.texImage2D(i.TEXTURE_2D,ct,ut,R,rt,at);y.generateMipmaps=!1}else Ht?(Gt&&e.texStorage2D(i.TEXTURE_2D,Bt,ut,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,R,rt,Q)):e.texImage2D(i.TEXTURE_2D,0,ut,R,rt,Q);v(y,Ft)&&x(nt),Mt.__version=st.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function _t(M,y,k){if(y.image.length!==6)return;let nt=tt(M,y),it=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+k);let st=n.get(it);if(it.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);let Mt=ee.getPrimaries(ee.workingColorSpace),dt=y.colorSpace===qe?null:ee.getPrimaries(y.colorSpace),pt=y.colorSpace===qe||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let bt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let ct=0;ct<6;ct++)!bt&&!Ut?Q[ct]=_(y.image[ct],!1,!0,s.maxCubemapSize):Q[ct]=Ut?y.image[ct].image:y.image[ct],Q[ct]=Et(y,Q[ct]);let Ft=Q[0],R=m(Ft)||a,rt=r.convert(y.format,y.colorSpace),ut=r.convert(y.type),at=E(y.internalFormat,rt,ut,y.colorSpace),Tt=a&&y.isVideoTexture!==!0,Ht=st.__version===void 0||nt===!0,Gt=A(y,Ft,R);z(i.TEXTURE_CUBE_MAP,y,R);let Bt;if(bt){Tt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,at,Ft.width,Ft.height);for(let ct=0;ct<6;ct++){Bt=Q[ct].mipmaps;for(let I=0;I<Bt.length;I++){let ot=Bt[I];y.format!==en?rt!==null?Tt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,0,0,ot.width,ot.height,rt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,at,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,0,0,ot.width,ot.height,rt,ut,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,at,ot.width,ot.height,0,rt,ut,ot.data)}}}else{Bt=y.mipmaps,Tt&&Ht&&(Bt.length>0&&Gt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,at,Q[0].width,Q[0].height));for(let ct=0;ct<6;ct++)if(Ut){Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Q[ct].width,Q[ct].height,rt,ut,Q[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,at,Q[ct].width,Q[ct].height,0,rt,ut,Q[ct].data);for(let I=0;I<Bt.length;I++){let ht=Bt[I].image[ct].image;Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,0,0,ht.width,ht.height,rt,ut,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,at,ht.width,ht.height,0,rt,ut,ht.data)}}else{Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,rt,ut,Q[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,at,rt,ut,Q[ct]);for(let I=0;I<Bt.length;I++){let ot=Bt[I];Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,0,0,rt,ut,ot.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,at,rt,ut,ot.image[ct])}}}v(y,R)&&x(i.TEXTURE_CUBE_MAP),st.__version=it.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function vt(M,y,k,nt,it,st){let Mt=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),pt=E(k.internalFormat,Mt,dt,k.colorSpace);if(!n.get(y).__hasExternalTextures){let Ut=Math.max(1,y.width>>st),Q=Math.max(1,y.height>>st);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,st,pt,Ut,Q,y.depth,0,Mt,dt,null):e.texImage2D(it,st,pt,Ut,Q,0,Mt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),mt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,n.get(k).__webglTexture,0,St(y)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,n.get(k).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(M,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let nt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||mt(y)){let it=y.depthTexture;it&&it.isDepthTexture&&(it.type===Ln?nt=i.DEPTH_COMPONENT32F:it.type===Pn&&(nt=i.DEPTH_COMPONENT24));let st=St(y);mt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,nt,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,nt,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let nt=St(y);k&&mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,y.width,y.height):mt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let nt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let it=0;it<nt.length;it++){let st=nt[it],Mt=r.convert(st.format,st.colorSpace),dt=r.convert(st.type),pt=E(st.internalFormat,Mt,dt,st.colorSpace),bt=St(y);k&&mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,pt,y.width,y.height):mt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let nt=n.get(y.depthTexture).__webglTexture,it=St(y);if(y.depthTexture.format===Zn)mt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Ii)mt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ct(M){let y=n.get(M),k=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pt(y.__webglFramebuffer,M)}else if(k){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=i.createRenderbuffer(),It(y.__webglDepthbuffer[nt],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),It(y.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(M,y,k){let nt=n.get(M);y!==void 0&&vt(nt.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ct(M)}function G(M){let y=M.texture,k=n.get(M),nt=n.get(y);M.addEventListener("dispose",j),M.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,o.memory.textures++);let it=M.isWebGLCubeRenderTarget===!0,st=M.isWebGLMultipleRenderTargets===!0,Mt=m(M)||a;if(it){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[dt][pt]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let dt=M.texture;for(let pt=0,bt=dt.length;pt<bt;pt++){let Ut=n.get(dt[pt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&mt(M)===!1){let dt=st?y:[y];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){let bt=dt[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);let Ut=r.convert(bt.format,bt.colorSpace),Q=r.convert(bt.type),Ft=E(bt.internalFormat,Ut,Q,bt.colorSpace,M.isXRRenderTarget===!0),R=St(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,Ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),It(k.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),z(i.TEXTURE_CUBE_MAP,y,Mt);for(let dt=0;dt<6;dt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)vt(k.__webglFramebuffer[dt][pt],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else vt(k.__webglFramebuffer[dt],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(y,Mt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let dt=M.texture;for(let pt=0,bt=dt.length;pt<bt;pt++){let Ut=dt[pt],Q=n.get(Ut);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),z(i.TEXTURE_2D,Ut,Mt),vt(k.__webglFramebuffer,M,Ut,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),v(Ut,Mt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?dt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,nt.__webglTexture),z(dt,y,Mt),a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)vt(k.__webglFramebuffer[pt],M,y,i.COLOR_ATTACHMENT0,dt,pt);else vt(k.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,dt,0);v(y,Mt)&&x(dt),e.unbindTexture()}M.depthBuffer&&Ct(M)}function $t(M){let y=m(M)||a,k=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let nt=0,it=k.length;nt<it;nt++){let st=k[nt];if(v(st,y)){let Mt=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(st).__webglTexture;e.bindTexture(Mt,dt),x(Mt),e.unbindTexture()}}}function gt(M){if(a&&M.samples>0&&mt(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],k=M.width,nt=M.height,it=i.COLOR_BUFFER_BIT,st=[],Mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(M),pt=M.isWebGLMultipleRenderTargets===!0;if(pt)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){st.push(i.COLOR_ATTACHMENT0+bt),M.depthBuffer&&st.push(Mt);let Ut=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ut===!1&&(M.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),pt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]),Ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),pt){let Q=n.get(y[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,k,nt,0,0,k,nt,it,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]);let Ut=n.get(y[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function St(M){return Math.min(s.maxSamples,M.samples)}function mt(M){let y=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qt(M){let y=o.render.frame;h.get(M)!==y&&(h.set(M,y),M.update())}function Et(M,y){let k=M.colorSpace,nt=M.format,it=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===da||k!==yn&&k!==qe&&(ee.getTransfer(k)===se?a===!1?t.has("EXT_sRGB")===!0&&nt===en?(M.format=da,M.minFilter=Xe,M.generateMipmaps=!1):y=$s.sRGBToLinear(y):(nt!==en||it!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=P,this.rebindTextures=Nt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=mt}function wm(i,t,e){let n=e.isWebGL2;function s(r,o=qe){let a,l=ee.getTransfer(o);if(r===Dn)return i.UNSIGNED_BYTE;if(r===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===sh)return i.BYTE;if(r===rh)return i.SHORT;if(r===Ga)return i.UNSIGNED_SHORT;if(r===kl)return i.INT;if(r===Pn)return i.UNSIGNED_INT;if(r===Ln)return i.FLOAT;if(r===ns)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ah)return i.ALPHA;if(r===en)return i.RGBA;if(r===oh)return i.LUMINANCE;if(r===lh)return i.LUMINANCE_ALPHA;if(r===Zn)return i.DEPTH_COMPONENT;if(r===Ii)return i.DEPTH_STENCIL;if(r===da)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ch)return i.RED;if(r===Gl)return i.RED_INTEGER;if(r===hh)return i.RG;if(r===Wl)return i.RG_INTEGER;if(r===Xl)return i.RGBA_INTEGER;if(r===Pr||r===Lr||r===Ir||r===Ur)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ur)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===go||r===_o||r===xo||r===yo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_o)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ql)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vo||r===Mo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===vo)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Mo)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bo||r===So||r===Eo||r===wo||r===To||r===Ao||r===Co||r===Ro||r===Po||r===Lo||r===Io||r===Uo||r===Do||r===No)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bo)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===So)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eo)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wo)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===To)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ao)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Co)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ro)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Po)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lo)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Io)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uo)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Do)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===No)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dr||r===Oo||r===Fo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Dr)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uh||r===Bo||r===zo||r===ko)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Dr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Aa=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},on=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tm={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ca=class extends cn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,u=null,g=null,_=e.getContextAttributes(),m=null,f=null,v=[],x=[],E=new kt,A=null,T=new De;T.layers.enable(1),T.viewport=new Me;let C=new De;C.layers.enable(2),C.viewport=new Me;let j=[T,C],b=new Aa;b.layers.enable(1),b.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let tt=v[z];return tt===void 0&&(tt=new ts,v[z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(z){let tt=v[z];return tt===void 0&&(tt=new ts,v[z]=tt),tt.getGripSpace()},this.getHand=function(z){let tt=v[z];return tt===void 0&&(tt=new ts,v[z]=tt),tt.getHandSpace()};function O(z){let tt=x.indexOf(z.inputSource);if(tt===-1)return;let lt=v[tt];lt!==void 0&&(lt.update(z.inputSource,z.frame,c||o),lt.dispatchEvent({type:z.type,data:z.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",L);for(let z=0;z<v.length;z++){let tt=x[z];tt!==null&&(x[z]=null,v[z].disconnect(tt))}w=null,V=null,t.setRenderTarget(m),u=null,d=null,p=null,s=null,f=null,$.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),f=new vn(u.framebufferWidth,u.framebufferHeight,{format:en,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,lt=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?Ii:Zn,lt=_.stencil?Yn:Pn);let vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};p=new XRWebGLBinding(s,e),d=p.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new vn(d.textureWidth,d.textureHeight,{format:en,type:Dn,depthTexture:new ar(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let It=t.properties.get(f);It.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(z){for(let tt=0;tt<z.removed.length;tt++){let lt=z.removed[tt],_t=x.indexOf(lt);_t>=0&&(x[_t]=null,v[_t].disconnect(lt))}for(let tt=0;tt<z.added.length;tt++){let lt=z.added[tt],_t=x.indexOf(lt);if(_t===-1){for(let It=0;It<v.length;It++)if(It>=x.length){x.push(lt),_t=It;break}else if(x[It]===null){x[It]=lt,_t=It;break}if(_t===-1)break}let vt=v[_t];vt&&vt.connect(lt)}}let U=new F,H=new F;function q(z,tt,lt){U.setFromMatrixPosition(tt.matrixWorld),H.setFromMatrixPosition(lt.matrixWorld);let _t=U.distanceTo(H),vt=tt.projectionMatrix.elements,It=lt.projectionMatrix.elements,Pt=vt[14]/(vt[10]-1),Ct=vt[14]/(vt[10]+1),Nt=(vt[9]+1)/vt[5],G=(vt[9]-1)/vt[5],$t=(vt[8]-1)/vt[0],gt=(It[8]+1)/It[0],St=Pt*$t,mt=Pt*gt,Qt=_t/(-$t+gt),Et=Qt*-$t;tt.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Et),z.translateZ(Qt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let M=Pt+Qt,y=Ct+Qt,k=St-Et,nt=mt+(_t-Et),it=Nt*Ct/y*M,st=G*Ct/y*M;z.projectionMatrix.makePerspective(k,nt,it,st,M,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function W(z,tt){tt===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(tt.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;b.near=C.near=T.near=z.near,b.far=C.far=T.far=z.far,(w!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,V=b.far);let tt=z.parent,lt=b.cameras;W(b,tt);for(let _t=0;_t<lt.length;_t++)W(lt[_t],tt);lt.length===2?q(b,T,C):b.projectionMatrix.copy(T.projectionMatrix),P(z,b,tt)};function P(z,tt,lt){lt===null?z.matrix.copy(tt.matrixWorld):(z.matrix.copy(lt.matrixWorld),z.matrix.invert(),z.matrix.multiply(tt.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=is*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=z)};let N=null;function X(z,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let lt=h.views;u!==null&&(t.setRenderTargetFramebuffer(f,u.framebuffer),t.setRenderTarget(f));let _t=!1;lt.length!==b.cameras.length&&(b.cameras.length=0,_t=!0);for(let vt=0;vt<lt.length;vt++){let It=lt[vt],Pt=null;if(u!==null)Pt=u.getViewport(It);else{let Nt=p.getViewSubImage(d,It);Pt=Nt.viewport,vt===0&&(t.setRenderTargetTextures(f,Nt.colorTexture,d.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(f))}let Ct=j[vt];Ct===void 0&&(Ct=new De,Ct.layers.enable(vt),Ct.viewport=new Me,j[vt]=Ct),Ct.matrix.fromArray(It.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(It.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),vt===0&&(b.matrix.copy(Ct.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_t===!0&&b.cameras.push(Ct)}}for(let lt=0;lt<v.length;lt++){let _t=x[lt],vt=v[lt];_t!==null&&vt!==void 0&&vt.update(_t,tt,c||o)}N&&N(z,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let $=new Ql;$.setAnimationLoop(X),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}};function Am(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,jl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cm(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let E=x.program;n.uniformBlockBinding(v,E)}function c(v,x){let E=s[v.id];E===void 0&&(g(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(v,A);let T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let x=p();v.__bindingPointIndex=x;let E=i.createBuffer(),A=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=s[v.id],E=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=E.length;T<C;T++){let j=Array.isArray(E[T])?E[T]:[E[T]];for(let b=0,w=j.length;b<w;b++){let V=j[b];if(u(V,T,b,A)===!0){let O=V.__offset,K=Array.isArray(V.value)?V.value:[V.value],L=0;for(let U=0;U<K.length;U++){let H=K[U],q=_(H);typeof H=="number"||typeof H=="boolean"?(V.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+L,V.__data)):H.isMatrix3?(V.__data[0]=H.elements[0],V.__data[1]=H.elements[1],V.__data[2]=H.elements[2],V.__data[3]=0,V.__data[4]=H.elements[3],V.__data[5]=H.elements[4],V.__data[6]=H.elements[5],V.__data[7]=0,V.__data[8]=H.elements[6],V.__data[9]=H.elements[7],V.__data[10]=H.elements[8],V.__data[11]=0):(H.toArray(V.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,x,E,A){let T=v.value,C=x+"_"+E;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{let j=A[C];if(typeof T=="number"||typeof T=="boolean"){if(j!==T)return A[C]=T,!0}else if(j.equals(T)===!1)return j.copy(T),!0}return!1}function g(v){let x=v.uniforms,E=0,A=16;for(let C=0,j=x.length;C<j;C++){let b=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,V=b.length;w<V;w++){let O=b[w],K=Array.isArray(O.value)?O.value:[O.value];for(let L=0,U=K.length;L<U;L++){let H=K[L],q=_(H),W=E%A;W!==0&&A-W<q.boundary&&(E+=A-W),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=q.storage}}}let T=E%A;return T>0&&(E+=A-T),v.__size=E,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var os=class{constructor(t={}){let{canvas:e=Oh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let u=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let x=this,E=!1,A=0,T=0,C=null,j=-1,b=null,w=new Me,V=new Me,O=null,K=new qt(0),L=0,U=e.width,H=e.height,q=1,W=null,P=null,N=new Me(0,0,U,H),X=new Me(0,0,U,H),$=!1,z=new as,tt=!1,lt=!1,_t=null,vt=new me,It=new kt,Pt=new F,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return C===null?q:1}let G=n;function $t(S,B){for(let Z=0;Z<S.length;Z++){let J=S[Z],Y=e.getContext(J,B);if(Y!==null)return Y}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ot,!1),G===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),G=$t(B,S),G===null)throw $t(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let gt,St,mt,Qt,Et,M,y,k,nt,it,st,Mt,dt,pt,bt,Ut,Q,Ft,R,rt,ut,at,Tt,Ht;function Gt(){gt=new Yf(G),St=new Hf(G,gt,t),gt.init(St),at=new wm(G,gt,St),mt=new Sm(G,gt,St),Qt=new $f(G),Et=new um,M=new Em(G,gt,mt,Et,St,at,Qt),y=new Gf(x),k=new qf(x),nt=new iu(G,St),Tt=new zf(G,gt,nt,St),it=new Zf(G,nt,Qt,Tt),st=new tp(G,it,nt,Qt),R=new Qf(G,St,M),Ut=new Vf(Et),Mt=new hm(x,y,k,gt,St,Tt,Ut),dt=new Am(x,Et),pt=new fm,bt=new ym(gt,St),Ft=new Bf(x,y,k,mt,st,d,l),Q=new bm(x,st,St),Ht=new Cm(G,Qt,St,mt),rt=new kf(G,gt,Qt,St),ut=new Jf(G,gt,Qt,St),Qt.programs=Mt.programs,x.capabilities=St,x.extensions=gt,x.properties=Et,x.renderLists=pt,x.shadowMap=Q,x.state=mt,x.info=Qt}Gt();let Bt=new Ca(x,G);this.xr=Bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let S=gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(U,H,!1))},this.getSize=function(S){return S.set(U,H)},this.setSize=function(S,B,Z=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,H=B,e.width=Math.floor(S*q),e.height=Math.floor(B*q),Z===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(U*q,H*q).floor()},this.setDrawingBufferSize=function(S,B,Z){U=S,H=B,q=Z,e.width=Math.floor(S*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,B,Z,J){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,B,Z,J),mt.viewport(w.copy(N).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(X)},this.setScissor=function(S,B,Z,J){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,B,Z,J),mt.scissor(V.copy(X).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){mt.setScissorTest($=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){P=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(S=!0,B=!0,Z=!0){let J=0;if(S){let Y=!1;if(C!==null){let xt=C.texture.format;Y=xt===Xl||xt===Wl||xt===Gl}if(Y){let xt=C.texture.type,Rt=xt===Dn||xt===Pn||xt===Ga||xt===Yn||xt===Hl||xt===Vl,Ot=Ft.getClearColor(),zt=Ft.getClearAlpha(),Yt=Ot.r,Vt=Ot.g,Wt=Ot.b;Rt?(u[0]=Yt,u[1]=Vt,u[2]=Wt,u[3]=zt,G.clearBufferuiv(G.COLOR,0,u)):(g[0]=Yt,g[1]=Vt,g[2]=Wt,g[3]=zt,G.clearBufferiv(G.COLOR,0,g))}else J|=G.COLOR_BUFFER_BIT}B&&(J|=G.DEPTH_BUFFER_BIT),Z&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),pt.dispose(),bt.dispose(),Et.dispose(),y.dispose(),k.dispose(),st.dispose(),Tt.dispose(),Ht.dispose(),Mt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",fe),Bt.removeEventListener("sessionend",te),_t&&(_t.dispose(),_t=null),be.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=Qt.autoReset,B=Q.enabled,Z=Q.autoUpdate,J=Q.needsUpdate,Y=Q.type;Gt(),Qt.autoReset=S,Q.enabled=B,Q.autoUpdate=Z,Q.needsUpdate=J,Q.type=Y}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){let B=S.target;B.removeEventListener("dispose",ht),Lt(B)}function Lt(S){At(S),Et.remove(S)}function At(S){let B=Et.get(S).programs;B!==void 0&&(B.forEach(function(Z){Mt.releaseProgram(Z)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,Z,J,Y,xt){B===null&&(B=Ct);let Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Wi(S,B,Z,J,Y);mt.setMaterial(J,Rt);let zt=Z.index,Yt=1;if(J.wireframe===!0){if(zt=it.getWireframeAttribute(Z),zt===void 0)return;Yt=2}let Vt=Z.drawRange,Wt=Z.attributes.position,he=Vt.start*Yt,Oe=(Vt.start+Vt.count)*Yt;xt!==null&&(he=Math.max(he,xt.start*Yt),Oe=Math.min(Oe,(xt.start+xt.count)*Yt)),zt!==null?(he=Math.max(he,0),Oe=Math.min(Oe,zt.count)):Wt!=null&&(he=Math.max(he,0),Oe=Math.min(Oe,Wt.count));let ye=Oe-he;if(ye<0||ye===1/0)return;Tt.setup(Y,J,Ot,Z,zt);let hn,oe=rt;if(zt!==null&&(hn=nt.get(zt),oe=ut,oe.setIndex(hn)),Y.isMesh)J.wireframe===!0?(mt.setLineWidth(J.wireframeLinewidth*Nt()),oe.setMode(G.LINES)):oe.setMode(G.TRIANGLES);else if(Y.isLine){let Zt=J.linewidth;Zt===void 0&&(Zt=1),mt.setLineWidth(Zt*Nt()),Y.isLineSegments?oe.setMode(G.LINES):Y.isLineLoop?oe.setMode(G.LINE_LOOP):oe.setMode(G.LINE_STRIP)}else Y.isPoints?oe.setMode(G.POINTS):Y.isSprite&&oe.setMode(G.TRIANGLES);if(Y.isBatchedMesh)oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)oe.renderInstances(he,ye,Y.count);else if(Z.isInstancedBufferGeometry){let Zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Sr=Math.min(Z.instanceCount,Zt);oe.renderInstances(he,ye,Sr)}else oe.render(he,ye)};function Kt(S,B,Z){S.transparent===!0&&S.side===Ae&&S.forceSinglePass===!1?(S.side=Ce,S.needsUpdate=!0,Fn(S,B,Z),S.side=ln,S.needsUpdate=!0,Fn(S,B,Z),S.side=Ae):Fn(S,B,Z)}this.compile=function(S,B,Z=null){Z===null&&(Z=S),m=bt.get(Z),m.init(),v.push(m),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),S!==Z&&S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);let J=new Set;return S.traverse(function(Y){let xt=Y.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){let Ot=xt[Rt];Kt(Ot,Z,Y),J.add(Ot)}else Kt(xt,Z,Y),J.add(xt)}),v.pop(),m=null,J},this.compileAsync=function(S,B,Z=null){let J=this.compile(S,B,Z);return new Promise(Y=>{function xt(){if(J.forEach(function(Rt){Et.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){Y(S);return}setTimeout(xt,10)}gt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let jt=null;function ce(S){jt&&jt(S)}function fe(){be.stop()}function te(){be.start()}let be=new Ql;be.setAnimationLoop(ce),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(S){jt=S,Bt.setAnimationLoop(S),S===null?be.stop():be.start()},Bt.addEventListener("sessionstart",fe),Bt.addEventListener("sessionend",te),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(B),B=Bt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,B,C),m=bt.get(S,v.length),m.init(),v.push(m),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),z.setFromProjectionMatrix(vt),lt=this.localClippingEnabled,tt=Ut.init(this.clippingPlanes,lt),_=pt.get(S,f.length),_.init(),f.push(_),ke(S,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,P),this.info.render.frame++,tt===!0&&Ut.beginShadows();let Z=m.state.shadowsArray;if(Q.render(Z,S,B),tt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ft.render(_,S),m.setupLights(x._useLegacyLights),B.isArrayCamera){let J=B.cameras;for(let Y=0,xt=J.length;Y<xt;Y++){let Rt=J[Y];ki(_,S,Rt,Rt.viewport)}}else ki(_,S,B);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,B),Tt.resetDefaultState(),j=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ke(S,B,Z,J){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||z.intersectsSprite(S)){J&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);let Rt=st.update(S),Ot=S.material;Ot.visible&&_.push(S,Rt,Ot,Z,Pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||z.intersectsObject(S))){let Rt=st.update(S),Ot=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Pt.copy(Rt.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(Ot)){let zt=Rt.groups;for(let Yt=0,Vt=zt.length;Yt<Vt;Yt++){let Wt=zt[Yt],he=Ot[Wt.materialIndex];he&&he.visible&&_.push(S,Rt,he,Z,Pt.z,Wt)}}else Ot.visible&&_.push(S,Rt,Ot,Z,Pt.z,null)}}let xt=S.children;for(let Rt=0,Ot=xt.length;Rt<Ot;Rt++)ke(xt[Rt],B,Z,J)}function ki(S,B,Z,J){let Y=S.opaque,xt=S.transmissive,Rt=S.transparent;m.setupLightsView(Z),tt===!0&&Ut.setGlobalState(x.clippingPlanes,Z),xt.length>0&&Hi(Y,xt,B,Z),J&&mt.viewport(w.copy(J)),Y.length>0&&ri(Y,B,Z),xt.length>0&&ri(xt,B,Z),Rt.length>0&&ri(Rt,B,Z),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Hi(S,B,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let xt=St.isWebGL2;_t===null&&(_t=new vn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?ns:Dn,minFilter:es,samples:xt?4:0})),x.getDrawingBufferSize(It),xt?_t.setSize(It.x,It.y):_t.setSize(Zs(It.x),Zs(It.y));let Rt=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(K),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Ot=x.toneMapping;x.toneMapping=Un,ri(S,Z,J),M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t);let zt=!1;for(let Yt=0,Vt=B.length;Yt<Vt;Yt++){let Wt=B[Yt],he=Wt.object,Oe=Wt.geometry,ye=Wt.material,hn=Wt.group;if(ye.side===Ae&&he.layers.test(J.layers)){let oe=ye.side;ye.side=Ce,ye.needsUpdate=!0,ai(he,Z,J,Oe,ye,hn),ye.side=oe,ye.needsUpdate=!0,zt=!0}}zt===!0&&(M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t)),x.setRenderTarget(Rt),x.setClearColor(K,L),x.toneMapping=Ot}function ri(S,B,Z){let J=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,xt=S.length;Y<xt;Y++){let Rt=S[Y],Ot=Rt.object,zt=Rt.geometry,Yt=J===null?Rt.material:J,Vt=Rt.group;Ot.layers.test(Z.layers)&&ai(Ot,B,Z,zt,Yt,Vt)}}function ai(S,B,Z,J,Y,xt){S.onBeforeRender(x,B,Z,J,Y,xt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(x,B,Z,J,S,xt),Y.transparent===!0&&Y.side===Ae&&Y.forceSinglePass===!1?(Y.side=Ce,Y.needsUpdate=!0,x.renderBufferDirect(Z,B,J,Y,S,xt),Y.side=ln,Y.needsUpdate=!0,x.renderBufferDirect(Z,B,J,Y,S,xt),Y.side=Ae):x.renderBufferDirect(Z,B,J,Y,S,xt),S.onAfterRender(x,B,Z,J,Y,xt)}function Fn(S,B,Z){B.isScene!==!0&&(B=Ct);let J=Et.get(S),Y=m.state.lights,xt=m.state.shadowsArray,Rt=Y.state.version,Ot=Mt.getParameters(S,Y.state,xt,B,Z),zt=Mt.getProgramCacheKey(Ot),Yt=J.programs;J.environment=S.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(S.isMeshStandardMaterial?k:y).get(S.envMap||J.environment),Yt===void 0&&(S.addEventListener("dispose",ht),Yt=new Map,J.programs=Yt);let Vt=Yt.get(zt);if(Vt!==void 0){if(J.currentProgram===Vt&&J.lightsStateVersion===Rt)return Gi(S,Ot),Vt}else Ot.uniforms=Mt.getUniforms(S),S.onBuild(Z,Ot,x),S.onBeforeCompile(Ot,x),Vt=Mt.acquireProgram(Ot,zt),Yt.set(zt,Vt),J.uniforms=Ot.uniforms;let Wt=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Wt.clippingPlanes=Ut.uniform),Gi(S,Ot),J.needsLights=vc(S),J.lightsStateVersion=Rt,J.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.lightProbe.value=Y.state.probe,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.directionalShadowMap.value=Y.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotShadowMap.value=Y.state.spotShadowMap,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMap.value=Y.state.pointShadowMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Vt,J.uniformsList=null,Vt}function Vi(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Ri.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Gi(S,B){let Z=Et.get(S);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Wi(S,B,Z,J,Y){B.isScene!==!0&&(B=Ct),M.resetTextureUnits();let xt=B.fog,Rt=J.isMeshStandardMaterial?B.environment:null,Ot=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yn,zt=(J.isMeshStandardMaterial?k:y).get(J.envMap||Rt),Yt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Vt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Wt=!!Z.morphAttributes.position,he=!!Z.morphAttributes.normal,Oe=!!Z.morphAttributes.color,ye=Un;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=x.toneMapping);let hn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=hn!==void 0?hn.length:0,Zt=Et.get(J),Sr=m.state.lights;if(tt===!0&&(lt===!0||S!==b)){let He=S===b&&J.id===j;Ut.setState(J,S,He)}let le=!1;J.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Sr.state.version||Zt.outputColorSpace!==Ot||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Zt.envMap!==zt||J.fog===!0&&Zt.fog!==xt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ut.numPlanes||Zt.numIntersection!==Ut.numIntersection)||Zt.vertexAlphas!==Yt||Zt.vertexTangents!==Vt||Zt.morphTargets!==Wt||Zt.morphNormals!==he||Zt.morphColors!==Oe||Zt.toneMapping!==ye||St.isWebGL2===!0&&Zt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Zt.__version=J.version);let Bn=Zt.currentProgram;le===!0&&(Bn=Fn(J,B,Y));let io=!1,Xi=!1,Er=!1,Se=Bn.getUniforms(),zn=Zt.uniforms;if(mt.useProgram(Bn.program)&&(io=!0,Xi=!0,Er=!0),J.id!==j&&(j=J.id,Xi=!0),io||b!==S){Se.setValue(G,"projectionMatrix",S.projectionMatrix),Se.setValue(G,"viewMatrix",S.matrixWorldInverse);let He=Se.map.cameraPosition;He!==void 0&&He.setValue(G,Pt.setFromMatrixPosition(S.matrixWorld)),St.logarithmicDepthBuffer&&Se.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Se.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Xi=!0,Er=!0)}if(Y.isSkinnedMesh){Se.setOptional(G,Y,"bindMatrix"),Se.setOptional(G,Y,"bindMatrixInverse");let He=Y.skeleton;He&&(St.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Se.setValue(G,"boneTexture",He.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Se.setOptional(G,Y,"batchingTexture"),Se.setValue(G,"batchingTexture",Y._matricesTexture,M));let wr=Z.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0&&St.isWebGL2===!0)&&R.update(Y,Z,Bn),(Xi||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,Se.setValue(G,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(zn.envMap.value=zt,zn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Xi&&(Se.setValue(G,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&yc(zn,Er),xt&&J.fog===!0&&dt.refreshFogUniforms(zn,xt),dt.refreshMaterialUniforms(zn,J,q,H,_t),Ri.upload(G,Vi(Zt),zn,M)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ri.upload(G,Vi(Zt),zn,M),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Se.setValue(G,"center",Y.center),Se.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Se.setValue(G,"normalMatrix",Y.normalMatrix),Se.setValue(G,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let He=J.uniformsGroups;for(let Tr=0,Mc=He.length;Tr<Mc;Tr++)if(St.isWebGL2){let so=He[Tr];Ht.update(so,Bn),Ht.bind(so,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function yc(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function vc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,B,Z){Et.get(S.texture).__webglTexture=B,Et.get(S.depthTexture).__webglTexture=Z;let J=Et.get(S);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){let Z=Et.get(S);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,Z=0){C=S,A=B,T=Z;let J=!0,Y=null,xt=!1,Rt=!1;if(S){let zt=Et.get(S);zt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(G.FRAMEBUFFER,null),J=!1):zt.__webglFramebuffer===void 0?M.setupRenderTarget(S):zt.__hasExternalTextures&&M.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);let Yt=S.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Rt=!0);let Vt=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?Y=Vt[B][Z]:Y=Vt[B],xt=!0):St.isWebGL2&&S.samples>0&&M.useMultisampledRTT(S)===!1?Y=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[Z]:Y=Vt,w.copy(S.viewport),V.copy(S.scissor),O=S.scissorTest}else w.copy(N).multiplyScalar(q).floor(),V.copy(X).multiplyScalar(q).floor(),O=$;if(mt.bindFramebuffer(G.FRAMEBUFFER,Y)&&St.drawBuffers&&J&&mt.drawBuffers(S,Y),mt.viewport(w),mt.scissor(V),mt.setScissorTest(O),xt){let zt=Et.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,zt.__webglTexture,Z)}else if(Rt){let zt=Et.get(S.texture),Yt=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.__webglTexture,Z||0,Yt)}j=-1},this.readRenderTargetPixels=function(S,B,Z,J,Y,xt,Rt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){mt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{let zt=S.texture,Yt=zt.format,Vt=zt.type;if(Yt!==en&&at.convert(Yt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Vt===ns&&(gt.has("EXT_color_buffer_half_float")||St.isWebGL2&&gt.has("EXT_color_buffer_float"));if(Vt!==Dn&&at.convert(Vt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Ln&&(St.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-J&&Z>=0&&Z<=S.height-Y&&G.readPixels(B,Z,J,Y,at.convert(Yt),at.convert(Vt),xt)}finally{let zt=C!==null?Et.get(C).__webglFramebuffer:null;mt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(S,B,Z=0){let J=Math.pow(2,-Z),Y=Math.floor(B.image.width*J),xt=Math.floor(B.image.height*J);M.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,S.x,S.y,Y,xt),mt.unbindTexture()},this.copyTextureToTexture=function(S,B,Z,J=0){let Y=B.image.width,xt=B.image.height,Rt=at.convert(Z.format),Ot=at.convert(Z.type);M.setTexture2D(Z,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,J,S.x,S.y,Y,xt,Rt,Ot,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,J,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Rt,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,J,S.x,S.y,Rt,Ot,B.image),J===0&&Z.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(S,B,Z,J,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=S.max.x-S.min.x+1,Rt=S.max.y-S.min.y+1,Ot=S.max.z-S.min.z+1,zt=at.convert(J.format),Yt=at.convert(J.type),Vt;if(J.isData3DTexture)M.setTexture3D(J,0),Vt=G.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)M.setTexture2DArray(J,0),Vt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);let Wt=G.getParameter(G.UNPACK_ROW_LENGTH),he=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Oe=G.getParameter(G.UNPACK_SKIP_PIXELS),ye=G.getParameter(G.UNPACK_SKIP_ROWS),hn=G.getParameter(G.UNPACK_SKIP_IMAGES),oe=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,oe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,oe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,S.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,S.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,S.min.z),Z.isDataTexture||Z.isData3DTexture?G.texSubImage3D(Vt,Y,B.x,B.y,B.z,xt,Rt,Ot,zt,Yt,oe.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Vt,Y,B.x,B.y,B.z,xt,Rt,Ot,zt,oe.data)):G.texSubImage3D(Vt,Y,B.x,B.y,B.z,xt,Rt,Ot,zt,Yt,oe),G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,he),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Oe),G.pixelStorei(G.UNPACK_SKIP_ROWS,ye),G.pixelStorei(G.UNPACK_SKIP_IMAGES,hn),Y===0&&J.generateMipmaps&&G.generateMipmap(Vt),mt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?M.setTextureCube(S,0):S.isData3DTexture?M.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?M.setTexture2DArray(S,0):M.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,mt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Wa?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===mr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Jn:Yl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?pe:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ra=class extends os{};Ra.prototype.isWebGL1Renderer=!0;var or=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ni=class extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ll=new F,Il=new F,Ul=new me,sa=new jn,ks=new Ui,Oi=class extends Re{constructor(t=new Pe,e=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ll.fromBufferAttribute(e,s-1),Il.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ll.distanceTo(Il);t.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;Ul.copy(s).invert(),sa.copy(t.ray).applyMatrix4(Ul);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,p=new F,d=new F,u=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let f=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=f,E=v-1;x<E;x+=u){let A=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,T),sa.distanceSqToSegment(c,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);let j=t.ray.origin.distanceTo(d);j<t.near||j>t.far||e.push({distance:j,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=f,E=v-1;x<E;x+=u){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),sa.distanceSqToSegment(c,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var lr=class extends Oi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var cr=class extends Ye{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hr=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new F,d=new F,u=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let v=[],x=f/n,E=0;f===0&&o===0?E=.5/e:f===n&&l===Math.PI&&(E=-.5/e);for(let A=0;A<=e;A++){let T=A/e;p.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),p.y=t*Math.cos(o+x*a),p.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),m.push(T+E,1-x),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let x=h[f][v+1],E=h[f][v],A=h[f+1][v],T=h[f+1][v+1];(f!==0||o>0)&&u.push(x,E,T),(f!==n-1||l<Math.PI)&&u.push(E,A,T)}this.setIndex(u),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Sn=class extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Hs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ho,endingEnd:Ho}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vo:r=t,a=2*e-n;break;case Go:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:o=t,l=2*n-e;break;case Go:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-u)*m+(1.5+u)*_+.5*g,E=u*m-u*_;for(let A=0;A!==a;++A)r[A]=f*o[h+A]+v*o[c+A]+x*o[l+A]+E*o[p+A];return r}},La=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*p+o[l+d]*h;return r}},Ia=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case Gs:e=this.InterpolantFactoryMethodLinear;break;case Nr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Nr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Rm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,d=p-n,u=p+n;for(let g=0;g!==n;++g){let _=e[p+g];if(_!==e[d+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[p+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Gs;var Qn=class extends sn{};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Vs;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends sn{};Ua.prototype.ValueTypeName="color";var Da=class extends sn{};Da.prototype.ValueTypeName="number";var Na=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ls=class extends sn{InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.DefaultInterpolation=Gs;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends sn{};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Vs;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends sn{};Oa.prototype.ValueTypeName="vector";var Fa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},Pm=new Fa,Ba=class{constructor(t){this.manager=t!==void 0?t:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},dr=class extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ra=new me,Dl=new F,Nl=new F,za=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dl),Nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nl),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ka=class extends za{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new ka}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ya="\\[\\]\\.:\\/",Lm=new RegExp("["+Ya+"]","g"),Za="[^"+Ya+"]",Im="[^"+Ya.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",Za),Dm=/(WCOD+)?/.source.replace("WCOD",Im),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Za),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Za),Fm=new RegExp("^"+Um+Dm+Nm+Om+"$"),Bm=["material","materials","bones","map"],Ha=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(t){let e=Fm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Ha;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ug=new Float32Array(1);var fr=class{constructor(t,e,n=0,s=1/0){this.ray=new jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Va(t,this,n,e),n.sort(Ol),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Va(t[s],this,n,e);return n.sort(Ol),n}};function Ol(i,t){return i.distance-t.distance}function Va(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Va(s[r],t,e,!0)}}var hs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var rc={type:"change"},Ja={type:"start"},ac={type:"end"},_r=new jn,oc=new Qe,km=Math.cos(70*us.DEG2RAD),xr=class extends cn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",st),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rc),n.update(),r=s.NONE},this.update=(function(){let R=new F,rt=new nn().setFromUnitVectors(t.up,new F(0,1,0)),ut=rt.clone().invert(),at=new F,Tt=new nn,Ht=new F,Gt=2*Math.PI;return function(ct=null){let I=n.object.position;R.copy(I).sub(n.target),R.applyQuaternion(rt),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&V(b(ct)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ot=n.minAzimuthAngle,ht=n.maxAzimuthAngle;isFinite(ot)&&isFinite(ht)&&(ot<-Math.PI?ot+=Gt:ot>Math.PI&&(ot-=Gt),ht<-Math.PI?ht+=Gt:ht>Math.PI&&(ht-=Gt),ot<=ht?a.theta=Math.max(ot,Math.min(ht,a.theta)):a.theta=a.theta>(ot+ht)/2?Math.max(ot,a.theta):Math.min(ht,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=P(a.radius):a.radius=P(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(ut),I.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Lt=!1;if(n.zoomToCursor&&T){let At=null;if(n.object.isPerspectiveCamera){let Kt=R.length();At=P(Kt*c);let jt=Kt-At;n.object.position.addScaledVector(E,jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Kt=new F(A.x,A.y,0);Kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Lt=!0;let jt=new F(A.x,A.y,0);jt.unproject(n.object),n.object.position.sub(jt).add(Kt),n.object.updateMatrixWorld(),At=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;At!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(At).add(n.object.position):(_r.origin.copy(n.object.position),_r.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_r.direction))<km?t.lookAt(n.target):(oc.setFromNormalAndCoplanarPoint(n.object.up,n.target),_r.intersectPlane(oc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Lt=!0);return c=1,T=!1,Lt||at.distanceToSquared(n.object.position)>o||8*(1-Tt.dot(n.object.quaternion))>o||Ht.distanceToSquared(n.target)>0?(n.dispatchEvent(rc),at.copy(n.object.position),Tt.copy(n.object.quaternion),Ht.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pt),n.domElement.removeEventListener("pointerdown",Et),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new hs,l=new hs,c=1,h=new F,p=new kt,d=new kt,u=new kt,g=new kt,_=new kt,m=new kt,f=new kt,v=new kt,x=new kt,E=new F,A=new kt,T=!1,C=[],j={};function b(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function w(R){let rt=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*rt)}function V(R){l.theta-=R}function O(R){l.phi-=R}let K=(function(){let R=new F;return function(ut,at){R.setFromMatrixColumn(at,0),R.multiplyScalar(-ut),h.add(R)}})(),L=(function(){let R=new F;return function(ut,at){n.screenSpacePanning===!0?R.setFromMatrixColumn(at,1):(R.setFromMatrixColumn(at,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(ut),h.add(R)}})(),U=(function(){let R=new F;return function(ut,at){let Tt=n.domElement;if(n.object.isPerspectiveCamera){let Ht=n.object.position;R.copy(Ht).sub(n.target);let Gt=R.length();Gt*=Math.tan(n.object.fov/2*Math.PI/180),K(2*ut*Gt/Tt.clientHeight,n.object.matrix),L(2*at*Gt/Tt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(ut*(n.object.right-n.object.left)/n.object.zoom/Tt.clientWidth,n.object.matrix),L(at*(n.object.top-n.object.bottom)/n.object.zoom/Tt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(R,rt){if(!n.zoomToCursor)return;T=!0;let ut=n.domElement.getBoundingClientRect(),at=R-ut.left,Tt=rt-ut.top,Ht=ut.width,Gt=ut.height;A.x=at/Ht*2-1,A.y=-(Tt/Gt)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function P(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function N(R){p.set(R.clientX,R.clientY)}function X(R){W(R.clientX,R.clientX),f.set(R.clientX,R.clientY)}function $(R){g.set(R.clientX,R.clientY)}function z(R){d.set(R.clientX,R.clientY),u.subVectors(d,p).multiplyScalar(n.rotateSpeed);let rt=n.domElement;V(2*Math.PI*u.x/rt.clientHeight),O(2*Math.PI*u.y/rt.clientHeight),p.copy(d),n.update()}function tt(R){v.set(R.clientX,R.clientY),x.subVectors(v,f),x.y>0?H(w(x.y)):x.y<0&&q(w(x.y)),f.copy(v),n.update()}function lt(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_),n.update()}function _t(R){W(R.clientX,R.clientY),R.deltaY<0?q(w(R.deltaY)):R.deltaY>0&&H(w(R.deltaY)),n.update()}function vt(R){let rt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),rt=!0;break}rt&&(R.preventDefault(),n.update())}function It(R){if(C.length===1)p.set(R.pageX,R.pageY);else{let rt=Ft(R),ut=.5*(R.pageX+rt.x),at=.5*(R.pageY+rt.y);p.set(ut,at)}}function Pt(R){if(C.length===1)g.set(R.pageX,R.pageY);else{let rt=Ft(R),ut=.5*(R.pageX+rt.x),at=.5*(R.pageY+rt.y);g.set(ut,at)}}function Ct(R){let rt=Ft(R),ut=R.pageX-rt.x,at=R.pageY-rt.y,Tt=Math.sqrt(ut*ut+at*at);f.set(0,Tt)}function Nt(R){n.enableZoom&&Ct(R),n.enablePan&&Pt(R)}function G(R){n.enableZoom&&Ct(R),n.enableRotate&&It(R)}function $t(R){if(C.length==1)d.set(R.pageX,R.pageY);else{let ut=Ft(R),at=.5*(R.pageX+ut.x),Tt=.5*(R.pageY+ut.y);d.set(at,Tt)}u.subVectors(d,p).multiplyScalar(n.rotateSpeed);let rt=n.domElement;V(2*Math.PI*u.x/rt.clientHeight),O(2*Math.PI*u.y/rt.clientHeight),p.copy(d)}function gt(R){if(C.length===1)_.set(R.pageX,R.pageY);else{let rt=Ft(R),ut=.5*(R.pageX+rt.x),at=.5*(R.pageY+rt.y);_.set(ut,at)}m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_)}function St(R){let rt=Ft(R),ut=R.pageX-rt.x,at=R.pageY-rt.y,Tt=Math.sqrt(ut*ut+at*at);v.set(0,Tt),x.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),H(x.y),f.copy(v);let Ht=(R.pageX+rt.x)*.5,Gt=(R.pageY+rt.y)*.5;W(Ht,Gt)}function mt(R){n.enableZoom&&St(R),n.enablePan&&gt(R)}function Qt(R){n.enableZoom&&St(R),n.enableRotate&&$t(R)}function Et(R){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",y)),bt(R),R.pointerType==="touch"?Mt(R):k(R))}function M(R){n.enabled!==!1&&(R.pointerType==="touch"?dt(R):nt(R))}function y(R){Ut(R),C.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(ac),r=s.NONE}function k(R){let rt;switch(R.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case ei.DOLLY:if(n.enableZoom===!1)return;X(R),r=s.DOLLY;break;case ei.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;$(R),r=s.PAN}else{if(n.enableRotate===!1)return;N(R),r=s.ROTATE}break;case ei.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;N(R),r=s.ROTATE}else{if(n.enablePan===!1)return;$(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ja)}function nt(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;z(R);break;case s.DOLLY:if(n.enableZoom===!1)return;tt(R);break;case s.PAN:if(n.enablePan===!1)return;lt(R);break}}function it(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Ja),_t(R),n.dispatchEvent(ac))}function st(R){n.enabled===!1||n.enablePan===!1||vt(R)}function Mt(R){switch(Q(R),C.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;It(R),r=s.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;Pt(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Nt(R),r=s.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ja)}function dt(R){switch(Q(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;$t(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;gt(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;mt(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qt(R),n.update();break;default:r=s.NONE}}function pt(R){n.enabled!==!1&&R.preventDefault()}function bt(R){C.push(R.pointerId)}function Ut(R){delete j[R.pointerId];for(let rt=0;rt<C.length;rt++)if(C[rt]==R.pointerId){C.splice(rt,1);return}}function Q(R){let rt=j[R.pointerId];rt===void 0&&(rt=new kt,j[R.pointerId]=rt),rt.set(R.pageX,R.pageY)}function Ft(R){let rt=R.pointerId===C[0]?C[1]:C[0];return j[rt]}n.domElement.addEventListener("contextmenu",pt),n.domElement.addEventListener("pointerdown",Et),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",it,{passive:!1}),this.update()}};var ie={muscle:11680306,tendonIn:14937072,tendon:14279658,bone:14468500,cartOn:6269139,cart:6269139,teeth:16052970,lig:7323560,capsule:10850256,fascia:12175315,bursa:15776058,origin:14698558,insertion:3112928,skin:14264716,select:16765503,sclera:15855334,iris:4862756,hair:2760988},Hm=["muscle","tendon","bone","cart","lig","eye","hair"],yr=class{constructor(t,e){this.m=e,this.canvas=t,(this.renderer=new os({canvas:t,antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})).setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new or,this.camera=new De(26,1,5,3e3),this.scene.add(this.camera),this.scene.add(new dr(16777215,5525580,1.15));let s=new cs(16777215,1.9);s.position.set(-.55,.75,1),this.camera.add(s);let r=new cs(14674175,.55);r.position.set(.9,-.2,.6),this.camera.add(r),this.controls=new xr(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.rotateSpeed=.8,this.controls.zoomSpeed=.9,this.controls.addEventListener("change",()=>this.req()),this.layers={skin:0,muscle:!0,tendon:!0,fascia:!1,lig:!0,bone:!0,cart:!0,bursa:!1,ins:!1,eye:!0,hair:!1},this.sideMode="all",this.outline=!0,this.hidden=new Set,this.isolate=null,this.selected=null,this.uOutline={value:.07},this.build(),this.need=!0,this.tick=this.tick.bind(this),requestAnimationFrame(this.tick),new ResizeObserver(()=>this.resize()).observe(t.parentElement),this.resize()}req(){this.need=!0}tick(){requestAnimationFrame(this.tick),(this.controls.update()||this.need)&&(this.need=!1,this.renderer.render(this.scene,this.camera))}resize(){let t=this.canvas.parentElement,e=t.clientWidth,n=t.clientHeight;!e||!n||(this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.req())}setBackground(t){this.scene.background=new qt(t),this.req()}build(){let t=this.m,e=t.NV,n=new qt,s=new qt,r=this.col=new Uint8Array(e*3),o=u=>(n.setHex(u),[n.r,n.g,n.b]),a={muscle:o(ie.muscle),tin:o(ie.tendonIn),tendon:o(ie.tendon),bone:o(ie.bone),cart:o(ie.cart),teeth:o(ie.teeth),lig:o(ie.lig),capsule:o(ie.capsule),fascia:o(ie.fascia),bursa:o(ie.bursa),origin:o(ie.origin),insertion:o(ie.insertion),sclera:o(ie.sclera),iris:o(ie.iris),hair:o(ie.hair)};for(let u of t.parts){let g=(u.i*2654435761>>>0)/4294967296,_=u.t===0?.86+.26*g:u.t===2?.95+.08*g:u.t===9||u.t===11?1:.94+.1*g,m=u.t===0?a.muscle:u.t===1?a.tendon:u.t===2?a.bone:u.t===3?a.cart:u.t===4?a.teeth:u.t===5?a.lig:u.t===6?a.capsule:u.t===7?a.fascia:u.t===8?a.bursa:u.t===9?u.en==="Iris"?a.iris:a.sclera:u.t===11?a.hair:u.kind===1?a.origin:a.insertion,f=u.t===0?a.tin:u.t===2?a.cart:null;for(let v=u.v0;v<u.v0+u.nv;v++){let x=f?t.MIX[v]/255:0;for(let E=0;E<3;E++){let A=m[E]*_*(1-x)+(f?f[E]*x:0);r[v*3+E]=Math.min(255,Math.round(A*255))}}}this.col0=r.slice(),this.aPos=new ne(t.pos,3),this.aNrm=new ne(t.nrm,3),this.aCol=new ne(r,3,!0);let l=()=>{let u=new Pe;return u.setAttribute("position",this.aPos),u.setAttribute("normal",this.aNrm),u.setAttribute("color",this.aCol),u.setIndex(new ne(new Uint32Array(3),1)),u},c=(u,g)=>(u.customProgramCacheKey=()=>g,u.onBeforeCompile=_=>{_.fragmentShader=_.fragmentShader.replace("#include <dithering_fragment>",`float fr = pow(clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 0.55);
 gl_FragColor.rgb *= mix(0.5, 1.0, fr);
#include <dithering_fragment>`)},u);this.G={};let h=u=>c(new Sn({vertexColors:!0,roughness:.58,metalness:0,side:Ae,...u}),"std"+JSON.stringify(u));this.G.opaque=new ue(l(),h({}));let p=new Mn({color:1707275,side:Ce});p.customProgramCacheKey=()=>"outline",p.onBeforeCompile=u=>{u.uniforms.uOutline=this.uOutline,u.vertexShader=`uniform float uOutline;
`+u.vertexShader.replace("#include <begin_vertex>","vec3 transformed = vec3(position) + normal * uOutline;")},this.G.outline=new ue(this.G.opaque.geometry,p),this.G.ins=new ue(l(),new Sn({vertexColors:!0,roughness:.7,side:Ae,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),this.G.fascia=new ue(l(),new Sn({vertexColors:!0,roughness:.5,side:Ae,transparent:!0,opacity:.5,depthWrite:!1})),this.G.fascia.renderOrder=3,this.G.bursa=new ue(l(),new Sn({vertexColors:!0,roughness:.4,side:Ae,transparent:!0,opacity:.7,depthWrite:!1})),this.G.bursa.renderOrder=4;for(let u in this.G)this.G[u].frustumCulled=!1,this.scene.add(this.G[u]);let d=new Pe;this.sPos=new ne(t.spos,3),this.sNrm=new ne(t.snrm,3),this.sCol=new ne(new Float32Array(t.scolM),3),d.setAttribute("position",this.sPos),d.setAttribute("normal",this.sNrm),d.setAttribute("color",this.sCol),d.setIndex(new ne(t.stri,1)),this.skinSex="M",this.skinMat=c(new Sn({color:ie.skin,roughness:.75,side:ln,vertexColors:!0}),"skin"),this.skin=new ue(d,this.skinMat),this.skin.frustumCulled=!1,this.skin.renderOrder=6,this.skinPre=new ue(d,new Mn({colorWrite:!1,transparent:!0})),this.skinPre.frustumCulled=!1,this.skinPre.renderOrder=5,this.scene.add(this.skinPre,this.skin),this.marks=new on,this.scene.add(this.marks),this.rebuild(),this.setSkin(0)}visible(t){return!(this.layers.skin>.985&&t.layer!=="eye"&&t.layer!=="hair"||!this.layers[t.layer]||this.hidden.has(t.i)||this.m.sex==="F"&&t.male||this.isolate&&!this.isolate.has(t.i)||this.sideMode==="L"&&t.side===1||this.sideMode==="R"&&t.side===0)}rebuild(){if(this.skinSex!==this.m.sex){let n=this.m.sex==="F";this.skin.geometry.setIndex(new ne(this.m.skinTris(),1)),this.sCol.array.set(n?this.m.scolF:this.m.scolM),this.sCol.needsUpdate=!0,this.skinSex=this.m.sex}let t=this.m,e={opaque:[],ins:[],fascia:[],bursa:[]};this.vis=new Uint8Array(t.parts.length);for(let n of t.parts)this.visible(n)&&(this.vis[n.i]=1,e[Hm.includes(n.layer)?"opaque":n.layer].push(n));for(let n in e){let s=0;for(let l of e[n])s+=l.nt*3;let r=new Uint32Array(Math.max(3,s)),o=0;for(let l of e[n])r.set(t.idx.subarray(l.t0*3,(l.t0+l.nt)*3),o),o+=l.nt*3;let a=this.G[n].geometry;a.setIndex(new ne(r,1)),a.setDrawRange(0,s),this.G[n].visible=s>0}this.G.outline.visible=this.outline&&this.G.opaque.visible,this.req()}setLayer(t,e){this.layers[t]=e,t==="skin"?this.setSkin(e):this.rebuild()}setSkin(t){let e=this.layers.skin>.985;this.layers.skin=t;let n=t>.01,s=t>.985,r=t>.5;(r!==this.layers.hair||e!==s)&&(this.layers.hair=r,this.rebuild()),this.skin.visible=n,this.skinPre.visible=n&&!s,this.skinMat.transparent=!s,this.skinMat.opacity=s?1:t,this.skinMat.depthWrite=s,this.skinMat.depthFunc=s?$n:$n,this.skinMat.needsUpdate=!0,this.req()}setOutline(t){this.outline=t,this.G.outline.visible=t&&this.G.opaque.visible,this.req()}refresh(){this.placeOverlays(),this.aPos.needsUpdate=!0,this.aNrm.needsUpdate=!0,this.sPos.needsUpdate=!0,this.sNrm.needsUpdate=!0,this.uOutline.value=.07*this.m.s,this.req()}select(t){let e=this.col,n=this.col0,s=new qt(ie.select);if(this.selected){let r=this.selected;e.set(n.subarray(r.v0*3,(r.v0+r.nv)*3),r.v0*3)}if(this.selected=t||null,t)for(let r=t.v0;r<t.v0+t.nv;r++)e[r*3]=Math.round((n[r*3]/255*.3+s.r*.7)*255),e[r*3+1]=Math.round((n[r*3+1]/255*.3+s.g*.7)*255),e[r*3+2]=Math.round((n[r*3+2]/255*.3+s.b*.7)*255);this.aCol.needsUpdate=!0,this.req()}view(t){let e=this.m.s,n=this.m.lm.H0*e,s=new F(0,n*.5,0),r=Math.tan(us.degToRad(this.camera.fov/2)),o=t==="left"||t==="right",a=Math.max(n*.54/r,(o?20:37)*e/(r*this.camera.aspect)),l={front:[0,0,1],back:[0,0,-1],left:[1,0,0],right:[-1,0,0]}[t]||[0,0,1];this.controls.target.copy(s),this.camera.position.set(s.x+l[0]*a,s.y+l[1]*a,s.z+l[2]*a),this.controls.update(),this.req()}focus(t){let e=this.m.box.subarray(t.i*6,t.i*6+6),n=new F((e[0]+e[3])/2,(e[1]+e[4])/2,(e[2]+e[5])/2),s=Math.max(6,Math.hypot(e[3]-e[0],e[4]-e[1],e[5]-e[2])/2),r=this.camera.position.clone().sub(this.controls.target).normalize(),o=s*2.4/Math.tan(us.degToRad(this.camera.fov/2));this.controls.target.copy(n),this.camera.position.copy(n).addScaledVector(r,o),this.controls.update(),this.req()}ray(t,e){let n=this.canvas.getBoundingClientRect(),s=new kt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new fr;return r.setFromCamera(s,this.camera),r.ray}pick(t,e,n){let s=this.ray(t,e),r=s.origin,o=s.direction,a=this.m,l=1/0,c=null,h=(p,d,u,g)=>{let _=p[u]-p[d],m=p[u+1]-p[d+1],f=p[u+2]-p[d+2],v=p[g]-p[d],x=p[g+1]-p[d+1],E=p[g+2]-p[d+2],A=o.y*E-o.z*x,T=o.z*v-o.x*E,C=o.x*x-o.y*v,j=_*A+m*T+f*C;if(j>-1e-9&&j<1e-9)return 1/0;let b=1/j,w=r.x-p[d],V=r.y-p[d+1],O=r.z-p[d+2],K=(w*A+V*T+O*C)*b;if(K<0||K>1)return 1/0;let L=V*f-O*m,U=O*_-w*f,H=w*m-V*_,q=(o.x*L+o.y*U+o.z*H)*b;if(q<0||K+q>1)return 1/0;let W=(v*L+x*U+E*H)*b;return W>.01?W:1/0};if(n!=="only"){let p=[];for(let d of a.parts){if(!this.vis[d.i]||d.t===11)continue;let u=a.box,g=d.i*6,_=0,m=1/0,f=!0;for(let v=0;v<3;v++){let x=v===0?r.x:v===1?r.y:r.z,E=v===0?o.x:v===1?o.y:o.z,A=(u[g+v]-x)/E,T=(u[g+3+v]-x)/E;if(_=Math.max(_,Math.min(A,T)),m=Math.min(m,Math.max(A,T)),_>m){f=!1;break}}f&&p.push([_,d])}p.sort((d,u)=>d[0]-u[0]);for(let[d,u]of p){if(d>l)break;let g=a.idx,_=a.pos;for(let m=u.t0*3,f=(u.t0+u.nt)*3;m<f;m+=3){let v=h(_,g[m]*3,g[m+1]*3,g[m+2]*3);v<l&&(l=v,c={part:u})}}}if(n&&this.layers.skin>.01){let p=a.stri,d=a.spos,u=1/0,g=-1;for(let _=0,m=a.NTs*3;_<m;_+=3){let f=h(d,p[_]*3,p[_+1]*3,p[_+2]*3);f<u&&(u=f,g=_)}u<1/0&&(n==="only"||u<l||this.layers.skin>.6)&&(l=u,c={skin:!0,tri:g/3})}return c&&(c.point=new F(r.x+o.x*l,r.y+o.y*l,r.z+o.z*l)),c}setOverlays(t){if(this.ovGroup&&(this.scene.remove(this.ovGroup),this.ovGroup.traverse(n=>{n.geometry&&n.geometry.dispose()})),this.ovGroup=null,this.ov={},!t){this.req();return}let e=new on;e.renderOrder=9;for(let n of t){let s=new Pe;s.setAttribute("position",new ne(n.V,3)),s.setIndex(new ne(n.F,1)),s.computeVertexNormals();let r=/體表/.test(n.name),o=new Sn({color:n.color,roughness:.6,transparent:!0,opacity:r?.16:.5,depthWrite:!1,side:Ae}),a=new ue(s,o);a.renderOrder=r?11:10,a.visible=!1,a.frustumCulled=!1,e.add(a),this.ov[n.name]=a}this.ovGroup=e,this.scene.add(e),this.placeOverlays(),this.req()}placeOverlays(){if(!this.ovGroup||!this.m.ct)return;let t=this.m.s,e=this.m.anchorWarp();this.ovGroup.position.set(e[0]*t,e[1]*t,e[2]*t),this.req()}setSlicePlane(t,e){if(!t){this.slicePlane&&(this.slicePlane.visible=!1),this.req();return}if(!this.slicePlane){let r=new Pe;r.setAttribute("position",new ne(new Float32Array(12),3)),r.setAttribute("uv",new ne(new Float32Array([0,1,1,1,1,0,0,0]),2)),r.setIndex([0,1,2,0,2,3]),this.sliceTex=new cr(document.createElement("canvas")),this.sliceTex.colorSpace=pe;let o=new Mn({map:this.sliceTex,transparent:!0,opacity:.92,side:Ae,depthWrite:!1}),a=new ue(r,o);a.renderOrder=8,a.frustumCulled=!1;let l=new Pe;l.setAttribute("position",new ne(new Float32Array(15),3));let c=new Oi(l,new Ni({color:5294335,depthTest:!1,transparent:!0}));c.renderOrder=10,c.frustumCulled=!1,this.slicePlane=new on,this.slicePlane.add(a,c),this.sliceMesh=a,this.sliceLine=c,this.scene.add(this.slicePlane)}let n=this.sliceMesh.geometry.attributes.position,s=this.sliceLine.geometry.attributes.position;t.forEach((r,o)=>{n.setXYZ(o,r[0],r[1],r[2]),s.setXYZ(o,r[0],r[1],r[2])}),s.setXYZ(4,t[0][0],t[0][1],t[0][2]),n.needsUpdate=!0,s.needsUpdate=!0,e&&(this.sliceTex.image=e,this.sliceTex.needsUpdate=!0),this.slicePlane.visible=!0,this.req()}showOverlay(t,e){this.ov&&this.ov[t]&&(this.ov[t].visible=e,this.req())}clearMarks(){for(let t of[...this.marks.children])this.marks.remove(t),t.geometry&&t.geometry.dispose();this.req()}addLine(t,e,n){let s=new Pe().setFromPoints(t.map(a=>a.isVector3?a:new F(a[0],a[1],a[2]))),r=new Ni({color:e,depthTest:!1,transparent:!0}),o=n?new lr(s,r):new Oi(s,r);o.renderOrder=20,this.marks.add(o),this.req()}addDot(t,e){let n=new ue(new hr(.55*this.m.s,12,10),new Mn({color:e,depthTest:!1,transparent:!0}));n.position.copy(t),n.renderOrder=21,this.marks.add(n),this.req()}png(){return this.renderer.render(this.scene,this.camera),new Promise(t=>this.canvas.toBlob(t,"image/png"))}};var et=(i,t=document)=>t.querySelector(i),D=(i,t={},...e)=>{let n=document.createElement(i);for(let s in t)s==="class"?n.className=t[s]:s.startsWith("on")?n.addEventListener(s.slice(2),t[s]):s==="html"?n.innerHTML=t[s]:t[s]!==!1&&t[s]!=null&&n.setAttribute(s,t[s]);for(let s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n},re=i=>(Math.round(i*10)/10).toFixed(1),wt={c:{id:"",sex:"M",H:171,W:75,chest:104,waist:82,hip:95,under:0,bf:0,leg:0,legAuto:!1,arm:1,shoulder:1,auto:!0,muscle:0,off:new Array(11).fill(0)},res:null,meas:null,tool:null,pts:[],last:null},Dt,yt,Ze,lc=0,dc={H:[140,200,.5],W:[35,160,.5],chest:[65,150,.5],waist:[50,150,.5],hip:[65,150,.5]},fc=[["muscle","\u808C\u8089",ie.muscle],["tendon","\u808C\u8171\u3001\u8171\u819C\u3001\u652F\u6301\u5E36",ie.tendon],["fascia","\u6DF1\u7B4B\u819C\uFF08\u5305\u8986\u5168\u8EAB\u808C\u8089\u7684\u4E00\u6574\u5C64\uFF0C\u534A\u900F\u660E\uFF1B\u6253\u958B\u6642\u50CF\u7B2C\u4E8C\u5C64\u76AE\u819A\uFF09",ie.fascia],["lig","\u97CC\u5E36",ie.lig],["bone","\u9AA8\u9ABC",ie.bone],["cart","\u8EDF\u9AA8\u3001\u690E\u9593\u76E4\u3001\u534A\u6708\u677F",ie.cart],["bursa","\u95DC\u7BC0\u56CA\u3001\u6ED1\u6DB2\u56CA\u8207\u8171\u9798\uFF08\u534A\u900F\u660E\uFF09",ie.capsule],["ins","\u808C\u8089\u8D77\u9EDE\uFF08\u7D05\uFF09\u8207\u6B62\u9EDE\uFF08\u85CD\uFF09",ie.origin],["eye","\u773C\u7403",ie.iris]],cc=i=>"#"+i.toString(16).padStart(6,"0");async function Vm(){let i=et("#lbar"),t=et("#lmsg");try{Dt=await oo(()=>{t.textContent="\u89E3\u58D3\u7E2E\u6A21\u578B\u8CC7\u6599\u2026"}),t.textContent="\u5EFA\u7ACB\u6A21\u578B\u2026",await new Promise(r=>setTimeout(r,30)),yt=new yr(et("#cv"),Dt),pc(),Ze=new _s(Dt,yt,et("#stage"));let e=Dt.lm;Dt.s=1,Dt.setG(0),Dt.buildLUT(),Dt.deformSkin(Dt.spos,null,!1);let n=Dt.skinVolume(Dt.spos),s={M:.9007*Dt.phi0*n+1.1*(n*(1-Dt.phi0)-Dt.air)};Object.assign(wt.c,{H:Math.round(e.H0),W:Math.round(s.M),chest:Math.round(e.girth0[0]),waist:Math.round(e.girth0[1]),hip:Math.round(e.girth0[2])}),wt.c.leg=Math.round(Dt.r0*1e3)/10,wt.base={...wt.c},Wm(),ps("surface"),si(),yt.view("front"),et("#loading").hidden=!0,window.__app={M:Dt,V:yt,state:wt,update:si,setCase:Gm,preset:ps,select:ms,tap:gc,setTool:vr,loadCT:no,ready:!0},eg()}catch(e){t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+(e&&e.message?e.message:e),console.error(e)}}function pc(){let i=matchMedia("(prefers-color-scheme: dark)").matches;yt.setBackground(i?1316636:15330802)}matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>yt&&pc());function rn(i=140){clearTimeout(lc),et("#busy").hidden=!1,lc=setTimeout(si,i)}function si(){let i=wt.c,t=performance.now(),e=wt.res=Dt.solve({...i,leg:i.leg/100}),n=[Dt.s,e.kf.C,e.kf.W,e.kf.H,i.sex,i.leg,i.arm,i.shoulder].join(",");if(wt.sexShown!==i.sex&&(wt.sexShown=i.sex,yt.rebuild()),Dt.apply(n!==wt.last),wt.last=n,yt.refresh(),wt.meas=Dt.measure(),Ze&&Dt.ct&&Ze.invalidate(),wt.ms=Math.round(performance.now()-t),Xm(),qm(),Ym(),yt.selected&&mc(yt.selected),et("#busy").hidden=!0,i.auto){let s=et("#f-muscle");s&&(s.value=Math.round(e.gG*100),et("#v-muscle").textContent=fs(e.gG))}Dt.ctOn()&&i.legAuto&&(et("#p-leg").value=(e.leg*100).toFixed(1),et("#pv-leg").textContent=(e.leg*100).toFixed(1)+"%")}var fs=i=>(i>=0?"+":"")+Math.round(i*100)+"%\u3000"+(i<-.5?"\u660E\u986F\u504F\u5C11":i<-.2?"\u504F\u5C11":i<.2?"\u4E00\u822C\uFF08\u6A21\u578B\u57FA\u6E96\uFF09":i<.6?"\u7D50\u5BE6":i<1?"\u767C\u9054":"\u975E\u5E38\u767C\u9054");function Gm(i){Object.assign(wt.c,i),On(),si()}function Wm(){let i=wt.c,t=(a,l,c)=>{let[h,p,d]=dc[a],u=D("input",{type:"number",id:"n-"+a,min:h,max:p,step:d,value:i[a],inputmode:"decimal"}),g=D("input",{type:"range",id:"r-"+a,min:h,max:p,step:d,value:i[a]}),_=(m,f)=>{m=Math.min(p,Math.max(h,+m||h)),i[a]=m,f!==u&&(u.value=m),f!==g&&(g.value=m),rn()};return u.addEventListener("change",()=>_(u.value,null)),g.addEventListener("input",()=>_(g.value,g)),D("div",{class:"row"},D("label",{for:"n-"+a},l),g,D("span",{class:"numw"},u,D("i",{},c)))},e=(a,l,c,h,p,d,u)=>{let g=()=>u?Math.round(i[a]*u):i[a],_=D("span",{class:"gv",id:"pv-"+a},g()+d);return D("div",{class:"row"},D("label",{},l),D("input",{type:"range",id:"p-"+a,min:c,max:h,step:p,value:g(),oninput:m=>{i[a]=u?m.target.value/u:+m.target.value,_.textContent=(+m.target.value).toFixed(p<1?1:0)+d,rn(40)}}),_)};et("#t-case").append(D("div",{class:"row"},D("label",{},"\u500B\u6848\u4EE3\u865F"),D("input",{type:"text",id:"f-id",placeholder:"\u4F8B\uFF1AS-001",value:i.id,oninput:a=>{i.id=a.target.value}}),D("button",{class:"btn",onclick:Zm},"\u5132\u5B58")),D("div",{class:"row"},D("label",{},"\u5DF2\u5B58\u500B\u6848"),D("select",{id:"f-cases",onchange:Jm}),D("button",{class:"btn ghost",onclick:$m},"\u522A\u9664")),D("div",{class:"row"},D("label",{},"\u6027\u5225"),D("div",{class:"seg",id:"f-sex"},D("button",{"data-v":"M",class:"on"},"\u7537"),D("button",{"data-v":"F"},"\u5973"))),D("p",{class:"note warn",id:"femnote",hidden:!0},"\u5973\u6027\u9AD4\u578B\u70BA\u7537\u6027\u89E3\u5256\u8CC7\u6599\u7684\u8FD1\u4F3C\u8B8A\u5F62\uFF1A\u80A9\u8207\u80F8\u5ED3\u8F03\u7A84\u3001\u9AA8\u76C6\u8F03\u5BEC\uFF1B\u4E0B\u80F8\u570D\u6C7A\u5B9A\u80F8\u5ED3\u5927\u5C0F\uFF0C\u4E0A\u80F8\u570D\u6C7A\u5B9A\u4E73\u623F\u9AD4\u7A4D\u3002\u9AA8\u76C6\u8207\u9871\u9AA8\u7684\u6027\u5225\u5DEE\u7570\u5C1A\u672A\u500B\u5225\u5EFA\u6A21\u3002"),t("H","\u8EAB\u9AD8","cm"),t("W","\u9AD4\u91CD","kg"),t("chest","\u80F8\u570D","cm"),t("waist","\u8170\u570D","cm"),t("hip","\u81C0\u570D","cm"),D("div",{class:"row",id:"row-under",hidden:!0},D("label",{for:"n-under"},"\u4E0B\u80F8\u570D"),D("span",{class:"dim",style:"flex:1"},"\u9078\u586B\u3002\u672A\u586B\u6642\u7531\u8170\u570D\u63A8\u4F30"),D("span",{class:"numw"},D("input",{type:"number",id:"n-under",min:55,max:140,step:.5,placeholder:"\u2014",inputmode:"decimal",onchange:a=>{let l=+a.target.value;i.under=l>=55&&l<=140?l:0,i.under||(a.target.value=""),rn(20)}}),D("i",{},"cm"))),D("div",{class:"row"},D("label",{for:"n-bf"},"\u9AD4\u8102\u7387"),D("span",{class:"dim",style:"flex:1"},"\u9078\u586B\u3002\u6709 BIA \u6216 DXA \u5BE6\u6E2C\u503C\u6642\u8F38\u5165"),D("span",{class:"numw"},D("input",{type:"number",id:"n-bf",min:3,max:60,step:.1,placeholder:"\u2014",inputmode:"decimal",onchange:a=>{let l=+a.target.value;i.bf=l>=3&&l<=60?l:0,i.bf||(a.target.value=""),rn(20)}}),D("i",{},"%"))),D("h3",{},"\u9AD4\u578B\u6BD4\u4F8B"),e("leg","\u817F\u9577",45,57,.1,"%"),e("arm","\u81C2\u9577",90,110,1,"%",100),e("shoulder","\u80A9\u5BEC",88,112,1,"%",100),D("p",{class:"note"},"\u817F\u9577\u70BA\u5927\u8F49\u5B50\u9AD8\u4F54\u8EAB\u9AD8\u7684\u6BD4\u4F8B\uFF0C\u8EAB\u9AD8\u4E0D\u8B8A\uFF0C\u817F\u8207\u4E0A\u8EAB\u6B64\u6D88\u5F7C\u9577\u3002\u81C2\u9577\u3001\u80A9\u5BEC\u70BA\u76F8\u5C0D\u57FA\u6E96\u7684\u767E\u5206\u6BD4\u3002"),D("h3",{},"\u808C\u8089\u767C\u9054\u7A0B\u5EA6"),D("label",{class:"chk"},D("input",{type:"checkbox",id:"f-auto",checked:i.auto?"":!1,onchange:a=>{i.auto=a.target.checked,et("#f-muscle").disabled=i.auto,!i.auto&&wt.res&&(i.muscle=Math.round(wt.res.gG*100)/100),rn(20)}}),"\u7531\u9AD4\u91CD\u8207\u9AD4\u8102\u7387\u81EA\u52D5\u63A8\u4F30"),D("div",{class:"row"},D("label",{},"\u6574\u9AD4"),D("input",{type:"range",id:"f-muscle",min:-80,max:150,step:1,value:0,disabled:i.auto?"":!1,oninput:a=>{i.muscle=a.target.value/100,et("#v-muscle").textContent=fs(i.muscle),rn(30)}})),D("div",{class:"val",id:"v-muscle"},fs(0)),D("p",{class:"note"},"\u81EA\u52D5\u6A21\u5F0F\uFF1A\u9AD4\u8102\u7387\u53D6\u5BE6\u6E2C\u503C\uFF0C\u672A\u586B\u6642\u4EE5\u8170\u570D\u8EAB\u9AD8\u6BD4\uFF08RFM\uFF09\u63A8\u4F30\uFF0C\u518D\u7531\u9AD4\u91CD\u53CD\u63A8\u808C\u8089\u91CF\u3002\u95DC\u9589\u5F8C\u53EF\u81EA\u884C\u62D6\u52D5\u3002\u5404\u90E8\u4F4D\u5728\u300C\u808C\u8089\u300D\u9801\u5206\u5225\u8ABF\u6574\uFF1B\u808C\u8179\u589E\u7C97\uFF0C\u808C\u8171\u8207\u8D77\u6B62\u9EDE\u4E0D\u52D5\u3002"),D("h3",{},"\u543B\u5408\u7D50\u679C"),D("div",{id:"fit"}),D("div",{class:"row"},D("button",{class:"btn ghost",onclick:()=>{Object.assign(i,wt.base,{id:i.id,off:i.off}),On(),rn(10)}},"\u56DE\u5230\u57FA\u6E96\u9AD4\u578B"))),et("#f-sex").addEventListener("click",a=>{let l=a.target.closest("button");if(!l)return;let c=i.sex;if(i.sex=l.dataset.v,c!==i.sex){let h=i.sex==="F"?{H:160,W:55,chest:86,waist:70,hip:93}:{...wt.base};Object.assign(i,{H:h.H,W:h.W,chest:h.chest,waist:h.waist,hip:h.hip,bf:0,under:0})}On(),rn(10)});let n=et("#t-muscle");n.append(D("p",{class:"note"},"\u4EE5\u6574\u9AD4\u7A0B\u5EA6\u70BA\u57FA\u6E96\uFF0C\u5404\u90E8\u4F4D\u518D\u52A0\u6E1B\u3002\u53F3\u6B04\u70BA\u8A72\u90E8\u4F4D\u76EE\u524D\u7684\u808C\u8089\u9AD4\u7A4D\uFF08\u5DE6\u53F3\u5408\u8A08\uFF09\u3002"));for(let a=1;a<=10;a++)n.append(D("div",{class:"row"},D("label",{},qi[a]),D("input",{type:"range",id:"g-"+a,min:-50,max:100,step:1,value:0,oninput:l=>{i.off[a]=l.target.value/100,et("#gv-"+a).textContent=(i.off[a]>=0?"+":"")+Math.round(i.off[a]*100)+"%",rn(30)}}),D("span",{class:"gv",id:"gv-"+a},"+0%"),D("span",{class:"gl",id:"gl-"+a},"")));n.append(D("div",{class:"row"},D("button",{class:"btn ghost",onclick:()=>{i.off.fill(0),On(),rn(10)}},"\u5404\u90E8\u4F4D\u6B78\u96F6")));let s=et("#t-layer");s.append(D("label",{class:"chk"},D("input",{type:"checkbox",id:"l-skinon",onchange:a=>ds(a.target.checked?wt.skinLast>.01?wt.skinLast:1:0)}),D("i",{class:"sw",style:"background:"+cc(ie.skin)}),D("b",{},"\u76AE\u819A")),D("div",{class:"row"},D("label",{},"\u4E0D\u900F\u660E\u5EA6"),D("input",{type:"range",id:"l-skin",min:0,max:100,step:1,value:0,oninput:a=>ds(a.target.value/100)}),D("span",{class:"gv",id:"lv-skin"},"0%")),D("p",{class:"note",id:"l-skinnote"},""));for(let[a,l,c]of fc)s.append(D("label",{class:"chk"},D("input",{type:"checkbox",id:"l-"+a,checked:yt.layers[a]?"":!1,onchange:h=>{yt.setLayer(a,h.target.checked),yt.layers.skin>.985&&(ds(0),et("#l-skinnote").textContent="\u76AE\u819A\u539F\u672C\u662F\u4E0D\u900F\u660E\u7684\uFF0C\u6703\u906E\u4F4F\u5167\u90E8\u5716\u5C64\uFF0C\u5DF2\u81EA\u52D5\u79FB\u9664\u76AE\u819A\u3002\u8981\u518D\u770B\u5230\u76AE\u819A\uFF0C\u52FE\u9078\u4E0A\u65B9\u300C\u76AE\u819A\u300D\u6216\u8ABF\u6574\u900F\u660E\u5EA6\u3002"),Mr(null)}}),D("i",{class:"sw",style:"background:"+cc(c)}),l));s.append(D("label",{class:"chk"},D("input",{type:"checkbox",id:"l-outline",checked:"",onchange:a=>yt.setOutline(a.target.checked)}),"\u808C\u8089\u8207\u9AA8\u9ABC\u7684\u5206\u754C\u7DDA"),D("div",{class:"row"},D("label",{},"\u986F\u793A\u7BC4\u570D"),D("div",{class:"seg",id:"l-side"},D("button",{"data-v":"all",class:"on"},"\u5168\u8EAB"),D("button",{"data-v":"R"},"\u53F3\u534A"),D("button",{"data-v":"L"},"\u5DE6\u534A"))),D("div",{class:"row"},D("button",{class:"btn ghost",onclick:()=>{yt.hidden.clear(),yt.isolate=null,yt.rebuild()}},"\u6062\u5FA9\u6240\u6709\u88AB\u96B1\u85CF\u7684\u7D50\u69CB")),D("p",{class:"note"},"\u984F\u8272\uFF1A\u808C\u8179\u7D05\u3001\u808C\u8171\u8207\u8171\u819C\u51B7\u767D\u3001\u9AA8\u9ABC\u7C73\u8272\u3001\u95DC\u7BC0\u8EDF\u9AA8\u85CD\u3001\u97CC\u5E36\u9752\u7DA0\u3001\u95DC\u7BC0\u56CA\u7D2B\u3002\u808C\u8179\u8207\u808C\u8171\u7684\u5206\u754C\u3001\u8D77\u6B62\u9EDE\u4F4D\u7F6E\u7686\u53D6\u81EA\u4F86\u6E90\u6A21\u578B\uFF0C\u975E\u63A8\u7B97\u3002"),D("p",{class:"note"},"\u6A21\u578B\u8CC7\u6599\uFF1A\u201CZ-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0\u201D\uFF1B\u201CBodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan\u201D\u3002\u672C\u5DE5\u5177\u5C0D\u539F\u59CB\u7DB2\u683C\u505A\u4E86\u6E1B\u9762\u8207\u53C3\u6578\u5316\u8B8A\u5F62\uFF0C\u884D\u751F\u7684\u6A21\u578B\u8CC7\u6599\u4F9D\u76F8\u540C\u6388\u6B0A\u91CB\u51FA\u3002\u4F9B\u7814\u7A76\u8207\u6559\u5B78\u53C3\u8003\uFF0C\u975E\u91AB\u7642\u5668\u6750\u3002")),et("#l-side").addEventListener("click",a=>{let l=a.target.closest("button");if(l){for(let c of et("#l-side").children)c.classList.toggle("on",c===l);yt.sideMode=l.dataset.v,yt.rebuild()}}),et("#t-meas").append(D("div",{class:"row tools"},D("button",{class:"btn",id:"tl-dist",onclick:()=>vr("dist")},"\u91CF\u8DDD\u96E2"),D("button",{class:"btn",id:"tl-girth",onclick:()=>vr("girth")},"\u91CF\u570D\u5EA6"),D("button",{class:"btn ghost",onclick:()=>{vr(null),yt.clearMarks(),et("#toolout").textContent=""}},"\u6E05\u9664")),D("div",{class:"val",id:"toolout"}),D("div",{id:"mtable"}),D("p",{class:"note"},"\u7B49\u7D1A A\uFF1A\u76F4\u63A5\u8F38\u5165\u6216\u5DF2\u543B\u5408\u8F38\u5165\u503C\u3002B\uFF1A\u5728\u6A21\u578B\u5E7E\u4F55\u4E0A\u91CF\u5F97\u3002C\uFF1A\u7531\u6A21\u578B\u9AD4\u7A4D\u8207\u5BC6\u5EA6\u5047\u8A2D\u63A8\u4F30\u3002"),D("div",{class:"row"},D("button",{class:"btn",onclick:Km},"\u532F\u51FA\u91CF\u6E2C CSV"),D("button",{class:"btn",onclick:jm},"\u532F\u51FA\u500B\u6848 JSON"),D("button",{class:"btn",onclick:Qm},"\u532F\u51FA\u756B\u9762 PNG"))),et("#t-list").append(D("div",{class:"row"},D("input",{type:"search",id:"s-q",placeholder:"\u641C\u5C0B\u4E2D\u6587\u6216\u82F1\u6587\u540D\u7A31\uFF0C\u4F8B\uFF1A\u80A1\u76F4\u808C\u3001ACL\u3001patella",oninput:$a}),D("select",{id:"s-t",onchange:$a},D("option",{value:""},"\u5168\u90E8\u985E\u5225"),...[0,1,2,3,5,6,7,8].map(a=>D("option",{value:a},gs[a])))),D("div",{id:"slist"})),$a(),Qa(),tg(),et("#tabs").addEventListener("click",a=>{let l=a.target.closest("button[data-t]");if(l){for(let c of et("#tabs").querySelectorAll("button[data-t]"))c.classList.toggle("on",c===l);for(let c of document.querySelectorAll(".tab"))c.hidden=c.id!=="t-"+l.dataset.t;et("#panel").classList.remove("min")}}),et("#collapse").addEventListener("click",()=>et("#panel").classList.toggle("min")),et("#views").addEventListener("click",a=>{let l=a.target.closest("button");l&&yt.view(l.dataset.v)}),et("#preset").addEventListener("click",a=>{let l=a.target.closest("button");l&&ps(l.dataset.v)});let r=et("#cv"),o=null;r.addEventListener("pointerdown",a=>{o={x:a.clientX,y:a.clientY,t:performance.now(),id:a.pointerId}}),r.addEventListener("pointerup",a=>{if(!o||o.id!==a.pointerId)return;let l=Math.hypot(a.clientX-o.x,a.clientY-o.y),c=performance.now()-o.t;o=null,l<7&&c<500&&gc(a.clientX,a.clientY)}),et("#i-hide").addEventListener("click",()=>{let a=yt.selected;if(a){for(let l of hc(a))yt.hidden.add(l.i);ms(null),yt.rebuild()}}),et("#i-solo").addEventListener("click",()=>{let a=yt.selected;a&&(yt.isolate?(yt.isolate=null,et("#i-solo").textContent="\u53EA\u770B\u9019\u500B"):(yt.isolate=new Set(hc(a).map(l=>l.i)),et("#i-solo").textContent="\u986F\u793A\u5176\u4ED6"),yt.rebuild())}),et("#i-focus").addEventListener("click",()=>yt.selected&&yt.focus(yt.selected)),et("#i-close").addEventListener("click",()=>ms(null))}var hc=i=>Dt.parts.filter(t=>t.en===i.en&&t.t===i.t);function On(){let i=wt.c;for(let t in dc)et("#n-"+t).value=i[t],et("#r-"+t).value=i[t];for(let t of et("#f-sex").children)t.classList.toggle("on",t.dataset.v===i.sex);et("#femnote").hidden=i.sex!=="F",et("#row-under").hidden=i.sex!=="F",et("#n-under").value=i.under>0?i.under:"",document.querySelector("label[for=n-chest]").textContent=i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",et("#p-leg").value=i.leg,et("#pv-leg").textContent=(+i.leg).toFixed(1)+"%",et("#p-arm").value=Math.round(i.arm*100),et("#pv-arm").textContent=Math.round(i.arm*100)+"%",et("#p-shoulder").value=Math.round(i.shoulder*100),et("#pv-shoulder").textContent=Math.round(i.shoulder*100)+"%",et("#f-auto").checked=i.auto,et("#f-muscle").disabled=i.auto,et("#f-muscle").value=Math.round(i.muscle*100),et("#v-muscle").textContent=fs(i.muscle),et("#f-id").value=i.id||"",et("#n-bf").value=i.bf>0?i.bf:"";for(let t=1;t<=10;t++)et("#g-"+t).value=Math.round(i.off[t]*100),et("#gv-"+t).textContent=(i.off[t]>=0?"+":"")+Math.round(i.off[t]*100)+"%"}function ps(i){let t={surface:[1,1,1,1],xray:[.38,1,1,1],muscle:[0,1,1,1],bone:[0,0,0,1]}[i];if(t){yt.layers.muscle=!!t[1],yt.layers.tendon=!!t[2],yt.layers.fascia=!1,yt.layers.bone=!0,yt.layers.cart=!0,yt.layers.lig=!0,yt.layers.eye=i!=="bone",yt.rebuild(),ds(t[0],!0);for(let[e]of fc)et("#l-"+e).checked=!!yt.layers[e];Mr(i)}}function ds(i,t){yt.setSkin(i),i>.01&&(wt.skinLast=i);let e=Math.round(i*100);et("#l-skin").value=e,et("#lv-skin").textContent=e+"%",et("#l-skinon").checked=i>.01,et("#l-skinnote").textContent=i>.985?"\u76AE\u819A\u4E0D\u900F\u660E\u6642\u770B\u4E0D\u5230\u5167\u90E8\uFF1B\u53D6\u6D88\u52FE\u9078\u300C\u76AE\u819A\u300D\u6216\u8ABF\u4F4E\u900F\u660E\u5EA6\uFF0C\u5C31\u80FD\u770B\u5230\u5E95\u4E0B\u7684\u808C\u8089\u8207\u9AA8\u9ABC\u3002":"",t||Mr(null)}function Mr(i){for(let t of et("#preset").children)t.classList.toggle("on",t.dataset.v===i)}function Xm(){let i=wt.c,t=wt.res,e=wt.meas,n=i.W/(i.H/100)**2,s=(c,h,p,d,u)=>{let g=h-p,_=Math.abs(g)<=(d==="kg"?.3:.4);return D("div",{class:"fitrow"+(_?"":" off")},D("span",{},c),D("b",{},re(h)+" "+d),D("span",{class:"dim"},(u||"\u8F38\u5165")+" "+re(p)),D("span",{class:"tag"},_?"\u543B\u5408":(g>0?"+":"")+re(g)))},r=c=>{let h=Math.round((t.kf[c]/t.k0[c]-1)*100);return(h>=0?"+":"")+h+"%"},o=[];Math.abs(t.mass.M-i.W)>.3&&o.push(`\u6A21\u578B\u9AD4\u91CD ${re(t.mass.M)} kg\uFF0C\u8207\u8F38\u5165\u5DEE ${re(t.mass.M-i.W)} kg\uFF1A\u9019\u7D44\u8EAB\u9AD8\u3001\u4E09\u570D\u3001\u9AD4\u91CD\u8207\u808C\u8089\u91CF\u7684\u7D44\u5408\u8D85\u51FA\u53EF\u8ABF\u7BC4\u570D\uFF0C\u4E09\u570D\u512A\u5148\u543B\u5408\u3002`),t.note.g&&o.push(t.note.g<0?"\u808C\u8089\u91CF\u63A8\u4F30\u5DF2\u9054\u4E0B\u9650\u3002":"\u808C\u8089\u91CF\u63A8\u4F30\u5DF2\u9054\u4E0A\u9650\u3002"),t.note.f&&o.push(t.note.f<0?"\u76AE\u4E0B\u8102\u80AA\u5C64\u5DF2\u9054\u4E0B\u9650\u3002":"\u76AE\u4E0B\u8102\u80AA\u5C64\u5DF2\u9054\u4E0A\u9650\u3002"),i.auto&&t.bfPrior!=null&&Math.abs(t.mass.bf-t.bfPrior)>1.5&&o.push(`\u76EE\u6A19\u9AD4\u8102\u7387 ${re(t.bfPrior)}%\uFF08${t.bfSrc}\uFF09\u7121\u6CD5\u5B8C\u5168\u9054\u6210\uFF0C\u6A21\u578B\u70BA ${re(t.mass.bf)}%\u3002`);let a=c=>t.ct&&t.ct.band[c]>.5,l=(c,h)=>D("div",{class:"fitrow"},D("span",{},c),D("b",{},re(h)+" cm"),D("span",{class:"dim"},"\u7531 CT \u6C7A\u5B9A\uFF08\u4EF0\u81E5\uFF09"),D("span",{class:"tag"},"CT"));et("#fit").replaceChildren(a("C")?l(i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",e.chest):s(i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",e.chest,i.chest,"cm"),...i.sex==="F"&&!a("C")?[s("\u4E0B\u80F8\u570D",e.under,t.under,"cm",i.under>0?"\u8F38\u5165":"\u63A8\u4F30")]:[],a("W")?l("\u8170\u570D",e.waist):s("\u8170\u570D",e.waist,i.waist,"cm"),a("H")?l("\u81C0\u570D",e.hip):s("\u81C0\u570D",e.hip,i.hip,"cm"),s("\u9AD4\u91CD",t.mass.M,i.W,"kg"),D("div",{class:"fitrow"},D("span",{},"BMI"),D("b",{},re(n)),D("span",{class:"dim"},"\u9AD4\u8102\u7387"+(i.auto?`\uFF08${t.bfSrc}\uFF09`:"\uFF08\u7531\u9AD4\u91CD\u53CD\u63A8\uFF09")),D("b",{},re(t.mass.bf)+" %")),D("p",{class:"note"},`\u76AE\u4E0B\u8102\u80AA\u5C64\u70BA\u57FA\u6E96\u7684 ${t.f.toFixed(2)} \u500D\uFF1B\u8EC0\u5E79\u5BEC\u6DF1\u76F8\u5C0D\u57FA\u6E96\uFF1A\u80F8\u5ED3 ${r("C")}\u3001\u8179\u90E8 ${r("W")}\u3001\u9AA8\u76C6 ${r("H")}\u3002`+(i.sex==="F"?`\u4E0A\u4E0B\u80F8\u570D\u5DEE ${re(e.chest-e.under)} cm`+(i.under>0?"\u3002":"\uFF08\u4E0B\u80F8\u570D\u70BA\u63A8\u4F30\u503C\uFF09\u3002"):"")+`\u817F\u6BB5 \xD7${t.legScale.toFixed(3)}\u3001\u4E0A\u8EAB \xD7${t.upScale.toFixed(3)}\u3002`),...o.map(c=>D("p",{class:"note warn"},c))),et("#status").textContent=`${i.sex==="F"?"\u5973":"\u7537"}\u3000${re(i.H)} cm\u3000${re(i.W)} kg\u3000\u80F8 ${re(e.chest)}\u3000\u8170 ${re(e.waist)}\u3000\u81C0 ${re(e.hip)}`}function Ka(){let i=wt.c,t=wt.meas,e=wt.res;return[["\u8EAB\u9AD8",i.H,"cm","A","\u8F38\u5165\u503C"],["\u9AD4\u91CD",e.mass.M,"kg",Math.abs(e.mass.M-i.W)<=.3?"A":"C","\u6A21\u578B\u9AD4\u7A4D \xD7 \u7D44\u7E54\u5BC6\u5EA6"],[i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",t.chest,"cm","A","\u4E73\u982D\u9AD8\u5EA6\uFF0C\u4E0D\u542B\u4E0A\u80A2"],...i.sex==="F"?[["\u4E0B\u80F8\u570D",t.under,"cm",i.under>0?"A":"C",i.under>0?"\u4E73\u623F\u4E0B\u7DE3":"\u7531\u8170\u570D\u63A8\u4F30\u5F8C\u5EFA\u6A21"]]:[],["\u8170\u570D",t.waist,"cm","A","\u808B\u4E0B\u7DE3\u8207\u9AC2\u5D74\u4E4B\u9593\u6700\u7D30\u8655"],["\u81C0\u570D",t.hip,"cm","A","\u81C0\u90E8\u6700\u5F8C\u51F8\u8655"],["\u9AD4\u8102\u7387",e.mass.bf,"%",i.auto&&i.bf>0?"A":"C",i.auto?i.bf>0?"\u5BE6\u6E2C\u8F38\u5165":"\u8170\u570D\u8EAB\u9AD8\u6BD4 RFM \u63A8\u4F30":"\u7531\u9AD4\u91CD\u8207\u808C\u8089\u91CF\u53CD\u63A8"],["\u8EAB\u9AD4\u9AD4\u7A4D",e.mass.V,"L","B","\u76AE\u819A\u7DB2\u683C\u9AD4\u7A4D"],["\u808C\u8089\u7E3D\u9AD4\u7A4D",t.muscleVol,"L","B","\u6240\u6709\u808C\u8089\u7DB2\u683C\uFF08\u542B\u808C\u8171\uFF09"],["\u9AA8\u9ABC\u808C\u91CF",t.muscleVol*1.06,"kg","C","\u9AD4\u7A4D \xD7 1.06 kg/L"],["\u4E0A\u81C2\u570D",t.upperArm,"cm","B","\u80A9\u5CF0\u8207\u8098\u4E2D\u9EDE"],["\u524D\u81C2\u570D",t.forearm,"cm","B","\u6700\u7C97\u8655"],["\u5927\u817F\u570D",t.thigh,"cm","B","\u6703\u9670\u8207\u819D\u4E2D\u9EDE"],["\u5C0F\u817F\u570D",t.calf,"cm","B","\u6700\u7C97\u8655"],["\u80A9\u5BEC",t.biacromial,"cm","B","\u5DE6\u53F3\u80A9\u80DB\u9AA8\u6700\u5916\u7DE3"],["\u9AA8\u76C6\u5BEC",t.biiliac,"cm","B","\u5DE6\u53F3\u9AD6\u9AA8\u6700\u5916\u7DE3"],["\u5927\u8F49\u5B50\u9AD8",t.troch,"cm","B","\u817F\u9577"],["\u817F\u9577\u4F54\u8EAB\u9AD8",t.legRatio,"%","A","\u5927\u8F49\u5B50\u9AD8 \xF7 \u8EAB\u9AD8"],["\u6703\u9670\u9AD8",t.crotch,"cm","B",""],["\u4E0A\u8EAB\u9577",t.sitting,"cm","B","\u982D\u9802\u81F3\u5750\u9AA8\uFF0C\u8FD1\u4F3C\u5750\u9AD8"],["\u80A1\u9AA8\u9577",t.femur,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u817F\u9577\u6BD4\u4F8B"],["\u811B\u9AA8\u9577",t.tibia,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u817F\u9577\u6BD4\u4F8B"],["\u80B1\u9AA8\u9577",t.humerus,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u81C2\u9577"],["\u6A48\u9AA8\u9577",t.radius,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u81C2\u9577"]]}function qm(){let i=D("table",{},D("thead",{},D("tr",{},D("th",{},"\u9805\u76EE"),D("th",{},"\u6578\u503C"),D("th",{},"\u7B49\u7D1A"),D("th",{},"\u91CF\u6CD5")))),t=D("tbody");for(let[e,n,s,r,o]of Ka())t.append(D("tr",{},D("td",{},e),D("td",{class:"n"},re(n)+" "+s),D("td",{},D("span",{class:"gr gr"+r},r)),D("td",{class:"dim"},o)));i.append(t),et("#mtable").replaceChildren(i)}function Ym(){let i=wt.meas;for(let t=1;t<=10;t++){let e=et("#gl-"+t);e&&(e.textContent=i.regVol[t].toFixed(2)+" L")}}function $a(){let i=(et("#s-q").value||"").trim().toLowerCase(),t=et("#s-t").value,e=new Map;for(let o of Dt.parts){if(o.t===10||o.t===4||o.t===9||o.t===11||t!==""&&+t!==o.t||i&&!(o.zh.toLowerCase().includes(i)||o.en.toLowerCase().includes(i)))continue;let a=o.t+"|"+o.en;e.has(a)||e.set(a,[]),e.get(a).push(o)}let n={0:0,2:1,5:2,3:3,1:4,6:5,7:6,8:7},s=[...e.values()];i&&s.sort((o,a)=>n[o[0].t]-n[a[0].t]||o[0].zh.length-a[0].zh.length);let r=et("#slist");r.replaceChildren(D("p",{class:"note"},`\u5171 ${s.length} \u9805`+(s.length>120?"\uFF0C\u986F\u793A\u524D 120 \u9805\uFF0C\u8ACB\u8F38\u5165\u95DC\u9375\u5B57\u7E2E\u5C0F\u7BC4\u570D\u3002":"")));for(let o of s.slice(0,120)){let a=o[0];r.append(D("button",{class:"li",onclick:()=>{let l=o.find(c=>c.side===0)||o[0];if(!yt.layers[l.layer]){yt.setLayer(l.layer,!0);let c=et("#l-"+l.layer);c&&(c.checked=!0)}yt.hidden.delete(l.i),yt.rebuild(),ms(l),yt.focus(l)}},D("b",{},a.zh||a.en),D("span",{class:"dim"},a.en),D("span",{class:"tag"},gs[a.t]+(o.length>1?"\u30FB\u5DE6\u53F3":""))))}}function ms(i){yt.select(i),i?mc(i):(et("#info").hidden=!0,yt.isolate&&(yt.isolate=null,yt.rebuild()),et("#i-solo").textContent="\u53EA\u770B\u9019\u500B")}function mc(i){let t=["\u5DE6","\u53F3","\u6B63\u4E2D"][i.side],e=[];if(e.push(["\u985E\u5225",gs[i.t]+(i.t===10?i.kind===1?"\uFF08\u8D77\u9EDE\uFF09":"\uFF08\u6B62\u9EDE\uFF09":"")],["\u5074\u5225",t]),i.grp&&e.push(["\u6240\u5C6C",i.grp]),i.rg&&e.push(["\u8ABF\u6574\u90E8\u4F4D",qi[i.rg]]),[0,1,2,3].includes(i.t)){let n=Dt.partVolume(i),s=i.vol0*Dt.s**3;e.push(["\u9AD4\u7A4D",re(n)+" cm\xB3"+(i.t===0&&Math.abs(n-s)>.05*s?`\uFF08\u57FA\u6E96 ${re(s)}\uFF09`:"")]),e.push(["\u9577\u5EA6",re(i.len0*Dt.s)+" cm"])}et("#i-zh").textContent=i.zh||i.en,et("#i-en").textContent=i.en,et("#i-sum").textContent=[e[0][1],t,i.rg?qi[i.rg]:""].filter(Boolean).join("\u30FB"),et("#i-more").open=innerWidth>=900,et("#i-kv").replaceChildren(...e.map(([n,s])=>D("div",{},D("span",{},n),D("b",{},s)))),et("#info").hidden=!1}function vr(i){wt.tool=wt.tool===i?null:i,wt.pts=[],et("#tl-dist").classList.toggle("on",wt.tool==="dist"),et("#tl-girth").classList.toggle("on",wt.tool==="girth"),wt.tool==="girth"&&yt.layers.skin<.05&&(ds(.38,!0),Mr("xray")),et("#toolout").textContent=wt.tool==="dist"?"\u5728\u6A21\u578B\u4E0A\u9EDE\u5169\u500B\u4F4D\u7F6E\u3002":wt.tool==="girth"?"\u9EDE\u76AE\u819A\u4E0A\u8981\u91CF\u7684\u9AD8\u5EA6\uFF08\u8EC0\u5E79\u3001\u4E0A\u80A2\u6216\u4E0B\u80A2\uFF09\u3002":"",et("#hint").textContent=wt.tool?et("#toolout").textContent:"",et("#hint").hidden=!wt.tool}function gc(i,t){if(wt.tool==="dist"){let n=yt.pick(i,t,!0);if(!n)return;if(wt.pts.length>=2&&(wt.pts=[],yt.clearMarks()),wt.pts.push(n.point),yt.addDot(n.point,16765503),wt.pts.length===2){yt.addLine(wt.pts,16765503);let s=wt.pts[0].distanceTo(wt.pts[1]);et("#toolout").textContent=`\u76F4\u7DDA\u8DDD\u96E2 ${re(s)} cm`,et("#hint").textContent=et("#toolout").textContent}return}if(wt.tool==="girth"){let n=yt.pick(i,t,"only");if(!n)return;let s=Dt.stri,r=Dt.scls,o=Dt.sbase,a=s[n.tri*3],l=Dt.lm,c,h,p=g=>{let _=[];for(let m=0;m<Dt.NTs;m++)g(s[m*3])&&g(s[m*3+1])&&g(s[m*3+2])&&_.push(m);return Uint32Array.from(_)},d=o[a*3]>=0?1:-1;r[a]>=16?(c=p(g=>r[g]>=16&&o[g*3]*d>0),h=(d>0?"\u5DE6":"\u53F3")+"\u4E0A\u80A2"):o[a*3+1]<l.yCrotch-.5?(c=p(g=>r[g]<16&&o[g*3]*d>.3&&o[g*3+1]<l.yCrotch+1),h=(d>0?"\u5DE6":"\u53F3")+"\u4E0B\u80A2"):(c=Dt.bodyTris,h="\u8EC0\u5E79");let u=Dt.girthAt(Dt.spos,c,n.point.y,!0);yt.clearMarks(),u.pts.length&&yt.addLine(u.pts,16765503,!0),et("#toolout").textContent=`${h}\u570D\u5EA6 ${re(u.len)} cm\uFF08\u96E2\u5730 ${re(n.point.y)} cm\uFF0C\u76AE\u5C3A\u91CF\u6CD5\uFF09`,et("#hint").textContent=et("#toolout").textContent;return}let e=yt.pick(i,t,!1);ms(e?e.part:null)}var ja="msk2.cases",br=()=>{try{return JSON.parse(localStorage.getItem(ja)||"{}")}catch{return{}}};function Qa(){let i=br();et("#f-cases").replaceChildren(D("option",{value:""},Object.keys(i).length?"\u9078\u64C7\u500B\u6848\u2026":"\u5C1A\u7121"),...Object.keys(i).sort().map(e=>D("option",{value:e},e)))}function Zm(){let i=wt.c;if(!i.id){et("#f-id").focus();return}let t=br();t[i.id]={...i,off:[...i.off]};try{localStorage.setItem(ja,JSON.stringify(t))}catch{}Qa(),et("#f-cases").value=i.id}function Jm(){let i=et("#f-cases").value,t=br();!i||!t[i]||(Object.assign(wt.c,t[i],{off:[...t[i].off]}),On(),rn(10))}function $m(){let i=et("#f-cases").value,t=br();if(i){delete t[i];try{localStorage.setItem(ja,JSON.stringify(t))}catch{}Qa()}}async function to(i,t){let e=null;try{window.claude&&window.claude.use&&(e=await window.claude.use("downloads"))}catch{e=null}if(e){try{await e.save({filename:i,data:t})}catch{}return}let n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=i,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}var eo=i=>((wt.c.id||"case").replace(/[^\w\-]+/g,"_")||"case")+"."+i;function Km(){let i=[["\u9805\u76EE","\u6578\u503C","\u55AE\u4F4D","\u7B49\u7D1A","\u91CF\u6CD5"],...Ka().map(([t,e,n,s,r])=>[t,re(e),n,s,r])];to(eo("csv"),new Blob(["\uFEFF"+i.map(t=>t.map(e=>'"'+String(e).replace(/"/g,'""')+'"').join(",")).join(`\r
`)],{type:"text/csv"}))}function jm(){let i=wt.res;to(eo("json"),new Blob([JSON.stringify({tool:"\u500B\u6848\u5316\u808C\u9AA8\u6A21\u578B v0.5",source:"Z-Anatomy (CC BY-SA 4.0) / BodyParts3D",case:wt.c,ct:Dt.ct?{applied:Dt.ct.on,scan:Dt.ct.hdr.scan,scaleFromCT:Dt.ct.s_ct,fitErrorCm:Dt.ct.hdr.fit,muscularity:Dt.ct.hdr.g,measurementsSupine:Dt.ct.hdr.meas,segmentation:Dt.ct.hdr.seg_model}:null,solution:{muscle:i.gG,subcutaneousFatFactor:i.f,trunkScale:i.kf,legScale:i.legScale,upperBodyScale:i.upScale,breastProjectionCm:i.A,underbustCm:i.under,bodyFatPrior:i.bfPrior,bodyFatSource:i.bfSrc,mass:i.mass},measurements:Object.fromEntries(Ka().map(([t,e,n,s])=>[t,{value:+re(e),unit:n,grade:s}])),regionMuscleVolumeL:Object.fromEntries(qi.map((t,e)=>[t,+wt.meas.regVol[e].toFixed(3)]).slice(1))},null,2)],{type:"application/json"}))}async function Qm(){to(eo("png"),await yt.png())}Vm();var xe={server:!1,job:null,volSrc:null,show:{"CT \u9AA8\u9ABC":!1,"CT \u9AD4\u8868":!1,"CT \u80BA\u8207\u5FC3\u81DF":!1}};function tg(){let i=et("#t-ct"),t=D("input",{type:"file",webkitdirectory:"",multiple:"",hidden:!0,onchange:n=>uc([...n.target.files])}),e=D("input",{type:"file",multiple:"",accept:".zip,.nii,.gz,.nrrd,.dcm,.mha",hidden:!0,onchange:n=>uc([...n.target.files])});i.append(D("p",{class:"note"},"\u4E0A\u50B3\u80F8\u90E8\uFF08\u6216\u4EFB\u4F55\u90E8\u4F4D\uFF09\u7684 CT\uFF0C\u7CFB\u7D71\u6703\u5206\u5272\u9AA8\u9ABC\u3001\u808C\u8089\u8207\u76AE\u4E0B\u8102\u80AA\uFF0C\u628A\u5F71\u50CF\u7BC4\u570D\u5167\u7684\u9AA8\u9ABC\u5F62\u72C0\u3001\u808C\u8089\u5C64\u8207\u8102\u80AA\u5C64\u539A\u5EA6\u63DB\u6210\u9019\u4F4D\u500B\u6848\u7684\u5BE6\u969B\u503C\uFF0C\u7BC4\u570D\u5916\u6CBF\u7528\u6A21\u677F\u4E26\u5E73\u9806\u929C\u63A5\u3002"),D("div",{id:"ct-up"},D("div",{class:"note warn",id:"ct-srv"},"\u6B63\u5728\u78BA\u8A8D\u5730\u7AEF\u4F3A\u670D\u5668\u2026"),D("div",{class:"row",id:"ct-btns",hidden:!0},t,e,D("button",{class:"btn",onclick:()=>t.click()},"\u9078\u64C7 DICOM \u8CC7\u6599\u593E"),D("button",{class:"btn ghost",onclick:()=>e.click()},"\u9078\u64C7\u6A94\u6848\uFF08zip\uFF0Fnii\uFF0Fnrrd\uFF09")),D("div",{id:"ct-prog",hidden:!0},D("div",{class:"track"},D("div",{id:"ct-bar"})),D("div",{class:"val",id:"ct-step"}),D("pre",{id:"ct-log"}))),D("div",{class:"row"},D("button",{class:"btn ghost",id:"ct-demo",onclick:ig},"\u8F09\u5165\u793A\u7BC4\u500B\u6848\uFF08\u516C\u958B\u80F8\u90E8 CT\uFF09")),D("div",{id:"ct-res",hidden:!0}))}async function eg(){let i=!1;try{let t=await fetch("api/health",{cache:"no-store"});i=t.ok&&(await t.json()).ok}catch{i=!1}xe.server=i,et("#ct-srv").textContent=i?"\u5DF2\u9023\u4E0A\u5730\u7AEF\u4F3A\u670D\u5668\u3002\u5F71\u50CF\u53EA\u5728\u9019\u53F0\u4F3A\u670D\u5668\u4E0A\u8655\u7406\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u5916\u90E8\u3002":"\u76EE\u524D\u4E0D\u662F\u5F9E\u5730\u7AEF\u4F3A\u670D\u5668\u958B\u555F\uFF0C\u7121\u6CD5\u4E0A\u50B3 CT\u3002\u5728\u9662\u5167\u6216\u516C\u53F8\u96FB\u8166\u57F7\u884C server.py \u5F8C\uFF0C\u7528\u700F\u89BD\u5668\u958B http://localhost:8765 \u5373\u53EF\u4E0A\u50B3\uFF1B\u9019\u88E1\u53EF\u4EE5\u5148\u770B\u793A\u7BC4\u500B\u6848\u3002",et("#ct-srv").className=i?"note":"note warn",et("#ct-btns").hidden=!i}function ng(i){let t=[],e=new TextEncoder;for(let n of i){let s=e.encode(n.webkitRelativePath||n.name),r=new ArrayBuffer(4+s.length+8),o=new DataView(r);o.setUint32(0,s.length,!0),new Uint8Array(r,4,s.length).set(s),o.setBigUint64(4+s.length,BigInt(n.size),!0),t.push(r,n)}return new Blob(t)}function ii(i,t,e){et("#ct-prog").hidden=!1,et("#ct-step").textContent=i,et("#ct-bar").style.width=Math.round(t*100)+"%",e&&(et("#ct-log").textContent=e.slice(-8).join(`
`))}function uc(i){if(!i.length)return;let t=i.reduce((n,s)=>n+s.size,0);ii(`\u4E0A\u50B3 ${i.length} \u500B\u6A94\u6848\uFF08${(t/1e6).toFixed(0)} MB\uFF09`,0);let e=new XMLHttpRequest;e.open("POST","api/ct"),e.upload.onprogress=n=>{n.lengthComputable&&ii(`\u4E0A\u50B3\u4E2D ${Math.round(n.loaded/n.total*100)}%`,.1*n.loaded/n.total)},e.onload=()=>{if(e.status!==200){ii("\u4E0A\u50B3\u5931\u6557\uFF1A"+e.responseText.slice(0,200),0);return}xe.job=JSON.parse(e.responseText).id,_c()},e.onerror=()=>ii("\u4E0A\u50B3\u5931\u6557\uFF1A\u7121\u6CD5\u9023\u7DDA\u5230\u4F3A\u670D\u5668",0),e.send(ng(i))}async function _c(){try{let i=await(await fetch("api/ct/"+xe.job,{cache:"no-store"})).json();if(ii(i.state==="error"?"\u8655\u7406\u5931\u6557\uFF1A"+i.error:i.step,i.progress||0,i.log),i.state==="done"){let t=await(await fetch("api/ct/"+xe.job+"/case")).arrayBuffer();await no(t),ii("\u5B8C\u6210",1,i.log);return}i.state!=="error"&&setTimeout(_c,1500)}catch(i){ii("\u9023\u7DDA\u4E2D\u65B7\uFF1A"+i.message,0)}}async function xc(i){let t=new Uint8Array(i);return t[0]!==31||t[1]!==139?i:new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}async function ig(){let i=et("#ct-demo");i.disabled=!0,i.textContent="\u8F09\u5165\u793A\u7BC4\u500B\u6848\u2026";try{window.__CT_DEMO||await new Promise((n,s)=>{let r=document.createElement("script");r.src="ct-demo.js",r.onload=n,r.onerror=()=>s(new Error("\u627E\u4E0D\u5230\u793A\u7BC4\u8CC7\u6599")),document.head.appendChild(r)});let t=window.__CT_DEMO.map(atob).join(""),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);await no(e.buffer,!0)}catch(t){sg(t.message)}i.disabled=!1,i.textContent="\u8F09\u5165\u793A\u7BC4\u500B\u6848\uFF08\u516C\u958B\u80F8\u90E8 CT\uFF09"}function sg(i){et("#ct-res").hidden=!1,et("#ct-res").replaceChildren(D("p",{class:"note warn"},i))}async function no(i,t){xe.volSrc=t?"demo":xe.job?"api/ct/"+xe.job+"/volume":null,Ze&&(Ze.close(),Ze.vol=null);let e=Dt.setCT(await xc(i)),n=e.hdr,s=wt.c;yt.setOverlays(e.ov);for(let o in xe.show)yt.showOverlay(o,xe.show[o]);s.legAuto=!0,s.sex=(n.scan.sex||"").toUpperCase().slice(0,1)==="M"?"M":(n.scan.sex||"").toUpperCase().startsWith("F")?"F":s.sex;let r=s.H;s.H=Math.round(e.s_ct*Dt.lm.H0),s.W=Math.round(s.W*(s.H/r)**2),s.auto=!0,xe.demo=!!t,xe.Hest=s.H,On(),et("#p-leg").disabled=!0,si(),og(),ps("xray")}async function rg(){if(!Ze.vol){let i=et("#ctv-open"),t=et("#ctv-msg");i.disabled=!0,t.textContent="\u8F09\u5165\u5F71\u50CF\u2026";try{let e;if(xe.volSrc==="demo"){window.__CT_DEMO_VOL||await new Promise((r,o)=>{let a=document.createElement("script");a.src="ct-demo-vol.js",a.onload=r,a.onerror=()=>o(new Error("\u627E\u4E0D\u5230\u793A\u7BC4\u5F71\u50CF")),document.head.appendChild(a)});let n=window.__CT_DEMO_VOL.map(atob).join(""),s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);e=s.buffer}else{let n=await fetch(xe.volSrc);if(!n.ok)throw new Error("\u4F3A\u670D\u5668\u6C92\u6709\u9019\u7B46\u5F71\u50CF\uFF08\u53EF\u80FD\u5DF2\u903E\u6642\u522A\u9664\uFF09");e=await n.arrayBuffer()}Ze.load(await xc(e)),t.textContent=""}catch(e){t.textContent=e.message,i.disabled=!1;return}i.disabled=!1}Ze.open(),yt.layers.skin>.5&&ps("xray")}function ag(){Ze&&(Ze.close(),Ze.vol=null),Dt.setCT(null),yt.setOverlays(null),wt.c.legAuto=!1,wt.c.leg=Math.round(Dt.r0*1e3)/10,et("#p-leg").disabled=!1,On(),si(),et("#ct-res").hidden=!0}function og(){let i=Dt.ct;if(!i)return;let t=i.hdr,e=t.scan,n=t.meas,s=t.fit,r=t.g||{},o=u=>u==null?"\u2014":(u*10).toFixed(1),a=u=>{let g=s.bones.filter(_=>u.test(_.name)&&!_.partial);return g.length?[g.length,g.reduce((_,m)=>_+m.mean,0)/g.length,Math.max(...g.map(_=>_.p95))]:null},l=[["\u80F8\u8170\u690E",a(/^vertebrae_/)],["\u808B\u9AA8",a(/^rib_/)],["\u80F8\u9AA8",a(/^sternum/)],["\u9396\u9AA8\u8207\u80A9\u80DB\u9AA8",a(/^(clavicula|scapula)/)]].filter(u=>u[1]),c=(u,g)=>D("table",{},D("thead",{},D("tr",{},...u.map(_=>D("th",{},_)))),D("tbody",{},...g.map(_=>D("tr",{},..._.map((m,f)=>D("td",{class:f?"n":""},m==null?"\u2014":String(m))))))),h=["T4","T8","T12","L1"].filter(u=>n[u]),p=u=>D("label",{class:"chk"},D("input",{type:"checkbox",checked:xe.show[u]?"":!1,onchange:g=>{xe.show[u]=g.target.checked,yt.showOverlay(u,g.target.checked)}}),u+"\u758A\u5716"),d=r.all==null?"\u7121\u6CD5\u63A8\u4F30":fs(r.all).replace(/^\S+\s/,"")+`\uFF08${r.all>=0?"+":""}${Math.round(r.all*100)}%\uFF09`;et("#ct-res").hidden=!1,et("#ct-res").replaceChildren(D("h3",{},xe.demo?"\u793A\u7BC4\u500B\u6848\uFF083D Slicer \u7BC4\u4F8B\uFF1A\u80F8\u8179\u90E8 CT \u8840\u7BA1\u651D\u5F71\uFF09":"\u500B\u6848 CT"),D("div",{class:"note"},`\u5F71\u50CF ${e.size.join("\xD7")}\uFF0C\u9593\u8DDD ${e.spacing.join("\xD7")} mm\uFF1B\u6DB5\u84CB ${n.levels?n.levels.join("\u2013"):"\u2014"}\uFF1B\u5206\u5272 ${t.seg_model}\uFF1B\u8655\u7406 ${t.seconds} \u79D2\u3002${t.demo?"\u793A\u7BC4\u8CC7\u6599\uFF1A"+t.source+"\u3002":""}`),D("div",{class:"note"+(t.arms_down?"":" warn")},t.arms_down?"\u4E0A\u81C2\u81EA\u7136\u4E0B\u5782\uFF1A\u80A9\u80DB\u9AA8\u3001\u9396\u9AA8\u4E00\u4F75\u4F9D CT \u64EC\u5408\u3002":"\u4E0A\u81C2\u4E0A\u8209\u6216\u4E0D\u5728\u5F71\u50CF\u5167\uFF1A\u80A9\u5E36\u8207\u4E0A\u81C2\u6CBF\u7528\u6A21\u677F\uFF0C\u80F8\u58C1\u808C\u8089\u88AB\u62C9\u9577\uFF0C\u539A\u5EA6\u8207\u808C\u8089\u91CF\u63A8\u4F30\u53EF\u80FD\u504F\u4F4E\u3002"),D("div",{class:"row"},D("button",{class:"btn",id:"ctv-open",disabled:xe.volSrc?!1:"",onclick:rg},"\u958B\u555F CT \u5F71\u50CF\u6AA2\u8996\u5668"),D("span",{class:"dim",id:"ctv-msg"},xe.volSrc?"":"\uFF08\u6B64\u500B\u6848\u6C92\u6709\u5F71\u50CF\u8CC7\u6599\uFF09")),D("label",{class:"chk"},D("input",{type:"checkbox",checked:i.on?"":!1,onchange:u=>{i.on=u.target.checked,lg(),si(),yt.placeOverlays()}}),"\u5957\u7528 CT \u5F62\u72C0\uFF08\u53D6\u6D88\u53EF\u5C0D\u7167\u6A21\u677F\uFF09"),p("CT \u9AA8\u9ABC"),p("CT \u9AD4\u8868"),p("CT \u80BA\u8207\u5FC3\u81DF"),D("p",{class:"note"},`\u8EAB\u9AD8\u9810\u8A2D\u70BA\u7531\u80F8\u5ED3\u5927\u5C0F\u63A8\u4F30\u7684 ${xe.Hest} cm\u3001\u9AD4\u91CD\u4F9D\u539F BMI \u63DB\u7B97\uFF0C\u8ACB\u6539\u6210\u5BE6\u6E2C\u503C\uFF1B\u817F\u9577\u6BD4\u4F8B\u7531 CT \u7684\u4E0A\u8EAB\u6BD4\u4F8B\u63A8\u7B97\u3002\u808C\u8089\u767C\u9054\u7A0B\u5EA6\uFF08CT \u7BC4\u570D\u5916\u6CBF\u7528\uFF09\uFF1A${d}\u3002`),D("h3",{},"\u64EC\u5408\u8AA4\u5DEE\uFF08\u6A21\u578B\u8868\u9762\u5230 CT \u8868\u9762\uFF0Cmm\uFF09"),c(["\u7D50\u69CB","\u4EF6\u6578","\u5E73\u5747","P95"],[...l.map(([u,g])=>[u,g[0],o(g[1]),o(g[2])]),["\u9AD4\u8868","",o(s.skin_mean),o(s.skin_p95)]]),D("p",{class:"note"},`\u5C04\u7DDA\u6709\u6548\u6BD4\u4F8B\uFF1A\u76AE\u4E0B\u8102\u80AA\u5C64 ${Math.round(s.rays_fat*100)}%\u3001\u808C\u8089\u5C64 ${Math.round(s.rays_muscle*100)}%\u3002\u7121\u6548\u7684\u4F4D\u7F6E\uFF08\u4F8B\u5982\u4E0A\u81C2\u4E0A\u8209\u7684\u80A9\u90E8\u3001\u5F71\u50CF\u908A\u7DE3\uFF09\u6703\u8F03\u591A\u6CBF\u7528\u6A21\u677F\u3002`),D("h3",{},"CT \u5BE6\u6E2C\uFF08\u4EF0\u81E5\uFF09"),c(["\u690E\u9AD4\u9AD8\u5EA6",...h],[["\u9AA8\u9ABC\u808C\u9762\u7A4D cm\xB2",...h.map(u=>n[u].muscle_cm2)],["\u9AA8\u9ABC\u808C\u5E73\u5747 HU",...h.map(u=>n[u].muscle_hu)],["\u8C4E\u810A\u808C\u9762\u7A4D cm\xB2",...h.map(u=>n[u].erector_cm2)],["\u8C4E\u810A\u808C\u5E73\u5747 HU",...h.map(u=>n[u].erector_hu)],["\u76AE\u4E0B\u8102\u80AA\u9762\u7A4D cm\xB2",...h.map(u=>n[u].subq_fat_cm2)],["\u80F8\u5ED3\u5BEC cm",...h.map(u=>n[u].ribcage_width_cm)],["\u80F8\u5ED3\u524D\u5F8C\u5F91 cm",...h.map(u=>n[u].ribcage_depth_cm)]]),D("p",{class:"note"},`\u76AE\u4E0B\u8102\u80AA\u539A\u5EA6\uFF08\u4E2D\u4F4D\u6578\uFF0Cmm\uFF09\uFF1A\u524D ${n.subq_mm.anterior??"\u2014"}\u3001\u5F8C ${n.subq_mm.posterior??"\u2014"}\u3001\u5DE6 ${n.subq_mm.left??"\u2014"}\u3001\u53F3 ${n.subq_mm.right??"\u2014"}\u3002\u9AA8\u9ABC\u808C\u4EE5 \u221229\uFF5E150 HU\u3001\u8102\u80AA\u4EE5 \u2212190\uFF5E\u221230 HU \u5224\u5B9A\uFF0C\u5DF2\u6392\u9664\u80F8\u8154\u8207\u8179\u8154\u5167\u5BB9\u7269\u3002`),D("div",{class:"row"},D("button",{class:"btn ghost",onclick:ag},"\u79FB\u9664 CT")))}function lg(){let i=Dt.ctOn();wt.c.legAuto=!!i,et("#p-leg").disabled=!!i,i||(wt.c.leg=Math.round(Dt.r0*1e3)/10,On())}})();
