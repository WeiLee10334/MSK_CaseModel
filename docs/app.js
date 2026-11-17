(()=>{var cs={0:"\u808C\u8089",1:"\u808C\u8171\uFF0F\u8171\u819C\uFF0F\u652F\u6301\u5E36",7:"\u6DF1\u7B4B\u819C",2:"\u9AA8\u9ABC",3:"\u8EDF\u9AA8",4:"\u7259\u9F52",9:"\u773C\u7403",5:"\u97CC\u5E36",6:"\u95DC\u7BC0\u56CA",8:"\u6ED1\u6DB2\u56CA\uFF0F\u8171\u9798",10:"\u808C\u8089\u9644\u8457\u5340",11:"\u6BDB\u9AEE"},Uc={0:"muscle",1:"tendon",7:"fascia",2:"bone",3:"cart",4:"bone",9:"eye",5:"lig",6:"bursa",8:"bursa",10:"ins",11:"hair"},Bi=["","\u9838\u90E8","\u80A9\u90E8","\u80F8\u90E8","\u80CC\u90E8","\u8179\u90E8","\u4E0A\u81C2","\u524D\u81C2","\u81C0\u90E8","\u5927\u817F","\u5C0F\u817F"],Je=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Ne=4,Ke=760,wn=2.2,Ve=2;async function fo(i){window.__MODEL_B64||await new Promise(s=>{let r=document.createElement("script");r.src="model.js",r.onload=s,r.onerror=s,document.head.appendChild(r)});let t;if(window.__MODEL_B64){let s=window.__MODEL_B64,r=0,o=s.map(c=>{let h=atob(c);return r+=h.length,h}),a=new Uint8Array(r),l=0;for(let c of o){for(let h=0;h<c.length;h++)a[l+h]=c.charCodeAt(h);l+=c.length}window.__MODEL_B64=null,t=new Blob([a]),i&&i(1)}else{let s=await fetch("model.bin");if(!s.ok)throw new Error("\u6A21\u578B\u8CC7\u6599\u4E0B\u8F09\u5931\u6557\uFF08"+s.status+"\uFF09");t=await s.blob(),i&&i(1)}window.__PATCH||await new Promise(s=>{let r=document.createElement("script");r.src="patches.js",r.onload=s,r.onerror=s,document.head.appendChild(r)});let e=new Uint8Array(await t.slice(0,2).arrayBuffer()),n=e[0]===31&&e[1]===139?await new Response(t.stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():await t.arrayBuffer();return new wr(n,window.__PATCH||null)}var wr=class{constructor(t,e){let s=new DataView(t).getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s)));this.meta=r;let o=this.lm=r.lm,a=4+s,l=(P,O)=>{let Y=new P(t,a,O);return a=a+O*P.BYTES_PER_ELEMENT+3&-4,Y},c=this.NV=r.NV,h=this.NT=r.NT,d=this.NVd=r.NVd,u=this.NS=r.NS,p=this.NTs=r.NTs,g=l(Uint16Array,c*3),_=l(Uint16Array,h*3);this.F=l(Int8Array,d*3),this.VRG=l(Uint8Array,d),this.MIX=l(Uint8Array,c);let m=l(Uint16Array,u*3),f=l(Uint16Array,p*3),y=l(Int8Array,u*3),x=l(Int8Array,u*3),b=l(Int8Array,u*3),S=l(Uint8Array,u);this.scls=l(Uint8Array,u),this.srg=l(Uint8Array,u);let E=l(Uint8Array,u),C=l(Int8Array,u*3),k=l(Uint8Array,u);this.VRG2=l(Uint8Array,d),this.VFR=l(Uint8Array,d),this.srg2=l(Uint8Array,u),this.sfr=l(Uint8Array,u);let M=r.bmin,A=r.bsz,N=(P,O)=>{let Y=new Float32Array(O*3);for(let K=0;K<O*3;K++)Y[K]=M[K%3]+P[K]/65535*A[K%3];return Y},D=(P,O)=>{let Y=new Float32Array(P.length);for(let K=0;K<P.length;K++)Y[K]=P[K]*O;return Y};this.base=N(g,c),this.sbase=N(m,u),this.fk=r.inflScale/127,this.sn=D(y,1/127);for(let P=0;P<u;P++){let O=Math.hypot(this.sn[P*3],this.sn[P*3+1],this.sn[P*3+2])||1;this.sn[P*3]/=O,this.sn[P*3+1]/=O,this.sn[P*3+2]/=O}this.sF=D(x,this.fk),this.sFem=D(b,r.femScale/127),this.tb=D(S,r.tbScale),this.sgap=D(E,.02),this.sSm=D(C,r.smScale/127),this.sSmN=new Float32Array(u);for(let P=0;P<u;P++){let O=P*3,Y=this.sSm[O]*this.sn[O]+this.sSm[O+1]*this.sn[O+1]+this.sSm[O+2]*this.sn[O+2];this.sSmN[P]=Y,this.sSm[O]-=Y*this.sn[O],this.sSm[O+1]-=Y*this.sn[O+1],this.sSm[O+2]-=Y*this.sn[O+2]}this.stri=new Uint32Array(p*3),this.stri.set(f);{let P=new Uint32Array(u+1);for(let K=0;K<p*3;K++)P[this.stri[K]+1]+=2;for(let K=0;K<u;K++)P[K+1]+=P[K];let O=new Uint32Array(P[u]),Y=P.slice(0,u);for(let K=0;K<p;K++){let H=this.stri[K*3],tt=this.stri[K*3+1],ht=this.stri[K*3+2];O[Y[H]++]=tt,O[Y[H]++]=ht,O[Y[tt]++]=ht,O[Y[tt]++]=H,O[Y[ht]++]=H,O[Y[ht]++]=tt}this.sAdj={ptr:P,nb:O}}this.lw=new Float32Array(u);for(let P=0;P<u;P++)this.lw[P]=this.scls[P]&8?0:1;this.lw=this.smoothS(this.lw,4);{let P=new Map;for(let K=0;K<p;K++)for(let H=0;H<3;H++){let tt=this.stri[K*3+H],ht=this.stri[K*3+(H+1)%3],Mt=tt<ht?tt*u+ht:ht*u+tt;P.set(Mt,(P.get(Mt)||0)+1)}let O=new Float32Array(u);for(let[K,H]of P)H===1&&(O[Math.floor(K/u)]=1,O[K%u]=1);let Y=this.smoothS(O,3);for(let K=0;K<u;K++){let H=Math.max(0,1-3*Y[K]);this.sSmN[K]*=H,this.sSm[K*3]*=H,this.sSm[K*3+1]*=H,this.sSm[K*3+2]*=H}}this.parts=r.parts.map((P,O)=>({i:O,t:P[0],side:P[1],v0:P[2],nv:P[3],t0:P[4],nt:P[5],rg:P[6],kind:P[7]&3,seg:P[7]>>2&1,en:P[8],zh:P[9],grp:P[10],vol0:P[12],len0:P[13],layer:Uc[P[0]],male:P[7]>>3&1})),this.idx=new Uint32Array(h*3);for(let P of this.parts)for(let O=P.t0*3,Y=(P.t0+P.nt)*3;O<Y;O++)this.idx[O]=_[O]+P.v0;this.pos=new Float32Array(c*3),this.nrm=new Float32Array(c*3),this.spos=new Float32Array(u*3),this.snrm=new Float32Array(u*3),this.box=new Float32Array(this.parts.length*6);let j=o.shoulder[0],L=(P,O)=>Je(j-1,j+2,Math.abs(P))*Je(o.yChest-8,o.yChest-2,O);this.armW=new Float32Array(c);for(let P of this.parts)for(let O=P.v0;O<P.v0+P.nv;O++)this.armW[O]=P.seg?1:L(this.base[O*3],this.base[O*3+1]);this.sarmW=D(k,1/255),this.addPatches(e);let U=P=>{let O=new Float32Array(Ke+1);for(let Y=0;Y<=Ke;Y++)O[Y]=P(Y/Ne);return O};this.ZS=U(P=>ho(o.zs,P)),this.LEGW=U(P=>Je(o.hipJ[1]-2,o.hipJ[1]-12,P)),this.SX=U(()=>1),this.SZ=U(()=>1),this.YM=U(P=>P);let z=[o.wrist3[0]-o.shoulder3[0],o.wrist3[1]-o.shoulder3[1],o.wrist3[2]-o.shoulder3[2]],J=Math.hypot(z[0],z[1],z[2]);this.armU=z.map(P=>P/J),this.r0=o.yTroch/o.H0,this.pr={leg:this.r0,arm:1,shoulder:1},this.g=new Float32Array(11),this.gSex=new Array(11).fill(0),this.s=1,this.f=1,this.A=0,this.kf={C:1,W:1,H:1},this.sex="M",this.tbEff=new Float32Array(this.NSall),this.bump=new Float32Array(this.NSall*3),this.setSex("M");let X=[];for(let P=0;P<p;P++){let O=this.stri[P*3],Y=this.stri[P*3+1],K=this.stri[P*3+2];this.scls[O]<16&&this.scls[Y]<16&&this.scls[K]<16&&X.push(P)}this.bodyTris=Uint32Array.from(X),this.band={};for(let[P,O]of[["C",o.yChest],["U",o.yUnder],["W",o.yWaist],["H",o.yHip]])this.band[P]=this.makeBand(this.bodyTris,O,9);this.brY&&(this.band.B=this.makeBand(this.bodyTris,this.brY,9),this.band.UF=this.makeBand(this.bodyTris,this.brY-8,9)),this.hull=new Float32Array(4e4),this.buildLUT()}makeBand(t,e,n){let s=[],r=new Set,o=this.sbase,a=this.stri;for(let l of t){let c=a[l*3],h=a[l*3+1],d=a[l*3+2],u=Math.min(o[c*3+1],o[h*3+1],o[d*3+1]);Math.max(o[c*3+1],o[h*3+1],o[d*3+1])>e-n&&u<e+n&&(s.push(l),r.add(c),r.add(h),r.add(d))}return{tris:Uint32Array.from(s),verts:Uint32Array.from(r),y:e}}addPatches(t){let e=this.NS,n=t&&t.NS===e?t.verts.length/3:0,s=this.NSall=e+n,r=(u,p,g)=>{let _=new u.constructor(s*p);if(_.set(u),n)for(let m=0;m<n;m++)for(let f=0;f<p;f++)_[(e+m)*p+f]=g(m,f);return _},o=t?t.interp:[],a=(u,p)=>(g,_)=>{let m=0;for(let[f,y]of o[g])m+=u[f*p+_]*y;return m},l=u=>p=>{let g=o[p][0];for(let _ of o[p])_[1]>g[1]&&(g=_);return u[g[0]]};this.sbase=r(this.sbase,3,(u,p)=>t.verts[u*3+p]),this.sn=r(this.sn,3,a(this.sn,3));for(let u=e;u<s;u++){let p=Math.hypot(this.sn[u*3],this.sn[u*3+1],this.sn[u*3+2])||1;for(let g=0;g<3;g++)this.sn[u*3+g]/=p}if(t&&t.femDisp)for(let[u,p,g,_]of t.femDisp)this.sFem[u*3]=p,this.sFem[u*3+1]=g,this.sFem[u*3+2]=_;if(this.sF=r(this.sF,3,a(this.sF,3)),this.sFem=r(this.sFem,3,()=>0),this.tb=r(this.tb,1,a(this.tb,1)),this.sgap=r(this.sgap,1,a(this.sgap,1)),this.sSm=r(this.sSm,3,a(this.sSm,3)),this.sSmN=r(this.sSmN,1,a(this.sSmN,1)),this.sarmW=r(this.sarmW,1,a(this.sarmW,1)),this.lw=r(this.lw,1,a(this.lw,1)),this.scls=r(this.scls,1,l(this.scls)),this.srg=r(this.srg,1,l(this.srg)),this.srg2=r(this.srg2,1,l(this.srg2)),this.sfr=r(this.sfr,1,u=>Math.round(a(this.sfr,1)(u,0))),this.spos=new Float32Array(s*3),this.snrm=new Float32Array(s*3),this.clear=new Float32Array(s),t&&t.clear)for(let[u,p]of t.clear)u<s&&(this.clear[u]=p);if(this.brRow=null,this.brM=null,this.brY=0,this.brNip=-1,t&&t.breast){let u=t.breast;this.brRow=new Int32Array(s).fill(-1),u.idx.forEach((p,g)=>{p<s&&(this.brRow[p]=g)}),this.brM=[Float32Array.from(u.m0),Float32Array.from(u.m5),Float32Array.from(u.m1)],this.brY=u.bandY,this.brNip=u.nipRow,this.brTips=u.tips||null}if(this.femV=null,t&&t.femDispV&&t.femDispV.length){this.femV=new Float32Array(this.NV*3);for(let[u,p,g,_]of t.femDispV)this.femV[u*3]=p,this.femV[u*3+1]=g,this.femV[u*3+2]=_}if(this.pInterp=o,this.scolM=new Float32Array(s*3).fill(1),this.scolF=new Float32Array(s*3).fill(1),this.skinTriF=null,!n)return;let c=new Uint8Array(this.NTs);for(let u of t.removeTris)c[u]=1;let h=[];for(let u=0;u<this.NTs;u++)c[u]||h.push(this.stri[u*3],this.stri[u*3+1],this.stri[u*3+2]);this.skinTriF=Uint32Array.from(h.concat(t.tris));let d=[.8,.64,.6];for(let u=0;u<n;u++){let p=t.areola[u];for(let g=0;g<3;g++)this.scolF[(e+u)*3+g]=1+(d[g]-1)*p}}extS(t,e){if(this.NSall===this.NS)return t;let n=new Float32Array(this.NSall*e);n.set(t);for(let s=0;s<this.pInterp.length;s++)for(let r=0;r<e;r++){let o=0;for(let[a,l]of this.pInterp[s])o+=t[a*e+r]*l;n[(this.NS+s)*e+r]=o}return n}skinTris(){return this.sex==="F"&&this.skinTriF?this.skinTriF:this.stri}smoothS(t,e){let{ptr:n,nb:s}=this.sAdj,r=t,o=new Float32Array(t.length);for(let a=0;a<e;a++){for(let l=0;l<t.length;l++){let c=0,h=n[l+1];for(let d=n[l];d<h;d++)c+=r[s[d]];o[l]=h>n[l]?.5*r[l]+.5*c/(h-n[l]):r[l]}[r,o]=[o,r]}return r}setSex(t){this.sex=t;let e=this.lm,n=t==="F",s=this.NSall,r=this.sbase,o=this.sn,a=e.nipple,c=[[e.yAnkle+3,.2,.2],[e.yKnee-8,.45,.55],[e.yKnee+6,.6,.85],[e.yCrotch-12,.8,1.2],[e.yHip,.95,1.3],[e.yWaist,1,.95],[e.yChest-6,.9,.9],[e.yChest+4,.75,.85],[e.shoulder[1]+4,.4,.4]].map(h=>[h[0],n?h[2]:h[1]]);for(let h=0;h<s;h++){let d=this.scls[h],u=r[h*3+1],p;if(d&8)p=.1;else if((d&7)===5)p=.3;else if((d&7)===1||(d&7)===2)p=u>e.yElbow?.75:.45;else{p=ho(c,u);let g=Je(e.yHip-4,e.yHip+6,u)*(1-Je(e.yChest-12,e.yChest-4,u));p*=1+g*((n?.25:.45)*Math.max(0,o[h*3+2])+.2*Math.abs(o[h*3]))}this.tbEff[h]=p*(.5*Math.min(2,Math.max(.3,this.tb[h]))+.4);for(let g=0;g<3;g++)this.bump[h*3+g]=n?this.sFem[h*3+g]:0}this.k0=n?{C:.88,W:.92,H:1.05,S:1}:{C:1,W:1,H:1,S:1},this.gSex=n?[0,-.3,-.45,-.5,-.45,-.3,-.45,-.4,-.15,-.25,-.25]:new Array(11).fill(0),this.phi0=n?.33:.25,this.air=n?1.9:2.4,this.kf={C:this.k0.C,W:this.k0.W,H:this.k0.H},this.A=0}setProportions(t){this.pr={leg:t.leg||this.r0,arm:t.arm||1,shoulder:t.shoulder||1}}buildLUT(){let t=this.lm,e=this.kf,n=this.k0,s=t.shoulder[1],r=(1+.7*(e.C/n.C-1))*n.S*this.pr.shoulder,o=this.sex==="F"&&this.band.UF?this.band.UF.y:t.yUnder,a=[[t.yHip,e.H],[t.yWaist,e.W],[o,e.C],[t.yChest,e.C],[s,r],[s+9,1]],l=[[t.yHip,1+(e.H-1)*.6],[t.yWaist,1+(e.W-1)*1.15],[o,1+(e.C-1)*.9],[t.yChest,1+(e.C-1)*.9],[s,1+(r-1)*.4],[s+9,1]],c=t.H0,h=t.hipJ[1],d=S=>Je(h-2,h+8,S),u=0,p=0,g=Math.round(c*Ne),_=Math.round(t.yTroch*Ne);for(let S=0;S<g;S++){let E=d((S+.5)/Ne)/Ne;u+=E,S<_&&(p+=E)}let m=c-u,f=t.yTroch-p,y=(this.pr.leg*c-c*p/u)/(f-m*p/u),x=(c-y*m)/u;this.legScale=y,this.upScale=x,this.legK={I0:m,I1:u,T0:f,T1:p};let b=0;this.YM[0]=0;for(let S=0;S<=Ke;S++){let E=S/Ne;if(this.SX[S]=uo(a,E),this.SZ[S]=uo(l,E),S>0){let C=d((S-.5)/Ne);b+=(y+(x-y)*C)/Ne,this.YM[S]=b}}this.sxHip=this.SX[Math.round(h*Ne)],this.sxSh=this.SX[Math.round(s*Ne)],this.yShM=this.ymap(t.shoulder3[1])}ctOn(){return this.ct&&this.ct.on?this.ct:null}anchorWarp(){let t=this.lm,[e,n,s]=this.ct.anchor,r=n*Ne,o=r|0;o<0?o=0:o>=Ke&&(o=Ke-1);let a=this.LEGW[o],l=s-this.ZS[o],c=l>Ve?l-Ve:l<-Ve?.3*(l+Ve):0;return[e,this.YM[o]+(r-o)*(this.YM[o+1]-this.YM[o]),s+(1-a)*(this.SZ[o]-1)*c]}setCT(t){if(!t)return this.ct=null,null;let e=new DataView(t),n=e.getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n)));if(s.NV!==this.NV||s.NS!==this.NS)throw new Error("\u500B\u6848\u6A94\u8207\u76EE\u524D\u6A21\u578B\u7248\u672C\u4E0D\u7B26");let r=4+n,o=(g,_)=>{let m=new g(t,r,_);return r=r+_*g.BYTES_PER_ELEMENT+3&-4,m},a=(g,_)=>{let m=new Float32Array(g.length);for(let f=0;f<g.length;f++)m[f]=g[f]*_;return m},l=a(o(Uint8Array,this.NV),1/255),c=a(o(Int16Array,this.NV*3),.01),h=a(o(Uint8Array,this.NS),1/255),d=a(o(Int16Array,this.NS*3),.01),u=s.overlays.map(g=>({...g,V:a(o(Int16Array,g.nv*3),.01),F:new Uint32Array(o(Uint32Array,g.nt*3))})),p={};for(let g in this.band){let _=0,m=this.band[g].verts;for(let f of m)_+=h[f];p[g]=_/m.length}return this.ct={hdr:s,w:l,u:c,ws:this.extS(h,1),us:this.extS(d,3),ov:u,anchor:s.anchor,s_ct:s.s_ct,band:p,on:!0},this.ct}ymap(t){let e=t*Ne,n=e|0;return n<0?n=0:n>=Ke&&(n=Ke-1),this.YM[n]+(e-n)*(this.YM[n+1]-this.YM[n])}deformSkin(t,e,n){let s=this.lm,r=this.sbase,o=this.sn,a=this.sF,l=this.g,c=this.SX,h=this.SZ,d=this.ZS,u=this.YM,p=this.LEGW,g=this.tbEff,_=this.sgap,m=this.sarmW,f=this.srg,y=this.srg2,x=this.sfr,b=this.bump,S=this.sSm,E=this.sSmN,C=s.shoulder[0],k=s.hipJ[0],M=(this.sxSh-1)*(C-wn),A=(this.sxHip-1)*(k-wn),N=n?this.s:1,D=this.f-1,j=Math.max(this.sex==="F"?.6:0,D>0?Math.min(1,D/1.2)*.85:0),L=this.A,U=s.shoulder3,z=this.armU,J=this.pr.arm-1,X=this.yShM,P=e?e.length:this.NSall,O=s.nipple[0],Y=s.nipple[1],K=this.sxSh,H=C-5,tt=C-.5,ht=s.yChest-10,Mt=s.yChest-3,bt=this.sex==="F"?.18:0,Lt=this.ctOn(),Ut=Lt?Lt.ws:null,Ct=Lt?Lt.us:null,Nt=1/this.s,[G,jt,xt]=Lt?this.anchorWarp():[0,0,0],Tt=this.lw,gt=this.clear,te=this.sex==="F"&&this.brRow&&!this.noBr?this.brRow:null,[At,T,v]=this.cupW(),[V,rt,st]=this.brM||[];for(let it=0;it<P;it++){let mt=e?e[it]:it,at=mt*3,pt=r[at],St=r[at+1],It=r[at+2],Q=g[mt]*D+E[mt]*j;Q<-_[mt]&&(Q=-_[mt]),Q+=bt*Tt[mt]+gt[mt];let kt=x[mt]/255,R=l[f[mt]]*kt+l[y[mt]]*(1-kt),nt=_[mt]>.6?j:j*_[mt]/.6;pt+=o[at]*Q+a[at]*R+b[at]+S[at]*nt,St+=o[at+1]*Q+a[at+1]*R+b[at+1]+S[at+1]*nt,It+=o[at+2]*Q+a[at+2]*R+b[at+2]+S[at+2]*nt;let lt=pt>=0?1:-1,ot=St*Ne,_t=ot|0;_t<0?_t=0:_t>=Ke&&(_t=Ke-1);let Ht=m[mt],Yt=p[_t],zt=pt*lt,dt=zt>wn?zt-wn:0,I=It-d[_t],ut=I>Ve?I-Ve:I<-Ve?.3*(I+Ve):0,ct=c[_t];zt>H&&St>ht&&(ct+=(K-ct)*Je(H,tt,zt)*Je(ht,Mt,St));let Rt=pt+lt*(Yt*A+(1-Yt)*(ct-1)*dt),Et=u[_t]+(ot-_t)*(u[_t+1]-u[_t]),$t=It+(1-Yt)*(h[_t]-1)*ut;if(te&&te[mt]>=0){let Dt=te[mt]*3;Rt+=At*V[Dt]+T*rt[Dt]+v*st[Dt],Et+=At*V[Dt+1]+T*rt[Dt+1]+v*st[Dt+1],$t+=At*V[Dt+2]+T*rt[Dt+2]+v*st[Dt+2]}if(Ht>0){let Dt=((pt-lt*U[0])*z[0]*lt+(St-U[1])*z[1]+(It-U[2])*z[2])*J;Rt+=Ht*(pt+Dt*z[0]*lt+lt*M-Rt),Et+=Ht*(X+(St-U[1])+Dt*z[1]-Et),$t+=Ht*(It+Dt*z[2]-$t)}if(Ut){let Dt=Ut[mt];Dt>0&&(Rt+=Dt*(G+Ct[at]*Nt-Rt),Et+=Dt*(jt+Ct[at+1]*Nt-Et),$t+=Dt*(xt+Ct[at+2]*Nt-$t))}t[at]=Rt*N,t[at+1]=Et*N,t[at+2]=$t*N}}deformStructure(){let t=this.lm,e=this.base,n=this.pos,s=this.F,r=this.VRG,o=this.VRG2,a=this.VFR,l=this.g,c=this.fk,h=this.SX,d=this.SZ,u=this.ZS,p=this.YM,g=this.LEGW,_=this.armW,m=this.NVd,f=this.s,y=this.box,x=t.shoulder[0],b=t.hipJ[0],S=(this.sxSh-1)*(x-wn),E=(this.sxHip-1)*(b-wn),C=t.shoulder3,k=this.armU,M=this.pr.arm-1,A=this.yShM,N=this.sxSh,D=x-5,j=x-.5,L=t.yChest-10,U=t.yChest-3,z=this.ctOn(),J=z?z.w:null,X=z?z.u:null,P=1/f,[O,Y,K]=z?this.anchorWarp():[0,0,0],H=this.sex==="F"?this.femV:null;for(let tt of this.parts){let ht=1e9,Mt=1e9,bt=1e9,Lt=-1e9,Ut=-1e9,Ct=-1e9;for(let Nt=tt.v0,G=tt.v0+tt.nv;Nt<G;Nt++){let jt=Nt*3,xt=e[jt],Tt=e[jt+1],gt=e[jt+2];if(H&&(xt+=H[jt],Tt+=H[jt+1],gt+=H[jt+2]),Nt<m){let Q=a[Nt],kt=(l[r[Nt]]*Q+l[o[Nt]]*(255-Q))*c/255;kt!==0&&(xt+=s[jt]*kt,Tt+=s[jt+1]*kt,gt+=s[jt+2]*kt)}let te=Tt*Ne,At=te|0;At<0?At=0:At>=Ke&&(At=Ke-1);let T=_[Nt],v=g[At],V=xt>=0?1:-1,rt=xt*V,st=rt>wn?rt-wn:0,it=gt-u[At],mt=it>Ve?it-Ve:it<-Ve?.3*(it+Ve):0,at=h[At];rt>D&&Tt>L&&(at+=(N-at)*Je(D,j,rt)*Je(L,U,Tt));let pt=xt+V*(v*E+(1-v)*(at-1)*st),St=p[At]+(te-At)*(p[At+1]-p[At]),It=gt+(1-v)*(d[At]-1)*mt;if(T>0){let Q=((xt-V*C[0])*k[0]*V+(Tt-C[1])*k[1]+(gt-C[2])*k[2])*M;pt+=T*(xt+Q*k[0]*V+V*S-pt),St+=T*(A+(Tt-C[1])+Q*k[1]-St),It+=T*(gt+Q*k[2]-It)}if(J){let Q=J[Nt];Q>0&&(pt+=Q*(O+X[jt]*P-pt),St+=Q*(Y+X[jt+1]*P-St),It+=Q*(K+X[jt+2]*P-It))}xt=pt*f,Tt=St*f,gt=It*f,n[jt]=xt,n[jt+1]=Tt,n[jt+2]=gt,xt<ht&&(ht=xt),xt>Lt&&(Lt=xt),Tt<Mt&&(Mt=Tt),Tt>Ut&&(Ut=Tt),gt<bt&&(bt=gt),gt>Ct&&(Ct=gt)}y.set([ht,Mt,bt,Lt,Ut,Ct],tt.i*6)}}normals(t,e,n,s,r,o,a){n.fill(0,o*3,a*3);for(let l=s*3,c=r*3;l<c;l+=3){let h=e[l]*3,d=e[l+1]*3,u=e[l+2]*3,p=t[d]-t[h],g=t[d+1]-t[h+1],_=t[d+2]-t[h+2],m=t[u]-t[h],f=t[u+1]-t[h+1],y=t[u+2]-t[h+2],x=g*y-_*f,b=_*m-p*y,S=p*f-g*m;n[h]+=x,n[h+1]+=b,n[h+2]+=S,n[d]+=x,n[d+1]+=b,n[d+2]+=S,n[u]+=x,n[u+1]+=b,n[u+2]+=S}for(let l=o*3,c=a*3;l<c;l+=3){let h=Math.hypot(n[l],n[l+1],n[l+2])||1;n[l]/=h,n[l+1]/=h,n[l+2]/=h}}girthAt(t,e,n,s){let r=this.stri,o=this.hull,a=0;for(let g=0;g<e.length;g++){let _=e[g]*3,m=r[_]*3,f=r[_+1]*3,y=r[_+2]*3,x=t[m+1]-n,b=t[f+1]-n,S=t[y+1]-n;if(!(x<0==b<0&&b<0==S<0)){if(x<0!=b<0){let E=x/(x-b);o[a++]=t[m]+E*(t[f]-t[m]),o[a++]=t[m+2]+E*(t[f+2]-t[m+2])}if(b<0!=S<0){let E=b/(b-S);o[a++]=t[f]+E*(t[y]-t[f]),o[a++]=t[f+2]+E*(t[y+2]-t[f+2])}if(S<0!=x<0){let E=S/(S-x);o[a++]=t[y]+E*(t[m]-t[y]),o[a++]=t[y+2]+E*(t[m+2]-t[y+2])}if(a>o.length-8)break}}let l=a/2;if(l<3)return s?{len:0,pts:[]}:0;let c=new Uint32Array(l);for(let g=0;g<l;g++)c[g]=g;c.sort((g,_)=>o[g*2]-o[_*2]||o[g*2+1]-o[_*2+1]);let h=[],d=(g,_,m)=>(o[_*2]-o[g*2])*(o[m*2+1]-o[g*2+1])-(o[_*2+1]-o[g*2+1])*(o[m*2]-o[g*2]);for(let g=0;g<l;g++){for(;h.length>=2&&d(h[h.length-2],h[h.length-1],c[g])<=0;)h.pop();h.push(c[g])}let u=h.length+1;for(let g=l-2;g>=0;g--){for(;h.length>=u&&d(h[h.length-2],h[h.length-1],c[g])<=0;)h.pop();h.push(c[g])}h.pop();let p=0;for(let g=0;g<h.length;g++){let _=h[g],m=h[(g+1)%h.length];p+=Math.hypot(o[_*2]-o[m*2],o[_*2+1]-o[m*2+1])}return s?{len:p,pts:h.map(g=>[o[g*2],n,o[g*2+1]])}:p}skinVolume(t){let e=this.stri,n=0;for(let s=0,r=this.NTs*3;s<r;s+=3){let o=e[s]*3,a=e[s+1]*3,l=e[s+2]*3;n+=t[o]*(t[a+1]*t[l+2]-t[a+2]*t[l+1])-t[o+1]*(t[a]*t[l+2]-t[a+2]*t[l])+t[o+2]*(t[a]*t[l+1]-t[a+1]*t[l])}return Math.abs(n)/6e3}cupW(){let t=Math.min(1,Math.max(-.5,this.A/10));return t<0?[1+2*t,0,0]:t<.5?[1-2*t,2*t,0]:[0,1-(t-.5)*2,(t-.5)*2]}bandY(t){let e=this.ymap(this.band[t].y);if(t==="B"&&this.brNip>=0){let[n,s,r]=this.cupW(),o=this.brNip*3+1,[a,l,c]=this.brM;e+=n*a[o]+s*l[o]+r*c[o]}return e}areolaColor(){if(this.sex!=="F"||!this.brTips)return;let t=this.spos,e=this.NS,n=this.NSall,s=this.scolF,r=[.8,.64,.6],o=this.s,l=(1.8+.5*Math.max(0,Math.min(1,this.A/10)))*o/.94,c=l-.45*o,h=this.brTips.map(d=>[t[d*3],t[d*3+1],t[d*3+2]]);for(let d=e;d<n;d++){let u=t[d*3],p=t[d*3+1],g=t[d*3+2],_=u>=0==h[0][0]>=0?h[0]:h[1],m=Math.hypot(u-_[0],p-_[1],g-_[2]),f=m<=c?1:m>=l?0:1-Je(c,l,m);for(let y=0;y<3;y++)s[d*3+y]=1+(r[y]-1)*f}this.colDirty=!0}bustKey(){return this.sex==="F"&&this.band.B?"B":"C"}underKey(){return this.sex==="F"&&this.band.UF?"UF":"U"}bandGirth(t){let e=this.band[t];return this.noBr=t==="UF",this.deformSkin(this.spos,e.verts,!1),this.noBr=!1,this.girthAt(this.spos,e.tris,this.bandY(t))}setG(t,e){for(let n=1;n<=10;n++)this.g[n]=Math.min(2,Math.max(-.95,(this.gCT?this.gCT[n]:t+this.gSex[n])+(e&&e[n]||0)));this.g[0]=0}solve(t){t.sex!==this.sex&&this.setSex(t.sex);let e=this.ctOn(),n=t.H/this.lm.H0;if(this.setProportions({leg:t.leg,arm:t.arm,shoulder:e?e.s_ct/n*(t.shoulder||1):t.shoulder}),e&&t.legAuto){this.buildLUT();let D=this.legK,j=e.s_ct/n,L=(this.lm.H0-j*D.I1)/D.I0;this.pr.leg=(L*D.T0+j*D.T1)/this.lm.H0}let s=D=>e&&e.band[D]>.5,r=this.s=t.H/this.lm.H0,o=r**3,a=this.k0,l=this.air,c=this.phi0,h=t.sex==="F",d=h?t.under>0?t.under:Math.min(t.chest-7,Math.max(t.chest-22,.5*(.75*t.waist+22)+.5*(t.chest-13))):0,u={C:t.chest/r,U:d/r,W:t.waist/r,H:t.hip/r};u.B=u.C,u.UF=u.U;let p=t.W/o,g={},_=()=>(this.deformSkin(this.spos,null,!1),this.skinVolume(this.spos)),m=(D,j,L,U,z)=>{let J=D(),X=NaN;this.buildLUT();let P=this.bandGirth(L);for(let O=0;O<7&&Math.abs(P-u[L])>.02;O++){let Y=isFinite(X)&&Math.abs(X)>1e-6?J+(u[L]-P)/X:J*(1+1.15*(u[L]/P-1));if(Y=Math.min(z,Math.max(U,Y)),Y===J)break;j(Y),this.buildLUT();let K=this.bandGirth(L);X=(K-P)/(Y-J),J=Y,P=K}},f=()=>{for(let D of["H","W"])s(D)||m(()=>this.kf[D],j=>{this.kf[D]=j},D,.55*a[D],1.9*a[D]);if(s("C"))this.A=0,this.kf.C=a.C;else if(h){this.A=0,m(()=>this.kf.C,U=>{this.kf.C=U},this.underKey(),.55*a.C,1.9*a.C);let D=this.bustKey(),j=this.brM?-5:0;this.buildLUT(),this.A=j;let L=this.bandGirth(D);if(u.C>L+.05){let U=Math.max(j+.5,this.Aprev||3);this.A=U;let z=this.bandGirth(D),J=(z-L)/(U-j);for(let X=0;X<7&&Math.abs(z-u.C)>.03&&J>1e-6;X++){let P=Math.min(10,Math.max(j,U+(u.C-z)/J));if(P===U)break;this.A=P;let O=this.bandGirth(D);J=(O-z)/(P-U),U=P,z=O}this.Aprev=this.A}else u.C<L-.05&&m(()=>this.kf.C,U=>{this.kf.C=U},D,.55*a.C,1.9*a.C)}else this.A=0,m(()=>this.kf.C,D=>{this.kf.C=D},"C",.55*a.C,1.9*a.C);this.buildLUT()},y=0,x=D=>{this.setG(D,t.off),this.f=1,this.A=0,this.kf={C:a.C,W:a.W,H:a.H},this.buildLUT(),y=_()},b=D=>{this.f=D,f();let j=_(),L=this.A;this.f=1,this.A=h&&this.brM?-5:0;let U=_();this.f=D,this.A=L;let z=U-y,J=Math.max(.03*j,c*y+(z>0?.75:.3)*z+(j-U)),X=.9007*J+1.1*(j-J-l);return{M:X,V:j,Vfat:J,bf:.9007*J/X*100}},S=(D,j,L,U,z,J)=>{let X=D(j)-U;if(X>=0)return{x:j,clamp:-1};let P=D(L)-U;if(P<=0)return{x:L,clamp:1};let O=0,Y=j;for(let K=0;K<J;K++){Y=(j*P-L*X)/(P-X);let H=D(Y)-U;if(Math.abs(H)<z)break;H<0?(j=Y,X=H,O===-1&&(P/=2),O=-1):(L=Y,P=H,O===1&&(X/=2),O=1)}return{x:Y,clamp:0}},E=null,C=D=>{x(D);let j=S(L=>b(L).M,.3,12,p,.03,12);return E=b(j.x),E.fclamp=j.clamp,E.f=j.x,E},k=t.muscle,M=null,A="";if(this.gCT=null,t.auto&&e&&e.hdr.g&&e.hdr.g.all!=null){let D=e.hdr.g;k=D.all,this.gCT=[0,D.all,D.chest??D.all,D.chest??D.all,D.back??D.all,D.all,D.all,D.all,D.all,D.all,D.all],A="CT \u808C\u8089\u91CF\uFF0B\u9AD4\u91CD"}else if(t.auto){let D=(h?76:64)-20*t.H/t.waist;t.bf>0?(M=t.bf,A="\u5BE6\u6E2C\u8F38\u5165"):(M=Math.min(h?52:45,Math.max(h?14:6,D)),A="RFM \u63A8\u4F30");let j=S(L=>{let U=C(L);return U.fclamp<0?5:U.fclamp>0?-100:-U.bf},-.8,1.5,-M,.12,10);k=j.x,j.clamp&&(g.g=j.clamp)}let N=C(k);return N.fclamp&&(g.f=N.fclamp),{gG:k,f:N.f,A:this.A,under:d,kf:{...this.kf},k0:{...a},bfPrior:M,bfSrc:A,note:g,legScale:this.legScale,upScale:this.upScale,leg:this.pr.leg,ct:e?{band:e.band}:null,mass:{M:N.M*o,V:N.V*o,Vfat:N.Vfat*o,bf:N.bf}}}apply(t){this.buildLUT(),this.deformStructure(),this.deformSkin(this.spos,null,!0),this.areolaColor();let e=this.parts,n=e.findIndex(o=>o.v0>=this.NVd),s=n<0?e.length:n;t||this.ctOn()?this.normals(this.pos,this.idx,this.nrm,0,this.NT,0,this.NV):this.normals(this.pos,this.idx,this.nrm,0,e[s-1].t0+e[s-1].nt,0,this.NVd);let r=this.skinTris();this.normals(this.spos,r,this.snrm,0,r.length/3,0,r===this.stri?this.NS:this.NSall)}partVolume(t){let e=this.pos,n=this.idx,s=0;for(let r=t.t0*3,o=(t.t0+t.nt)*3;r<o;r+=3){let a=n[r]*3,l=n[r+1]*3,c=n[r+2]*3;s+=e[a]*(e[l+1]*e[c+2]-e[l+2]*e[c+1])-e[a+1]*(e[l]*e[c+2]-e[l+2]*e[c])+e[a+2]*(e[l]*e[c+1]-e[l+1]*e[c])}return Math.abs(s)/6}findPart(t,e,n){return this.parts.find(s=>s.en===t&&s.side===e&&(n===void 0||s.t===n))}measure(){let t=this.lm,e=this.s,n=this.spos,s=this.stri,r=this.scls,o=this.sbase,a={},l=y=>this.ymap(y)*e,c=y=>{if(y!=="UF")return this.girthAt(n,this.band[y].tris,this.bandY(y)*e);let x=this.band[y],b=new Float32Array(n.length);return this.noBr=!0,this.deformSkin(b,x.verts,!0),this.noBr=!1,this.girthAt(b,x.tris,this.bandY(y)*e)};a.chest=c(this.bustKey()),a.under=c(this.underKey()),a.waist=c("W"),a.hip=c("H");let h=y=>{let x=[];for(let b=0;b<this.NTs;b++){let S=s[b*3],E=s[b*3+1],C=s[b*3+2];y(S)&&y(E)&&y(C)&&x.push(b)}return Uint32Array.from(x)};this.mTris||(this.mTris={arm:h(y=>(r[y]&7)===1),leg:h(y=>r[y]<16&&o[y*3]>.4&&o[y*3+1]<t.yCrotch-1)});let d=y=>(this.yShM+(y-t.shoulder3[1])*(1+(this.pr.arm-1)*this.armU[1]*this.armU[1]))*e,u=(y,x,b,S)=>{let E=0;for(let C=x;C<=b;C+=1)E=Math.max(E,this.girthAt(n,y,S(C)));return E};a.upperArm=this.girthAt(n,this.mTris.arm,d((t.shoulder[1]+t.yElbow)/2)),a.forearm=u(this.mTris.arm,t.yWrist+6,t.yElbow-2,d),a.thigh=this.girthAt(n,this.mTris.leg,l((t.yCrotch-1+t.yKnee)/2)),a.calf=u(this.mTris.leg,t.yAnkle+8,t.yKnee-4,l);let p=(y,x)=>{let b=this.findPart(y,x,2);return b?this.box.subarray(b.i*6,b.i*6+6):null},g=y=>{let x=p(y,0),b=p(y,1);return x&&b?x[3]-b[0]:0};a.biacromial=g("Scapula"),a.biiliac=g("Hip bone");let _=(y,x)=>{let b=this.findPart(y,0,2);return b?b.len0*x*e:0};a.femur=_("Femur",this.legScale),a.tibia=_("Tibia",this.legScale),a.humerus=_("Humerus",this.pr.arm),a.radius=_("Radius",this.pr.arm),a.troch=l(t.yTroch),a.crotch=l(t.yCrotch),a.legRatio=a.troch/(t.H0*e)*100,a.sitting=t.H0*e-l(t.yCrotch-1.5);let m=0,f=new Float32Array(11);for(let y of this.parts)if(y.t===0){let x=this.partVolume(y);m+=x,f[y.rg]+=x}return a.muscleVol=m/1e3,a.regVol=Array.from(f,y=>y/1e3),a}};function ho(i,t){if(t<=i[0][0])return i[0][1];let e=i.length;if(t>=i[e-1][0])return i[e-1][1];for(let n=1;n<e;n++)if(t<=i[n][0]){let s=(t-i[n-1][0])/(i[n][0]-i[n-1][0]);return i[n-1][1]+s*(i[n][1]-i[n-1][1])}return i[e-1][1]}function uo(i,t){if(t<=i[0][0])return i[0][1];let e=i.length;if(t>=i[e-1][0])return i[e-1][1];for(let n=1;n<e;n++)if(t<=i[n][0]){let s=(t-i[n-1][0])/(i[n][0]-i[n-1][0]),r=s*s*(3-2*s);return i[n-1][1]+r*(i[n][1]-i[n-1][1])}return i[e-1][1]}var Dc={soft:[400,40,"\u8EDF\u7D44\u7E54"],lung:[1500,-600,"\u80BA"],bone:[1800,400,"\u9AA8"]},hs=[["skin","\u9AD4\u8868","#ff9a3c",!0],["bone","\u9AA8\u9ABC","#ffe14d",!0],["muscle","\u808C\u8089","#ff4d6d",!0],["organ","\u5167\u81DF","#4dd2ff",!0],["vessel","\u8840\u7BA1","#c08cff",!1]],us=class i{constructor(t,e){this.V=t,this.host=e,this.vol=null,this.win="soft",this.R=null,this.B=null,this.show=Object.fromEntries(hs.map(r=>[r[0],r[3]])),this.show.plane=!0,this.el=document.createElement("div"),this.el.id="ctv",this.el.hidden=!0,e.appendChild(this.el),this.el.innerHTML=`<div class="ctv-h"><b class="ctv-t">\u5F71\u50CF</b><span class="ctv-i"></span><button class="ctv-x" title="\u95DC\u9589">\xD7</button></div>
      <div class="ctv-top"><div class="ctv-cell"><canvas class="ctv-ax" width="420" height="420"></canvas><span class="ctv-lab ctv-la" hidden>\u7B2C\u4E00\u6B21</span></div>
      <div class="ctv-cell ctv-bcell" hidden><canvas class="ctv-bx" width="420" height="420"></canvas><span class="ctv-lab">\u7B2C\u4E8C\u6B21\uFF08\u5DF2\u5C0D\u9F4A\uFF09</span></div></div>
      <div class="ctv-row"><canvas class="ctv-sa" width="206" height="206"></canvas><canvas class="ctv-co" width="206" height="206"></canvas></div>
      <input type="range" class="ctv-sl" min="0" max="0" value="0">
      <div class="ctv-c"><span class="seg ctv-w"></span></div>
      <div class="ctv-c ctv-ly">${hs.map(([r,o,a])=>`<label><input type="checkbox" data-k="${r}"${this.show[r]?" checked":""}><i style="background:${a}"></i>${o}</label>`).join("")}<label><input type="checkbox" data-k="plane" checked>3D \u5207\u9762</label></div>
      <p class="ctv-n">\u6ED1\u9F20\u6EFE\u8F2A\u63DB\u5C64\uFF1B\u9EDE\u77E2\u72C0\u9762\u6216\u51A0\u72C0\u9762\u8DF3\u5230\u8A72\u4F4D\u7F6E\u3002\u5F69\u8272\u8F2A\u5ED3\u662F 3D \u91CD\u5EFA\u5728\u9019\u4E00\u5C64\u7684\u622A\u9762\uFF0C\u53EF\u76F4\u63A5\u5C0D\u7167\u5F71\u50CF\u3002</p>`;let n=r=>this.el.querySelector(r);this.cv={ax:n(".ctv-ax"),sa:n(".ctv-sa"),co:n(".ctv-co"),bx:n(".ctv-bx")},this.sl=n(".ctv-sl"),this.info=n(".ctv-i"),this.ttl=n(".ctv-t"),n(".ctv-x").onclick=()=>this.close(),this.sl.oninput=()=>{this.k=+this.sl.value,this.render()},n(".ctv-w").onclick=r=>{let o=r.target.closest("button");o&&(this.win=o.dataset.w,this.render())};for(let r of this.el.querySelectorAll("input[type=checkbox]"))r.onchange=()=>{this.show[r.dataset.k]=r.checked,this.render()};let s=r=>o=>{if(o.preventDefault(),!this.vol)return;let a=o.deltaY>0?-1:1;r==="ax"||r==="bx"?this.k=hn(this.k+a,0,this.vol.nz-1):r==="sa"?this.i=hn(this.i+a,0,this.vol.nx-1):this.j=hn(this.j+a,0,this.vol.ny-1),this.render()};for(let r of["ax","sa","co","bx"])this.cv[r].addEventListener("wheel",s(r),{passive:!1}),this.cv[r].addEventListener("pointerdown",o=>this.click(r==="bx"?"ax":r,o))}static parse(t){let e=new DataView(t),n=e.getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n))),[r,o,a]=s.size;return{nx:r,ny:o,nz:a,sp:s.spacing,o:s.origin,mod:s.modality||"CT",win:s.window,a:new Int16Array(t.slice(4+n,4+n+r*o*a*2))}}load(t,e){this.vol=i.parse(t),this.R=e,this.B=null,this.cache=null;let n=this.vol;this.k=Math.round(n.nz/2),this.i=Math.round(n.nx/2),this.j=Math.round(n.ny/2),this.sl.max=n.nz-1,this.wins=n.mod==="MR"?{mr:[n.win?n.win[0]:800,n.win?n.win[1]:400,"MR"]}:Dc,this.win=Object.keys(this.wins)[0],this.el.querySelector(".ctv-w").innerHTML=Object.entries(this.wins).map(([s,r])=>`<button data-w="${s}">${r[2]}</button>`).join(""),this.ttl.textContent=n.mod==="MR"?"MR \u5F71\u50CF":"CT \u5F71\u50CF",this.setCompare(null)}setCompare(t,e){if(!t){this.B=null,this.el.querySelector(".ctv-bcell").hidden=!0,this.el.querySelector(".ctv-la").hidden=!0,this.el.classList.remove("cmp"),this.cache=null,this.render();return}this.B={vol:i.parse(t),R:e},this.el.querySelector(".ctv-bcell").hidden=!1,this.el.querySelector(".ctv-la").hidden=!1,this.el.classList.add("cmp"),this.cache=null,this.render()}open(){this.vol&&(this.el.hidden=!1,this.render())}close(){this.el.hidden=!0,this.V.setSlicePlane(null)}get isOpen(){return!this.el.hidden}invalidate(){this.cache=null,this.isOpen&&this.render()}meshes(){if(this.cache)return this.cache;let t=e=>{let n={};for(let[s]of hs){let r=e.S.filter(o=>(s==="organ"?["organ","lung","nerve"]:[s]).includes(o.cat));n[s]=r.map(o=>[e.lps(o),e.tris(o)])}return n};return this.cache={A:t(this.R),B:this.B?t(this.B.R):null}}cut(t,e,n,s){let r=n===2?0:n===0?1:0,o=n===2?1:2,a=[];for(let l=0;l<e.length;l+=3){let c=e[l]*3,h=e[l+1]*3,d=e[l+2]*3,u=t[c+n]-s,p=t[h+n]-s,g=t[d+n]-s;if(u>0&&p>0&&g>0||u<0&&p<0&&g<0)continue;let _=[],m=(f,y,x,b)=>{if(y>0!=b>0){let S=y/(y-b);_.push(t[f+r]+S*(t[x+r]-t[f+r]),t[f+o]+S*(t[x+o]-t[f+o]))}};m(c,u,h,p),m(h,p,d,g),m(d,g,c,u),_.length>=4&&a.push(_[0],_[1],_[2],_[3])}return a}click(t,e){let n=e.target.getBoundingClientRect(),s=this.map[t];if(!s)return;let r=(e.clientX-n.left)*e.target.width/n.width,o=(e.clientY-n.top)*e.target.height/n.height,[a,l]=s.inv(r,o),c=this.vol;t==="ax"?(this.i=hn(Math.round((a-c.o[0])/c.sp[0]),0,c.nx-1),this.j=hn(Math.round((l-c.o[1])/c.sp[1]),0,c.ny-1)):t==="sa"?(this.j=hn(Math.round((a-c.o[1])/c.sp[1]),0,c.ny-1),this.k=hn(Math.round((l-c.o[2])/c.sp[2]),0,c.nz-1)):(this.i=hn(Math.round((a-c.o[0])/c.sp[0]),0,c.nx-1),this.k=hn(Math.round((l-c.o[2])/c.sp[2]),0,c.nz-1)),this.render()}gray(t,e,n){return Math.max(0,Math.min(255,(t-(n-e/2))/e*255))}slice(t){let e=this.vol,[n,s]=this.wins[this.win],r=e.a,o=e.mod==="CT",a=t==="ax"?e.nx:t==="sa"?e.ny:e.nx,l=t==="ax"?e.ny:e.nz,c=document.createElement("canvas");c.width=a,c.height=l;let h=c.getContext("2d"),d=h.createImageData(a,l),u=d.data;for(let p=0;p<l;p++)for(let g=0;g<a;g++){let _;t==="ax"?_=r[(this.k*e.ny+p)*e.nx+g]:t==="sa"?_=r[((e.nz-1-p)*e.ny+g)*e.nx+this.i]:_=r[((e.nz-1-p)*e.ny+this.j)*e.nx+g];let m=this.gray(_,n,s),f=(p*a+g)*4;u[f]=u[f+1]=u[f+2]=m,u[f+3]=(o?_<=-1e3:_<=0)?0:255}return h.putImageData(d,0,0),c}sliceB(){let t=this.vol,e=this.B.vol,n=this.B.R.T,s=n.R,r=n.t,[o,a]=this.wins[this.win],l=e.mod==="CT",c=document.createElement("canvas");c.width=t.nx,c.height=t.ny;let h=c.getContext("2d"),d=h.createImageData(t.nx,t.ny),u=d.data,p=t.o[2]+this.k*t.sp[2];for(let g=0;g<t.ny;g++)for(let _=0;_<t.nx;_++){let m=t.o[0]+_*t.sp[0]-r[0],f=t.o[1]+g*t.sp[1]-r[1],y=p-r[2],x=s[0]*m+s[3]*f+s[6]*y,b=s[1]*m+s[4]*f+s[7]*y,S=s[2]*m+s[5]*f+s[8]*y,E=Math.round((x-e.o[0])/e.sp[0]),C=Math.round((b-e.o[1])/e.sp[1]),k=Math.round((S-e.o[2])/e.sp[2]),M=(g*t.nx+_)*4;if(E<0||C<0||k<0||E>=e.nx||C>=e.ny||k>=e.nz){u[M+3]=0;continue}let A=e.a[(k*e.ny+C)*e.nx+E],N=this.gray(A,o,a);u[M]=u[M+1]=u[M+2]=N,u[M+3]=(l?A<=-1e3:A<=0)?0:255}return h.putImageData(d,0,0),c}render(){if(!this.vol||this.el.hidden)return;for(let d of this.el.querySelectorAll(".ctv-w button"))d.classList.toggle("on",d.dataset.w===this.win);let t=this.vol,e=t.sp,n=t.o;this.sl.value=this.k;let s=[n[0]-e[0]/2,n[1]-e[1]/2,n[2]-e[2]/2],r=[t.nx*e[0],t.ny*e[1],t.nz*e[2]],o=s[2]+r[2],a={ax:[s[0],s[1],r[0],r[1],!1],sa:[s[1],o,r[1],r[2],!0],co:[s[0],o,r[0],r[2],!0]};this.B&&(a.bx=a.ax),this.map={};let l=this.meshes();for(let[d,[u,p,g,_,m]]of Object.entries(a)){let f=this.cv[d],y=f.getContext("2d"),x=Math.min(f.width/g,f.height/_),b=(f.width-g*x)/2,S=(f.height-_*x)/2,E=(U,z)=>[b+(U-u)*x,S+(m?p-z:z-p)*x];this.map[d]={inv:(U,z)=>[u+(U-b)/x,m?p-(z-S)/x:p+(z-S)/x]},y.fillStyle="#000",y.fillRect(0,0,f.width,f.height),y.imageSmoothingEnabled=!0;let C=d==="bx"?this.sliceB():this.slice(d);y.drawImage(C,b,S,g*x,_*x),d==="ax"&&(this.axImg=C);let k=d==="ax"||d==="bx"?2:d==="sa"?0:1,M=k===2?n[2]+this.k*e[2]:d==="sa"?n[0]+this.i*e[0]:n[1]+this.j*e[1],A=d==="bx"?l.B:l.A;for(let[U,,z]of hs)if(!(!this.show[U]||!A[U])){y.strokeStyle=z,y.lineWidth=k===2?1.4:1,y.beginPath();for(let[J,X]of A[U]){let P=this.cut(J,X,k,M);for(let O=0;O<P.length;O+=4){let[Y,K]=E(P[O],P[O+1]),[H,tt]=E(P[O+2],P[O+3]);y.moveTo(Y,K),y.lineTo(H,tt)}}y.stroke()}y.strokeStyle="rgba(80,200,255,.85)",y.lineWidth=1,y.setLineDash([4,3]),y.beginPath();let N=n[0]+this.i*e[0],D=n[1]+this.j*e[1],j=n[2]+this.k*e[2],L=(U,z,J,X)=>{let[P,O]=E(U,z),[Y,K]=E(J,X);y.moveTo(P,O),y.lineTo(Y,K)};k===2?(L(N,s[1],N,s[1]+r[1]),L(s[0],D,s[0]+r[0],D)):d==="sa"?(L(s[1],j,s[1]+r[1],j),L(D,s[2],D,o)):(L(s[0],j,s[0]+r[0],j),L(N,s[2],N,o)),y.stroke(),y.setLineDash([]),y.fillStyle="rgba(80,200,255,.9)",y.font="11px system-ui",k!==2?y.fillText(d==="sa"?"\u77E2\u72C0\u9762\uFF08\u5DE6\u70BA\u524D\uFF09":"\u51A0\u72C0\u9762\uFF08\u5DE6\u70BA\u75C5\u4EBA\u53F3\u5074\uFF09",6,14):(y.fillText("\u524D",f.width/2-6,S+14),y.fillText("\u75C5\u4EBA\u53F3",b+4,f.height/2))}let c=n[2]+this.k*e[2],h=this.level(c);if(this.info.textContent=`\u7B2C ${this.k+1} / ${t.nz} \u5C64 \xB7 z ${c.toFixed(1)} mm${h?" \xB7 \u7D04 "+h:""} \xB7 ${this.wins[this.win][2]}\u7A97`,this.show.plane&&this.R){let d=[[s[0],s[1],c],[s[0]+r[0],s[1],c],[s[0]+r[0],s[1]+r[1],c],[s[0],s[1]+r[1],c]].map(u=>this.R.toWorld(u));this.V.setSlicePlane(d,this.axImg)}else this.V.setSlicePlane(null)}level(t){let e=this.R?.hdr.levels;if(!e)return"";let n="",s=1e9;for(let r in e){let o=Math.abs(e[r]-t);o<s&&(s=o,n=r)}return s<20?n.replace("vertebrae_","")+" \u690E\u9AD4":""}goLevel(t){let e=this.R?.hdr.levels;!e||e[t]==null||!this.vol||(this.k=hn(Math.round((e[t]-this.vol.o[2])/this.vol.sp[2]),0,this.vol.nz-1),this.render())}},hn=(i,t,e)=>Math.max(t,Math.min(e,i));var Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nc=0,po=1,Oc=2;var Vl=1,Fc=2,yn=3,Ye=0,Ae=1,pe=2;var Un=0,Mi=1,mo=2,go=3,_o=4,Bc=5,Wn=100,zc=101,kc=102,xo=103,yo=104,Hc=200,Vc=201,Gc=202,Wc=203,ia=204,sa=205,Xc=206,qc=207,Yc=208,$c=209,Zc=210,Jc=211,Kc=212,jc=213,Qc=214,th=0,eh=1,nh=2,Zn=3,ih=4,sh=5,rh=6,ah=7,Gl=0,oh=1,lh=2,Dn=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6;var Wl=300,Ei=301,wi=302,ra=303,aa=304,or=306,oa=1e3,nn=1001,la=1002,Ue=1003,vo=1004;var Tr=1005;var We=1006,mh=1007;var Yi=1008;var Nn=1009,gh=1010,_h=1011,ka=1012,Xl=1013,Ln=1014,In=1015,$i=1016,ql=1017,Yl=1018,qn=1020,xh=1021,sn=1023,yh=1024,vh=1025,Yn=1026,Ti=1027,Mh=1028,$l=1029,bh=1030,Zl=1031,Jl=1033,Ar=33776,Cr=33777,Rr=33778,Pr=33779,Mo=35840,bo=35841,So=35842,Eo=35843,Kl=36196,wo=37492,To=37496,Ao=37808,Co=37809,Ro=37810,Po=37811,Lo=37812,Io=37813,Uo=37814,Do=37815,No=37816,Oo=37817,Fo=37818,Bo=37819,zo=37820,ko=37821,Lr=36492,Ho=36494,Vo=36495,Sh=36283,Go=36284,Wo=36285,Xo=36286;var Os=2300,Fs=2301,Ir=2302,qo=2400,Yo=2401,$o=2402;var jl=3e3,$n=3001,Eh=3200,wh=3201,Ql=0,Th=1,Xe="",fe="srgb",Mn="srgb-linear",Ha="display-p3",lr="display-p3-linear",Bs="linear",re="srgb",zs="rec709",ks="p3";var ei=7680;var Zo=519,Ah=512,Ch=513,Rh=514,tc=515,Ph=516,Lh=517,Ih=518,Uh=519,Jo=35044;var Ko="300 es",ca=1035,vn=2e3,Hs=2001,dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=1234567,Gi=Math.PI/180,Zi=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Va(i,t){return(i%t+t)%t}function Dh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nh(i,t,e){return i!==t?(e-i)/(t-i):0}function Wi(i,t,e){return(1-e)*i+e*t}function Oh(i,t,e,n){return Wi(i,t,1-Math.exp(-e*n))}function Fh(i,t=1){return t-Math.abs(Va(i,t*2)-t)}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hh(i,t){return i+Math.random()*(t-i)}function Vh(i){return i*(.5-Math.random())}function Gh(i){i!==void 0&&(jo=i);let t=jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wh(i){return i*Gi}function Xh(i){return i*Zi}function ha(i){return(i&i-1)===0&&i!==0}function qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ui={DEG2RAD:Gi,RAD2DEG:Zi,generateUUID:Ii,clamp:Te,euclideanModulo:Va,mapLinear:Dh,inverseLerp:Nh,lerp:Wi,damp:Oh,pingpong:Fh,smoothstep:Bh,smootherstep:zh,randInt:kh,randFloat:Hh,randFloatSpread:Vh,seededRandom:Gh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:ha,ceilPowerOfTwo:qh,floorPowerOfTwo:Vs,setQuaternionFromProperEuler:Yh,normalize:Le,denormalize:_i},Ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],x=s[4],b=s[7],S=s[2],E=s[5],C=s[8];return r[0]=o*_+a*y+l*S,r[3]=o*m+a*x+l*E,r[6]=o*f+a*b+l*C,r[1]=c*_+h*y+d*S,r[4]=c*m+h*x+d*E,r[7]=c*f+h*b+d*C,r[2]=u*_+p*y+g*S,r[5]=u*m+p*x+g*E,r[8]=u*f+p*b+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ur=new Kt;function ec(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){let i=Gs("canvas");return i.style.display="block",i}var Qo={};function Xi(i){i in Qo||(Qo[i]=!0,console.warn(i))}var tl=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),el=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[Mn]:{transfer:Bs,primaries:zs,toReference:i=>i,fromReference:i=>i},[fe]:{transfer:re,primaries:zs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lr]:{transfer:Bs,primaries:ks,toReference:i=>i.applyMatrix3(el),fromReference:i=>i.applyMatrix3(tl)},[Ha]:{transfer:re,primaries:ks,toReference:i=>i.convertSRGBToLinear().applyMatrix3(el),fromReference:i=>i.applyMatrix3(tl).convertLinearToSRGB()}},Zh=new Set([Mn,lr]),ne={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ds[t].toReference,s=ds[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ds[i].primaries},getTransfer:function(i){return i===Xe?Bs:ds[i].transfer}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ni,Ws=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Gs("canvas")),ni.width=t.width,ni.height=t.height;let n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jh=0,Xs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nr(s[o].image)):r.push(Nr(s[o]))}else r=Nr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ws.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kh=0,$e=class i extends dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=nn,s=nn,r=We,o=Yi,a=sn,l=Nn,c=i.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ii(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$n?fe:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?$n:jl}set encoding(t){Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$n?fe:Xe}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Wl;$e.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,b=(p+1)/2,S=(f+1)/2,E=(h+u)/4,C=(d+_)/4,k=(g+m)/4;return x>b&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=C/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=k/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=k/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ua=class extends dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?fe:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var da=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let S=Math.sqrt(x),E=Math.atan2(S,f*y);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}let b=a*y;if(l=l*m+u*b,c=c*m+p*b,h=h*m+g*b,d=d*m+_*b,m===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Or=new F,nl=new rn,Ze=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),ps.subVectors(this.max,zi),ii.subVectors(t.a,zi),si.subVectors(t.b,zi),ri.subVectors(t.c,zi),Tn.subVectors(si,ii),An.subVectors(ri,si),zn.subVectors(ii,ri);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-zn.z,zn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,zn.z,0,-zn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!Fr(e,ii,si,ri,ps)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,ii,si,ri,ps))?!1:(ms.crossVectors(Tn,An),e=[ms.x,ms.y,ms.z],Fr(e,ii,si,ri,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new F,new F,new F,new F,new F,new F,new F,new F],je=new F,fs=new Ze,ii=new F,si=new F,ri=new F,Tn=new F,An=new F,zn=new F,zi=new F,ps=new F,ms=new F,kn=new F;function Fr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){kn.fromArray(i,r);let a=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jh=new Ze,ki=new F,Br=new F,Ai=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);let e=ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Br)),this.expandByPoint(ki.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new F,zr=new F,gs=new F,Cn=new F,kr=new F,_s=new F,Hr=new F,Jn=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(zr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gs),a=Cn.dot(this.direction),l=-Cn.dot(gs),c=Cn.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zr).addScaledVector(gs,u),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),_s.subVectors(n,t),Hr.crossVectors(kr,_s);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);let l=a*this.direction.dot(_s.crossVectors(Cn,_s));if(l<0)return null;let c=a*this.direction.dot(kr.cross(Cn));if(c<0||l+c>o)return null;let h=-a*Cn.dot(Hr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,tu)}lookAt(t,e,n){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Rn.crossVectors(n,Be),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Rn.crossVectors(n,Be)),Rn.normalize(),xs.crossVectors(Be,Rn),s[0]=Rn.x,s[4]=xs.x,s[8]=Be.x,s[1]=Rn.y,s[5]=xs.y,s[9]=Be.y,s[2]=Rn.z,s[6]=xs.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],b=n[11],S=n[15],E=s[0],C=s[4],k=s[8],M=s[12],A=s[1],N=s[5],D=s[9],j=s[13],L=s[2],U=s[6],z=s[10],J=s[14],X=s[3],P=s[7],O=s[11],Y=s[15];return r[0]=o*E+a*A+l*L+c*X,r[4]=o*C+a*N+l*U+c*P,r[8]=o*k+a*D+l*z+c*O,r[12]=o*M+a*j+l*J+c*Y,r[1]=h*E+d*A+u*L+p*X,r[5]=h*C+d*N+u*U+p*P,r[9]=h*k+d*D+u*z+p*O,r[13]=h*M+d*j+u*J+p*Y,r[2]=g*E+_*A+m*L+f*X,r[6]=g*C+_*N+m*U+f*P,r[10]=g*k+_*D+m*z+f*O,r[14]=g*M+_*j+m*J+f*Y,r[3]=y*E+x*A+b*L+S*X,r[7]=y*C+x*N+b*U+S*P,r[11]=y*k+x*D+b*z+S*O,r[15]=y*M+x*j+b*J+S*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=d*m*c-_*u*c+_*l*p-a*m*p-d*l*f+a*u*f,x=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,b=h*_*c-g*d*c+g*a*p-o*_*p-h*a*f+o*d*f,S=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,E=e*y+n*x+s*b+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=y*C,t[1]=(_*u*r-d*m*r-_*s*p+n*m*p+d*s*f-n*u*f)*C,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*C,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*p-n*l*p)*C,t[4]=x*C,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*C,t[8]=b*C,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*C,t[12]=S*C,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,y=l*c,x=l*h,b=l*d,S=n.x,E=n.y,C=n.z;return s[0]=(1-(_+f))*S,s[1]=(p+b)*S,s[2]=(g-x)*S,s[3]=0,s[4]=(p-b)*E,s[5]=(1-(u+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*C,s[9]=(m-y)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ai.set(s[0],s[1],s[2]).length(),o=ai.set(s[4],s[5],s[6]).length(),a=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);let c=1/r,h=1/o,d=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,g;if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Hs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,p=(n+s)*h,g,_;if(a===vn)g=(o+r)*d,_=-2*d;else if(a===Hs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ai=new F,Qe=new me,Qh=new F(0,0,0),tu=new F(1,1,1),Rn=new F,xs=new F,Be=new F,il=new me,sl=new rn,Ys=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ys.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eu=0,rl=new F,oi=new rn,gn=new me,ys=new F,Hi=new F,nu=new F,iu=new rn,al=new F(1,0,0),ol=new F(0,1,0),ll=new F(0,0,1),su={type:"added"},ru={type:"removed"},Ce=class i extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Ys,n=new rn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ol,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return rl.copy(t).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ol,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Hi,ys,this.up):gn.lookAt(ys,Hi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(gn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ru)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new F(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new F,_n=new F,Vr=new F,xn=new F,li=new F,ci=new F,cl=new F,Gr=new F,Wr=new F,Xr=new F,vs=!1,xi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),_n.subVectors(n,e),Vr.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(_n),l=tn.dot(Vr),c=_n.dot(_n),h=_n.dot(Vr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,s,r,o,a,l){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;li.subVectors(s,n),ci.subVectors(r,n),Gr.subVectors(t,n);let l=li.dot(Gr),c=ci.dot(Gr);if(l<=0&&c<=0)return e.copy(n);Wr.subVectors(t,s);let h=li.dot(Wr),d=ci.dot(Wr);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(li,o);Xr.subVectors(t,r);let p=li.dot(Xr),g=ci.dot(Xr);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ci,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return cl.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(cl,a);let f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(li,o).addScaledVector(ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Va(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qr(o,r,t+1/3),this.g=qr(o,r,t),this.b=qr(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ne.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=fe){ne.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Ms);let n=Wi(Pn.h,Ms.h,e),s=Wi(Pn.s,Ms.s,e),r=Wi(Pn.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Xt;Xt.NAMES=nc;var au=0,On=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Mi,this.side=Ye,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Zn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Ye&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sn=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new F,bs=new Ft,Qt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jo&&(t.usage=this.usage),t}};var $s=class extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zs=class extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ke=class extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ou=0,Ge=new me,Yr=new Ce,hi=new F,ze=new Ze,Vi=new Ze,ve=new F,be=class i extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?Zs:$s)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(ze.min,Vi.min),ze.expandByPoint(ve),ve.addVectors(ze.max,Vi.max),ze.expandByPoint(ve)):(ze.expandByPoint(Vi.min),ze.expandByPoint(Vi.max))}ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(hi.fromBufferAttribute(t,c),ve.add(hi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new F,h[A]=new F;let d=new F,u=new F,p=new F,g=new Ft,_=new Ft,m=new Ft,f=new F,y=new F;function x(A,N,D){d.fromArray(s,A*3),u.fromArray(s,N*3),p.fromArray(s,D*3),g.fromArray(o,A*2),_.fromArray(o,N*2),m.fromArray(o,D*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);let j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(j),y.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(j),c[A].add(f),c[N].add(f),c[D].add(f),h[A].add(y),h[N].add(y),h[D].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,N=b.length;A<N;++A){let D=b[A],j=D.start,L=D.count;for(let U=j,z=j+L;U<z;U+=3)x(n[U+0],n[U+1],n[U+2])}let S=new F,E=new F,C=new F,k=new F;function M(A){C.fromArray(r,A*3),k.copy(C);let N=c[A];S.copy(N),S.sub(C.multiplyScalar(C.dot(N))).normalize(),E.crossVectors(k,N);let j=E.dot(h[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=j}for(let A=0,N=b.length;A<N;++A){let D=b[A],j=D.start,L=D.count;for(let U=j,z=j+L;U<z;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hl=new me,Hn=new Jn,Ss=new Ai,ul=new F,ui=new F,di=new F,fi=new F,$r=new F,Es=new F,ws=new Ft,Ts=new Ft,As=new Ft,dl=new F,fl=new F,pl=new F,Cs=new F,Rs=new F,ce=class extends Ce{constructor(t=new be,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&($r.fromBufferAttribute(d,t),o?Es.addScaledVector($r,h):Es.addScaledVector($r.sub(e),h))}e.add(Es)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(Ss.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Ss,ul)===null||Hn.origin.distanceToSquared(ul)>(t.far-t.near)**2))&&(hl.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(hl),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,S=x;b<S;b+=3){let E=a.getX(b),C=a.getX(b+1),k=a.getX(b+2);s=Ps(this,f,t,n,c,h,d,E,C,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);s=Ps(this,o,t,n,c,h,d,y,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,S=x;b<S;b+=3){let E=b,C=b+1,k=b+2;s=Ps(this,f,t,n,c,h,d,E,C,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=m,x=m+1,b=m+2;s=Ps(this,o,t,n,c,h,d,y,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lu(i,t,e,n,s,r,o,a){let l;if(t.side===Ae?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ye,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:i}}function Ps(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ui),i.getVertexPosition(l,di),i.getVertexPosition(c,fi);let h=lu(i,t,e,n,ui,di,fi,Cs);if(h){s&&(ws.fromBufferAttribute(s,a),Ts.fromBufferAttribute(s,l),As.fromBufferAttribute(s,c),h.uv=xi.getInterpolation(Cs,ui,di,fi,ws,Ts,As,new Ft)),r&&(ws.fromBufferAttribute(r,a),Ts.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),h.uv1=xi.getInterpolation(Cs,ui,di,fi,ws,Ts,As,new Ft),h.uv2=h.uv1),o&&(dl.fromBufferAttribute(o,a),fl.fromBufferAttribute(o,l),pl.fromBufferAttribute(o,c),h.normal=xi.getInterpolation(Cs,ui,di,fi,dl,fl,pl,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};xi.getNormal(ui,di,fi,d.normal),h.face=d}return h}var Ki=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2));function g(_,m,f,y,x,b,S,E,C,k,M){let A=b/C,N=S/k,D=b/2,j=S/2,L=E/2,U=C+1,z=k+1,J=0,X=0,P=new F;for(let O=0;O<z;O++){let Y=O*N-j;for(let K=0;K<U;K++){let H=K*A-D;P[_]=H*y,P[m]=Y*x,P[f]=L,c.push(P.x,P.y,P.z),P[_]=0,P[m]=0,P[f]=E>0?1:-1,h.push(P.x,P.y,P.z),d.push(K/C),d.push(1-O/k),J+=1}}for(let O=0;O<k;O++)for(let Y=0;Y<C;Y++){let K=u+Y+U*O,H=u+Y+U*(O+1),tt=u+(Y+1)+U*(O+1),ht=u+(Y+1)+U*O;l.push(K,H,ht),l.push(H,tt,ht),X+=6}a.addGroup(p,X,M),p+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ci(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=Ci(i[e]);for(let s in n)t[s]=n[s]}return t}function cu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){return i.getRenderTarget()===null?i.outputColorSpace:ne.workingColorSpace}var hu={clone:Ci,merge:Ie},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Js=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},De=class extends Js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},pi=-90,mi=1,fa=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(pi,mi,t,e);s.layers=this.layers,this.add(s);let r=new De(pi,mi,t,e);r.layers=this.layers,this.add(r);let o=new De(pi,mi,t,e);o.layers=this.layers,this.add(o);let a=new De(pi,mi,t,e);a.layers=this.layers,this.add(a);let l=new De(pi,mi,t,e);l.layers=this.layers,this.add(l);let c=new De(pi,mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ks=class extends $e{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pa=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$n?fe:Xe),this.texture=new Ks(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ki(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:Un});r.uniforms.tEquirect.value=e;let o=new ce(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=We),new fa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Zr=new F,fu=new F,pu=new Kt,en=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zr.subVectors(n,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pu.getNormalMatrix(t),s=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vn=new Ai,Ls=new F,ji=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-p,b-f).normalize(),n[1].setComponents(l+r,u+c,m+p,b+f).normalize(),n[2].setComponents(l+o,u+h,m+g,b+y).normalize(),n[3].setComponents(l-o,u-h,m-g,b-y).normalize(),n[4].setComponents(l-a,u-d,m-_,b-x).normalize(),e===vn)n[5].setComponents(l+a,u+d,m+_,b+x).normalize();else if(e===Hs)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ls.x=s.normal.x>0?t.max.x:t.min.x,Ls.y=s.normal.y>0?t.max.y:t.min.y,Ls.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let u=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),p.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){let f=g[_];e?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var ma=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let y=f*u-o;for(let x=0;x<c;x++){let b=x*d-r;g.push(b,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let x=y+c*f,b=y+c*(f+1),S=y+1+c*(f+1),E=y+1+c*f;p.push(x,b,E),p.push(b,S,E)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
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
#endif`,Su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu=`#ifdef USE_BATCHING
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
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zu=`#define PI 3.141592653589793
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
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
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
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`
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
}`,$u=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
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
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
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
#endif`,md=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Td=`#if defined( USE_POINTS_UV )
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
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
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
}`,Sf=`#if DEPTH_PACKING == 3200
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
}`,Ef=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 diffuse;
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
}`,If=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,Df=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Bf=`#define PHONG
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
}`,zf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Yf=`uniform vec3 color;
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
}`,$f=`uniform float rotation;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:xu,alphamap_pars_fragment:yu,alphatest_fragment:vu,alphatest_pars_fragment:Mu,aomap_fragment:bu,aomap_pars_fragment:Su,batching_pars_vertex:Eu,batching_vertex:wu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:Cu,iridescence_fragment:Ru,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Du,color_fragment:Nu,color_pars_fragment:Ou,color_pars_vertex:Fu,color_vertex:Bu,common:zu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Gu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:Yu,envmap_fragment:$u,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ju,envmap_pars_vertex:Ku,envmap_physical_pars_fragment:cd,envmap_vertex:ju,fog_vertex:Qu,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:xd,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:bd,map_fragment:Sd,map_pars_fragment:Ed,map_particle_fragment:wd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphcolor_vertex:Rd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Ud,normal_fragment_maps:Dd,normal_pars_fragment:Nd,normal_pars_vertex:Od,normal_vertex:Fd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:$d,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:_f,backgroundCube_vert:xf,backgroundCube_frag:yf,cube_vert:vf,cube_frag:Mf,depth_vert:bf,depth_frag:Sf,distanceRGBA_vert:Ef,distanceRGBA_frag:wf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Cf,linedashed_frag:Rf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:If,meshlambert_frag:Uf,meshmatcap_vert:Df,meshmatcap_frag:Nf,meshnormal_vert:Of,meshnormal_frag:Ff,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:kf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:Gf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:Yf,sprite_vert:$f,sprite_frag:Zf},ft={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},un={basic:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ie([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ie([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ie([ft.points,ft.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ie([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ie([ft.common,ft.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ie([ft.sprite,ft.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ie([ft.common,ft.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ie([ft.lights,ft.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};un.physical={uniforms:Ie([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Is={r:0,b:0,g:0};function Jf(i,t,e,n,s,r,o){let a=new Xt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===or)?(h===void 0&&(h=new ce(new Ki(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ci(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ne.getTransfer(x.colorSpace)!==re,(d!==x||u!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ce(new ma(2,2),new En({name:"BackgroundMaterial",uniforms:Ci(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Is,ic(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Kf(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(L,U,z,J,X){let P=!1;if(o){let O=_(J,z,U);c!==O&&(c=O,p(c.object)),P=f(L,J,z,X),P&&y(L,J,z,X)}else{let O=U.wireframe===!0;(c.geometry!==J.id||c.program!==z.id||c.wireframe!==O)&&(c.geometry=J.id,c.program=z.id,c.wireframe=O,P=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,k(L,U,z,J),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,U,z){let J=z.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let P=X[U.id];P===void 0&&(P={},X[U.id]=P);let O=P[J];return O===void 0&&(O=m(u()),P[J]=O),O}function m(L){let U=[],z=[],J=[];for(let X=0;X<s;X++)U[X]=0,z[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:J,object:L,attributes:{},index:null}}function f(L,U,z,J){let X=c.attributes,P=U.attributes,O=0,Y=z.getAttributes();for(let K in Y)if(Y[K].location>=0){let tt=X[K],ht=P[K];if(ht===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),tt===void 0||tt.attribute!==ht||ht&&tt.data!==ht.data)return!0;O++}return c.attributesNum!==O||c.index!==J}function y(L,U,z,J){let X={},P=U.attributes,O=0,Y=z.getAttributes();for(let K in Y)if(Y[K].location>=0){let tt=P[K];tt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let ht={};ht.attribute=tt,tt&&tt.data&&(ht.data=tt.data),X[K]=ht,O++}c.attributes=X,c.attributesNum=O,c.index=J}function x(){let L=c.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function b(L){S(L,0)}function S(L,U){let z=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;z[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),X[L]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),X[L]=U)}function E(){let L=c.newAttributes,U=c.enabledAttributes;for(let z=0,J=U.length;z<J;z++)U[z]!==L[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function C(L,U,z,J,X,P,O){O===!0?i.vertexAttribIPointer(L,U,z,X,P):i.vertexAttribPointer(L,U,z,J,X,P)}function k(L,U,z,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=J.attributes,P=z.getAttributes(),O=U.defaultAttributeValues;for(let Y in P){let K=P[Y];if(K.location>=0){let H=X[Y];if(H===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let tt=H.normalized,ht=H.itemSize,Mt=e.get(H);if(Mt===void 0)continue;let bt=Mt.buffer,Lt=Mt.type,Ut=Mt.bytesPerElement,Ct=n.isWebGL2===!0&&(Lt===i.INT||Lt===i.UNSIGNED_INT||H.gpuType===Xl);if(H.isInterleavedBufferAttribute){let Nt=H.data,G=Nt.stride,jt=H.offset;if(Nt.isInstancedInterleavedBuffer){for(let xt=0;xt<K.locationSize;xt++)S(K.location+xt,Nt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let xt=0;xt<K.locationSize;xt++)b(K.location+xt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let xt=0;xt<K.locationSize;xt++)C(K.location+xt,ht/K.locationSize,Lt,tt,G*Ut,(jt+ht/K.locationSize*xt)*Ut,Ct)}else{if(H.isInstancedBufferAttribute){for(let Nt=0;Nt<K.locationSize;Nt++)S(K.location+Nt,H.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Nt=0;Nt<K.locationSize;Nt++)b(K.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Nt=0;Nt<K.locationSize;Nt++)C(K.location+Nt,ht/K.locationSize,Lt,tt,ht*Ut,ht/K.locationSize*Nt*Ut,Ct)}}else if(O!==void 0){let tt=O[Y];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(K.location,tt);break;case 3:i.vertexAttrib3fv(K.location,tt);break;case 4:i.vertexAttrib4fv(K.location,tt);break;default:i.vertexAttrib1fv(K.location,tt)}}}}E()}function M(){D();for(let L in a){let U=a[L];for(let z in U){let J=U[z];for(let X in J)g(J[X].object),delete J[X];delete U[z]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;let U=a[L.id];for(let z in U){let J=U[z];for(let X in J)g(J[X].object),delete J[X];delete U[z]}delete a[L.id]}function N(L){for(let U in a){let z=a[U];if(z[L.id]===void 0)continue;let J=z[L.id];for(let X in J)g(J[X].object),delete J[X];delete z[L.id]}}function D(){j(),h=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:b,disableUnusedAttributes:E}}function jf(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,u){if(u===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,u),e.update(d,r,u)}function c(h,d,u){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Qf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,b=o||t.has("OES_texture_float"),S=x&&b,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:E}}function tp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,b=f.clippingState||null;l.value=b,b=h(g,u,x,p);for(let S=0;S!==x;++S)b[S]=e[S];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,b=p;x!==_;++x,b+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ep(i){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=Ei:a===aa&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ra||a===aa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pa(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var js=class extends Js{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yi=4,ml=[.125,.215,.35,.446,.526,.582],Xn=20,Jr=new js,gl=new Xt,Kr=null,jr=0,Qr=0,Gn=(1+Math.sqrt(5))/2,gi=1/Gn,_l=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Gn,gi),new F(0,Gn,-gi),new F(gi,0,Gn),new F(-gi,0,Gn),new F(Gn,gi,0),new F(-Gn,gi,0)],Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,jr,Qr),t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:$i,format:sn,colorSpace:Mn,depthBuffer:!1},s=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,t,e)}return s}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s){let a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(gl),h.toneMapping=Dn,h.autoClear=!1;let p=new Sn({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new ce(new Ki,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(gl),_=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;Us(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Jr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_l[(s-1)%_l.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ce(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);let f=[],y=0;for(let C=0;C<Xn;++C){let k=C/_,M=Math.exp(-k*k/2);f.push(M),C===0?y+=M:C<m&&(y+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let b=this._sizeLods[s],S=3*b*(s>x-yi?s-x+yi:0),E=4*(this._cubeSize-b);Us(e,S,E,3*b,2*b),l.setRenderTarget(e),l.render(d,Jr)}};function np(i){let t=[],e=[],n=[],s=i,r=i-yi+1+ml.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-yi?l=ml[o-i+yi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let E=0;E<p;E++){let C=E%3*2/3-1,k=E>2?0:-1,M=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];y.set(M,_*g*E),x.set(u,m*g*E);let A=[E,E,E,E,E,E];b.set(A,f*g*E)}let S=new be;S.setAttribute("position",new Qt(y,_)),S.setAttribute("uv",new Qt(x,m)),S.setAttribute("faceIndex",new Qt(b,f)),t.push(S),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ip(i,t,e){let n=new Float32Array(Xn),s=new F(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function yl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function vl(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function sp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ra||l===aa,h=l===Ei||l===wi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Qs(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Qs(i));let u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let x=0,b=y.length;x<b;x+=3){let S=y[x+0],E=y[x+1],C=y[x+2];u.push(S,E,E,C,C,S)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let S=x+0,E=x+1,C=x+2;u.push(S,E,E,C,C,S)}}else return;let m=new(ec(u)?Zs:$s)(u,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function op(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),e.update(g,r,1)}function d(p,g,_){if(_===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,_),e.update(g,r,_)}function u(p,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function lp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cp(i,t){return i[0]-t[0]}function hp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function up(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],k=0;y===!0&&(k=1),x===!0&&(k=2),b===!0&&(k=3);let M=h.attributes.position.count*k,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*A*4*g),D=new qs(N,M,A,g);D.type=In,D.needsUpdate=!0;let j=k*4;for(let U=0;U<g;U++){let z=S[U],J=E[U],X=C[U],P=M*A*4*U;for(let O=0;O<z.count;O++){let Y=O*j;y===!0&&(o.fromBufferAttribute(z,O),N[P+Y+0]=o.x,N[P+Y+1]=o.y,N[P+Y+2]=o.z,N[P+Y+3]=0),x===!0&&(o.fromBufferAttribute(J,O),N[P+Y+4]=o.x,N[P+Y+5]=o.y,N[P+Y+6]=o.z,N[P+Y+7]=0),b===!0&&(o.fromBufferAttribute(X,O),N[P+Y+8]=o.x,N[P+Y+9]=o.y,N[P+Y+10]=o.z,N[P+Y+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:D,size:new Ft(M,A)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<u.length;y++)m+=u[y];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){let b=g[x];b[0]=x,b[1]=u[x]}g.sort(hp);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(cp);let _=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let b=a[x],S=b[0],E=b[1];S!==Number.MAX_SAFE_INTEGER&&E?(_&&h.getAttribute("morphTarget"+x)!==_[S]&&h.setAttribute("morphTarget"+x,_[S]),m&&h.getAttribute("morphNormal"+x)!==m[S]&&h.setAttribute("morphNormal"+x,m[S]),s[x]=E,f+=E):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function dp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var tr=class extends $e{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yn&&(n=Ln),n===void 0&&h===Ti&&(n=qn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rc=new $e,ac=new tr(1,1);ac.compareFunction=tc;var oc=new qs,lc=new da,cc=new Ks,Ml=[],bl=[],Sl=new Float32Array(16),El=new Float32Array(9),wl=new Float32Array(4);function Di(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ml[s];if(r===void 0&&(r=new Float32Array(s),Ml[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cr(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function _p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;wl.set(n),i.uniformMatrix2fv(this.addr,!1,wl),_e(e,n)}}function xp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;El.set(n),i.uniformMatrix3fv(this.addr,!1,El),_e(e,n)}}function yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),_e(e,n)}}function vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ac:rc;e.setTexture2D(t||r,s)}function Rp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lc,s)}function Pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cc,s)}function Lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||oc,s)}function Ip(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return vp;case 35667:case 35671:return Mp;case 35668:case 35672:return bp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Up(i,t){i.uniform1fv(this.addr,t)}function Dp(i,t){let e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function Np(i,t){let e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function Op(i,t){let e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){let e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bp(i,t){let e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zp(i,t){let e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kp(i,t){i.uniform1iv(this.addr,t)}function Hp(i,t){i.uniform2iv(this.addr,t)}function Vp(i,t){i.uniform3iv(this.addr,t)}function Gp(i,t){i.uniform4iv(this.addr,t)}function Wp(i,t){i.uniform1uiv(this.addr,t)}function Xp(i,t){i.uniform2uiv(this.addr,t)}function qp(i,t){i.uniform3uiv(this.addr,t)}function Yp(i,t){i.uniform4uiv(this.addr,t)}function $p(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rc,r[o])}function Zp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lc,r[o])}function Jp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cc,r[o])}function Kp(i,t,e){let n=this.cache,s=t.length,r=cr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||oc,r[o])}function jp(i){switch(i){case 5126:return Up;case 35664:return Dp;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Kp}}var ga=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ip(e.type)}},_a=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}},xa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ta=/(\w+)(\])?(\[|\.)?/g;function Tl(i,t){i.seq.push(t),i.map[t.id]=t}function Qp(i,t,e){let n=i.name,s=n.length;for(ta.lastIndex=0;;){let r=ta.exec(n),o=ta.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tl(e,c===void 0?new ga(a,i,t):new _a(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new xa(a),Tl(e,d)),e=d}}}var Si=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Qp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Al(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tm=37297,em=0;function nm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function im(i){let t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(i),n;switch(t===e?n="":t===ks&&e===zs?n="LinearDisplayP3ToLinearSRGB":t===zs&&e===ks&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case lr:return[n,"LinearTransferOETF"];case fe:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nm(i.getShaderSource(t),o)}else return s}function sm(i,t){let e=im(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rm(i,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case uh:e="OptimizedCineon";break;case dh:e="ACESFilmic";break;case ph:e="AgX";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function am(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function lm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vi(i){return i!==""}function Rl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(hm,dm)}var um=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dm(i,t){let e=Wt[t];if(e===void 0){let n=um.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}var fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(i){return i.replace(fm,pm)}function pm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Il(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case wi:t="ENVMAP_TYPE_CUBE";break;case or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _m(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===wi&&(t="ENVMAP_MODE_REFRACTION"),t}function xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case oh:t="ENVMAP_BLENDING_MIX";break;case lh:t="ENVMAP_BLENDING_ADD";break}return t}function ym(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=mm(e),c=gm(e),h=_m(e),d=xm(e),u=ym(e),p=e.isWebGL2?"":am(e),g=om(e),_=lm(r),m=s.createProgram(),f,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vi).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vi).join(`
`),y.length>0&&(y+=`
`)):(f=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),y=[p,Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,sm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vi).join(`
`)),o=ya(o),o=Rl(o,e),o=Pl(o,e),a=ya(a),a=Rl(a,e),a=Pl(a,e),o=Ll(o),a=Ll(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=x+f+o,S=x+y+a,E=Al(s,s.VERTEX_SHADER,b),C=Al(s,s.FRAGMENT_SHADER,S);s.attachShader(m,E),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(D){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(C).trim(),z=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,C);else{let X=Cl(s,E,"vertex"),P=Cl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+X+`
`+P)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||U==="")&&(J=!1);J&&(D.diagnostics={runnable:z,programLog:j,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:y}})}s.deleteShader(E),s.deleteShader(C),M=new Si(s,m),A=cm(s,m)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,tm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=em++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=C,this}var Mm=0,va=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ma(t),e.set(t,n)),n}},Ma=class{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}};function bm(i,t,e,n,s,r,o){let a=new Ji,l=new va,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,A,N,D,j){let L=D.fog,U=j.geometry,z=M.isMeshStandardMaterial?D.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),X=J&&J.mapping===or?J.image.height:null,P=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let O=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Y=O!==void 0?O.length:0,K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let H,tt,ht,Mt;if(P){let Re=un[P];H=Re.vertexShader,tt=Re.fragmentShader}else H=M.vertexShader,tt=M.fragmentShader,l.update(M),ht=l.getVertexShaderID(M),Mt=l.getFragmentShaderID(M);let bt=i.getRenderTarget(),Lt=j.isInstancedMesh===!0,Ut=j.isBatchedMesh===!0,Ct=!!M.map,Nt=!!M.matcap,G=!!J,jt=!!M.aoMap,xt=!!M.lightMap,Tt=!!M.bumpMap,gt=!!M.normalMap,te=!!M.displacementMap,At=!!M.emissiveMap,T=!!M.metalnessMap,v=!!M.roughnessMap,V=M.anisotropy>0,rt=M.clearcoat>0,st=M.iridescence>0,it=M.sheen>0,mt=M.transmission>0,at=V&&!!M.anisotropyMap,pt=rt&&!!M.clearcoatMap,St=rt&&!!M.clearcoatNormalMap,It=rt&&!!M.clearcoatRoughnessMap,Q=st&&!!M.iridescenceMap,kt=st&&!!M.iridescenceThicknessMap,R=it&&!!M.sheenColorMap,nt=it&&!!M.sheenRoughnessMap,lt=!!M.specularMap,ot=!!M.specularColorMap,_t=!!M.specularIntensityMap,Ht=mt&&!!M.transmissionMap,Yt=mt&&!!M.thicknessMap,zt=!!M.gradientMap,dt=!!M.alphaMap,I=M.alphaTest>0,ut=!!M.alphaHash,ct=!!M.extensions,Rt=!!U.attributes.uv1,Et=!!U.attributes.uv2,$t=!!U.attributes.uv3,Dt=Dn;return M.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Dt=i.toneMapping),{isWebGL2:h,shaderID:P,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:tt,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ut,instancing:Lt,instancingColor:Lt&&j.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Mn,map:Ct,matcap:Nt,envMap:G,envMapMode:G&&J.mapping,envMapCubeUVHeight:X,aoMap:jt,lightMap:xt,bumpMap:Tt,normalMap:gt,displacementMap:u&&te,emissiveMap:At,normalMapObjectSpace:gt&&M.normalMapType===Th,normalMapTangentSpace:gt&&M.normalMapType===Ql,metalnessMap:T,roughnessMap:v,anisotropy:V,anisotropyMap:at,clearcoat:rt,clearcoatMap:pt,clearcoatNormalMap:St,clearcoatRoughnessMap:It,iridescence:st,iridescenceMap:Q,iridescenceThicknessMap:kt,sheen:it,sheenColorMap:R,sheenRoughnessMap:nt,specularMap:lt,specularColorMap:ot,specularIntensityMap:_t,transmission:mt,transmissionMap:Ht,thicknessMap:Yt,gradientMap:zt,opaque:M.transparent===!1&&M.blending===Mi,alphaMap:dt,alphaTest:I,alphaHash:ut,combine:M.combine,mapUv:Ct&&_(M.map.channel),aoMapUv:jt&&_(M.aoMap.channel),lightMapUv:xt&&_(M.lightMap.channel),bumpMapUv:Tt&&_(M.bumpMap.channel),normalMapUv:gt&&_(M.normalMap.channel),displacementMapUv:te&&_(M.displacementMap.channel),emissiveMapUv:At&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:nt&&_(M.sheenRoughnessMap.channel),specularMapUv:lt&&_(M.specularMap.channel),specularColorMapUv:ot&&_(M.specularColorMap.channel),specularIntensityMapUv:_t&&_(M.specularIntensityMap.channel),transmissionMapUv:Ht&&_(M.transmissionMap.channel),thicknessMapUv:Yt&&_(M.thicknessMap.channel),alphaMapUv:dt&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(gt||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:Et,vertexUv3s:$t,pointsUvs:j.isPoints===!0&&!!U.attributes.uv&&(Ct||dt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pe,flipSided:M.side===Ae,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ct&&M.extensions.derivatives===!0,extensionFragDepth:ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)A.push(N),A.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(A,M),x(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){let A=g[M.type],N;if(A){let D=un[A];N=hu.clone(D.uniforms)}else N=M.uniforms;return N}function S(M,A){let N;for(let D=0,j=c.length;D<j;D++){let L=c[D];if(L.cacheKey===A){N=L,++N.usedTimes;break}}return N===void 0&&(N=new vm(i,A,M,r),c.push(N)),N}function E(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:S,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:k}}function Sm(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){let f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,_,m){let f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Em),n.length>1&&n.sort(u||Ul),s.length>1&&s.sort(u||Ul)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Dl,i.set(n,[o])):s>=r.length?(o=new Dl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Xt};break;case"SpotLight":e={position:new F,direction:new F,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Am(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Cm=0;function Rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pm(i,t){let e=new Tm,n=Am(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new me,a=new me;function l(h,d){let u=0,p=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let _=0,m=0,f=0,y=0,x=0,b=0,S=0,E=0,C=0,k=0,M=0;h.sort(Rm);let A=d===!0?Math.PI:1;for(let D=0,j=h.length;D<j;D++){let L=h[D],U=L.color,z=L.intensity,J=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=U.r*z*A,p+=U.g*z*A,g+=U.b*z*A;else if(L.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(L.sh.coefficients[P],z);M++}else if(L.isDirectionalLight){let P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){let O=L.shadow,Y=n.get(L);Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,s.directionalShadow[_]=Y,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=L.shadow.matrix,b++}s.directional[_]=P,_++}else if(L.isSpotLight){let P=e.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy(U).multiplyScalar(z*A),P.distance=J,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,s.spot[f]=P;let O=L.shadow;if(L.map&&(s.spotLightMap[C]=L.map,C++,O.updateMatrices(L),L.castShadow&&k++),s.spotLightMatrix[f]=O.matrix,L.castShadow){let Y=n.get(L);Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,s.spotShadow[f]=Y,s.spotShadowMap[f]=X,E++}f++}else if(L.isRectAreaLight){let P=e.get(L);P.color.copy(U).multiplyScalar(z),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=P,y++}else if(L.isPointLight){let P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity*A),P.distance=L.distance,P.decay=L.decay,L.castShadow){let O=L.shadow,Y=n.get(L);Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,s.pointShadow[m]=Y,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=L.shadow.matrix,S++}s.point[m]=P,m++}else if(L.isHemisphereLight){let P=e.get(L);P.skyColor.copy(L.color).multiplyScalar(z*A),P.groundColor.copy(L.groundColor).multiplyScalar(z*A),s.hemi[x]=P,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==y||N.hemiLength!==x||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==E||N.numSpotMaps!==C||N.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=E+C-k,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,N.directionalLength=_,N.pointLength=m,N.spotLength=f,N.rectAreaLength=y,N.hemiLength=x,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=E,N.numSpotMaps=C,N.numLightProbes=M,s.version=Cm++)}function c(h,d){let u=0,p=0,g=0,_=0,m=0,f=d.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let b=h[y];if(b.isDirectionalLight){let S=s.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),u++}else if(b.isSpotLight){let S=s.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let S=s.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let S=s.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let S=s.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Nl(i,t){let e=new Pm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lm(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Nl(i,t),e.set(r,[l])):o>=a.length?(l=new Nl(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var ba=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Dm(i,t,e){let n=new ji,s=new Ft,r=new Ft,o=new Me,a=new ba({depthPacking:wh}),l=new Sa,c={},h=e.maxTextureSize,d={[Ye]:Ae,[Ae]:Ye,[pe]:pe},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ce(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let f=this.type;this.render=function(E,C,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let j=f!==yn&&this.type===yn,L=f===yn&&this.type!==yn;for(let U=0,z=E.length;U<z;U++){let J=E[U],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let P=X.getFrameExtents();if(s.multiply(P),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/P.x),s.x=r.x*P.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/P.y),s.y=r.y*P.y,X.mapSize.y=r.y)),X.map===null||j===!0||L===!0){let Y=this.type!==yn?{minFilter:Ue,magFilter:Ue}:{};X.map!==null&&X.map.dispose(),X.map=new bn(s.x,s.y,Y),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let O=X.getViewportCount();for(let Y=0;Y<O;Y++){let K=X.getViewport(Y);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),D.viewport(o),X.updateMatrices(J,Y),n=X.getFrustum(),b(C,k,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===yn&&y(X,k),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,A,N)};function y(E,C){let k=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,k,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,k,p,_,null)}function x(E,C,k,M){let A=null,N=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=k.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let D=A.uuid,j=C.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let U=L[j];U===void 0&&(U=A.clone(),L[j]=U,C.addEventListener("dispose",S)),A=U}if(A.visible=C.visible,A.wireframe=C.wireframe,M===yn?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:d[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=k}return A}function b(E,C,k,M,A){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);let j=t.update(E),L=E.material;if(Array.isArray(L)){let U=j.groups;for(let z=0,J=U.length;z<J;z++){let X=U[z],P=L[X.materialIndex];if(P&&P.visible){let O=x(E,P,M,A);E.onBeforeShadow(i,E,C,k,j,O,X),i.renderBufferDirect(k,null,j,O,E,X),E.onAfterShadow(i,E,C,k,j,O,X)}}}else if(L.visible){let U=x(E,L,M,A);E.onBeforeShadow(i,E,C,k,j,U,null),i.renderBufferDirect(k,null,j,U,E,null),E.onAfterShadow(i,E,C,k,j,U,null)}}let D=E.children;for(let j=0,L=D.length;j<L;j++)b(D[j],C,k,M,A)}function S(E){E.target.removeEventListener("dispose",S);for(let k in c){let M=c[k],A=E.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Nm(i,t,e){let n=e.isWebGL2;function s(){let I=!1,ut=new Me,ct=null,Rt=new Me(0,0,0,0);return{setMask:function(Et){ct!==Et&&!I&&(i.colorMask(Et,Et,Et,Et),ct=Et)},setLocked:function(Et){I=Et},setClear:function(Et,$t,Dt,xe,Re){Re===!0&&(Et*=xe,$t*=xe,Dt*=xe),ut.set(Et,$t,Dt,xe),Rt.equals(ut)===!1&&(i.clearColor(Et,$t,Dt,xe),Rt.copy(ut))},reset:function(){I=!1,ct=null,Rt.set(-1,0,0,0)}}}function r(){let I=!1,ut=null,ct=null,Rt=null;return{setTest:function(Et){Et?Ut(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(Et){ut!==Et&&!I&&(i.depthMask(Et),ut=Et)},setFunc:function(Et){if(ct!==Et){switch(Et){case th:i.depthFunc(i.NEVER);break;case eh:i.depthFunc(i.ALWAYS);break;case nh:i.depthFunc(i.LESS);break;case Zn:i.depthFunc(i.LEQUAL);break;case ih:i.depthFunc(i.EQUAL);break;case sh:i.depthFunc(i.GEQUAL);break;case rh:i.depthFunc(i.GREATER);break;case ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Et}},setLocked:function(Et){I=Et},setClear:function(Et){Rt!==Et&&(i.clearDepth(Et),Rt=Et)},reset:function(){I=!1,ut=null,ct=null,Rt=null}}}function o(){let I=!1,ut=null,ct=null,Rt=null,Et=null,$t=null,Dt=null,xe=null,Re=null;return{setTest:function(se){I||(se?Ut(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(se){ut!==se&&!I&&(i.stencilMask(se),ut=se)},setFunc:function(se,Pe,cn){(ct!==se||Rt!==Pe||Et!==cn)&&(i.stencilFunc(se,Pe,cn),ct=se,Rt=Pe,Et=cn)},setOp:function(se,Pe,cn){($t!==se||Dt!==Pe||xe!==cn)&&(i.stencilOp(se,Pe,cn),$t=se,Dt=Pe,xe=cn)},setLocked:function(se){I=se},setClear:function(se){Re!==se&&(i.clearStencil(se),Re=se)},reset:function(){I=!1,ut=null,ct=null,Rt=null,Et=null,$t=null,Dt=null,xe=null,Re=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,x=null,b=null,S=null,E=null,C=null,k=null,M=new Xt(0,0,0),A=0,N=!1,D=null,j=null,L=null,U=null,z=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,P=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=P>=1):O.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=P>=2);let Y=null,K={},H=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ht=new Me().fromArray(H),Mt=new Me().fromArray(tt);function bt(I,ut,ct,Rt){let Et=new Uint8Array(4),$t=i.createTexture();i.bindTexture(I,$t),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<ct;Dt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(ut+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return $t}let Lt={};Lt[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(i.DEPTH_TEST),l.setFunc(Zn),At(!1),T(po),Ut(i.CULL_FACE),gt(Un);function Ut(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Ct(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Nt(I,ut){return p[I]!==ut?(i.bindFramebuffer(I,ut),p[I]=ut,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ut),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function G(I,ut){let ct=_,Rt=!1;if(I)if(ct=g.get(ut),ct===void 0&&(ct=[],g.set(ut,ct)),I.isWebGLMultipleRenderTargets){let Et=I.texture;if(ct.length!==Et.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,Dt=Et.length;$t<Dt;$t++)ct[$t]=i.COLOR_ATTACHMENT0+$t;ct.length=Et.length,Rt=!0}}else ct[0]!==i.COLOR_ATTACHMENT0&&(ct[0]=i.COLOR_ATTACHMENT0,Rt=!0);else ct[0]!==i.BACK&&(ct[0]=i.BACK,Rt=!0);Rt&&(e.isWebGL2?i.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function jt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let xt={[Wn]:i.FUNC_ADD,[zc]:i.FUNC_SUBTRACT,[kc]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[xo]=i.MIN,xt[yo]=i.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(xt[xo]=I.MIN_EXT,xt[yo]=I.MAX_EXT)}let Tt={[Hc]:i.ZERO,[Vc]:i.ONE,[Gc]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[Zc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[Jc]:i.CONSTANT_COLOR,[Kc]:i.ONE_MINUS_CONSTANT_COLOR,[jc]:i.CONSTANT_ALPHA,[Qc]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(I,ut,ct,Rt,Et,$t,Dt,xe,Re,se){if(I===Un){f===!0&&(Ct(i.BLEND),f=!1);return}if(f===!1&&(Ut(i.BLEND),f=!0),I!==Bc){if(I!==y||se!==N){if((x!==Wn||E!==Wn)&&(i.blendEquation(i.FUNC_ADD),x=Wn,E=Wn),se)switch(I){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,S=null,C=null,k=null,M.set(0,0,0),A=0,y=I,N=se}return}Et=Et||ut,$t=$t||ct,Dt=Dt||Rt,(ut!==x||Et!==E)&&(i.blendEquationSeparate(xt[ut],xt[Et]),x=ut,E=Et),(ct!==b||Rt!==S||$t!==C||Dt!==k)&&(i.blendFuncSeparate(Tt[ct],Tt[Rt],Tt[$t],Tt[Dt]),b=ct,S=Rt,C=$t,k=Dt),(xe.equals(M)===!1||Re!==A)&&(i.blendColor(xe.r,xe.g,xe.b,Re),M.copy(xe),A=Re),y=I,N=!1}function te(I,ut){I.side===pe?Ct(i.CULL_FACE):Ut(i.CULL_FACE);let ct=I.side===Ae;ut&&(ct=!ct),At(ct),I.blending===Mi&&I.transparent===!1?gt(Un):gt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Rt=I.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function T(I){I!==Nc?(Ut(i.CULL_FACE),I!==j&&(I===po?i.cullFace(i.BACK):I===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),j=I}function v(I){I!==L&&(X&&i.lineWidth(I),L=I)}function V(I,ut,ct){I?(Ut(i.POLYGON_OFFSET_FILL),(U!==ut||z!==ct)&&(i.polygonOffset(ut,ct),U=ut,z=ct)):Ct(i.POLYGON_OFFSET_FILL)}function rt(I){I?Ut(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function st(I){I===void 0&&(I=i.TEXTURE0+J-1),Y!==I&&(i.activeTexture(I),Y=I)}function it(I,ut,ct){ct===void 0&&(Y===null?ct=i.TEXTURE0+J-1:ct=Y);let Rt=K[ct];Rt===void 0&&(Rt={type:void 0,texture:void 0},K[ct]=Rt),(Rt.type!==I||Rt.texture!==ut)&&(Y!==ct&&(i.activeTexture(ct),Y=ct),i.bindTexture(I,ut||Lt[I]),Rt.type=I,Rt.texture=ut)}function mt(){let I=K[Y];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(I){ht.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ht.copy(I))}function Ht(I){Mt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Mt.copy(I))}function Yt(I,ut){let ct=d.get(ut);ct===void 0&&(ct=new WeakMap,d.set(ut,ct));let Rt=ct.get(I);Rt===void 0&&(Rt=i.getUniformBlockIndex(ut,I.name),ct.set(I,Rt))}function zt(I,ut){let Rt=d.get(ut).get(I);h.get(ut)!==Rt&&(i.uniformBlockBinding(ut,Rt,I.__bindingPointIndex),h.set(ut,Rt))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,K={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,x=null,b=null,S=null,E=null,C=null,k=null,M=new Xt(0,0,0),A=0,N=!1,D=null,j=null,L=null,U=null,z=null,ht.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ut,disable:Ct,bindFramebuffer:Nt,drawBuffers:G,useProgram:jt,setBlending:gt,setMaterial:te,setFlipSided:At,setCullFace:T,setLineWidth:v,setPolygonOffset:V,setScissorTest:rt,activeTexture:st,bindTexture:it,unbindTexture:mt,compressedTexImage2D:at,compressedTexImage3D:pt,texImage2D:lt,texImage3D:ot,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:R,texStorage3D:nt,texSubImage2D:St,texSubImage3D:It,compressedTexSubImage2D:Q,compressedTexSubImage3D:kt,scissor:_t,viewport:Ht,reset:dt}}function Om(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Gs("canvas")}function _(T,v,V,rt){let st=1;if((T.width>rt||T.height>rt)&&(st=rt/Math.max(T.width,T.height)),st<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let it=v?Vs:Math.floor,mt=it(st*T.width),at=it(st*T.height);d===void 0&&(d=g(mt,at));let pt=V?g(mt,at):d;return pt.width=mt,pt.height=at,pt.getContext("2d").drawImage(T,0,0,mt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+mt+"x"+at+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return ha(T.width)&&ha(T.height)}function f(T){return a?!1:T.wrapS!==nn||T.wrapT!==nn||T.minFilter!==Ue&&T.minFilter!==We}function y(T,v){return T.generateMipmaps&&v&&T.minFilter!==Ue&&T.minFilter!==We}function x(T){i.generateMipmap(T)}function b(T,v,V,rt,st=!1){if(a===!1)return v;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let it=v;if(v===i.RED&&(V===i.FLOAT&&(it=i.R32F),V===i.HALF_FLOAT&&(it=i.R16F),V===i.UNSIGNED_BYTE&&(it=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(it=i.R8UI),V===i.UNSIGNED_SHORT&&(it=i.R16UI),V===i.UNSIGNED_INT&&(it=i.R32UI),V===i.BYTE&&(it=i.R8I),V===i.SHORT&&(it=i.R16I),V===i.INT&&(it=i.R32I)),v===i.RG&&(V===i.FLOAT&&(it=i.RG32F),V===i.HALF_FLOAT&&(it=i.RG16F),V===i.UNSIGNED_BYTE&&(it=i.RG8)),v===i.RGBA){let mt=st?Bs:ne.getTransfer(rt);V===i.FLOAT&&(it=i.RGBA32F),V===i.HALF_FLOAT&&(it=i.RGBA16F),V===i.UNSIGNED_BYTE&&(it=mt===re?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(T,v,V){return y(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==Ue&&T.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){return T===Ue||T===vo||T===Tr?i.NEAREST:i.LINEAR}function C(T){let v=T.target;v.removeEventListener("dispose",C),M(v),v.isVideoTexture&&h.delete(v)}function k(T){let v=T.target;v.removeEventListener("dispose",k),N(v)}function M(T){let v=n.get(T);if(v.__webglInit===void 0)return;let V=T.source,rt=u.get(V);if(rt){let st=rt[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(T),Object.keys(rt).length===0&&u.delete(V)}n.remove(T)}function A(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let V=T.source,rt=u.get(V);delete rt[v.__cacheKey],o.memory.textures--}function N(T){let v=T.texture,V=n.get(T),rt=n.get(v);if(rt.__webglTexture!==void 0&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(V.__webglFramebuffer[st]))for(let it=0;it<V.__webglFramebuffer[st].length;it++)i.deleteFramebuffer(V.__webglFramebuffer[st][it]);else i.deleteFramebuffer(V.__webglFramebuffer[st]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[st])}else{if(Array.isArray(V.__webglFramebuffer))for(let st=0;st<V.__webglFramebuffer.length;st++)i.deleteFramebuffer(V.__webglFramebuffer[st]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let st=0;st<V.__webglColorRenderbuffer.length;st++)V.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[st]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let st=0,it=v.length;st<it;st++){let mt=n.get(v[st]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(v[st])}n.remove(v),n.remove(T)}let D=0;function j(){D=0}function L(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function U(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function z(T,v){let V=n.get(T);if(T.isVideoTexture&&te(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let rt=T.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(V,T,v);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function J(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){ht(V,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function X(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){ht(V,T,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function P(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){Mt(V,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let O={[oa]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},Y={[Ue]:i.NEAREST,[vo]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[mh]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},K={[Ah]:i.NEVER,[Uh]:i.ALWAYS,[Ch]:i.LESS,[tc]:i.LEQUAL,[Rh]:i.EQUAL,[Ih]:i.GEQUAL,[Ph]:i.GREATER,[Lh]:i.NOTEQUAL};function H(T,v,V){if(V?(i.texParameteri(T,i.TEXTURE_WRAP_S,O[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,O[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,O[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Y[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Y[v.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==nn||v.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,E(v.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==Ue&&v.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ue||v.minFilter!==Tr&&v.minFilter!==Yi||v.type===In&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===$i&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(T,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function tt(T,v){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));let rt=v.source,st=u.get(rt);st===void 0&&(st={},u.set(rt,st));let it=U(v);if(it!==T.__cacheKey){st[it]===void 0&&(st[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),st[it].usedTimes++;let mt=st[T.__cacheKey];mt!==void 0&&(st[T.__cacheKey].usedTimes--,mt.usedTimes===0&&A(v)),T.__cacheKey=it,T.__webglTexture=st[it].texture}return V}function ht(T,v,V){let rt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(rt=i.TEXTURE_3D);let st=tt(T,v),it=v.source;e.bindTexture(rt,T.__webglTexture,i.TEXTURE0+V);let mt=n.get(it);if(it.version!==mt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);let at=ne.getPrimaries(ne.workingColorSpace),pt=v.colorSpace===Xe?null:ne.getPrimaries(v.colorSpace),St=v.colorSpace===Xe||at===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let It=f(v)&&m(v.image)===!1,Q=_(v.image,It,!1,s.maxTextureSize);Q=At(v,Q);let kt=m(Q)||a,R=r.convert(v.format,v.colorSpace),nt=r.convert(v.type),lt=b(v.internalFormat,R,nt,v.colorSpace,v.isVideoTexture);H(rt,v,kt);let ot,_t=v.mipmaps,Ht=a&&v.isVideoTexture!==!0&&lt!==Kl,Yt=mt.__version===void 0||st===!0,zt=S(v,Q,kt);if(v.isDepthTexture)lt=i.DEPTH_COMPONENT,a?v.type===In?lt=i.DEPTH_COMPONENT32F:v.type===Ln?lt=i.DEPTH_COMPONENT24:v.type===qn?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:v.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Yn&&lt===i.DEPTH_COMPONENT&&v.type!==ka&&v.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ln,nt=r.convert(v.type)),v.format===Ti&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,v.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=qn,nt=r.convert(v.type))),Yt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,lt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,lt,Q.width,Q.height,0,R,nt,null));else if(v.isDataTexture)if(_t.length>0&&kt){Ht&&Yt&&e.texStorage2D(i.TEXTURE_2D,zt,lt,_t[0].width,_t[0].height);for(let dt=0,I=_t.length;dt<I;dt++)ot=_t[dt],Ht?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,ot.width,ot.height,R,nt,ot.data):e.texImage2D(i.TEXTURE_2D,dt,lt,ot.width,ot.height,0,R,nt,ot.data);v.generateMipmaps=!1}else Ht?(Yt&&e.texStorage2D(i.TEXTURE_2D,zt,lt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,R,nt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,lt,Q.width,Q.height,0,R,nt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,lt,_t[0].width,_t[0].height,Q.depth);for(let dt=0,I=_t.length;dt<I;dt++)ot=_t[dt],v.format!==sn?R!==null?Ht?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,ot.width,ot.height,Q.depth,R,ot.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,lt,ot.width,ot.height,Q.depth,0,ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,ot.width,ot.height,Q.depth,R,nt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,lt,ot.width,ot.height,Q.depth,0,R,nt,ot.data)}else{Ht&&Yt&&e.texStorage2D(i.TEXTURE_2D,zt,lt,_t[0].width,_t[0].height);for(let dt=0,I=_t.length;dt<I;dt++)ot=_t[dt],v.format!==sn?R!==null?Ht?e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,ot.width,ot.height,R,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,lt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,ot.width,ot.height,R,nt,ot.data):e.texImage2D(i.TEXTURE_2D,dt,lt,ot.width,ot.height,0,R,nt,ot.data)}else if(v.isDataArrayTexture)Ht?(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,lt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,R,nt,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Q.width,Q.height,Q.depth,0,R,nt,Q.data);else if(v.isData3DTexture)Ht?(Yt&&e.texStorage3D(i.TEXTURE_3D,zt,lt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,R,nt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,lt,Q.width,Q.height,Q.depth,0,R,nt,Q.data);else if(v.isFramebufferTexture){if(Yt)if(Ht)e.texStorage2D(i.TEXTURE_2D,zt,lt,Q.width,Q.height);else{let dt=Q.width,I=Q.height;for(let ut=0;ut<zt;ut++)e.texImage2D(i.TEXTURE_2D,ut,lt,dt,I,0,R,nt,null),dt>>=1,I>>=1}}else if(_t.length>0&&kt){Ht&&Yt&&e.texStorage2D(i.TEXTURE_2D,zt,lt,_t[0].width,_t[0].height);for(let dt=0,I=_t.length;dt<I;dt++)ot=_t[dt],Ht?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,R,nt,ot):e.texImage2D(i.TEXTURE_2D,dt,lt,R,nt,ot);v.generateMipmaps=!1}else Ht?(Yt&&e.texStorage2D(i.TEXTURE_2D,zt,lt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,R,nt,Q)):e.texImage2D(i.TEXTURE_2D,0,lt,R,nt,Q);y(v,kt)&&x(rt),mt.__version=it.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Mt(T,v,V){if(v.image.length!==6)return;let rt=tt(T,v),st=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);let it=n.get(st);if(st.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);let mt=ne.getPrimaries(ne.workingColorSpace),at=v.colorSpace===Xe?null:ne.getPrimaries(v.colorSpace),pt=v.colorSpace===Xe||mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let St=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let dt=0;dt<6;dt++)!St&&!It?Q[dt]=_(v.image[dt],!1,!0,s.maxCubemapSize):Q[dt]=It?v.image[dt].image:v.image[dt],Q[dt]=At(v,Q[dt]);let kt=Q[0],R=m(kt)||a,nt=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),ot=b(v.internalFormat,nt,lt,v.colorSpace),_t=a&&v.isVideoTexture!==!0,Ht=it.__version===void 0||rt===!0,Yt=S(v,kt,R);H(i.TEXTURE_CUBE_MAP,v,R);let zt;if(St){_t&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,ot,kt.width,kt.height);for(let dt=0;dt<6;dt++){zt=Q[dt].mipmaps;for(let I=0;I<zt.length;I++){let ut=zt[I];v.format!==sn?nt!==null?_t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I,0,0,ut.width,ut.height,nt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I,ot,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I,0,0,ut.width,ut.height,nt,lt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I,ot,ut.width,ut.height,0,nt,lt,ut.data)}}}else{zt=v.mipmaps,_t&&Ht&&(zt.length>0&&Yt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,ot,Q[0].width,Q[0].height));for(let dt=0;dt<6;dt++)if(It){_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Q[dt].width,Q[dt].height,nt,lt,Q[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ot,Q[dt].width,Q[dt].height,0,nt,lt,Q[dt].data);for(let I=0;I<zt.length;I++){let ct=zt[I].image[dt].image;_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I+1,0,0,ct.width,ct.height,nt,lt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I+1,ot,ct.width,ct.height,0,nt,lt,ct.data)}}else{_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,nt,lt,Q[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ot,nt,lt,Q[dt]);for(let I=0;I<zt.length;I++){let ut=zt[I];_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I+1,0,0,nt,lt,ut.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,I+1,ot,nt,lt,ut.image[dt])}}}y(v,R)&&x(i.TEXTURE_CUBE_MAP),it.__version=st.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function bt(T,v,V,rt,st,it){let mt=r.convert(V.format,V.colorSpace),at=r.convert(V.type),pt=b(V.internalFormat,mt,at,V.colorSpace);if(!n.get(v).__hasExternalTextures){let It=Math.max(1,v.width>>it),Q=Math.max(1,v.height>>it);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,it,pt,It,Q,v.depth,0,mt,at,null):e.texImage2D(st,it,pt,It,Q,0,mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),gt(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,st,n.get(V).__webglTexture,0,Tt(v)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,st,n.get(V).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let rt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||gt(v)){let st=v.depthTexture;st&&st.isDepthTexture&&(st.type===In?rt=i.DEPTH_COMPONENT32F:st.type===Ln&&(rt=i.DEPTH_COMPONENT24));let it=Tt(v);gt(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,rt,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,it,rt,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){let rt=Tt(v);V&&gt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,v.width,v.height):gt(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let rt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let st=0;st<rt.length;st++){let it=rt[st],mt=r.convert(it.format,it.colorSpace),at=r.convert(it.type),pt=b(it.internalFormat,mt,at,it.colorSpace),St=Tt(v);V&&gt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,pt,v.width,v.height):gt(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);let rt=n.get(v.depthTexture).__webglTexture,st=Tt(v);if(v.depthTexture.format===Yn)gt(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(v.depthTexture.format===Ti)gt(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ct(T){let v=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,T)}else if(V){v.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[rt]),v.__webglDepthbuffer[rt]=i.createRenderbuffer(),Lt(v.__webglDepthbuffer[rt],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Lt(v.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(T,v,V){let rt=n.get(T);v!==void 0&&bt(rt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ct(T)}function G(T){let v=T.texture,V=n.get(T),rt=n.get(v);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=v.version,o.memory.textures++);let st=T.isWebGLCubeRenderTarget===!0,it=T.isWebGLMultipleRenderTargets===!0,mt=m(T)||a;if(st){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let pt=0;pt<v.mipmaps.length;pt++)V.__webglFramebuffer[at][pt]=i.createFramebuffer()}else V.__webglFramebuffer[at]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)V.__webglFramebuffer[at]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(it)if(s.drawBuffers){let at=T.texture;for(let pt=0,St=at.length;pt<St;pt++){let It=n.get(at[pt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&gt(T)===!1){let at=it?v:[v];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<at.length;pt++){let St=at[pt];V.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);let It=r.convert(St.format,St.colorSpace),Q=r.convert(St.type),kt=b(St.internalFormat,It,Q,St.colorSpace,T.isXRRenderTarget===!0),R=Tt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,kt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),H(i.TEXTURE_CUBE_MAP,v,mt);for(let at=0;at<6;at++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)bt(V.__webglFramebuffer[at][pt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else bt(V.__webglFramebuffer[at],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(v,mt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let at=T.texture;for(let pt=0,St=at.length;pt<St;pt++){let It=at[pt],Q=n.get(It);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),H(i.TEXTURE_2D,It,mt),bt(V.__webglFramebuffer,T,It,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),y(It,mt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,rt.__webglTexture),H(at,v,mt),a&&v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)bt(V.__webglFramebuffer[pt],T,v,i.COLOR_ATTACHMENT0,at,pt);else bt(V.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,at,0);y(v,mt)&&x(at),e.unbindTexture()}T.depthBuffer&&Ct(T)}function jt(T){let v=m(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let rt=0,st=V.length;rt<st;rt++){let it=V[rt];if(y(it,v)){let mt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(it).__webglTexture;e.bindTexture(mt,at),x(mt),e.unbindTexture()}}}function xt(T){if(a&&T.samples>0&&gt(T)===!1){let v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,rt=T.height,st=i.COLOR_BUFFER_BIT,it=[],mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(T),pt=T.isWebGLMultipleRenderTargets===!0;if(pt)for(let St=0;St<v.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let St=0;St<v.length;St++){it.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&it.push(mt);let It=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(It===!1&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),pt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[St]),It===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[mt])),pt){let Q=n.get(v[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,V,rt,0,0,V,rt,st,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<v.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,at.__webglColorRenderbuffer[St]);let It=n.get(v[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Tt(T){return Math.min(s.maxSamples,T.samples)}function gt(T){let v=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function At(T,v){let V=T.colorSpace,rt=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ca||V!==Mn&&V!==Xe&&(ne.getTransfer(V)===re?a===!1?t.has("EXT_sRGB")===!0&&rt===sn?(T.format=ca,T.minFilter=We,T.generateMipmaps=!1):v=Ws.sRGBToLinear(v):(rt!==sn||st!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=X,this.setTextureCube=P,this.rebindTextures=Nt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=gt}function Fm(i,t,e){let n=e.isWebGL2;function s(r,o=Xe){let a,l=ne.getTransfer(o);if(r===Nn)return i.UNSIGNED_BYTE;if(r===ql)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Yl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===gh)return i.BYTE;if(r===_h)return i.SHORT;if(r===ka)return i.UNSIGNED_SHORT;if(r===Xl)return i.INT;if(r===Ln)return i.UNSIGNED_INT;if(r===In)return i.FLOAT;if(r===$i)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xh)return i.ALPHA;if(r===sn)return i.RGBA;if(r===yh)return i.LUMINANCE;if(r===vh)return i.LUMINANCE_ALPHA;if(r===Yn)return i.DEPTH_COMPONENT;if(r===Ti)return i.DEPTH_STENCIL;if(r===ca)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mh)return i.RED;if(r===$l)return i.RED_INTEGER;if(r===bh)return i.RG;if(r===Zl)return i.RG_INTEGER;if(r===Jl)return i.RGBA_INTEGER;if(r===Ar||r===Cr||r===Rr||r===Pr)if(l===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mo||r===bo||r===So||r===Eo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Mo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===So)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wo||r===To)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wo)return l===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===To)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ao||r===Co||r===Ro||r===Po||r===Lo||r===Io||r===Uo||r===Do||r===No||r===Oo||r===Fo||r===Bo||r===zo||r===ko)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ao)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Co)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ro)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Po)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lo)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Io)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uo)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Do)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===No)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oo)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fo)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bo)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zo)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ko)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lr||r===Ho||r===Vo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Lr)return l===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sh||r===Go||r===Wo||r===Xo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Lr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Go)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ea=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qe=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bm={type:"move"},qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wa=class extends dn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=e.getContextAttributes(),m=null,f=null,y=[],x=[],b=new Ft,S=null,E=new De;E.layers.enable(1),E.viewport=new Me;let C=new De;C.layers.enable(2),C.viewport=new Me;let k=[E,C],M=new Ea;M.layers.enable(1),M.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let tt=y[H];return tt===void 0&&(tt=new qi,y[H]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(H){let tt=y[H];return tt===void 0&&(tt=new qi,y[H]=tt),tt.getGripSpace()},this.getHand=function(H){let tt=y[H];return tt===void 0&&(tt=new qi,y[H]=tt),tt.getHandSpace()};function D(H){let tt=x.indexOf(H.inputSource);if(tt===-1)return;let ht=y[tt];ht!==void 0&&(ht.update(H.inputSource,H.frame,c||o),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",L);for(let H=0;H<y.length;H++){let tt=x[H];tt!==null&&(x[H]=null,y[H].disconnect(tt))}A=null,N=null,t.setRenderTarget(m),p=null,u=null,d=null,s=null,f=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",j),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new bn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,ht=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?Ti:Yn,ht=_.stencil?qn:Ln);let bt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new bn(u.textureWidth,u.textureHeight,{format:sn,type:Nn,depthTexture:new tr(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Lt=t.properties.get(f);Lt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(H){for(let tt=0;tt<H.removed.length;tt++){let ht=H.removed[tt],Mt=x.indexOf(ht);Mt>=0&&(x[Mt]=null,y[Mt].disconnect(ht))}for(let tt=0;tt<H.added.length;tt++){let ht=H.added[tt],Mt=x.indexOf(ht);if(Mt===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(ht),Mt=Lt;break}else if(x[Lt]===null){x[Lt]=ht,Mt=Lt;break}if(Mt===-1)break}let bt=y[Mt];bt&&bt.connect(ht)}}let U=new F,z=new F;function J(H,tt,ht){U.setFromMatrixPosition(tt.matrixWorld),z.setFromMatrixPosition(ht.matrixWorld);let Mt=U.distanceTo(z),bt=tt.projectionMatrix.elements,Lt=ht.projectionMatrix.elements,Ut=bt[14]/(bt[10]-1),Ct=bt[14]/(bt[10]+1),Nt=(bt[9]+1)/bt[5],G=(bt[9]-1)/bt[5],jt=(bt[8]-1)/bt[0],xt=(Lt[8]+1)/Lt[0],Tt=Ut*jt,gt=Ut*xt,te=Mt/(-jt+xt),At=te*-jt;tt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(At),H.translateZ(te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let T=Ut+te,v=Ct+te,V=Tt-At,rt=gt+(Mt-At),st=Nt*Ct/v*T,it=G*Ct/v*T;H.projectionMatrix.makePerspective(V,rt,st,it,T,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,tt){tt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(tt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;M.near=C.near=E.near=H.near,M.far=C.far=E.far=H.far,(A!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,N=M.far);let tt=H.parent,ht=M.cameras;X(M,tt);for(let Mt=0;Mt<ht.length;Mt++)X(ht[Mt],tt);ht.length===2?J(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),P(H,M,tt)};function P(H,tt,ht){ht===null?H.matrix.copy(tt.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply(tt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Zi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let O=null;function Y(H,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Mt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,Mt=!0);for(let bt=0;bt<ht.length;bt++){let Lt=ht[bt],Ut=null;if(p!==null)Ut=p.getViewport(Lt);else{let Nt=d.getViewSubImage(u,Lt);Ut=Nt.viewport,bt===0&&(t.setRenderTargetTextures(f,Nt.colorTexture,u.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(f))}let Ct=k[bt];Ct===void 0&&(Ct=new De,Ct.layers.enable(bt),Ct.viewport=new Me,k[bt]=Ct),Ct.matrix.fromArray(Lt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Lt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),bt===0&&(M.matrix.copy(Ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Mt===!0&&M.cameras.push(Ct)}}for(let ht=0;ht<y.length;ht++){let Mt=x[ht],bt=y[ht];Mt!==null&&bt!==void 0&&bt.update(Mt,tt,c||o)}O&&O(H,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let K=new sc;K.setAnimationLoop(Y),this.setAnimationLoop=function(H){O=H},this.dispose=function(){}}};function zm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ic(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ae&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ae&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ae&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function km(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let S=x.program;n.updateUBOMapping(y,S);let E=t.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function h(y){let x=d();y.__bindingPointIndex=x;let b=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let x=s[y.id],b=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,C=b.length;E<C;E++){let k=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,A=k.length;M<A;M++){let N=k[M];if(p(N,E,M,S)===!0){let D=N.__offset,j=Array.isArray(N.value)?N.value:[N.value],L=0;for(let U=0;U<j.length;U++){let z=j[U],J=_(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+L,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,b,S){let E=y.value,C=x+"_"+b;if(S[C]===void 0)return typeof E=="number"||typeof E=="boolean"?S[C]=E:S[C]=E.clone(),!0;{let k=S[C];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return S[C]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function g(y){let x=y.uniforms,b=0,S=16;for(let C=0,k=x.length;C<k;C++){let M=Array.isArray(x[C])?x[C]:[x[C]];for(let A=0,N=M.length;A<N;A++){let D=M[A],j=Array.isArray(D.value)?D.value:[D.value];for(let L=0,U=j.length;L<U;L++){let z=j[L],J=_(z),X=b%S;X!==0&&S-X<J.boundary&&(b+=S-X),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=J.storage}}}let E=b%S;return E>0&&(b+=S-E),y.__size=b,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Qi=class{constructor(t={}){let{canvas:e=$h(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;let x=this,b=!1,S=0,E=0,C=null,k=-1,M=null,A=new Me,N=new Me,D=null,j=new Xt(0),L=0,U=e.width,z=e.height,J=1,X=null,P=null,O=new Me(0,0,U,z),Y=new Me(0,0,U,z),K=!1,H=new ji,tt=!1,ht=!1,Mt=null,bt=new me,Lt=new Ft,Ut=new F,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return C===null?J:1}let G=n;function jt(w,B){for(let $=0;$<w.length;$++){let Z=w[$],q=e.getContext(Z,B);if(q!==null)return q}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ut,!1),G===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),G=jt(B,w),G===null)throw jt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xt,Tt,gt,te,At,T,v,V,rt,st,it,mt,at,pt,St,It,Q,kt,R,nt,lt,ot,_t,Ht;function Yt(){xt=new rp(G),Tt=new Qf(G,xt,t),xt.init(Tt),ot=new Fm(G,xt,Tt),gt=new Nm(G,xt,Tt),te=new lp(G),At=new Sm,T=new Om(G,xt,gt,At,Tt,ot,te),v=new ep(x),V=new sp(x),rt=new mu(G,Tt),_t=new Kf(G,xt,rt,Tt),st=new ap(G,rt,te,_t),it=new dp(G,st,rt,te),R=new up(G,Tt,T),It=new tp(At),mt=new bm(x,v,V,xt,Tt,_t,It),at=new zm(x,At),pt=new wm,St=new Lm(xt,Tt),kt=new Jf(x,v,V,gt,it,u,l),Q=new Dm(x,it,Tt),Ht=new km(G,te,Tt,gt),nt=new jf(G,xt,te,Tt),lt=new op(G,xt,te,Tt),te.programs=mt.programs,x.capabilities=Tt,x.extensions=xt,x.properties=At,x.renderLists=pt,x.shadowMap=Q,x.state=gt,x.info=te}Yt();let zt=new wa(x,G);this.xr=zt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(U,z,!1))},this.getSize=function(w){return w.set(U,z)},this.setSize=function(w,B,$=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,z=B,e.width=Math.floor(w*J),e.height=Math.floor(B*J),$===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(U*J,z*J).floor()},this.setDrawingBufferSize=function(w,B,$){U=w,z=B,J=$,e.width=Math.floor(w*$),e.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(O)},this.setViewport=function(w,B,$,Z){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,B,$,Z),gt.viewport(A.copy(O).multiplyScalar(J).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,B,$,Z){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,B,$,Z),gt.scissor(N.copy(Y).multiplyScalar(J).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(w){gt.setScissorTest(K=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,B=!0,$=!0){let Z=0;if(w){let q=!1;if(C!==null){let yt=C.texture.format;q=yt===Jl||yt===Zl||yt===$l}if(q){let yt=C.texture.type,Pt=yt===Nn||yt===Ln||yt===ka||yt===qn||yt===ql||yt===Yl,Ot=kt.getClearColor(),Bt=kt.getClearAlpha(),Zt=Ot.r,Vt=Ot.g,Gt=Ot.b;Pt?(p[0]=Zt,p[1]=Vt,p[2]=Gt,p[3]=Bt,G.clearBufferuiv(G.COLOR,0,p)):(g[0]=Zt,g[1]=Vt,g[2]=Gt,g[3]=Bt,G.clearBufferiv(G.COLOR,0,g))}else Z|=G.COLOR_BUFFER_BIT}B&&(Z|=G.DEPTH_BUFFER_BIT),$&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),St.dispose(),At.dispose(),v.dispose(),V.dispose(),it.dispose(),_t.dispose(),Ht.dispose(),mt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Re),zt.removeEventListener("sessionend",se),Mt&&(Mt.dispose(),Mt=null),Pe.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=te.autoReset,B=Q.enabled,$=Q.autoUpdate,Z=Q.needsUpdate,q=Q.type;Yt(),te.autoReset=w,Q.enabled=B,Q.autoUpdate=$,Q.needsUpdate=Z,Q.type=q}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ct(w){let B=w.target;B.removeEventListener("dispose",ct),Rt(B)}function Rt(w){Et(w),At.remove(w)}function Et(w){let B=At.get(w).programs;B!==void 0&&(B.forEach(function($){mt.releaseProgram($)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,Z,q,yt){B===null&&(B=Ct);let Pt=q.isMesh&&q.matrixWorld.determinant()<0,Ot=Rc(w,B,$,Z,q);gt.setMaterial(Z,Pt);let Bt=$.index,Zt=1;if(Z.wireframe===!0){if(Bt=st.getWireframeAttribute($),Bt===void 0)return;Zt=2}let Vt=$.drawRange,Gt=$.attributes.position,ue=Vt.start*Zt,Fe=(Vt.start+Vt.count)*Zt;yt!==null&&(ue=Math.max(ue,yt.start*Zt),Fe=Math.min(Fe,(yt.start+yt.count)*Zt)),Bt!==null?(ue=Math.max(ue,0),Fe=Math.min(Fe,Bt.count)):Gt!=null&&(ue=Math.max(ue,0),Fe=Math.min(Fe,Gt.count));let ye=Fe-ue;if(ye<0||ye===1/0)return;_t.setup(q,Z,Ot,$,Bt);let fn,le=nt;if(Bt!==null&&(fn=rt.get(Bt),le=lt,le.setIndex(fn)),q.isMesh)Z.wireframe===!0?(gt.setLineWidth(Z.wireframeLinewidth*Nt()),le.setMode(G.LINES)):le.setMode(G.TRIANGLES);else if(q.isLine){let Jt=Z.linewidth;Jt===void 0&&(Jt=1),gt.setLineWidth(Jt*Nt()),q.isLineSegments?le.setMode(G.LINES):q.isLineLoop?le.setMode(G.LINE_LOOP):le.setMode(G.LINE_STRIP)}else q.isPoints?le.setMode(G.POINTS):q.isSprite&&le.setMode(G.TRIANGLES);if(q.isBatchedMesh)le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)le.renderInstances(ue,ye,q.count);else if($.isInstancedBufferGeometry){let Jt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Mr=Math.min($.instanceCount,Jt);le.renderInstances(ue,ye,Mr)}else le.render(ue,ye)};function $t(w,B,$){w.transparent===!0&&w.side===pe&&w.forceSinglePass===!1?(w.side=Ae,w.needsUpdate=!0,ls(w,B,$),w.side=Ye,w.needsUpdate=!0,ls(w,B,$),w.side=pe):ls(w,B,$)}this.compile=function(w,B,$=null){$===null&&($=w),m=St.get($),m.init(),y.push(m),$.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),w!==$&&w.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(x._useLegacyLights);let Z=new Set;return w.traverse(function(q){let yt=q.material;if(yt)if(Array.isArray(yt))for(let Pt=0;Pt<yt.length;Pt++){let Ot=yt[Pt];$t(Ot,$,q),Z.add(Ot)}else $t(yt,$,q),Z.add(yt)}),y.pop(),m=null,Z},this.compileAsync=function(w,B,$=null){let Z=this.compile(w,B,$);return new Promise(q=>{function yt(){if(Z.forEach(function(Pt){At.get(Pt).currentProgram.isReady()&&Z.delete(Pt)}),Z.size===0){q(w);return}setTimeout(yt,10)}xt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Dt=null;function xe(w){Dt&&Dt(w)}function Re(){Pe.stop()}function se(){Pe.start()}let Pe=new sc;Pe.setAnimationLoop(xe),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(w){Dt=w,zt.setAnimationLoop(w),w===null?Pe.stop():Pe.start()},zt.addEventListener("sessionstart",Re),zt.addEventListener("sessionend",se),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(B),B=zt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,C),m=St.get(w,y.length),m.init(),y.push(m),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H.setFromProjectionMatrix(bt),ht=this.localClippingEnabled,tt=It.init(this.clippingPlanes,ht),_=pt.get(w,f.length),_.init(),f.push(_),cn(w,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,P),this.info.render.frame++,tt===!0&&It.beginShadows();let $=m.state.shadowsArray;if(Q.render($,w,B),tt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),kt.render(_,w),m.setupLights(x._useLegacyLights),B.isArrayCamera){let Z=B.cameras;for(let q=0,yt=Z.length;q<yt;q++){let Pt=Z[q];so(_,w,Pt,Pt.viewport)}}else so(_,w,B);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,B),_t.resetDefaultState(),k=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function cn(w,B,$,Z){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){Z&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);let Pt=it.update(w),Ot=w.material;Ot.visible&&_.push(w,Pt,Ot,$,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let Pt=it.update(w),Ot=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ut.copy(Pt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(Ot)){let Bt=Pt.groups;for(let Zt=0,Vt=Bt.length;Zt<Vt;Zt++){let Gt=Bt[Zt],ue=Ot[Gt.materialIndex];ue&&ue.visible&&_.push(w,Pt,ue,$,Ut.z,Gt)}}else Ot.visible&&_.push(w,Pt,Ot,$,Ut.z,null)}}let yt=w.children;for(let Pt=0,Ot=yt.length;Pt<Ot;Pt++)cn(yt[Pt],B,$,Z)}function so(w,B,$,Z){let q=w.opaque,yt=w.transmissive,Pt=w.transparent;m.setupLightsView($),tt===!0&&It.setGlobalState(x.clippingPlanes,$),yt.length>0&&Cc(q,yt,B,$),Z&&gt.viewport(A.copy(Z)),q.length>0&&os(q,B,$),yt.length>0&&os(yt,B,$),Pt.length>0&&os(Pt,B,$),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Cc(w,B,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let yt=Tt.isWebGL2;Mt===null&&(Mt=new bn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?$i:Nn,minFilter:Yi,samples:yt?4:0})),x.getDrawingBufferSize(Lt),yt?Mt.setSize(Lt.x,Lt.y):Mt.setSize(Vs(Lt.x),Vs(Lt.y));let Pt=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(j),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Ot=x.toneMapping;x.toneMapping=Dn,os(w,$,Z),T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt);let Bt=!1;for(let Zt=0,Vt=B.length;Zt<Vt;Zt++){let Gt=B[Zt],ue=Gt.object,Fe=Gt.geometry,ye=Gt.material,fn=Gt.group;if(ye.side===pe&&ue.layers.test(Z.layers)){let le=ye.side;ye.side=Ae,ye.needsUpdate=!0,ro(ue,$,Z,Fe,ye,fn),ye.side=le,ye.needsUpdate=!0,Bt=!0}}Bt===!0&&(T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt)),x.setRenderTarget(Pt),x.setClearColor(j,L),x.toneMapping=Ot}function os(w,B,$){let Z=B.isScene===!0?B.overrideMaterial:null;for(let q=0,yt=w.length;q<yt;q++){let Pt=w[q],Ot=Pt.object,Bt=Pt.geometry,Zt=Z===null?Pt.material:Z,Vt=Pt.group;Ot.layers.test($.layers)&&ro(Ot,B,$,Bt,Zt,Vt)}}function ro(w,B,$,Z,q,yt){w.onBeforeRender(x,B,$,Z,q,yt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(x,B,$,Z,w,yt),q.transparent===!0&&q.side===pe&&q.forceSinglePass===!1?(q.side=Ae,q.needsUpdate=!0,x.renderBufferDirect($,B,Z,q,w,yt),q.side=Ye,q.needsUpdate=!0,x.renderBufferDirect($,B,Z,q,w,yt),q.side=pe):x.renderBufferDirect($,B,Z,q,w,yt),w.onAfterRender(x,B,$,Z,q,yt)}function ls(w,B,$){B.isScene!==!0&&(B=Ct);let Z=At.get(w),q=m.state.lights,yt=m.state.shadowsArray,Pt=q.state.version,Ot=mt.getParameters(w,q.state,yt,B,$),Bt=mt.getProgramCacheKey(Ot),Zt=Z.programs;Z.environment=w.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(w.isMeshStandardMaterial?V:v).get(w.envMap||Z.environment),Zt===void 0&&(w.addEventListener("dispose",ct),Zt=new Map,Z.programs=Zt);let Vt=Zt.get(Bt);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===Pt)return oo(w,Ot),Vt}else Ot.uniforms=mt.getUniforms(w),w.onBuild($,Ot,x),w.onBeforeCompile(Ot,x),Vt=mt.acquireProgram(Ot,Bt),Zt.set(Bt,Vt),Z.uniforms=Ot.uniforms;let Gt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=It.uniform),oo(w,Ot),Z.needsLights=Lc(w),Z.lightsStateVersion=Pt,Z.needsLights&&(Gt.ambientLightColor.value=q.state.ambient,Gt.lightProbe.value=q.state.probe,Gt.directionalLights.value=q.state.directional,Gt.directionalLightShadows.value=q.state.directionalShadow,Gt.spotLights.value=q.state.spot,Gt.spotLightShadows.value=q.state.spotShadow,Gt.rectAreaLights.value=q.state.rectArea,Gt.ltc_1.value=q.state.rectAreaLTC1,Gt.ltc_2.value=q.state.rectAreaLTC2,Gt.pointLights.value=q.state.point,Gt.pointLightShadows.value=q.state.pointShadow,Gt.hemisphereLights.value=q.state.hemi,Gt.directionalShadowMap.value=q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Gt.spotShadowMap.value=q.state.spotShadowMap,Gt.spotLightMatrix.value=q.state.spotLightMatrix,Gt.spotLightMap.value=q.state.spotLightMap,Gt.pointShadowMap.value=q.state.pointShadowMap,Gt.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function ao(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Si.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function oo(w,B){let $=At.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Rc(w,B,$,Z,q){B.isScene!==!0&&(B=Ct),T.resetTextureUnits();let yt=B.fog,Pt=Z.isMeshStandardMaterial?B.environment:null,Ot=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mn,Bt=(Z.isMeshStandardMaterial?V:v).get(Z.envMap||Pt),Zt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Gt=!!$.morphAttributes.position,ue=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color,ye=Dn;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=x.toneMapping);let fn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=fn!==void 0?fn.length:0,Jt=At.get(Z),Mr=m.state.lights;if(tt===!0&&(ht===!0||w!==M)){let He=w===M&&Z.id===k;It.setState(Z,w,He)}let he=!1;Z.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Mr.state.version||Jt.outputColorSpace!==Ot||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||Jt.envMap!==Bt||Z.fog===!0&&Jt.fog!==yt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==It.numPlanes||Jt.numIntersection!==It.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==Vt||Jt.morphTargets!==Gt||Jt.morphNormals!==ue||Jt.morphColors!==Fe||Jt.toneMapping!==ye||Tt.isWebGL2===!0&&Jt.morphTargetsCount!==le)&&(he=!0):(he=!0,Jt.__version=Z.version);let Fn=Jt.currentProgram;he===!0&&(Fn=ls(Z,B,q));let lo=!1,Fi=!1,br=!1,Se=Fn.getUniforms(),Bn=Jt.uniforms;if(gt.useProgram(Fn.program)&&(lo=!0,Fi=!0,br=!0),Z.id!==k&&(k=Z.id,Fi=!0),lo||M!==w){Se.setValue(G,"projectionMatrix",w.projectionMatrix),Se.setValue(G,"viewMatrix",w.matrixWorldInverse);let He=Se.map.cameraPosition;He!==void 0&&He.setValue(G,Ut.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&Se.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Fi=!0,br=!0)}if(q.isSkinnedMesh){Se.setOptional(G,q,"bindMatrix"),Se.setOptional(G,q,"bindMatrixInverse");let He=q.skeleton;He&&(Tt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Se.setValue(G,"boneTexture",He.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Se.setOptional(G,q,"batchingTexture"),Se.setValue(G,"batchingTexture",q._matricesTexture,T));let Sr=$.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&Tt.isWebGL2===!0)&&R.update(q,$,Fn),(Fi||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,Se.setValue(G,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bn.envMap.value=Bt,Bn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Fi&&(Se.setValue(G,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&Pc(Bn,br),yt&&Z.fog===!0&&at.refreshFogUniforms(Bn,yt),at.refreshMaterialUniforms(Bn,Z,J,z,Mt),Si.upload(G,ao(Jt),Bn,T)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Si.upload(G,ao(Jt),Bn,T),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(G,"center",q.center),Se.setValue(G,"modelViewMatrix",q.modelViewMatrix),Se.setValue(G,"normalMatrix",q.normalMatrix),Se.setValue(G,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let He=Z.uniformsGroups;for(let Er=0,Ic=He.length;Er<Ic;Er++)if(Tt.isWebGL2){let co=He[Er];Ht.update(co,Fn),Ht.bind(co,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function Pc(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Lc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,$){At.get(w.texture).__webglTexture=B,At.get(w.depthTexture).__webglTexture=$;let Z=At.get(w);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){let $=At.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,$=0){C=w,S=B,E=$;let Z=!0,q=null,yt=!1,Pt=!1;if(w){let Bt=At.get(w);Bt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(G.FRAMEBUFFER,null),Z=!1):Bt.__webglFramebuffer===void 0?T.setupRenderTarget(w):Bt.__hasExternalTextures&&T.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);let Zt=w.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Pt=!0);let Vt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?q=Vt[B][$]:q=Vt[B],yt=!0):Tt.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?q=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?q=Vt[$]:q=Vt,A.copy(w.viewport),N.copy(w.scissor),D=w.scissorTest}else A.copy(O).multiplyScalar(J).floor(),N.copy(Y).multiplyScalar(J).floor(),D=K;if(gt.bindFramebuffer(G.FRAMEBUFFER,q)&&Tt.drawBuffers&&Z&&gt.drawBuffers(w,q),gt.viewport(A),gt.scissor(N),gt.setScissorTest(D),yt){let Bt=At.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Bt.__webglTexture,$)}else if(Pt){let Bt=At.get(w.texture),Zt=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.__webglTexture,$||0,Zt)}k=-1},this.readRenderTargetPixels=function(w,B,$,Z,q,yt,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){gt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{let Bt=w.texture,Zt=Bt.format,Vt=Bt.type;if(Zt!==sn&&ot.convert(Zt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Vt===$i&&(xt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Vt!==Nn&&ot.convert(Vt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===In&&(Tt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Z&&$>=0&&$<=w.height-q&&G.readPixels(B,$,Z,q,ot.convert(Zt),ot.convert(Vt),yt)}finally{let Bt=C!==null?At.get(C).__webglFramebuffer:null;gt.bindFramebuffer(G.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(w,B,$=0){let Z=Math.pow(2,-$),q=Math.floor(B.image.width*Z),yt=Math.floor(B.image.height*Z);T.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,w.x,w.y,q,yt),gt.unbindTexture()},this.copyTextureToTexture=function(w,B,$,Z=0){let q=B.image.width,yt=B.image.height,Pt=ot.convert($.format),Ot=ot.convert($.type);T.setTexture2D($,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Z,w.x,w.y,q,yt,Pt,Ot,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Z,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Pt,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Z,w.x,w.y,Pt,Ot,B.image),Z===0&&$.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,$,Z,q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=w.max.x-w.min.x+1,Pt=w.max.y-w.min.y+1,Ot=w.max.z-w.min.z+1,Bt=ot.convert(Z.format),Zt=ot.convert(Z.type),Vt;if(Z.isData3DTexture)T.setTexture3D(Z,0),Vt=G.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)T.setTexture2DArray(Z,0),Vt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);let Gt=G.getParameter(G.UNPACK_ROW_LENGTH),ue=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Fe=G.getParameter(G.UNPACK_SKIP_PIXELS),ye=G.getParameter(G.UNPACK_SKIP_ROWS),fn=G.getParameter(G.UNPACK_SKIP_IMAGES),le=$.isCompressedTexture?$.mipmaps[q]:$.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,le.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,le.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?G.texSubImage3D(Vt,q,B.x,B.y,B.z,yt,Pt,Ot,Bt,Zt,le.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Vt,q,B.x,B.y,B.z,yt,Pt,Ot,Bt,le.data)):G.texSubImage3D(Vt,q,B.x,B.y,B.z,yt,Pt,Ot,Bt,Zt,le),G.pixelStorei(G.UNPACK_ROW_LENGTH,Gt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ue),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Fe),G.pixelStorei(G.UNPACK_SKIP_ROWS,ye),G.pixelStorei(G.UNPACK_SKIP_IMAGES,fn),q===0&&Z.generateMipmaps&&G.generateMipmap(Vt),gt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),gt.unbindTexture()},this.resetState=function(){S=0,E=0,C=null,gt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ha?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===lr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?$n:jl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$n?fe:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ta=class extends Qi{};Ta.prototype.isWebGL1Renderer=!0;var er=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ri=class extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ol=new F,Fl=new F,Bl=new me,ea=new Jn,Ds=new Ai,Pi=class extends Ce{constructor(t=new be,e=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ol.fromBufferAttribute(e,s-1),Fl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ol.distanceTo(Fl);t.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;Bl.copy(s).invert(),ea.copy(t.ray).applyMatrix4(Bl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,d=new F,u=new F,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let f=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=f,b=y-1;x<b;x+=p){let S=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,E),ea.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let k=t.ray.origin.distanceTo(u);k<t.near||k>t.far||e.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=f,b=y-1;x<b;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ea.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(u);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var nr=class extends Pi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var ir=class extends $e{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var sr=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,u=new F,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let y=[],x=f/n,b=0;f===0&&o===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let S=0;S<=e;S++){let E=S/e;d.x=-t*Math.cos(s+E*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+b,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let x=h[f][y+1],b=h[f][y],S=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&p.push(x,b,E),(f!==n-1||l<Math.PI)&&p.push(b,S,E)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var an=class extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ns(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Li=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Aa=class extends Li{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qo,endingEnd:qo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yo:r=t,a=2*e-n;break;case $o:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yo:o=t,l=2*n-e;break;case $o:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let S=0;S!==a;++S)r[S]=f*o[h+S]+y*o[c+S]+x*o[l+S]+b*o[d+S];return r}},Ca=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ra=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Aa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Fs:e=this.InterpolantFactoryMethodLinear;break;case Ir:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Hm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ir,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Fs;var Kn=class extends on{};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Os;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends on{};Pa.prototype.ValueTypeName="color";var La=class extends on{};La.prototype.ValueTypeName="number";var Ia=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ts=class extends on{InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.DefaultInterpolation=Fs;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends on{};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Os;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends on{};Ua.prototype.ValueTypeName="vector";var Da=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Vm=new Da,Na=class{constructor(t){this.manager=t!==void 0?t:Vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Na.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ar=class extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},na=new me,zl=new F,kl=new F,Oa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fa=class extends Oa{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Fa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wa="\\[\\]\\.:\\/",Gm=new RegExp("["+Wa+"]","g"),Xa="[^"+Wa+"]",Wm="[^"+Wa.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",Xa),qm=/(WCOD+)?/.source.replace("WCOD",Wm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),Zm=new RegExp("^"+Xm+qm+Ym+$m+"$"),Jm=["material","materials","bones","map"],Ba=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(t){let e=Zm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Ba;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xg=new Float32Array(1);var ns=class{constructor(t,e,n=0,s=1/0){this.ray=new Jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return za(t,this,n,e),n.sort(Hl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)za(t[s],this,n,e);return n.sort(Hl),n}};function Hl(i,t){return i.distance-t.distance}function za(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)za(s[r],t,e,!0)}}var is=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ss=[["skin","\u9AD4\u8868"],["bone","\u9AA8\u9ABC"],["cart","\u8EDF\u9AA8"],["muscle","\u808C\u8089"],["organ","\u5167\u81DF"],["lung","\u80BA"],["vessel","\u8840\u7BA1"],["nerve","\u795E\u7D93"]],ur=Object.fromEntries(ss),Ya={surface:{skin:1,bone:1,cart:1,muscle:1,organ:1,lung:.5,vessel:1,nerve:1},xray:{skin:.12,bone:1,cart:1,muscle:.3,organ:1,lung:.25,vessel:1,nerve:1},bone:{skin:.08,bone:1,cart:1,muscle:0,organ:0,lung:0,vessel:0,nerve:0},organ:{skin:.08,bone:.35,cart:.35,muscle:0,organ:1,lung:.25,vessel:1,nerve:1},muscle:{skin:.08,bone:1,cart:1,muscle:1,organ:0,lung:0,vessel:0,nerve:0}},hr=class{constructor(t){let e=new DataView(t),n=e.getUint32(0,!0);this.hdr=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n)));let s=this.S=this.hdr.structures,r=s.reduce((c,h)=>c+h.nv,0),o=s.reduce((c,h)=>c+h.nf,0),a=4+n,l=a+r*6+(r%2?2:0);this.q=new Int16Array(t,a,r*3),this.f=new Uint32Array(t,l,o*3),this.c=this.hdr.center,this.Q=this.hdr.q,this.byName=Object.fromEntries(s.map(c=>[c.name,c])),this.T=null,this.origin=this.c}get modality(){return this.hdr.quality?.modality||"CT"}lps(t){let e=new Float32Array(t.nv*3),n=this.q,s=this.Q,r=this.c,o=this.T;for(let a=0;a<t.nv;a++){let l=(t.vo+a)*3,c=r[0]+n[l]*s,h=r[1]+n[l+1]*s,d=r[2]+n[l+2]*s;if(o){let u=o.R,p=u[0]*c+u[1]*h+u[2]*d+o.t[0],g=u[3]*c+u[4]*h+u[5]*d+o.t[1],_=u[6]*c+u[7]*h+u[8]*d+o.t[2];c=p,h=g,d=_}e[a*3]=c,e[a*3+1]=h,e[a*3+2]=d}return e}tris(t){return this.f.subarray(t.fo*3,(t.fo+t.nf)*3)}toWorld(t){let e=this.origin;return[(t[0]-e[0])/10,(t[2]-e[2])/10,-(t[1]-e[1])/10]}toLPS(t,e,n,s,r){let o=this.origin;s[r]=o[0]+t*10,s[r+1]=o[1]-n*10,s[r+2]=o[2]+e*10}world(t){let e=this.lps(t),n=this.origin;for(let s=0;s<e.length;s+=3){let r=e[s],o=e[s+1],a=e[s+2];e[s]=(r-n[0])/10,e[s+1]=(a-n[2])/10,e[s+2]=-(o-n[1])/10}return e}build(){this.group&&this.dispose();let t=this.group=new qe;this.mesh={};for(let e of this.S){let n=new be;n.setAttribute("position",new Qt(this.world(e),3)),n.setIndex(new Qt(this.tris(e),1)),n.computeVertexNormals(),n.computeBoundingSphere();let s=new ce(n,new an({color:e.color,roughness:e.cat==="bone"?.62:.5,metalness:0,side:pe,vertexColors:!1}));s.userData.s=e,s.renderOrder=e.cat==="skin"?12:e.cat==="lung"?10:1,t.add(s),this.mesh[e.name]=s}return t}dispose(){this.group&&(this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}),this.group.parent?.remove(this.group),this.group=null)}style(t,e=new Set,n=null){for(let s of this.S){let r=this.mesh[s.name],o=n?n.has(s.name)?Math.max(.9,t[s.cat]??1):0:e.has(s.name)?0:t[s.cat]??1;r.visible=o>.01;let a=o<.99;r.material.vertexColors||r.material.color.set(s.color),r.material.transparent=a,r.material.opacity=o,r.material.depthWrite=!a,r.material.side=s.cat==="skin"&&a?Ye:pe,r.material.needsUpdate=!0}}box(){this.group?.updateMatrixWorld(!0);let t=new Ze;for(let e in this.mesh){let n=this.mesh[e];n.visible&&n.userData.s.cat!=="skin"&&t.expandByObject(n)}if(t.isEmpty())for(let e in this.mesh)t.expandByObject(this.mesh[e]);return t}},Km=/^(vertebrae_|vertebrae$|sternum|rib_|sacrum|hip_)/;function uc(i,t){let e=[],n=[],s=[],r="bone";for(let h in t.hdr.centroids)Km.test(h)&&i.hdr.centroids[h]&&(e.push(t.hdr.centroids[h]),n.push(i.hdr.centroids[h]),s.push(h));if(e.length<3){e=[],n=[],s=[],r="all";for(let h in t.hdr.centroids)i.hdr.centroids[h]&&(e.push(t.hdr.centroids[h]),n.push(i.hdr.centroids[h]),s.push(h))}if(e.length<3)return null;let o=e.map(()=>!0),a=null;for(let h=0;h<4;h++){let d=o.map((_,m)=>_?m:-1).filter(_=>_>=0);if(d.length<3)break;a=jm(d.map(_=>e[_]),d.map(_=>n[_]));let u=e.map((_,m)=>hc(a,_,n[m])),p=[...d.map(_=>u[_])].sort((_,m)=>_-m)[Math.floor(d.length/2)],g=u.map(_=>_<=Math.max(3*p,3));if(g.every((_,m)=>_===o[m]))break;o=g}let l=e.map((h,d)=>hc(a,h,n[d])),c=l.filter((h,d)=>o[d]);return{R:a.R,t:a.t,n:c.length,total:e.length,rms:Math.sqrt(c.reduce((h,d)=>h+d*d,0)/c.length),max:Math.max(...c),angle:a.angle,shift:a.shift,names:s,bad:s.filter((h,d)=>!o[d]),by:r}}var hc=(i,t,e)=>{let n=i.R,s=i.t;return Math.hypot(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+s[0]-e[0],n[3]*t[0]+n[4]*t[1]+n[5]*t[2]+s[1]-e[1],n[6]*t[0]+n[7]*t[1]+n[8]*t[2]+s[2]-e[2])};function jm(i,t){let e=E=>[0,1,2].map(C=>E.reduce((k,M)=>k+M[C],0)/E.length),n=e(i),s=e(t),r=Array.from({length:9},()=>0);i.forEach((E,C)=>{let k=[E[0]-n[0],E[1]-n[1],E[2]-n[2]],M=[t[C][0]-s[0],t[C][1]-s[1],t[C][2]-s[2]];for(let A=0;A<3;A++)for(let N=0;N<3;N++)r[A*3+N]+=k[A]*M[N]});let[o,a,l,c,h,d,u,p,g]=r,_=[[o+h+g,d-p,u-l,a-c],[d-p,o-h-g,a+c,u+l],[u-l,a+c,-o+h-g,d+p],[a-c,u+l,d+p,-o-h+g]],[m,f,y,x]=Qm(_),b=[m*m+f*f-y*y-x*x,2*(f*y-m*x),2*(f*x+m*y),2*(f*y+m*x),m*m-f*f+y*y-x*x,2*(y*x-m*f),2*(f*x-m*y),2*(y*x+m*f),m*m-f*f-y*y+x*x],S=[s[0]-(b[0]*n[0]+b[1]*n[1]+b[2]*n[2]),s[1]-(b[3]*n[0]+b[4]*n[1]+b[5]*n[2]),s[2]-(b[6]*n[0]+b[7]*n[1]+b[8]*n[2])];return{R:b,t:S,angle:Math.acos(Math.min(1,Math.abs(m)))*2*180/Math.PI,shift:Math.hypot(s[0]-n[0],s[1]-n[1],s[2]-n[2])}}function Qm(i){let t=i.map(o=>o.slice()),e=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];for(let o=0;o<60;o++){let a=0;for(let l=0;l<4;l++)for(let c=l+1;c<4;c++)a+=t[l][c]*t[l][c];if(a<1e-18)break;for(let l=0;l<4;l++)for(let c=l+1;c<4;c++){if(Math.abs(t[l][c])<1e-15)continue;let h=(t[c][c]-t[l][l])/(2*t[l][c]),d=Math.sign(h||1)/(Math.abs(h)+Math.sqrt(h*h+1)),u=1/Math.sqrt(d*d+1),p=d*u;for(let g=0;g<4;g++){let _=t[g][l],m=t[g][c];t[g][l]=u*_-p*m,t[g][c]=p*_+u*m}for(let g=0;g<4;g++){let _=t[l][g],m=t[c][g];t[l][g]=u*_-p*m,t[c][g]=p*_+u*m}for(let g=0;g<4;g++){let _=e[g][l],m=e[g][c];e[g][l]=u*_-p*m,e[g][c]=p*_+u*m}}}let n=0;for(let o=1;o<4;o++)t[o][o]>t[n][n]&&(n=o);let s=[e[0][n],e[1][n],e[2][n],e[3][n]],r=Math.hypot(...s);return s.map(o=>o/r)}function dc(i,t,e,n){let s=i.lps(t),r=i.tris(t),o=e.lps(n),a=new Float32Array(s.length);for(let u=0;u<r.length;u+=3){let p=r[u]*3,g=r[u+1]*3,_=r[u+2]*3,m=s[g]-s[p],f=s[g+1]-s[p+1],y=s[g+2]-s[p+2],x=s[_]-s[p],b=s[_+1]-s[p+1],S=s[_+2]-s[p+2],E=f*S-y*b,C=y*x-m*S,k=m*b-f*x;for(let M of[p,g,_])a[M]+=E,a[M+1]+=C,a[M+2]+=k}let l=4,c=(u,p,g)=>`${Math.floor(u/l)},${Math.floor(p/l)},${Math.floor(g/l)}`,h=new Map;for(let u=0;u<s.length;u+=3){let p=c(s[u],s[u+1],s[u+2]),g=h.get(p);g||h.set(p,g=[]),g.push(u)}let d=new Float32Array(o.length/3);for(let u=0;u<d.length;u++){let p=o[u*3],g=o[u*3+1],_=o[u*3+2],m=Math.floor(p/l),f=Math.floor(g/l),y=Math.floor(_/l),x=1/0,b=-1;for(let E=1;E<=6&&b<0;E++)for(let C=m-E;C<=m+E;C++)for(let k=f-E;k<=f+E;k++)for(let M=y-E;M<=y+E;M++){let A=h.get(`${C},${k},${M}`);if(A)for(let N of A){let D=(s[N]-p)**2+(s[N+1]-g)**2+(s[N+2]-_)**2;D<x&&(x=D,b=N)}}if(b<0){d[u]=NaN;continue}let S=Math.hypot(a[b],a[b+1],a[b+2])||1;d[u]=((p-s[b])*a[b]+(g-s[b+1])*a[b+1]+(_-s[b+2])*a[b+2])/S}return d}function fc(i,t=5){let e=new Float32Array(i.length*3),n=[.18,.45,.95],s=[.86,.86,.86],r=[.95,.25,.2];for(let o=0;o<i.length;o++){let a=i[o],l=isNaN(a)?0:Math.max(-1,Math.min(1,a/t));Math.abs(a)<.5&&(l=0);let c=l<0?n:r,h=Math.abs(l);for(let d=0;d<3;d++)e[o*3+d]=s[d]*(1-h)+c[d]*h}return e}var ee=(i,t=1)=>i==null||Number.isNaN(+i)?"\u2014":(+i).toFixed(t),Ni=(i,t=1)=>i==null||Number.isNaN(+i)?"\u2014":(i>0?"+":"")+(+i).toFixed(t);async function pc(i){let t=new Uint8Array(i);return t[0]!==31||t[1]!==139?i:new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}function tg(i,t){return window[t]?Promise.resolve():new Promise((e,n)=>{let s=document.createElement("script");s.src=i,s.onload=e,s.onerror=()=>n(new Error("\u627E\u4E0D\u5230\u793A\u7BC4\u8CC7\u6599 "+i)),document.head.appendChild(s)})}async function mc(i,t){await tg(i,t);let e=window[t].map(atob).join(""),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}function eg(i){let t=[],e=new TextEncoder;for(let n of i){let s=e.encode(n.webkitRelativePath||n.name),r=new ArrayBuffer(4+s.length+8),o=new DataView(r);o.setUint32(0,s.length,!0),new Uint8Array(r,4,s.length).set(s),o.setBigUint64(4+s.length,BigInt(n.size),!0),t.push(r,n)}return new Blob(t)}var dr=class{constructor(t,e,n){this.V=t,this.CTV=e,this.h=n.h,this.$=n.$,this.onInfo=n.onInfo,this.A=null,this.B=null,this.vol={A:null,B:null},this.src={A:null,B:null},this.job={A:null,B:null},this.preset="xray",this.op={...Ya.xray},this.hidden=new Set,this.solo=null,this.sel=null,this.cmp="side",this.chg=null,this.active=!1,this.buildImg(),this.buildStruct(),this.buildCmp()}buildImg(){let t=this.h,e=this.$,n=e("#t-img"),s=a=>{let l=t("input",{type:"file",webkitdirectory:"",multiple:"",hidden:!0,onchange:h=>this.upload([...h.target.files],a)}),c=t("input",{type:"file",multiple:"",accept:".zip,.nii,.gz,.nrrd,.dcm,.mha",hidden:!0,onchange:h=>this.upload([...h.target.files],a)});return[l,c]},[r,o]=s("A");n.append(t("p",{class:"note"},"\u4E0A\u50B3 CT \u6216 MR\uFF08DICOM \u8CC7\u6599\u593E\u3001zip\u3001NIfTI\u3001NRRD\uFF09\u3002\u5730\u7AEF\u4F3A\u670D\u5668\u81EA\u52D5\u5206\u5272\u4E26\u91CD\u5EFA\u5F71\u50CF\u7BC4\u570D\u5167\u7684\u9AA8\u9ABC\u3001\u808C\u8089\u3001\u5167\u81DF\u8207\u8840\u7BA1\uFF0C\u4F4D\u7F6E\u5C31\u662F\u5F71\u50CF\u4E2D\u7684\u771F\u5BE6\u4F4D\u7F6E\uFF1B\u5F71\u50CF\u6C92\u6DB5\u84CB\u7684\u90E8\u4F4D\u4E0D\u6703\u51FA\u73FE\u3002"),t("div",{class:"note warn",id:"im-srv"},"\u6B63\u5728\u78BA\u8A8D\u5730\u7AEF\u4F3A\u670D\u5668\u2026"),t("div",{id:"im-up",hidden:!0},t("div",{class:"row"},t("label",{},"\u5F71\u50CF\u985E\u578B"),t("select",{id:"im-mod"},t("option",{value:"auto"},"\u81EA\u52D5\u5224\u65B7"),t("option",{value:"CT"},"CT"),t("option",{value:"MR"},"MR"))),t("div",{class:"row"},r,o,t("button",{class:"btn",onclick:()=>r.click()},"\u9078\u64C7 DICOM \u8CC7\u6599\u593E"),t("button",{class:"btn ghost",onclick:()=>o.click()},"\u9078\u64C7\u6A94\u6848"))),t("div",{id:"im-prog-A",class:"prog",hidden:!0},t("div",{class:"track"},t("div",{class:"bar"})),t("div",{class:"val step"}),t("pre",{class:"log"})),t("div",{class:"row"},t("button",{class:"btn ghost",id:"im-demo",onclick:()=>this.demo("A")},"\u8F09\u5165\u793A\u7BC4\uFF08\u516C\u958B\u80F8\u8179\u90E8 CT\uFF09")),t("div",{id:"im-res"})),this.probe()}async probe(){let t=!1;try{let s=await fetch("api/health",{cache:"no-store"});t=s.ok&&(await s.json()).ok}catch{t=!1}this.server=t;let e=this.$("#im-srv");e.textContent=t?"\u5DF2\u9023\u4E0A\u5730\u7AEF\u4F3A\u670D\u5668\u3002\u5F71\u50CF\u53EA\u5728\u9019\u53F0\u4F3A\u670D\u5668\u4E0A\u8655\u7406\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u5916\u90E8\u3002":"\u76EE\u524D\u4E0D\u662F\u5F9E\u5730\u7AEF\u4F3A\u670D\u5668\u958B\u555F\uFF0C\u7121\u6CD5\u4E0A\u50B3\u5F71\u50CF\u3002\u5728\u9662\u5167\u6216\u516C\u53F8\u96FB\u8166\u57F7\u884C server.py \u5F8C\uFF0C\u7528\u700F\u89BD\u5668\u958B http://localhost:8765 \u5373\u53EF\u4E0A\u50B3\uFF1B\u9019\u88E1\u53EF\u4EE5\u5148\u770B\u793A\u7BC4\u3002",e.className=t?"note":"note warn",this.$("#im-up").hidden=!t;let n=this.$("#cmp-up");n&&(n.hidden=!t)}prog(t,e,n,s){let r=this.$("#im-prog-"+t);r&&(r.hidden=!1,r.querySelector(".step").textContent=e,r.querySelector(".bar").style.width=Math.round(n*100)+"%",s&&(r.querySelector(".log").textContent=s.slice(-8).join(`
`)))}upload(t,e){if(!t.length)return;let n=t.reduce((o,a)=>o+a.size,0);this.prog(e,`\u4E0A\u50B3 ${t.length} \u500B\u6A94\u6848\uFF08${(n/1e6).toFixed(0)} MB\uFF09`,0);let s=this.$("#im-mod")?.value||"auto",r=new XMLHttpRequest;r.open("POST","api/ct?modality="+encodeURIComponent(s)),r.upload.onprogress=o=>{o.lengthComputable&&this.prog(e,`\u4E0A\u50B3\u4E2D ${Math.round(o.loaded/o.total*100)}%`,.1*o.loaded/o.total)},r.onload=()=>{if(r.status!==200){this.prog(e,"\u4E0A\u50B3\u5931\u6557\uFF1A"+r.responseText.slice(0,200),0);return}this.job[e]=JSON.parse(r.responseText).id,this.poll(e)},r.onerror=()=>this.prog(e,"\u4E0A\u50B3\u5931\u6557\uFF1A\u7121\u6CD5\u9023\u7DDA\u5230\u4F3A\u670D\u5668",0),r.send(eg(t))}async poll(t){try{let e=this.job[t],n=await(await fetch("api/ct/"+e,{cache:"no-store"})).json();if(this.prog(t,n.state==="error"?"\u8655\u7406\u5931\u6557\uFF1A"+n.error:n.step,n.progress||0,n.log),n.state==="done"){let s=await(await fetch("api/ct/"+e+"/case")).arrayBuffer();await this.load(s,t,"api/ct/"+e+"/volume"),this.prog(t,"\u5B8C\u6210",1,n.log);return}n.state!=="error"&&setTimeout(()=>this.poll(t),1500)}catch(e){this.prog(t,"\u9023\u7DDA\u4E2D\u65B7\uFF1A"+e.message,0)}}async demo(t){let e=this.$(t==="A"?"#im-demo":"#cmp-demo"),n=e.textContent;e.disabled=!0,e.textContent="\u8F09\u5165\u4E2D\u2026";try{t==="B"&&!this.A?.hdr.demo&&await this.demo("A"),await this.load(await mc(`demo-${t.toLowerCase()}.js`,`__DEMO_${t}`),t,"demo")}catch(s){this.note(s.message),console.error(s)}e.disabled=!1,e.textContent=n}note(t){this.$("#im-res").prepend(this.h("p",{class:"note warn"},t))}async volume(t){if(this.vol[t])return this.vol[t];let e=this.src[t];if(!e)throw new Error("\u9019\u6B21\u6AA2\u67E5\u6C92\u6709\u5F71\u50CF\u8CC7\u6599");let n;if(e==="demo")n=await mc(`demo-${t.toLowerCase()}-vol.js`,`__DEMO_${t}_VOL`);else{let s=await fetch(e);if(!s.ok)throw new Error("\u4F3A\u670D\u5668\u6C92\u6709\u9019\u7B46\u5F71\u50CF\uFF08\u53EF\u80FD\u5DF2\u903E\u6642\u522A\u9664\uFF09");n=await s.arrayBuffer()}return this.vol[t]=await pc(n)}async load(t,e,n){let s=new hr(await pc(t));if(e==="A")this.A?.dispose(),this.B?.dispose(),this.A=s,this.B=null,this.vol={A:null,B:null},this.src={A:n,B:null},this.reg=null,this.chg=null,this.cmp="side",this.hidden.clear(),this.solo=null,this.sel=null,s.build(),this.CTV.close(),this.CTV.vol=null;else{if(!this.A)throw new Error("\u8ACB\u5148\u8F09\u5165\u7B2C\u4E00\u6B21\u6AA2\u67E5");if(this.B?.dispose(),this.reg=uc(this.A,s),!this.reg)throw new Error("\u5169\u6B21\u6AA2\u67E5\u7684\u5171\u540C\u7D50\u69CB\u4E0D\u8DB3\u4E09\u500B\uFF0C\u7121\u6CD5\u5C0D\u9F4A");s.T=this.reg,s.origin=this.A.origin,this.B=s,this.vol.B=null,this.src.B=n,this.chg=null,s.build()}this.apply(!0),this.renderSummary(),this.renderStruct(),this.renderCmp(),e==="B"&&this.goTab("cmp")}goTab(t){let e=this.$(`#tabs button[data-t="${t}"]`);e&&e.click()}activate(t){if(this.active=t,!t){this.V.setRecon(null),this.CTV.close();return}this.apply(!0)}apply(t){if(!this.active)return;let e=this.A,n=this.B;if(!e){this.V.setRecon(null);return}let s=this.op,r=!!n;if(e.style(s,this.hidden,this.solo),n){if(n.style(s,this.hidden,this.solo),this.cmp==="side"){let o=e.box(),a=o.max.x-o.min.x;n.group.position.set(a+12,0,0),e.group.position.set(0,0,0)}else{n.group.position.set(0,0,0);for(let o of e.S){let a=e.mesh[o.name];a.visible&&(a.material.transparent=!0,a.material.opacity=Math.min(a.material.opacity,o.cat==="skin"?.06:.22),a.material.depthWrite=!1,a.material.needsUpdate=!0)}}this.paintChange()}e.group.updateMatrixWorld(!0),n&&n.group.updateMatrixWorld(!0),this.V.setRecon(r?[e.group,n.group]:[e.group]),t&&this.frame("front"),this.status()}frame(t){let e=this.A.box();this.B&&e.union(this.B.box()),this.V.frameBox(e,t)}setPreset(t){this.preset=t,this.op={...Ya[t]},this.solo=null,this.apply(!1),this.renderStruct();for(let e of this.$("#ipreset").children)e.classList.toggle("on",e.dataset.v===t)}status(){let t=this.A;if(!t){this.$("#status").textContent="\u5F71\u50CF\u6A21\u5F0F\uFF1A\u5C1A\u672A\u8F09\u5165\u5F71\u50CF";return}let e=t.hdr.quality||{},n=e.coverage?e.coverage.join("\u2013"):"\u2014";this.$("#status").textContent=`${e.modality||"CT"} \u91CD\u5EFA\u3000${t.hdr.label||""}\u3000\u6DB5\u84CB ${n}\u3000${t.S.length} \u500B\u7D50\u69CB`+(this.B?`\u3000\uFF5C\u3000\u6BD4\u8F03\uFF1A${this.B.hdr.label||"\u7B2C\u4E8C\u6B21"}`:"")}tap(t,e){let n=this.V.pickRecon(t,e);this.select(n?n.mesh:null)}select(t){if(this.sel&&this.sel.material.emissive?.setHex(0),this.sel=t||null,!t){this.$("#info").hidden=!0;return}t.material.emissive.setHex(5583616),this.V.req();let e=t.userData.s,n=this.B&&this.B.mesh[e.name]===t,s=n?this.B:this.A,r=n?this.A:this.B,o=[["\u5206\u985E",ur[e.cat]||e.cat],["\u9AD4\u7A4D",e.vol_ml!=null?ee(e.vol_ml,1)+" mL":"\u2014"]];e.hu!=null&&o.push([s.modality==="MR"?"\u5E73\u5747\u8A0A\u865F":"\u5E73\u5747 CT \u503C",ee(e.hu,0)+(s.modality==="MR"?"":" HU")]),e.err&&o.push(["\u91CD\u5EFA\u8AA4\u5DEE\uFF08\u76F8\u5C0D\u5206\u5272\uFF09",`\u5E73\u5747 ${ee(e.err[0],2)}\u3001P95 ${ee(e.err[1],2)} mm`]);let a=r&&r.byName[e.name];a&&o.push([n?"\u7B2C\u4E00\u6B21":"\u7B2C\u4E8C\u6B21",ee(a.vol_ml,1)+" mL"],["\u8B8A\u5316",Ni(n?e.vol_ml-a.vol_ml:a.vol_ml-e.vol_ml,1)+" mL"]),this.partial(s,e)&&o.push(["\u6CE8\u610F","\u6B64\u7D50\u69CB\u88AB\u5F71\u50CF\u4E0A\u4E0B\u7DE3\u622A\u65B7\uFF0C\u9AD4\u7A4D\u53EA\u7B97\u5F71\u50CF\u5167\u7684\u90E8\u5206"]),this.onInfo({zh:e.zh,en:e.name+(n?"\uFF08\u7B2C\u4E8C\u6B21\uFF09":this.B?"\uFF08\u7B2C\u4E00\u6B21\uFF09":""),sum:o.slice(0,2).map(l=>l[1]).join("\u30FB"),kv:o,s:e})}focusSel(){if(!this.sel)return;let t=new Ze().setFromObject(this.sel);this.V.frameBox(t.expandByScalar(4))}soloSel(){if(!this.sel)return;let t=this.sel.userData.s.name;return this.solo=this.solo?null:new Set([t]),this.apply(!1),!!this.solo}hideSel(){this.sel&&(this.hidden.add(this.sel.userData.s.name),this.select(null),this.apply(!1),this.renderStruct())}partial(t,e){let n=a=>{let l=t.lps(a),c=1/0,h=-1/0;for(let d=2;d<l.length;d+=3)c=Math.min(c,l[d]),h=Math.max(h,l[d]);return[c,h]},s=t.byName.body;if(!s||e===s)return!1;t._zb=t._zb||n(s);let[r,o]=n(e);return r-t._zb[0]<4||t._zb[1]-o<4}renderSummary(){let t=this.h,e=this.A,n=this.$("#im-res");if(!e){n.replaceChildren();return}let s=e.hdr,r=s.quality||{},o=s.metrics||{},a=(r.modality||"CT")==="CT",l=r.contrast||{},c=f=>e.byName[f]?.vol_ml,d=((...f)=>{let y=f.map(c).filter(x=>x!=null);return y.length?y.reduce((x,b)=>x+b,0):null})(...e.S.filter(f=>f.cat==="lung").map(f=>f.name)),u=(f,y,x,b,S)=>t("div",{class:"kpi"+(S?" warn":"")},t("span",{},f),t("b",{},y,x?t("small",{}," "+x):null),b?t("i",{},b):null),p=[u("\u6383\u63CF\u7BC4\u570D",r.coverage?r.coverage.join("\u2013"):"\u2014","",`${r.modality||"CT"}\u30FB${e.S.length} \u500B\u7D50\u69CB`),c("liver")!=null&&u("\u809D\u81DF\u9AD4\u7A4D",ee(c("liver"),0),"mL",a&&o.liver_hu!=null?`${ee(o.liver_hu,0)} HU`:""),c("spleen")!=null&&u("\u813E\u81DF\u9AD4\u7A4D",ee(c("spleen"),0),"mL",a&&o.spleen_hu!=null?`${ee(o.spleen_hu,0)} HU`:""),(c("kidney_left")!=null||c("kidney_right")!=null)&&u("\u814E\u81DF \u5DE6\uFF0F\u53F3",`${ee(c("kidney_left"),0)}\uFF0F${ee(c("kidney_right"),0)}`,"mL"),d!=null&&u("\u80BA\uFF08\u5408\u8A08\uFF09",ee(d,0),"mL",e.S.some(f=>f.cat==="lung"&&this.partial(e,f))?"\u90E8\u5206\u5728\u5F71\u50CF\u5916":""),c("heart")!=null&&u("\u5FC3\u81DF",ee(c("heart"),0),"mL"),o.L3&&u("L3 \u8170\u5927\u808C\u9762\u7A4D",ee(o.L3.psoas_cm2,1),"cm\xB2",o.L3.psoas_hu!=null?`\u5E73\u5747 ${ee(o.L3.psoas_hu,0)} HU`:""),o.L3&&u("L3 \u8C4E\u810A\u808C\u9762\u7A4D",ee(o.L3.paraspinal_cm2,1),"cm\xB2",o.L3.paraspinal_hu!=null?`\u5E73\u5747 ${ee(o.L3.paraspinal_hu,0)} HU`:""),o.vertebral_hu&&u(`${o.vertebral_hu.level} \u690E\u9AD4\u6D77\u7DBF\u9AA8`,ee(o.vertebral_hu.hu,0),"HU",l.enhanced?"\u6709\u986F\u5F71\u5291\uFF0C\u4E0D\u9069\u7528\u9AA8\u8CEA\u53C3\u8003\u503C":"\u4E2D\u592E\u6A62\u5713\u5340\u4E2D\u4F4D\u6578",l.enhanced)].filter(Boolean),g=(f,y)=>t("li",{class:f?"ok":"warn"},y),_=[g(!0,`\u89E3\u6790\u5EA6 ${r.voxel_mm?r.voxel_mm.join(" \xD7 "):"\u2014"} mm\uFF0C${r.size?r.size.join(" \xD7 "):""}`),a&&g(!l.enhanced,l.enhanced?`\u6709\u986F\u5F71\u5291\uFF08\u4E3B\u52D5\u8108 ${l.aorta_hu} HU\uFF09\uFF1A\u5668\u5B98\u8207\u9AA8\u9ABC\u7684 CT \u503C\u6703\u504F\u9AD8\uFF0C\u8102\u80AA\u809D\u3001\u9AA8\u8CEA\u7684 HU \u53C3\u8003\u503C\u4E0D\u9069\u7528`:`\u672A\u898B\u986F\u5F71\u5291\uFF08\u4E3B\u52D5\u8108 ${l.aorta_hu??"\u2014"} HU\uFF09`),r.surface_error_mm&&g(r.surface_error_mm.p95_max<1.5,`3D \u8868\u9762\u76F8\u5C0D\u5206\u5272\u908A\u754C\uFF1A\u5E73\u5747 ${r.surface_error_mm.mean} mm\uFF0C\u5404\u7D50\u69CB P95 \u6700\u5927 ${r.surface_error_mm.p95_max} mm`),g(!/3 mm/.test(r.seg_model||""),`\u5206\u5272\u6A21\u578B\uFF1A${r.seg_model||"\u2014"}`+(/3 mm/.test(r.seg_model||"")?"\uFF08\u5FEB\u901F\u6A21\u578B\uFF0C\u908A\u754C\u7D04 3 mm \u7B49\u7D1A\uFF1B\u9662\u5167\u6709 GPU \u6642\u5EFA\u8B70\u6539\u7528 1.5 mm \u6A21\u578B\uFF09":"")),a&&g(!0,"\u9AA8\u9ABC\u8868\u9762\u5DF2\u5728\u539F\u89E3\u6790\u5EA6\u4F9D CT \u503C\uFF08> 180 HU\uFF09\u8CBC\u9F4A\u76AE\u8CEA\u9AA8")].filter(Boolean),m=Object.keys(s.levels||{}).sort((f,y)=>s.levels[y]-s.levels[f]);n.replaceChildren(...[t("h3",{},s.label||"\u5F71\u50CF\u91CD\u5EFA"),s.demo?t("p",{class:"note"},"\u793A\u7BC4\u8CC7\u6599\uFF1A"+(s.demo_source||"\u516C\u958B\u8CC7\u6599")):null,t("div",{class:"kpis"},...p),t("h3",{},"\u54C1\u8CEA\u6AA2\u67E5"),t("ul",{class:"checks"},..._),t("div",{class:"row"},t("button",{class:"btn",onclick:()=>this.openViewer()},"\u958B\u555F\u5F71\u50CF\u6AA2\u8996\u5668"),m.length?t("select",{onchange:f=>{f.target.value&&this.openViewer(f.target.value)}},t("option",{value:""},"\u8DF3\u5230\u690E\u9AD4\u9AD8\u5EA6"),...m.map(f=>t("option",{value:f},f.replace("vertebrae_","")))):null),t("div",{class:"row"},t("button",{class:"btn ghost",onclick:()=>this.exportCsv()},"\u532F\u51FA\u7D50\u69CB\u9AD4\u7A4D CSV"),t("button",{class:"btn ghost",onclick:()=>this.unload()},"\u79FB\u9664\u5F71\u50CF")),o.L3?t("p",{class:"note"},"L3 \u9762\u7A4D\u53D6 L3 \u690E\u9AD4\u4E2D\u9593\u90A3\u4E00\u5C64\u3002\u8170\u5927\u808C\u3001\u8C4E\u810A\u808C\u70BA\u81EA\u52D5\u5206\u5272\uFF1B\u5168\u90E8\u9AA8\u9ABC\u808C\u9762\u7A4D\uFF08SMA\uFF09\u3001\u5167\u81DF\u8207\u76AE\u4E0B\u8102\u80AA\u9700\u8981\u7D44\u7E54\u5206\u5272\u6A21\u578B\uFF08TotalSegmentator tissue\uFF0C\u9700\u6388\u6B0A\uFF09\uFF0C\u76EE\u524D\u672A\u8A08\u7B97\u3002"):null,t("p",{class:"note"},"\u81EA\u52D5\u91CF\u5316\u4F9B\u81E8\u5E8A\u53C3\u8003\uFF0C\u975E\u8A3A\u65B7\uFF1B\u5224\u8B80\u4EE5\u539F\u59CB\u5F71\u50CF\u70BA\u6E96\u3002")].filter(Boolean))}unload(){this.A?.dispose(),this.B?.dispose(),this.A=this.B=null,this.vol={A:null,B:null},this.CTV.close(),this.CTV.vol=null,this.V.setRecon(null),this.$("#info").hidden=!0,this.renderSummary(),this.renderStruct(),this.renderCmp(),this.status()}async openViewer(t){try{let e=await this.volume("A");(this.CTV.R!==this.A||!this.CTV.vol)&&this.CTV.load(e,this.A),this.B&&this.src.B?this.CTV.setCompare(await this.volume("B"),this.B):this.CTV.setCompare(null),this.CTV.open(),t&&this.CTV.goLevel(t),this.preset==="surface"&&this.setPreset("xray")}catch(e){this.note(e.message)}}exportCsv(){let t=this.A,e=this.B,n=[["\u7D50\u69CB","\u82F1\u6587","\u5206\u985E","\u7B2C\u4E00\u6B21 mL",...e?["\u7B2C\u4E8C\u6B21 mL","\u8B8A\u5316 mL","\u8B8A\u5316 %"]:[],"\u5E73\u5747 CT \u503C","\u88AB\u622A\u65B7"]];for(let o of t.S){let a=e&&e.byName[o.name];n.push([o.zh,o.name,ur[o.cat],o.vol_ml,...e?[a?a.vol_ml:"",a?(a.vol_ml-o.vol_ml).toFixed(1):"",a?((a.vol_ml/o.vol_ml-1)*100).toFixed(1):""]:[],o.hu??"",this.partial(t,o)?"\u662F":""])}let s="\uFEFF"+n.map(o=>o.map(a=>/[",\n]/.test(String(a))?`"${String(a).replace(/"/g,'""')}"`:a).join(",")).join(`
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([s],{type:"text/csv"})),r.download="recon_volumes.csv",r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),1e3)}buildStruct(){this.$("#t-struct").append(this.h("div",{id:"st-cats"}),this.h("div",{class:"row"},this.h("input",{type:"search",id:"st-q",placeholder:"\u641C\u5C0B\uFF0C\u4F8B\uFF1A\u809D\u3001L3\u3001\u808B\u9AA8",oninput:()=>this.renderStruct()})),this.h("div",{id:"st-list"}))}renderStruct(){let t=this.h,e=this.A,n=this.$("#st-cats"),s=this.$("#st-list");if(!e){n.replaceChildren(t("p",{class:"note"},"\u5148\u5728\u300C\u5F71\u50CF\u300D\u9801\u8F09\u5165\u5F71\u50CF\u3002")),s.replaceChildren();return}let r=ss.filter(([l])=>e.S.some(c=>c.cat===l));n.replaceChildren(...r.map(([l,c])=>{let h=this.op[l]??1,d=e.S.filter(p=>p.cat===l).length,u=t("span",{class:"gv"},Math.round(h*100)+"%");return t("div",{class:"row"},t("label",{class:"chk",style:"width:96px;margin:0"},t("input",{type:"checkbox",checked:h>.01?"":!1,onchange:p=>{this.op[l]=p.target.checked?l==="skin"?.14:l==="lung"?.3:1:0,this.apply(!1),this.renderStruct()}}),`${c}\uFF08${d}\uFF09`),t("input",{type:"range",min:0,max:100,value:Math.round(h*100),oninput:p=>{this.op[l]=p.target.value/100,u.textContent=p.target.value+"%",this.apply(!1)}}),u)}),t("div",{class:"row"},t("button",{class:"btn ghost",onclick:()=>{this.hidden.clear(),this.solo=null,this.apply(!1),this.renderStruct()}},"\u986F\u793A\u5168\u90E8\u96B1\u85CF\u7684\u7D50\u69CB")));let o=(this.$("#st-q").value||"").trim().toLowerCase(),a=e.S.filter(l=>!o||l.zh.toLowerCase().includes(o)||l.name.toLowerCase().includes(o)).sort((l,c)=>ss.findIndex(h=>h[0]===l.cat)-ss.findIndex(h=>h[0]===c.cat)||c.vol_ml-l.vol_ml);s.replaceChildren(...a.map(l=>t("button",{class:"li"+(this.hidden.has(l.name)?" off":""),onclick:()=>{this.select(e.mesh[l.name]),this.focusSel()}},t("b",{},t("i",{class:"sw",style:`background:${l.color};display:inline-block;margin-right:6px;vertical-align:-2px`}),l.zh),t("span",{class:"dim"},`${ee(l.vol_ml,l.vol_ml<10?1:0)} mL`),t("span",{class:"dim"},`${ur[l.cat]}\u30FB${l.name}`+(this.partial(e,l)?"\u30FB\u88AB\u622A\u65B7":"")))))}buildCmp(){let t=this.h,e=t("input",{type:"file",webkitdirectory:"",multiple:"",hidden:!0,onchange:s=>this.upload([...s.target.files],"B")}),n=t("input",{type:"file",multiple:"",accept:".zip,.nii,.gz,.nrrd,.dcm,.mha",hidden:!0,onchange:s=>this.upload([...s.target.files],"B")});this.$("#t-cmp").append(t("p",{class:"note"},"\u524D\u5F8C\u5169\u6B21\u6AA2\u67E5\uFF08\u4F8B\u5982\u8853\u524D\u8853\u5F8C\u3001\u9593\u9694\u4E00\u6BB5\u6642\u9593\u7684\u8FFD\u8E64\uFF09\u3002\u5169\u6B21\u90FD\u5F9E\u982D\u5206\u5272\u8207\u91CD\u5EFA\uFF0C\u518D\u4EE5\u5171\u540C\u7684\u4E2D\u8EF8\u9AA8\uFF08\u690E\u9AD4\u3001\u808B\u9AA8\u3001\u80F8\u9AA8\uFF09\u5C0D\u9F4A\uFF0C\u6BD4\u8F03\u5404\u7D50\u69CB\u7684\u9AD4\u7A4D\u8207\u8868\u9762\u8B8A\u5316\u3002"),t("div",{class:"row",id:"cmp-up",hidden:!0},e,n,t("button",{class:"btn",onclick:()=>e.click()},"\u4E0A\u50B3\u7B2C\u4E8C\u6B21\uFF08\u8CC7\u6599\u593E\uFF09"),t("button",{class:"btn ghost",onclick:()=>n.click()},"\u4E0A\u50B3\u7B2C\u4E8C\u6B21\uFF08\u6A94\u6848\uFF09")),t("div",{id:"im-prog-B",class:"prog",hidden:!0},t("div",{class:"track"},t("div",{class:"bar"})),t("div",{class:"val step"}),t("pre",{class:"log"})),t("div",{class:"row"},t("button",{class:"btn ghost",id:"cmp-demo",onclick:()=>this.demo("B")},"\u8F09\u5165\u793A\u7BC4\u8FFD\u8E64\uFF08\u6A21\u64EC\u8CC7\u6599\uFF09")),t("div",{id:"cmp-res"}))}renderCmp(){let t=this.h,e=this.A,n=this.B,s=this.$("#cmp-res");if(!e||!n){s.replaceChildren(t("p",{class:"note"},e?"\u8F09\u5165\u7B2C\u4E8C\u6B21\u6AA2\u67E5\u5F8C\uFF0C\u9019\u88E1\u6703\u5217\u51FA\u8B8A\u5316\u3002":"\u5148\u5728\u300C\u5F71\u50CF\u300D\u9801\u8F09\u5165\u7B2C\u4E00\u6B21\u6AA2\u67E5\uFF08\u6216\u76F4\u63A5\u6309\u4E0A\u9762\u7684\u793A\u7BC4\u8FFD\u8E64\uFF0C\u6703\u4E00\u4F75\u8F09\u5165\u793A\u7BC4\u7684\u7B2C\u4E00\u6B21\u6AA2\u67E5\uFF09\u3002"));return}let r=this.reg,o=e.hdr.metrics||{},a=n.hdr.metrics||{},l=(S,E)=>{let C=r.R;return C[6]*E[0]+C[7]*E[1]+C[8]*S+r.t[2]},c=(S,E,C)=>{let k=E.zp;if(!k)return null;let M=S.hdr.centroids?.[E.name]||[0,0,0],A=k.length-2,N=D=>C(k[0]+D*k[1],M);return[Math.min(N(0),N(A-1)),Math.max(N(0),N(A-1))]},h=S=>S,d=e.byName.body&&c(e,e.byName.body,h),u=n.byName.body&&c(n,n.byName.body,l),p=d&&u?Math.max(d[0],u[0])+2:-1/0,g=d&&u?Math.min(d[1],u[1])-2:1/0,_=(S,E,C)=>{let k=E.zp,M=S.hdr.centroids?.[E.name]||[0,0,0],A=0;for(let N=2;N<k.length;N++){let D=C(k[0]+(N-2)*k[1],M);D>=p&&D<=g&&(A+=k[N]*Math.abs(k[1])/10)}return A},m=[];for(let S of e.S){let E=n.byName[S.name];if(!E||S.vol_ml<3||S.cat==="skin")continue;let C=S.vol_ml,k=E.vol_ml,M=!1,A=this.partial(e,S)||this.partial(n,E);A&&S.zp&&E.zp&&(C=_(e,S,h),k=_(n,E,l),M=!0),!(C<1)&&m.push({s:S,o:E,va:C,vb:k,d:k-C,p:(k/C-1)*100,part:A&&!M,common:M,bad:r.bad.includes(S.name)})}let f=S=>Math.abs(S.d)/(.03*S.va+2);m.sort((S,E)=>(S.part||S.bad)-(E.part||E.bad)||f(E)-f(S));let y=[o.L3&&["L3 \u8170\u5927\u808C\u9762\u7A4D cm\xB2",o.L3.psoas_cm2,a.L3?.psoas_cm2],o.L3&&["L3 \u8C4E\u810A\u808C\u9762\u7A4D cm\xB2",o.L3.paraspinal_cm2,a.L3?.paraspinal_cm2],o.L3&&["L3 \u8170\u5927\u808C HU",o.L3.psoas_hu,a.L3?.psoas_hu],o.vertebral_hu&&[`${o.vertebral_hu.level} \u690E\u9AD4 HU`,o.vertebral_hu.hu,a.vertebral_hu?.hu],o.liver_hu!=null&&["\u809D\u81DF HU",o.liver_hu,a.liver_hu]].filter(Boolean),x=(S,E)=>t("td",{class:"n"+(E?" "+E:"")},S),b=S=>Math.abs(S)<3?"":S<0?"dn":"up";s.replaceChildren(...[n.hdr.simulated?t("p",{class:"note warn"},n.hdr.simulated):null,t("div",{class:"kpis"},t("div",{class:"kpi"+(r.by==="all"?" warn":"")},t("span",{},r.by==="all"?"\u5C0D\u9F4A\uFF08\u5171\u540C\u7D50\u69CB\uFF0C\u9AA8\u9ABC\u4E0D\u8DB3\uFF09":"\u5C0D\u9F4A\uFF08\u4E2D\u8EF8\u9AA8\uFF09"),t("b",{},ee(r.rms,1),t("small",{}," mm \u6B98\u5DEE")),t("i",{},`${r.n}\uFF0F${r.total} \u500B${r.by==="all"?"\u7D50\u69CB":"\u9AA8"}\u30FB\u6700\u5927 ${ee(r.max,1)} mm`)),t("div",{class:"kpi"},t("span",{},"\u64FA\u4F4D\u5DEE\u7570"),t("b",{},ee(r.angle,1),t("small",{},"\xB0")),t("i",{},`\u4E2D\u8EF8\u9AA8\u4F4D\u79FB ${ee(r.shift,1)} mm`))),t("div",{class:"row"},t("label",{},"\u986F\u793A"),t("div",{class:"seg",id:"cmp-view"},...[["side","\u4E26\u6392"],["overlay","\u91CD\u758A"]].map(([S,E])=>t("button",{"data-v":S,class:this.cmp===S?"on":"",onclick:()=>{this.cmp=S,this.apply(!0),this.renderCmp()}},E))),t("button",{class:"btn ghost",onclick:()=>this.openViewer()},"\u5207\u9762\u5C0D\u7167")),y.length?t("table",{},t("thead",{},t("tr",{},...["\u6307\u6A19","\u7B2C\u4E00\u6B21","\u7B2C\u4E8C\u6B21","\u8B8A\u5316"].map(S=>t("th",{},S)))),t("tbody",{},...y.map(([S,E,C])=>t("tr",{},t("td",{},S),x(ee(E,1)),x(ee(C,1)),x(E!=null&&C!=null?Ni(C-E,1)+(E?`\uFF08${Ni((C/E-1)*100,0)}%\uFF09`:""):"\u2014",E!=null&&C!=null?b((C/E-1)*100):""))))):null,t("h3",{},"\u5404\u7D50\u69CB\u9AD4\u7A4D\u8B8A\u5316\uFF08\u4F9D\u8B8A\u5316\u986F\u8457\u7A0B\u5EA6\u6392\u5E8F\uFF0C\u9EDE\u9078\u770B\u8868\u9762\u8B8A\u5316\uFF09"),this.chg?t("div",{class:"legend"},t("span",{class:"lg"}),t("span",{},`${this.chg.zh}\uFF1A\u85CD\uFF1D\u5167\u7E2E\u3001\u7D05\uFF1D\u5916\u9577\uFF08\xB15 mm \u6EFF\u8272\uFF09\uFF1B\u5E73\u5747 ${Ni(this.chg.mean,1)} mm\uFF0C\u5167\u7E2E\u6700\u591A ${ee(this.chg.min,1)} mm\u3001\u5916\u9577\u6700\u591A ${ee(this.chg.max,1)} mm`),t("button",{class:"btn ghost",onclick:()=>{this.chg=null,this.solo=null,this.apply(!1),this.renderCmp()}},"\u6E05\u9664")):null,t("table",{class:"chg"},t("thead",{},t("tr",{},...["\u7D50\u69CB","\u7B2C\u4E00\u6B21 mL","\u7B2C\u4E8C\u6B21 mL","\u8B8A\u5316","%"].map(S=>t("th",{},S)))),t("tbody",{},...m.map(S=>t("tr",{class:(this.chg?.name===S.s.name?"sel ":"")+(S.part||S.bad?"part":""),onclick:()=>this.showChange(S.s.name)},t("td",{},S.s.zh+(S.bad?"\uFF0A\uFF0A":S.part?"\uFF0A":S.common?"\u2020":"")),x(ee(S.va,1)),x(ee(S.vb,1)),x(Ni(S.d,1)),x(Ni(S.p,1),S.part||S.bad?"":b(S.p)))))),r.bad.length?t("p",{class:"note warn"},`\uFF0A\uFF0A\u5169\u6B21\u7684\u540C\u540D\u9AA8\u4F4D\u7F6E\u5DEE\u592A\u591A\u3001\u672A\u7528\u65BC\u5C0D\u9F4A\uFF08\u591A\u534A\u662F\u5206\u5272\u628A\u7DE8\u865F\u6A19\u932F\u4E00\u6839\uFF09\uFF1A${r.bad.map(S=>e.byName[S]?.zh||S).join("\u3001")}\u3002\u9019\u4E9B\u7D50\u69CB\u7684\u9AD4\u7A4D\u6BD4\u8F03\u4E0D\u53EF\u9760\u3002`):null,t("p",{class:"note"},`\u2020\u88AB\u5F71\u50CF\u4E0A\u4E0B\u7DE3\u622A\u65B7\u7684\u7D50\u69CB\u53EA\u6BD4\u8F03\u5169\u6B21\u5171\u540C\u6DB5\u84CB\u7684\u9AD8\u5EA6\u7BC4\u570D\uFF08\u7B2C\u4E00\u6B21\u5EA7\u6A19 ${ee(p,0)} \u5230 ${ee(g,0)} mm\uFF09\uFF0C\u7531\u6BCF\u5C64\u622A\u9762\u7A4D\u52A0\u7E3D\u3002`),t("p",{class:"note"},"\uFF0A\u88AB\u622A\u65B7\u4F46\u6C92\u6709\u9010\u5C64\u8CC7\u6599\u7684\u7D50\u69CB\uFF1A\u5169\u6B21\u7684\u6383\u63CF\u7BC4\u570D\u4E0D\u540C\u6642\uFF0C\u9AD4\u7A4D\u5DEE\u4E3B\u8981\u4F86\u81EA\u7BC4\u570D\u5DEE\u7570\uFF0C\u6392\u5728\u6700\u5F8C\u3002\u9AD4\u7A4D\u7531\u5404\u6B21\u7684\u81EA\u52D5\u5206\u5272\u8A08\u7B97\uFF0C\u5169\u6B21\u5206\u5272\u672C\u8EAB\u5404\u6709\u7D04 1\u20133 mm \u7684\u908A\u754C\u5DEE\u7570\uFF0C\u5C0F\u65BC 3% \u7684\u8B8A\u5316\u4E0D\u4E0A\u8272\u3002")].filter(Boolean))}showChange(t){let e=this.A.byName[t],n=this.B.byName[t];if(!e||!n)return;let s=dc(this.A,e,this.B,n),r=l=>{let c=l.lps(l.byName.body),h=1/0,d=-1/0;for(let u=2;u<c.length;u+=3)h=Math.min(h,c[u]),d=Math.max(d,c[u]);return[h,d]};if(this.A.byName.body&&this.B.byName.body){let[l,c]=r(this.A),[h,d]=r(this.B),u=Math.max(l,h)+6,p=Math.min(c,d)-6,g=this.B.lps(n);for(let _=0;_<s.length;_++)(g[_*3+2]<u||g[_*3+2]>p)&&(s[_]=NaN)}let o=Array.from(s).filter(l=>!Number.isNaN(l));this.chg={name:t,zh:e.zh,d:s,mean:o.reduce((l,c)=>l+c,0)/o.length,min:Math.min(...o),max:Math.max(...o)},this.cmp="overlay",this.solo=new Set([t]),this.apply(!1);let a=new Ze().setFromObject(this.B.mesh[t]);this.V.frameBox(a.expandByScalar(6)),this.renderCmp()}paintChange(){for(let n in this.B.mesh){let s=this.B.mesh[n];s.material.vertexColors&&(s.material.vertexColors=!1,s.material.color.set(s.userData.s.color),s.material.needsUpdate=!0)}if(!this.chg)return;let t=this.B.mesh[this.chg.name];t.geometry.setAttribute("color",new Qt(fc(this.chg.d),3)),t.material.vertexColors=!0,t.material.color.set(16777215),t.material.opacity=1,t.material.transparent=!1,t.material.depthWrite=!0,t.material.needsUpdate=!0;let e=this.A.mesh[this.chg.name];e.visible=!0,e.material.color.set(10134702),e.material.transparent=!0,e.material.opacity=.18,e.material.depthWrite=!1,e.material.needsUpdate=!0}};var gc={type:"change"},$a={type:"start"},_c={type:"end"},fr=new Jn,xc=new en,ng=Math.cos(70*Ui.DEG2RAD),pr=class extends dn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",it),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",it),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gc),n.update(),r=s.NONE},this.update=(function(){let R=new F,nt=new rn().setFromUnitVectors(t.up,new F(0,1,0)),lt=nt.clone().invert(),ot=new F,_t=new rn,Ht=new F,Yt=2*Math.PI;return function(dt=null){let I=n.object.position;R.copy(I).sub(n.target),R.applyQuaternion(nt),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&N(M(dt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ut=n.minAzimuthAngle,ct=n.maxAzimuthAngle;isFinite(ut)&&isFinite(ct)&&(ut<-Math.PI?ut+=Yt:ut>Math.PI&&(ut-=Yt),ct<-Math.PI?ct+=Yt:ct>Math.PI&&(ct-=Yt),ut<=ct?a.theta=Math.max(ut,Math.min(ct,a.theta)):a.theta=a.theta>(ut+ct)/2?Math.max(ut,a.theta):Math.min(ct,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=P(a.radius):a.radius=P(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(lt),I.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Rt=!1;if(n.zoomToCursor&&E){let Et=null;if(n.object.isPerspectiveCamera){let $t=R.length();Et=P($t*c);let Dt=$t-Et;n.object.position.addScaledVector(b,Dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $t=new F(S.x,S.y,0);$t.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Rt=!0;let Dt=new F(S.x,S.y,0);Dt.unproject(n.object),n.object.position.sub(Dt).add($t),n.object.updateMatrixWorld(),Et=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Et!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Et).add(n.object.position):(fr.origin.copy(n.object.position),fr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(fr.direction))<ng?t.lookAt(n.target):(xc.setFromNormalAndCoplanarPoint(n.object.up,n.target),fr.intersectPlane(xc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Rt=!0);return c=1,E=!1,Rt||ot.distanceToSquared(n.object.position)>o||8*(1-_t.dot(n.object.quaternion))>o||Ht.distanceToSquared(n.target)>0?(n.dispatchEvent(gc),ot.copy(n.object.position),_t.copy(n.object.quaternion),Ht.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pt),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",it),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new is,l=new is,c=1,h=new F,d=new Ft,u=new Ft,p=new Ft,g=new Ft,_=new Ft,m=new Ft,f=new Ft,y=new Ft,x=new Ft,b=new F,S=new Ft,E=!1,C=[],k={};function M(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function A(R){let nt=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*nt)}function N(R){l.theta-=R}function D(R){l.phi-=R}let j=(function(){let R=new F;return function(lt,ot){R.setFromMatrixColumn(ot,0),R.multiplyScalar(-lt),h.add(R)}})(),L=(function(){let R=new F;return function(lt,ot){n.screenSpacePanning===!0?R.setFromMatrixColumn(ot,1):(R.setFromMatrixColumn(ot,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(lt),h.add(R)}})(),U=(function(){let R=new F;return function(lt,ot){let _t=n.domElement;if(n.object.isPerspectiveCamera){let Ht=n.object.position;R.copy(Ht).sub(n.target);let Yt=R.length();Yt*=Math.tan(n.object.fov/2*Math.PI/180),j(2*lt*Yt/_t.clientHeight,n.object.matrix),L(2*ot*Yt/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(lt*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),L(ot*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function z(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R,nt){if(!n.zoomToCursor)return;E=!0;let lt=n.domElement.getBoundingClientRect(),ot=R-lt.left,_t=nt-lt.top,Ht=lt.width,Yt=lt.height;S.x=ot/Ht*2-1,S.y=-(_t/Yt)*2+1,b.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function P(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function O(R){d.set(R.clientX,R.clientY)}function Y(R){X(R.clientX,R.clientX),f.set(R.clientX,R.clientY)}function K(R){g.set(R.clientX,R.clientY)}function H(R){u.set(R.clientX,R.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let nt=n.domElement;N(2*Math.PI*p.x/nt.clientHeight),D(2*Math.PI*p.y/nt.clientHeight),d.copy(u),n.update()}function tt(R){y.set(R.clientX,R.clientY),x.subVectors(y,f),x.y>0?z(A(x.y)):x.y<0&&J(A(x.y)),f.copy(y),n.update()}function ht(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_),n.update()}function Mt(R){X(R.clientX,R.clientY),R.deltaY<0?J(A(R.deltaY)):R.deltaY>0&&z(A(R.deltaY)),n.update()}function bt(R){let nt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),nt=!0;break}nt&&(R.preventDefault(),n.update())}function Lt(R){if(C.length===1)d.set(R.pageX,R.pageY);else{let nt=kt(R),lt=.5*(R.pageX+nt.x),ot=.5*(R.pageY+nt.y);d.set(lt,ot)}}function Ut(R){if(C.length===1)g.set(R.pageX,R.pageY);else{let nt=kt(R),lt=.5*(R.pageX+nt.x),ot=.5*(R.pageY+nt.y);g.set(lt,ot)}}function Ct(R){let nt=kt(R),lt=R.pageX-nt.x,ot=R.pageY-nt.y,_t=Math.sqrt(lt*lt+ot*ot);f.set(0,_t)}function Nt(R){n.enableZoom&&Ct(R),n.enablePan&&Ut(R)}function G(R){n.enableZoom&&Ct(R),n.enableRotate&&Lt(R)}function jt(R){if(C.length==1)u.set(R.pageX,R.pageY);else{let lt=kt(R),ot=.5*(R.pageX+lt.x),_t=.5*(R.pageY+lt.y);u.set(ot,_t)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);let nt=n.domElement;N(2*Math.PI*p.x/nt.clientHeight),D(2*Math.PI*p.y/nt.clientHeight),d.copy(u)}function xt(R){if(C.length===1)_.set(R.pageX,R.pageY);else{let nt=kt(R),lt=.5*(R.pageX+nt.x),ot=.5*(R.pageY+nt.y);_.set(lt,ot)}m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_)}function Tt(R){let nt=kt(R),lt=R.pageX-nt.x,ot=R.pageY-nt.y,_t=Math.sqrt(lt*lt+ot*ot);y.set(0,_t),x.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),z(x.y),f.copy(y);let Ht=(R.pageX+nt.x)*.5,Yt=(R.pageY+nt.y)*.5;X(Ht,Yt)}function gt(R){n.enableZoom&&Tt(R),n.enablePan&&xt(R)}function te(R){n.enableZoom&&Tt(R),n.enableRotate&&jt(R)}function At(R){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",v)),St(R),R.pointerType==="touch"?mt(R):V(R))}function T(R){n.enabled!==!1&&(R.pointerType==="touch"?at(R):rt(R))}function v(R){It(R),C.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(_c),r=s.NONE}function V(R){let nt;switch(R.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case Qn.DOLLY:if(n.enableZoom===!1)return;Y(R),r=s.DOLLY;break;case Qn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;K(R),r=s.PAN}else{if(n.enableRotate===!1)return;O(R),r=s.ROTATE}break;case Qn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;O(R),r=s.ROTATE}else{if(n.enablePan===!1)return;K(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent($a)}function rt(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;H(R);break;case s.DOLLY:if(n.enableZoom===!1)return;tt(R);break;case s.PAN:if(n.enablePan===!1)return;ht(R);break}}function st(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent($a),Mt(R),n.dispatchEvent(_c))}function it(R){n.enabled===!1||n.enablePan===!1||bt(R)}function mt(R){switch(Q(R),C.length){case 1:switch(n.touches.ONE){case ti.ROTATE:if(n.enableRotate===!1)return;Lt(R),r=s.TOUCH_ROTATE;break;case ti.PAN:if(n.enablePan===!1)return;Ut(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Nt(R),r=s.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent($a)}function at(R){switch(Q(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;jt(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;xt(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;gt(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(R),n.update();break;default:r=s.NONE}}function pt(R){n.enabled!==!1&&R.preventDefault()}function St(R){C.push(R.pointerId)}function It(R){delete k[R.pointerId];for(let nt=0;nt<C.length;nt++)if(C[nt]==R.pointerId){C.splice(nt,1);return}}function Q(R){let nt=k[R.pointerId];nt===void 0&&(nt=new Ft,k[R.pointerId]=nt),nt.set(R.pageX,R.pageY)}function kt(R){let nt=R.pointerId===C[0]?C[1]:C[0];return k[nt]}n.domElement.addEventListener("contextmenu",pt),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",st,{passive:!1}),this.update()}};var ie={muscle:11680306,tendonIn:14937072,tendon:14279658,bone:14468500,cartOn:6269139,cart:6269139,teeth:16052970,lig:7323560,capsule:10850256,fascia:12175315,bursa:15776058,origin:14698558,insertion:3112928,skin:14264716,select:16765503,sclera:15855334,iris:4862756,hair:2760988},ig=["muscle","tendon","bone","cart","lig","eye","hair"],mr=class{constructor(t,e){this.m=e,this.canvas=t,(this.renderer=new Qi({canvas:t,antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})).setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new er,this.camera=new De(26,1,5,3e3),this.scene.add(this.camera),this.scene.add(new ar(16777215,5525580,1.15));let s=new es(16777215,1.9);s.position.set(-.55,.75,1),this.camera.add(s);let r=new es(14674175,.55);r.position.set(.9,-.2,.6),this.camera.add(r),this.controls=new pr(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.rotateSpeed=.8,this.controls.zoomSpeed=.9,this.controls.addEventListener("change",()=>this.req()),this.layers={skin:0,muscle:!0,tendon:!0,fascia:!1,lig:!0,bone:!0,cart:!0,bursa:!1,ins:!1,eye:!0,hair:!1},this.sideMode="all",this.outline=!0,this.hidden=new Set,this.isolate=null,this.selected=null,this.uOutline={value:.07},this.build(),this.need=!0,this.tick=this.tick.bind(this),requestAnimationFrame(this.tick),new ResizeObserver(()=>this.resize()).observe(t.parentElement),this.resize()}req(){this.need=!0}tick(){requestAnimationFrame(this.tick),(this.controls.update()||this.need)&&(this.need=!1,this.renderer.render(this.scene,this.camera))}resize(){let t=this.canvas.parentElement,e=t.clientWidth,n=t.clientHeight;!e||!n||(this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.req())}setBackground(t){this.scene.background=new Xt(t),this.req()}build(){let t=this.m,e=t.NV,n=new Xt,s=new Xt,r=this.col=new Uint8Array(e*3),o=p=>(n.setHex(p),[n.r,n.g,n.b]),a={muscle:o(ie.muscle),tin:o(ie.tendonIn),tendon:o(ie.tendon),bone:o(ie.bone),cart:o(ie.cart),teeth:o(ie.teeth),lig:o(ie.lig),capsule:o(ie.capsule),fascia:o(ie.fascia),bursa:o(ie.bursa),origin:o(ie.origin),insertion:o(ie.insertion),sclera:o(ie.sclera),iris:o(ie.iris),hair:o(ie.hair)};for(let p of t.parts){let g=(p.i*2654435761>>>0)/4294967296,_=p.t===0?.86+.26*g:p.t===2?.95+.08*g:p.t===9||p.t===11?1:.94+.1*g,m=p.t===0?a.muscle:p.t===1?a.tendon:p.t===2?a.bone:p.t===3?a.cart:p.t===4?a.teeth:p.t===5?a.lig:p.t===6?a.capsule:p.t===7?a.fascia:p.t===8?a.bursa:p.t===9?p.en==="Iris"?a.iris:a.sclera:p.t===11?a.hair:p.kind===1?a.origin:a.insertion,f=p.t===0?a.tin:p.t===2?a.cart:null;for(let y=p.v0;y<p.v0+p.nv;y++){let x=f?t.MIX[y]/255:0;for(let b=0;b<3;b++){let S=m[b]*_*(1-x)+(f?f[b]*x:0);r[y*3+b]=Math.min(255,Math.round(S*255))}}}this.col0=r.slice(),this.aPos=new Qt(t.pos,3),this.aNrm=new Qt(t.nrm,3),this.aCol=new Qt(r,3,!0);let l=()=>{let p=new be;return p.setAttribute("position",this.aPos),p.setAttribute("normal",this.aNrm),p.setAttribute("color",this.aCol),p.setIndex(new Qt(new Uint32Array(3),1)),p},c=(p,g)=>(p.customProgramCacheKey=()=>g,p.onBeforeCompile=_=>{_.fragmentShader=_.fragmentShader.replace("#include <dithering_fragment>",`float fr = pow(clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 0.55);
 gl_FragColor.rgb *= mix(0.5, 1.0, fr);
#include <dithering_fragment>`)},p);this.G={};let h=p=>c(new an({vertexColors:!0,roughness:.58,metalness:0,side:pe,...p}),"std"+JSON.stringify(p));this.G.opaque=new ce(l(),h({}));let d=new Sn({color:1707275,side:Ae});d.customProgramCacheKey=()=>"outline",d.onBeforeCompile=p=>{p.uniforms.uOutline=this.uOutline,p.vertexShader=`uniform float uOutline;
`+p.vertexShader.replace("#include <begin_vertex>","vec3 transformed = vec3(position) + normal * uOutline;")},this.G.outline=new ce(this.G.opaque.geometry,d),this.G.ins=new ce(l(),new an({vertexColors:!0,roughness:.7,side:pe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),this.G.fascia=new ce(l(),new an({vertexColors:!0,roughness:.5,side:pe,transparent:!0,opacity:.5,depthWrite:!1})),this.G.fascia.renderOrder=3,this.G.bursa=new ce(l(),new an({vertexColors:!0,roughness:.4,side:pe,transparent:!0,opacity:.7,depthWrite:!1})),this.G.bursa.renderOrder=4;for(let p in this.G)this.G[p].frustumCulled=!1,this.scene.add(this.G[p]);let u=new be;this.sPos=new Qt(t.spos,3),this.sNrm=new Qt(t.snrm,3),this.sCol=new Qt(new Float32Array(t.scolM),3),u.setAttribute("position",this.sPos),u.setAttribute("normal",this.sNrm),u.setAttribute("color",this.sCol),u.setIndex(new Qt(t.stri,1)),this.skinSex="M",this.skinMat=c(new an({color:ie.skin,roughness:.75,side:Ye,vertexColors:!0}),"skin"),this.skin=new ce(u,this.skinMat),this.skin.frustumCulled=!1,this.skin.renderOrder=6,this.skinPre=new ce(u,new Sn({colorWrite:!1,transparent:!0})),this.skinPre.frustumCulled=!1,this.skinPre.renderOrder=5,this.scene.add(this.skinPre,this.skin),this.marks=new qe,this.scene.add(this.marks),this.rebuild(),this.setSkin(0)}visible(t){return!(this.layers.skin>.985&&t.layer!=="eye"&&t.layer!=="hair"||!this.layers[t.layer]||this.hidden.has(t.i)||this.m.sex==="F"&&t.male||this.isolate&&!this.isolate.has(t.i)||this.sideMode==="L"&&t.side===1||this.sideMode==="R"&&t.side===0)}rebuild(){if(this.skinSex!==this.m.sex){let n=this.m.sex==="F";this.skin.geometry.setIndex(new Qt(this.m.skinTris(),1)),this.sCol.array.set(n?this.m.scolF:this.m.scolM),this.sCol.needsUpdate=!0,this.skinSex=this.m.sex}let t=this.m,e={opaque:[],ins:[],fascia:[],bursa:[]};this.vis=new Uint8Array(t.parts.length);for(let n of t.parts)this.visible(n)&&(this.vis[n.i]=1,e[ig.includes(n.layer)?"opaque":n.layer].push(n));for(let n in e){let s=0;for(let l of e[n])s+=l.nt*3;let r=new Uint32Array(Math.max(3,s)),o=0;for(let l of e[n])r.set(t.idx.subarray(l.t0*3,(l.t0+l.nt)*3),o),o+=l.nt*3;let a=this.G[n].geometry;a.setIndex(new Qt(r,1)),a.setDrawRange(0,s),this.G[n].visible=s>0}if(this.G.outline.visible=this.outline&&this.G.opaque.visible,this.humanOn===!1)for(let n in this.G)this.G[n].visible=!1;this.req()}setLayer(t,e){this.layers[t]=e,t==="skin"?this.setSkin(e):this.rebuild()}setSkin(t){let e=this.layers.skin>.985;this.layers.skin=t;let n=t>.01,s=t>.985,r=t>.5;(r!==this.layers.hair||e!==s)&&(this.layers.hair=r,this.rebuild());let o=this.humanOn!==!1;this.skin.visible=n&&o,this.skinPre.visible=n&&!s&&o,this.skinMat.transparent=!s,this.skinMat.opacity=s?1:t,this.skinMat.depthWrite=s,this.skinMat.depthFunc=s?Zn:Zn,this.skinMat.needsUpdate=!0,this.req()}setOutline(t){this.outline=t,this.G.outline.visible=t&&this.G.opaque.visible,this.req()}refresh(){this.m.colDirty&&this.skinSex==="F"&&(this.sCol.array.set(this.m.scolF),this.sCol.needsUpdate=!0,this.m.colDirty=!1),this.placeOverlays(),this.aPos.needsUpdate=!0,this.aNrm.needsUpdate=!0,this.sPos.needsUpdate=!0,this.sNrm.needsUpdate=!0,this.uOutline.value=.07*this.m.s,this.req()}select(t){let e=this.col,n=this.col0,s=new Xt(ie.select);if(this.selected){let r=this.selected;e.set(n.subarray(r.v0*3,(r.v0+r.nv)*3),r.v0*3)}if(this.selected=t||null,t)for(let r=t.v0;r<t.v0+t.nv;r++)e[r*3]=Math.round((n[r*3]/255*.3+s.r*.7)*255),e[r*3+1]=Math.round((n[r*3+1]/255*.3+s.g*.7)*255),e[r*3+2]=Math.round((n[r*3+2]/255*.3+s.b*.7)*255);this.aCol.needsUpdate=!0,this.req()}view(t){let e=this.m.s,n=this.m.lm.H0*e,s=new F(0,n*.5,0),r=Math.tan(Ui.degToRad(this.camera.fov/2)),o=t==="left"||t==="right",a=Math.max(n*.54/r,(o?20:37)*e/(r*this.camera.aspect)),l={front:[0,0,1],back:[0,0,-1],left:[1,0,0],right:[-1,0,0]}[t]||[0,0,1];this.controls.target.copy(s),this.camera.position.set(s.x+l[0]*a,s.y+l[1]*a,s.z+l[2]*a),this.controls.update(),this.req()}focus(t){let e=this.m.box.subarray(t.i*6,t.i*6+6),n=new F((e[0]+e[3])/2,(e[1]+e[4])/2,(e[2]+e[5])/2),s=Math.max(6,Math.hypot(e[3]-e[0],e[4]-e[1],e[5]-e[2])/2),r=this.camera.position.clone().sub(this.controls.target).normalize(),o=s*2.4/Math.tan(Ui.degToRad(this.camera.fov/2));this.controls.target.copy(n),this.camera.position.copy(n).addScaledVector(r,o),this.controls.update(),this.req()}ray(t,e){let n=this.canvas.getBoundingClientRect(),s=new Ft((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new ns;return r.setFromCamera(s,this.camera),r.ray}pick(t,e,n){let s=this.ray(t,e),r=s.origin,o=s.direction,a=this.m,l=1/0,c=null,h=(d,u,p,g)=>{let _=d[p]-d[u],m=d[p+1]-d[u+1],f=d[p+2]-d[u+2],y=d[g]-d[u],x=d[g+1]-d[u+1],b=d[g+2]-d[u+2],S=o.y*b-o.z*x,E=o.z*y-o.x*b,C=o.x*x-o.y*y,k=_*S+m*E+f*C;if(k>-1e-9&&k<1e-9)return 1/0;let M=1/k,A=r.x-d[u],N=r.y-d[u+1],D=r.z-d[u+2],j=(A*S+N*E+D*C)*M;if(j<0||j>1)return 1/0;let L=N*f-D*m,U=D*_-A*f,z=A*m-N*_,J=(o.x*L+o.y*U+o.z*z)*M;if(J<0||j+J>1)return 1/0;let X=(y*L+x*U+b*z)*M;return X>.01?X:1/0};if(n!=="only"){let d=[];for(let u of a.parts){if(!this.vis[u.i]||u.t===11)continue;let p=a.box,g=u.i*6,_=0,m=1/0,f=!0;for(let y=0;y<3;y++){let x=y===0?r.x:y===1?r.y:r.z,b=y===0?o.x:y===1?o.y:o.z,S=(p[g+y]-x)/b,E=(p[g+3+y]-x)/b;if(_=Math.max(_,Math.min(S,E)),m=Math.min(m,Math.max(S,E)),_>m){f=!1;break}}f&&d.push([_,u])}d.sort((u,p)=>u[0]-p[0]);for(let[u,p]of d){if(u>l)break;let g=a.idx,_=a.pos;for(let m=p.t0*3,f=(p.t0+p.nt)*3;m<f;m+=3){let y=h(_,g[m]*3,g[m+1]*3,g[m+2]*3);y<l&&(l=y,c={part:p})}}}if(n&&this.layers.skin>.01){let d=a.stri,u=a.spos,p=1/0,g=-1;for(let _=0,m=a.NTs*3;_<m;_+=3){let f=h(u,d[_]*3,d[_+1]*3,d[_+2]*3);f<p&&(p=f,g=_)}p<1/0&&(n==="only"||p<l||this.layers.skin>.6)&&(l=p,c={skin:!0,tri:g/3})}return c&&(c.point=new F(r.x+o.x*l,r.y+o.y*l,r.z+o.z*l)),c}setOverlays(t){if(this.ovGroup&&(this.scene.remove(this.ovGroup),this.ovGroup.traverse(n=>{n.geometry&&n.geometry.dispose()})),this.ovGroup=null,this.ov={},!t){this.req();return}let e=new qe;e.renderOrder=9;for(let n of t){let s=new be;s.setAttribute("position",new Qt(n.V,3)),s.setIndex(new Qt(n.F,1)),s.computeVertexNormals();let r=/體表/.test(n.name),o=new an({color:n.color,roughness:.6,transparent:!0,opacity:r?.16:.5,depthWrite:!1,side:pe}),a=new ce(s,o);a.renderOrder=r?11:10,a.visible=!1,a.frustumCulled=!1,e.add(a),this.ov[n.name]=a}this.ovGroup=e,this.scene.add(e),this.placeOverlays(),this.req()}placeOverlays(){if(!this.ovGroup||!this.m.ct)return;let t=this.m.s,e=this.m.anchorWarp();this.ovGroup.position.set(e[0]*t,e[1]*t,e[2]*t),this.req()}setSlicePlane(t,e){if(!t){this.slicePlane&&(this.slicePlane.visible=!1),this.req();return}if(!this.slicePlane){let r=new be;r.setAttribute("position",new Qt(new Float32Array(12),3)),r.setAttribute("uv",new Qt(new Float32Array([0,1,1,1,1,0,0,0]),2)),r.setIndex([0,1,2,0,2,3]),this.sliceTex=new ir(document.createElement("canvas")),this.sliceTex.colorSpace=fe;let o=new Sn({map:this.sliceTex,transparent:!0,opacity:.92,side:pe,depthWrite:!1}),a=new ce(r,o);a.renderOrder=8,a.frustumCulled=!1;let l=new be;l.setAttribute("position",new Qt(new Float32Array(15),3));let c=new Pi(l,new Ri({color:5294335,depthTest:!1,transparent:!0}));c.renderOrder=10,c.frustumCulled=!1,this.slicePlane=new qe,this.slicePlane.add(a,c),this.sliceMesh=a,this.sliceLine=c,this.scene.add(this.slicePlane)}let n=this.sliceMesh.geometry.attributes.position,s=this.sliceLine.geometry.attributes.position;t.forEach((r,o)=>{n.setXYZ(o,r[0],r[1],r[2]),s.setXYZ(o,r[0],r[1],r[2])}),s.setXYZ(4,t[0][0],t[0][1],t[0][2]),n.needsUpdate=!0,s.needsUpdate=!0,e&&(this.sliceTex.image=e,this.sliceTex.needsUpdate=!0),this.slicePlane.visible=!0,this.req()}setHuman(t){this.humanOn=t,this.ovGroup&&(this.ovGroup.visible=t),this.slicePlane&&(this.slicePlane.visible=!1),this.rebuild(),this.setSkin(this.layers.skin),this.req()}setRecon(t){for(let e of this.reconGroups||[])this.scene.remove(e);this.reconGroups=t?t.filter(Boolean):[];for(let e of this.reconGroups)this.scene.add(e);this.req()}frameBox(t,e){let n=t.getCenter(new F),s=t.getSize(new F),r=Math.tan(Ui.degToRad(this.camera.fov/2)),o=e?{front:[0,0,1],back:[0,0,-1],left:[1,0,0],right:[-1,0,0]}[e]||e:this.camera.position.clone().sub(this.controls.target).normalize().toArray(),a=Math.abs(o[0])>Math.abs(o[2]),l=a?s.z:s.x,c=1.12*Math.max(s.y/2/r,l/2/(r*this.camera.aspect))+(a?s.x:s.z)/2,h=new F(...o).normalize();this.controls.target.copy(n),this.camera.position.copy(n).addScaledVector(h,c),this.camera.near=Math.max(.5,c/200),this.camera.far=c*20,this.camera.updateProjectionMatrix(),this.controls.update(),this.req()}pickRecon(t,e){let n=new ns,s=this.canvas.getBoundingClientRect();n.setFromCamera(new Ft((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),this.camera);let r=[];for(let a of this.reconGroups||[])a.traverse(l=>{l.isMesh&&l.visible&&l.userData.s&&!(l.userData.s.cat==="skin"&&l.material.opacity<.6)&&r.push(l)});let o=n.intersectObjects(r,!1)[0];return o?{mesh:o.object,s:o.object.userData.s,point:o.point}:null}showOverlay(t,e){this.ov&&this.ov[t]&&(this.ov[t].visible=e,this.req())}clearMarks(){for(let t of[...this.marks.children])this.marks.remove(t),t.geometry&&t.geometry.dispose();this.req()}addLine(t,e,n){let s=new be().setFromPoints(t.map(a=>a.isVector3?a:new F(a[0],a[1],a[2]))),r=new Ri({color:e,depthTest:!1,transparent:!0}),o=n?new nr(s,r):new Pi(s,r);o.renderOrder=20,this.marks.add(o),this.req()}addDot(t,e){let n=new ce(new sr(.55*this.m.s,12,10),new Sn({color:e,depthTest:!1,transparent:!0}));n.position.copy(t),n.renderOrder=21,this.marks.add(n),this.req()}png(){return this.renderer.render(this.scene,this.camera),new Promise(t=>this.canvas.toBlob(t,"image/png"))}};var et=(i,t=document)=>t.querySelector(i),W=(i,t={},...e)=>{let n=document.createElement(i);for(let s in t)s==="class"?n.className=t[s]:s.startsWith("on")?n.addEventListener(s.slice(2),t[s]):s==="html"?n.innerHTML=t[s]:t[s]!==!1&&t[s]!=null&&n.setAttribute(s,t[s]);for(let s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n},ae=i=>(Math.round(i*10)/10).toFixed(1),wt={c:{id:"",sex:"M",H:171,W:75,chest:104,waist:82,hip:95,under:0,bf:0,leg:0,legAuto:!1,arm:1,shoulder:1,auto:!0,muscle:0,off:new Array(11).fill(0)},res:null,meas:null,tool:null,pts:[],last:null},qt,vt,Za,Oe,yc=0,bc={H:[140,200,.5],W:[35,160,.5],chest:[65,150,.5],waist:[50,150,.5],hip:[65,150,.5]},Sc=[["muscle","\u808C\u8089",ie.muscle],["tendon","\u808C\u8171\u3001\u8171\u819C\u3001\u652F\u6301\u5E36",ie.tendon],["fascia","\u6DF1\u7B4B\u819C\uFF08\u5305\u8986\u5168\u8EAB\u808C\u8089\u7684\u4E00\u6574\u5C64\uFF0C\u534A\u900F\u660E\uFF1B\u6253\u958B\u6642\u50CF\u7B2C\u4E8C\u5C64\u76AE\u819A\uFF09",ie.fascia],["lig","\u97CC\u5E36",ie.lig],["bone","\u9AA8\u9ABC",ie.bone],["cart","\u8EDF\u9AA8\u3001\u690E\u9593\u76E4\u3001\u534A\u6708\u677F",ie.cart],["bursa","\u95DC\u7BC0\u56CA\u3001\u6ED1\u6DB2\u56CA\u8207\u8171\u9798\uFF08\u534A\u900F\u660E\uFF09",ie.capsule],["ins","\u808C\u8089\u8D77\u9EDE\uFF08\u7D05\uFF09\u8207\u6B62\u9EDE\uFF08\u85CD\uFF09",ie.origin],["eye","\u773C\u7403",ie.iris]],vc=i=>"#"+i.toString(16).padStart(6,"0");async function sg(){let i=et("#lbar"),t=et("#lmsg");try{qt=await fo(()=>{t.textContent="\u89E3\u58D3\u7E2E\u6A21\u578B\u8CC7\u6599\u2026"}),t.textContent="\u5EFA\u7ACB\u6A21\u578B\u2026",await new Promise(r=>setTimeout(r,30)),vt=new mr(et("#cv"),qt),Ec(),Za=new us(vt,et("#stage"));let e=qt.lm;qt.s=1,qt.setG(0),qt.buildLUT(),qt.deformSkin(qt.spos,null,!1);let n=qt.skinVolume(qt.spos),s={M:.9007*qt.phi0*n+1.1*(n*(1-qt.phi0)-qt.air)};Object.assign(wt.c,{H:Math.round(e.H0),W:Math.round(s.M),chest:Math.round(e.girth0[0]),waist:Math.round(e.girth0[1]),hip:Math.round(e.girth0[2])}),wt.c.leg=Math.round(qt.r0*1e3)/10,wt.base={...wt.c},ag(),Ka("surface"),_r(),vt.view("front"),et("#loading").hidden=!0,Oe=new dr(vt,Za,{h:W,$:et,onInfo:cg}),ja(location.hash==="#img"?"img":"body"),window.__app={M:qt,V:vt,IM:Oe,CTV:Za,state:wt,update:_r,setCase:rg,preset:Ka,select:Oi,tap:Ac,setTool:gr,setMode:ja,ready:!0}}catch(e){t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+(e&&e.message?e.message:e),console.error(e)}}function Ec(){let i=matchMedia("(prefers-color-scheme: dark)").matches;vt.setBackground(i?1316636:15330802)}matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>vt&&Ec());function ln(i=140){clearTimeout(yc),et("#busy").hidden=!1,yc=setTimeout(_r,i)}function _r(){let i=wt.c,t=performance.now(),e=wt.res=qt.solve({...i,leg:i.leg/100}),n=[qt.s,e.kf.C,e.kf.W,e.kf.H,i.sex,i.leg,i.arm,i.shoulder].join(",");if(wt.sexShown!==i.sex&&(wt.sexShown=i.sex,vt.rebuild()),qt.apply(n!==wt.last),wt.last=n,vt.refresh(),wt.meas=qt.measure(),wt.ms=Math.round(performance.now()-t),wc(),og(),lg(),vt.selected&&Tc(vt.selected),et("#busy").hidden=!0,i.auto){let s=et("#f-muscle");s&&(s.value=Math.round(e.gG*100),et("#v-muscle").textContent=xr(e.gG))}}var xr=i=>(i>=0?"+":"")+Math.round(i*100)+"%\u3000"+(i<-.5?"\u660E\u986F\u504F\u5C11":i<-.2?"\u504F\u5C11":i<.2?"\u4E00\u822C\uFF08\u6A21\u578B\u57FA\u6E96\uFF09":i<.6?"\u7D50\u5BE6":i<1?"\u767C\u9054":"\u975E\u5E38\u767C\u9054");function rg(i){Object.assign(wt.c,i),rs(),_r()}function ag(){let i=wt.c,t=(a,l,c)=>{let[h,d,u]=bc[a],p=W("input",{type:"number",id:"n-"+a,min:h,max:d,step:u,value:i[a],inputmode:"decimal"}),g=W("input",{type:"range",id:"r-"+a,min:h,max:d,step:u,value:i[a]}),_=(m,f)=>{m=Math.min(d,Math.max(h,+m||h)),i[a]=m,f!==p&&(p.value=m),f!==g&&(g.value=m),ln()};return p.addEventListener("change",()=>_(p.value,null)),g.addEventListener("input",()=>_(g.value,g)),W("div",{class:"row"},W("label",{for:"n-"+a},l),g,W("span",{class:"numw"},p,W("i",{},c)))},e=(a,l,c,h,d,u,p)=>{let g=()=>p?Math.round(i[a]*p):i[a],_=W("span",{class:"gv",id:"pv-"+a},g()+u);return W("div",{class:"row"},W("label",{},l),W("input",{type:"range",id:"p-"+a,min:c,max:h,step:d,value:g(),oninput:m=>{i[a]=p?m.target.value/p:+m.target.value,_.textContent=(+m.target.value).toFixed(d<1?1:0)+u,ln(40)}}),_)};et("#t-case").append(W("div",{class:"row"},W("label",{},"\u500B\u6848\u4EE3\u865F"),W("input",{type:"text",id:"f-id",placeholder:"\u4F8B\uFF1AS-001",value:i.id,oninput:a=>{i.id=a.target.value}}),W("button",{class:"btn",onclick:hg},"\u5132\u5B58")),W("div",{class:"row"},W("label",{},"\u5DF2\u5B58\u500B\u6848"),W("select",{id:"f-cases",onchange:ug}),W("button",{class:"btn ghost",onclick:dg},"\u522A\u9664")),W("div",{class:"row"},W("label",{},"\u6027\u5225"),W("div",{class:"seg",id:"f-sex"},W("button",{"data-v":"M",class:"on"},"\u7537"),W("button",{"data-v":"F"},"\u5973"))),W("p",{class:"note warn",id:"femnote",hidden:!0},"\u5973\u6027\u9AD4\u578B\u70BA\u7537\u6027\u89E3\u5256\u8CC7\u6599\u7684\u8FD1\u4F3C\u8B8A\u5F62\uFF1A\u80A9\u8207\u80F8\u5ED3\u8F03\u7A84\u3001\u9AA8\u76C6\u8F03\u5BEC\uFF1B\u4E0B\u80F8\u570D\u6C7A\u5B9A\u80F8\u5ED3\u5927\u5C0F\uFF0C\u4E0A\u80F8\u570D\u6C7A\u5B9A\u4E73\u623F\u9AD4\u7A4D\u3002\u9AA8\u76C6\u8207\u9871\u9AA8\u7684\u6027\u5225\u5DEE\u7570\u5C1A\u672A\u500B\u5225\u5EFA\u6A21\u3002"),t("H","\u8EAB\u9AD8","cm"),t("W","\u9AD4\u91CD","kg"),t("chest","\u80F8\u570D","cm"),t("waist","\u8170\u570D","cm"),t("hip","\u81C0\u570D","cm"),W("div",{class:"row",id:"row-under",hidden:!0},W("label",{for:"n-under"},"\u4E0B\u80F8\u570D"),W("span",{class:"dim",style:"flex:1"},"\u9078\u586B\u3002\u672A\u586B\u6642\u7531\u8170\u570D\u63A8\u4F30"),W("span",{class:"numw"},W("input",{type:"number",id:"n-under",min:55,max:140,step:.5,placeholder:"\u2014",inputmode:"decimal",onchange:a=>{let l=+a.target.value;i.under=l>=55&&l<=140?l:0,i.under||(a.target.value=""),ln(20)}}),W("i",{},"cm"))),W("div",{class:"row"},W("label",{for:"n-bf"},"\u9AD4\u8102\u7387"),W("span",{class:"dim",style:"flex:1"},"\u9078\u586B\u3002\u6709 BIA \u6216 DXA \u5BE6\u6E2C\u503C\u6642\u8F38\u5165"),W("span",{class:"numw"},W("input",{type:"number",id:"n-bf",min:3,max:60,step:.1,placeholder:"\u2014",inputmode:"decimal",onchange:a=>{let l=+a.target.value;i.bf=l>=3&&l<=60?l:0,i.bf||(a.target.value=""),ln(20)}}),W("i",{},"%"))),W("h3",{},"\u9AD4\u578B\u6BD4\u4F8B"),e("leg","\u817F\u9577",45,57,.1,"%"),e("arm","\u81C2\u9577",90,110,1,"%",100),e("shoulder","\u80A9\u5BEC",88,112,1,"%",100),W("p",{class:"note"},"\u817F\u9577\u70BA\u5927\u8F49\u5B50\u9AD8\u4F54\u8EAB\u9AD8\u7684\u6BD4\u4F8B\uFF0C\u8EAB\u9AD8\u4E0D\u8B8A\uFF0C\u817F\u8207\u4E0A\u8EAB\u6B64\u6D88\u5F7C\u9577\u3002\u81C2\u9577\u3001\u80A9\u5BEC\u70BA\u76F8\u5C0D\u57FA\u6E96\u7684\u767E\u5206\u6BD4\u3002"),W("h3",{},"\u808C\u8089\u767C\u9054\u7A0B\u5EA6"),W("label",{class:"chk"},W("input",{type:"checkbox",id:"f-auto",checked:i.auto?"":!1,onchange:a=>{i.auto=a.target.checked,et("#f-muscle").disabled=i.auto,!i.auto&&wt.res&&(i.muscle=Math.round(wt.res.gG*100)/100),ln(20)}}),"\u7531\u9AD4\u91CD\u8207\u9AD4\u8102\u7387\u81EA\u52D5\u63A8\u4F30"),W("div",{class:"row"},W("label",{},"\u6574\u9AD4"),W("input",{type:"range",id:"f-muscle",min:-80,max:150,step:1,value:0,disabled:i.auto?"":!1,oninput:a=>{i.muscle=a.target.value/100,et("#v-muscle").textContent=xr(i.muscle),ln(30)}})),W("div",{class:"val",id:"v-muscle"},xr(0)),W("p",{class:"note"},"\u81EA\u52D5\u6A21\u5F0F\uFF1A\u9AD4\u8102\u7387\u53D6\u5BE6\u6E2C\u503C\uFF0C\u672A\u586B\u6642\u4EE5\u8170\u570D\u8EAB\u9AD8\u6BD4\uFF08RFM\uFF09\u63A8\u4F30\uFF0C\u518D\u7531\u9AD4\u91CD\u53CD\u63A8\u808C\u8089\u91CF\u3002\u95DC\u9589\u5F8C\u53EF\u81EA\u884C\u62D6\u52D5\u3002\u5404\u90E8\u4F4D\u5728\u300C\u808C\u8089\u300D\u9801\u5206\u5225\u8ABF\u6574\uFF1B\u808C\u8179\u589E\u7C97\uFF0C\u808C\u8171\u8207\u8D77\u6B62\u9EDE\u4E0D\u52D5\u3002"),W("h3",{},"\u543B\u5408\u7D50\u679C"),W("div",{id:"fit"}),W("div",{class:"row"},W("button",{class:"btn ghost",onclick:()=>{Object.assign(i,wt.base,{id:i.id,off:i.off}),rs(),ln(10)}},"\u56DE\u5230\u57FA\u6E96\u9AD4\u578B"))),et("#f-sex").addEventListener("click",a=>{let l=a.target.closest("button");if(!l)return;let c=i.sex;if(i.sex=l.dataset.v,c!==i.sex){let h=i.sex==="F"?{H:160,W:55,chest:86,waist:70,hip:93}:{...wt.base};Object.assign(i,{H:h.H,W:h.W,chest:h.chest,waist:h.waist,hip:h.hip,bf:0,under:0})}rs(),ln(10)});let n=et("#t-muscle");n.append(W("p",{class:"note"},"\u4EE5\u6574\u9AD4\u7A0B\u5EA6\u70BA\u57FA\u6E96\uFF0C\u5404\u90E8\u4F4D\u518D\u52A0\u6E1B\u3002\u53F3\u6B04\u70BA\u8A72\u90E8\u4F4D\u76EE\u524D\u7684\u808C\u8089\u9AD4\u7A4D\uFF08\u5DE6\u53F3\u5408\u8A08\uFF09\u3002"));for(let a=1;a<=10;a++)n.append(W("div",{class:"row"},W("label",{},Bi[a]),W("input",{type:"range",id:"g-"+a,min:-50,max:100,step:1,value:0,oninput:l=>{i.off[a]=l.target.value/100,et("#gv-"+a).textContent=(i.off[a]>=0?"+":"")+Math.round(i.off[a]*100)+"%",ln(30)}}),W("span",{class:"gv",id:"gv-"+a},"+0%"),W("span",{class:"gl",id:"gl-"+a},"")));n.append(W("div",{class:"row"},W("button",{class:"btn ghost",onclick:()=>{i.off.fill(0),rs(),ln(10)}},"\u5404\u90E8\u4F4D\u6B78\u96F6")));let s=et("#t-layer");s.append(W("label",{class:"chk"},W("input",{type:"checkbox",id:"l-skinon",onchange:a=>as(a.target.checked?wt.skinLast>.01?wt.skinLast:1:0)}),W("i",{class:"sw",style:"background:"+vc(ie.skin)}),W("b",{},"\u76AE\u819A")),W("div",{class:"row"},W("label",{},"\u4E0D\u900F\u660E\u5EA6"),W("input",{type:"range",id:"l-skin",min:0,max:100,step:1,value:0,oninput:a=>as(a.target.value/100)}),W("span",{class:"gv",id:"lv-skin"},"0%")),W("p",{class:"note",id:"l-skinnote"},""));for(let[a,l,c]of Sc)s.append(W("label",{class:"chk"},W("input",{type:"checkbox",id:"l-"+a,checked:vt.layers[a]?"":!1,onchange:h=>{vt.setLayer(a,h.target.checked),vt.layers.skin>.985&&(as(0),et("#l-skinnote").textContent="\u76AE\u819A\u539F\u672C\u662F\u4E0D\u900F\u660E\u7684\uFF0C\u6703\u906E\u4F4F\u5167\u90E8\u5716\u5C64\uFF0C\u5DF2\u81EA\u52D5\u79FB\u9664\u76AE\u819A\u3002\u8981\u518D\u770B\u5230\u76AE\u819A\uFF0C\u52FE\u9078\u4E0A\u65B9\u300C\u76AE\u819A\u300D\u6216\u8ABF\u6574\u900F\u660E\u5EA6\u3002"),yr(null)}}),W("i",{class:"sw",style:"background:"+vc(c)}),l));s.append(W("label",{class:"chk"},W("input",{type:"checkbox",id:"l-outline",checked:"",onchange:a=>vt.setOutline(a.target.checked)}),"\u808C\u8089\u8207\u9AA8\u9ABC\u7684\u5206\u754C\u7DDA"),W("div",{class:"row"},W("label",{},"\u986F\u793A\u7BC4\u570D"),W("div",{class:"seg",id:"l-side"},W("button",{"data-v":"all",class:"on"},"\u5168\u8EAB"),W("button",{"data-v":"R"},"\u53F3\u534A"),W("button",{"data-v":"L"},"\u5DE6\u534A"))),W("div",{class:"row"},W("button",{class:"btn ghost",onclick:()=>{vt.hidden.clear(),vt.isolate=null,vt.rebuild()}},"\u6062\u5FA9\u6240\u6709\u88AB\u96B1\u85CF\u7684\u7D50\u69CB")),W("p",{class:"note"},"\u984F\u8272\uFF1A\u808C\u8179\u7D05\u3001\u808C\u8171\u8207\u8171\u819C\u51B7\u767D\u3001\u9AA8\u9ABC\u7C73\u8272\u3001\u95DC\u7BC0\u8EDF\u9AA8\u85CD\u3001\u97CC\u5E36\u9752\u7DA0\u3001\u95DC\u7BC0\u56CA\u7D2B\u3002\u808C\u8179\u8207\u808C\u8171\u7684\u5206\u754C\u3001\u8D77\u6B62\u9EDE\u4F4D\u7F6E\u7686\u53D6\u81EA\u4F86\u6E90\u6A21\u578B\uFF0C\u975E\u63A8\u7B97\u3002"),W("p",{class:"note"},"\u6A21\u578B\u8CC7\u6599\uFF1A\u201CZ-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0\u201D\uFF1B\u201CBodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan\u201D\u3002\u672C\u5DE5\u5177\u5C0D\u539F\u59CB\u7DB2\u683C\u505A\u4E86\u6E1B\u9762\u8207\u53C3\u6578\u5316\u8B8A\u5F62\uFF0C\u884D\u751F\u7684\u6A21\u578B\u8CC7\u6599\u4F9D\u76F8\u540C\u6388\u6B0A\u91CB\u51FA\u3002\u4F9B\u7814\u7A76\u8207\u6559\u5B78\u53C3\u8003\uFF0C\u975E\u91AB\u7642\u5668\u6750\u3002")),et("#l-side").addEventListener("click",a=>{let l=a.target.closest("button");if(l){for(let c of et("#l-side").children)c.classList.toggle("on",c===l);vt.sideMode=l.dataset.v,vt.rebuild()}}),et("#t-meas").append(W("div",{class:"row tools"},W("button",{class:"btn",id:"tl-dist",onclick:()=>gr("dist")},"\u91CF\u8DDD\u96E2"),W("button",{class:"btn",id:"tl-girth",onclick:()=>gr("girth")},"\u91CF\u570D\u5EA6"),W("button",{class:"btn ghost",onclick:()=>{gr(null),vt.clearMarks(),et("#toolout").textContent=""}},"\u6E05\u9664")),W("div",{class:"val",id:"toolout"}),W("div",{id:"mtable"}),W("p",{class:"note"},"\u7B49\u7D1A A\uFF1A\u76F4\u63A5\u8F38\u5165\u6216\u5DF2\u543B\u5408\u8F38\u5165\u503C\u3002B\uFF1A\u5728\u6A21\u578B\u5E7E\u4F55\u4E0A\u91CF\u5F97\u3002C\uFF1A\u7531\u6A21\u578B\u9AD4\u7A4D\u8207\u5BC6\u5EA6\u5047\u8A2D\u63A8\u4F30\u3002"),W("div",{class:"row"},W("button",{class:"btn",onclick:fg},"\u532F\u51FA\u91CF\u6E2C CSV"),W("button",{class:"btn",onclick:pg},"\u532F\u51FA\u500B\u6848 JSON"),W("button",{class:"btn",onclick:mg},"\u532F\u51FA\u756B\u9762 PNG"))),et("#t-list").append(W("div",{class:"row"},W("input",{type:"search",id:"s-q",placeholder:"\u641C\u5C0B\u4E2D\u6587\u6216\u82F1\u6587\u540D\u7A31\uFF0C\u4F8B\uFF1A\u80A1\u76F4\u808C\u3001ACL\u3001patella",oninput:Ja}),W("select",{id:"s-t",onchange:Ja},W("option",{value:""},"\u5168\u90E8\u985E\u5225"),...[0,1,2,3,5,6,7,8].map(a=>W("option",{value:a},cs[a])))),W("div",{id:"slist"})),Ja(),eo(),et("#tabs").addEventListener("click",a=>{let l=a.target.closest("button[data-t]");if(l){for(let c of et("#tabs").querySelectorAll("button[data-t]"))c.classList.toggle("on",c===l);for(let c of document.querySelectorAll(".tab"))c.hidden=c.id!=="t-"+l.dataset.t;et("#panel").classList.remove("min")}}),et("#collapse").addEventListener("click",()=>et("#panel").classList.toggle("min")),et("#views").addEventListener("click",a=>{let l=a.target.closest("button");l&&(wt.mode==="img"&&Oe.A?Oe.frame(l.dataset.v):vt.view(l.dataset.v))}),et("#mode").addEventListener("click",a=>{let l=a.target.closest("button");l&&ja(l.dataset.m)}),et("#ipreset").addEventListener("click",a=>{let l=a.target.closest("button");l&&Oe.setPreset(l.dataset.v)}),et("#preset").addEventListener("click",a=>{let l=a.target.closest("button");l&&Ka(l.dataset.v)});let r=et("#cv"),o=null;r.addEventListener("pointerdown",a=>{o={x:a.clientX,y:a.clientY,t:performance.now(),id:a.pointerId}}),r.addEventListener("pointerup",a=>{if(!o||o.id!==a.pointerId)return;let l=Math.hypot(a.clientX-o.x,a.clientY-o.y),c=performance.now()-o.t;o=null,l<7&&c<500&&Ac(a.clientX,a.clientY)}),et("#i-hide").addEventListener("click",()=>{if(wt.mode==="img"){Oe.hideSel();return}let a=vt.selected;if(a){for(let l of Mc(a))vt.hidden.add(l.i);Oi(null),vt.rebuild()}}),et("#i-solo").addEventListener("click",()=>{if(wt.mode==="img"){et("#i-solo").textContent=Oe.soloSel()?"\u986F\u793A\u5176\u4ED6":"\u53EA\u770B\u9019\u500B";return}let a=vt.selected;a&&(vt.isolate?(vt.isolate=null,et("#i-solo").textContent="\u53EA\u770B\u9019\u500B"):(vt.isolate=new Set(Mc(a).map(l=>l.i)),et("#i-solo").textContent="\u986F\u793A\u5176\u4ED6"),vt.rebuild())}),et("#i-focus").addEventListener("click",()=>{wt.mode==="img"?Oe.focusSel():vt.selected&&vt.focus(vt.selected)}),et("#i-close").addEventListener("click",()=>{wt.mode==="img"?Oe.select(null):Oi(null)})}var Mc=i=>qt.parts.filter(t=>t.en===i.en&&t.t===i.t);function rs(){let i=wt.c;for(let t in bc)et("#n-"+t).value=i[t],et("#r-"+t).value=i[t];for(let t of et("#f-sex").children)t.classList.toggle("on",t.dataset.v===i.sex);et("#femnote").hidden=i.sex!=="F",et("#row-under").hidden=i.sex!=="F",et("#n-under").value=i.under>0?i.under:"",document.querySelector("label[for=n-chest]").textContent=i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",et("#p-leg").value=i.leg,et("#pv-leg").textContent=(+i.leg).toFixed(1)+"%",et("#p-arm").value=Math.round(i.arm*100),et("#pv-arm").textContent=Math.round(i.arm*100)+"%",et("#p-shoulder").value=Math.round(i.shoulder*100),et("#pv-shoulder").textContent=Math.round(i.shoulder*100)+"%",et("#f-auto").checked=i.auto,et("#f-muscle").disabled=i.auto,et("#f-muscle").value=Math.round(i.muscle*100),et("#v-muscle").textContent=xr(i.muscle),et("#f-id").value=i.id||"",et("#n-bf").value=i.bf>0?i.bf:"";for(let t=1;t<=10;t++)et("#g-"+t).value=Math.round(i.off[t]*100),et("#gv-"+t).textContent=(i.off[t]>=0?"+":"")+Math.round(i.off[t]*100)+"%"}function Ka(i){let t={surface:[1,1,1,1],xray:[.38,1,1,1],muscle:[0,1,1,1],bone:[0,0,0,1]}[i];if(t){vt.layers.muscle=!!t[1],vt.layers.tendon=!!t[2],vt.layers.fascia=!1,vt.layers.bone=!0,vt.layers.cart=!0,vt.layers.lig=!0,vt.layers.eye=i!=="bone",vt.rebuild(),as(t[0],!0);for(let[e]of Sc)et("#l-"+e).checked=!!vt.layers[e];yr(i)}}function as(i,t){vt.setSkin(i),i>.01&&(wt.skinLast=i);let e=Math.round(i*100);et("#l-skin").value=e,et("#lv-skin").textContent=e+"%",et("#l-skinon").checked=i>.01,et("#l-skinnote").textContent=i>.985?"\u76AE\u819A\u4E0D\u900F\u660E\u6642\u770B\u4E0D\u5230\u5167\u90E8\uFF1B\u53D6\u6D88\u52FE\u9078\u300C\u76AE\u819A\u300D\u6216\u8ABF\u4F4E\u900F\u660E\u5EA6\uFF0C\u5C31\u80FD\u770B\u5230\u5E95\u4E0B\u7684\u808C\u8089\u8207\u9AA8\u9ABC\u3002":"",t||yr(null)}function yr(i){for(let t of et("#preset").children)t.classList.toggle("on",t.dataset.v===i)}function wc(){let i=wt.c,t=wt.res,e=wt.meas,n=i.W/(i.H/100)**2,s=(c,h,d,u,p)=>{let g=h-d,_=Math.abs(g)<=(u==="kg"?.3:.4);return W("div",{class:"fitrow"+(_?"":" off")},W("span",{},c),W("b",{},ae(h)+" "+u),W("span",{class:"dim"},(p||"\u8F38\u5165")+" "+ae(d)),W("span",{class:"tag"},_?"\u543B\u5408":(g>0?"+":"")+ae(g)))},r=c=>{let h=Math.round((t.kf[c]/t.k0[c]-1)*100);return(h>=0?"+":"")+h+"%"},o=[];Math.abs(t.mass.M-i.W)>.3&&o.push(`\u6A21\u578B\u9AD4\u91CD ${ae(t.mass.M)} kg\uFF0C\u8207\u8F38\u5165\u5DEE ${ae(t.mass.M-i.W)} kg\uFF1A\u9019\u7D44\u8EAB\u9AD8\u3001\u4E09\u570D\u3001\u9AD4\u91CD\u8207\u808C\u8089\u91CF\u7684\u7D44\u5408\u8D85\u51FA\u53EF\u8ABF\u7BC4\u570D\uFF0C\u4E09\u570D\u512A\u5148\u543B\u5408\u3002`),t.note.g&&o.push(t.note.g<0?"\u808C\u8089\u91CF\u63A8\u4F30\u5DF2\u9054\u4E0B\u9650\u3002":"\u808C\u8089\u91CF\u63A8\u4F30\u5DF2\u9054\u4E0A\u9650\u3002"),t.note.f&&o.push(t.note.f<0?"\u76AE\u4E0B\u8102\u80AA\u5C64\u5DF2\u9054\u4E0B\u9650\u3002":"\u76AE\u4E0B\u8102\u80AA\u5C64\u5DF2\u9054\u4E0A\u9650\u3002"),i.auto&&t.bfPrior!=null&&Math.abs(t.mass.bf-t.bfPrior)>1.5&&o.push(`\u76EE\u6A19\u9AD4\u8102\u7387 ${ae(t.bfPrior)}%\uFF08${t.bfSrc}\uFF09\u7121\u6CD5\u5B8C\u5168\u9054\u6210\uFF0C\u6A21\u578B\u70BA ${ae(t.mass.bf)}%\u3002`);let a=c=>t.ct&&t.ct.band[c]>.5,l=(c,h)=>W("div",{class:"fitrow"},W("span",{},c),W("b",{},ae(h)+" cm"),W("span",{class:"dim"},"\u7531 CT \u6C7A\u5B9A\uFF08\u4EF0\u81E5\uFF09"),W("span",{class:"tag"},"CT"));et("#fit").replaceChildren(a("C")?l(i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",e.chest):s(i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",e.chest,i.chest,"cm"),...i.sex==="F"&&!a("C")?[s("\u4E0B\u80F8\u570D",e.under,t.under,"cm",i.under>0?"\u8F38\u5165":"\u63A8\u4F30")]:[],a("W")?l("\u8170\u570D",e.waist):s("\u8170\u570D",e.waist,i.waist,"cm"),a("H")?l("\u81C0\u570D",e.hip):s("\u81C0\u570D",e.hip,i.hip,"cm"),s("\u9AD4\u91CD",t.mass.M,i.W,"kg"),W("div",{class:"fitrow"},W("span",{},"BMI"),W("b",{},ae(n)),W("span",{class:"dim"},"\u9AD4\u8102\u7387"+(i.auto?`\uFF08${t.bfSrc}\uFF09`:"\uFF08\u7531\u9AD4\u91CD\u53CD\u63A8\uFF09")),W("b",{},ae(t.mass.bf)+" %")),W("p",{class:"note"},`\u76AE\u4E0B\u8102\u80AA\u5C64\u70BA\u57FA\u6E96\u7684 ${t.f.toFixed(2)} \u500D\uFF1B\u8EC0\u5E79\u5BEC\u6DF1\u76F8\u5C0D\u57FA\u6E96\uFF1A\u80F8\u5ED3 ${r("C")}\u3001\u8179\u90E8 ${r("W")}\u3001\u9AA8\u76C6 ${r("H")}\u3002`+(i.sex==="F"?`\u4E0A\u4E0B\u80F8\u570D\u5DEE ${ae(e.chest-e.under)} cm`+(i.under>0?"\u3002":"\uFF08\u4E0B\u80F8\u570D\u70BA\u63A8\u4F30\u503C\uFF09\u3002"):"")+`\u817F\u6BB5 \xD7${t.legScale.toFixed(3)}\u3001\u4E0A\u8EAB \xD7${t.upScale.toFixed(3)}\u3002`),...o.map(c=>W("p",{class:"note warn"},c))),et("#status").textContent=`${i.sex==="F"?"\u5973":"\u7537"}\u3000${ae(i.H)} cm\u3000${ae(i.W)} kg\u3000\u80F8 ${ae(e.chest)}\u3000\u8170 ${ae(e.waist)}\u3000\u81C0 ${ae(e.hip)}`}function Qa(){let i=wt.c,t=wt.meas,e=wt.res;return[["\u8EAB\u9AD8",i.H,"cm","A","\u8F38\u5165\u503C"],["\u9AD4\u91CD",e.mass.M,"kg",Math.abs(e.mass.M-i.W)<=.3?"A":"C","\u6A21\u578B\u9AD4\u7A4D \xD7 \u7D44\u7E54\u5BC6\u5EA6"],[i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",t.chest,"cm","A","\u4E73\u982D\u9AD8\u5EA6\uFF0C\u4E0D\u542B\u4E0A\u80A2"],...i.sex==="F"?[["\u4E0B\u80F8\u570D",t.under,"cm",i.under>0?"A":"C",i.under>0?"\u4E73\u623F\u4E0B\u7DE3":"\u7531\u8170\u570D\u63A8\u4F30\u5F8C\u5EFA\u6A21"]]:[],["\u8170\u570D",t.waist,"cm","A","\u808B\u4E0B\u7DE3\u8207\u9AC2\u5D74\u4E4B\u9593\u6700\u7D30\u8655"],["\u81C0\u570D",t.hip,"cm","A","\u81C0\u90E8\u6700\u5F8C\u51F8\u8655"],["\u9AD4\u8102\u7387",e.mass.bf,"%",i.auto&&i.bf>0?"A":"C",i.auto?i.bf>0?"\u5BE6\u6E2C\u8F38\u5165":"\u8170\u570D\u8EAB\u9AD8\u6BD4 RFM \u63A8\u4F30":"\u7531\u9AD4\u91CD\u8207\u808C\u8089\u91CF\u53CD\u63A8"],["\u8EAB\u9AD4\u9AD4\u7A4D",e.mass.V,"L","B","\u76AE\u819A\u7DB2\u683C\u9AD4\u7A4D"],["\u808C\u8089\u7E3D\u9AD4\u7A4D",t.muscleVol,"L","B","\u6240\u6709\u808C\u8089\u7DB2\u683C\uFF08\u542B\u808C\u8171\uFF09"],["\u9AA8\u9ABC\u808C\u91CF",t.muscleVol*1.06,"kg","C","\u9AD4\u7A4D \xD7 1.06 kg/L"],["\u4E0A\u81C2\u570D",t.upperArm,"cm","B","\u80A9\u5CF0\u8207\u8098\u4E2D\u9EDE"],["\u524D\u81C2\u570D",t.forearm,"cm","B","\u6700\u7C97\u8655"],["\u5927\u817F\u570D",t.thigh,"cm","B","\u6703\u9670\u8207\u819D\u4E2D\u9EDE"],["\u5C0F\u817F\u570D",t.calf,"cm","B","\u6700\u7C97\u8655"],["\u80A9\u5BEC",t.biacromial,"cm","B","\u5DE6\u53F3\u80A9\u80DB\u9AA8\u6700\u5916\u7DE3"],["\u9AA8\u76C6\u5BEC",t.biiliac,"cm","B","\u5DE6\u53F3\u9AD6\u9AA8\u6700\u5916\u7DE3"],["\u5927\u8F49\u5B50\u9AD8",t.troch,"cm","B","\u817F\u9577"],["\u817F\u9577\u4F54\u8EAB\u9AD8",t.legRatio,"%","A","\u5927\u8F49\u5B50\u9AD8 \xF7 \u8EAB\u9AD8"],["\u6703\u9670\u9AD8",t.crotch,"cm","B",""],["\u4E0A\u8EAB\u9577",t.sitting,"cm","B","\u982D\u9802\u81F3\u5750\u9AA8\uFF0C\u8FD1\u4F3C\u5750\u9AD8"],["\u80A1\u9AA8\u9577",t.femur,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u817F\u9577\u6BD4\u4F8B"],["\u811B\u9AA8\u9577",t.tibia,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u817F\u9577\u6BD4\u4F8B"],["\u80B1\u9AA8\u9577",t.humerus,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u81C2\u9577"],["\u6A48\u9AA8\u9577",t.radius,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u81C2\u9577"]]}function og(){let i=W("table",{},W("thead",{},W("tr",{},W("th",{},"\u9805\u76EE"),W("th",{},"\u6578\u503C"),W("th",{},"\u7B49\u7D1A"),W("th",{},"\u91CF\u6CD5")))),t=W("tbody");for(let[e,n,s,r,o]of Qa())t.append(W("tr",{},W("td",{},e),W("td",{class:"n"},ae(n)+" "+s),W("td",{},W("span",{class:"gr gr"+r},r)),W("td",{class:"dim"},o)));i.append(t),et("#mtable").replaceChildren(i)}function lg(){let i=wt.meas;for(let t=1;t<=10;t++){let e=et("#gl-"+t);e&&(e.textContent=i.regVol[t].toFixed(2)+" L")}}function Ja(){let i=(et("#s-q").value||"").trim().toLowerCase(),t=et("#s-t").value,e=new Map;for(let o of qt.parts){if(o.t===10||o.t===4||o.t===9||o.t===11||t!==""&&+t!==o.t||i&&!(o.zh.toLowerCase().includes(i)||o.en.toLowerCase().includes(i)))continue;let a=o.t+"|"+o.en;e.has(a)||e.set(a,[]),e.get(a).push(o)}let n={0:0,2:1,5:2,3:3,1:4,6:5,7:6,8:7},s=[...e.values()];i&&s.sort((o,a)=>n[o[0].t]-n[a[0].t]||o[0].zh.length-a[0].zh.length);let r=et("#slist");r.replaceChildren(W("p",{class:"note"},`\u5171 ${s.length} \u9805`+(s.length>120?"\uFF0C\u986F\u793A\u524D 120 \u9805\uFF0C\u8ACB\u8F38\u5165\u95DC\u9375\u5B57\u7E2E\u5C0F\u7BC4\u570D\u3002":"")));for(let o of s.slice(0,120)){let a=o[0];r.append(W("button",{class:"li",onclick:()=>{let l=o.find(c=>c.side===0)||o[0];if(!vt.layers[l.layer]){vt.setLayer(l.layer,!0);let c=et("#l-"+l.layer);c&&(c.checked=!0)}vt.hidden.delete(l.i),vt.rebuild(),Oi(l),vt.focus(l)}},W("b",{},a.zh||a.en),W("span",{class:"dim"},a.en),W("span",{class:"tag"},cs[a.t]+(o.length>1?"\u30FB\u5DE6\u53F3":""))))}}function ja(i){wt.mode=i,document.body.dataset.mode=i;for(let e of et("#mode").children)e.classList.toggle("on",e.dataset.m===i);for(let e of et("#tabs").querySelectorAll("button[data-t]"))e.hidden=e.dataset.mode!==i;(et("#tabs").querySelector("button[data-t].on:not([hidden])")||et("#tabs").querySelector(`button[data-mode="${i}"]`)).click(),et("#info").hidden=!0,i==="body"?(Oe.activate(!1),vt.setHuman(!0),vt.view("front"),wc()):(Oi(null),vt.setHuman(!1),Oe.activate(!0),Oe.status()),history.replaceState(null,"",i==="img"?"#img":location.pathname+location.search)}function cg(i){et("#i-zh").textContent=i.zh,et("#i-en").textContent=i.en,et("#i-sum").textContent=i.sum,et("#i-more").open=!0,et("#i-solo").textContent=Oe.solo?"\u986F\u793A\u5176\u4ED6":"\u53EA\u770B\u9019\u500B",et("#i-kv").replaceChildren(...i.kv.map(([t,e])=>W("div",{},W("span",{},t),W("b",{},e)))),et("#info").hidden=!1}function Oi(i){vt.select(i),i?Tc(i):(et("#info").hidden=!0,vt.isolate&&(vt.isolate=null,vt.rebuild()),et("#i-solo").textContent="\u53EA\u770B\u9019\u500B")}function Tc(i){let t=["\u5DE6","\u53F3","\u6B63\u4E2D"][i.side],e=[];if(e.push(["\u985E\u5225",cs[i.t]+(i.t===10?i.kind===1?"\uFF08\u8D77\u9EDE\uFF09":"\uFF08\u6B62\u9EDE\uFF09":"")],["\u5074\u5225",t]),i.grp&&e.push(["\u6240\u5C6C",i.grp]),i.rg&&e.push(["\u8ABF\u6574\u90E8\u4F4D",Bi[i.rg]]),[0,1,2,3].includes(i.t)){let n=qt.partVolume(i),s=i.vol0*qt.s**3;e.push(["\u9AD4\u7A4D",ae(n)+" cm\xB3"+(i.t===0&&Math.abs(n-s)>.05*s?`\uFF08\u57FA\u6E96 ${ae(s)}\uFF09`:"")]),e.push(["\u9577\u5EA6",ae(i.len0*qt.s)+" cm"])}et("#i-zh").textContent=i.zh||i.en,et("#i-en").textContent=i.en,et("#i-sum").textContent=[e[0][1],t,i.rg?Bi[i.rg]:""].filter(Boolean).join("\u30FB"),et("#i-more").open=innerWidth>=900,et("#i-kv").replaceChildren(...e.map(([n,s])=>W("div",{},W("span",{},n),W("b",{},s)))),et("#info").hidden=!1}function gr(i){wt.tool=wt.tool===i?null:i,wt.pts=[],et("#tl-dist").classList.toggle("on",wt.tool==="dist"),et("#tl-girth").classList.toggle("on",wt.tool==="girth"),wt.tool==="girth"&&vt.layers.skin<.05&&(as(.38,!0),yr("xray")),et("#toolout").textContent=wt.tool==="dist"?"\u5728\u6A21\u578B\u4E0A\u9EDE\u5169\u500B\u4F4D\u7F6E\u3002":wt.tool==="girth"?"\u9EDE\u76AE\u819A\u4E0A\u8981\u91CF\u7684\u9AD8\u5EA6\uFF08\u8EC0\u5E79\u3001\u4E0A\u80A2\u6216\u4E0B\u80A2\uFF09\u3002":"",et("#hint").textContent=wt.tool?et("#toolout").textContent:"",et("#hint").hidden=!wt.tool}function Ac(i,t){if(wt.mode==="img"){Oe.tap(i,t);return}if(wt.tool==="dist"){let n=vt.pick(i,t,!0);if(!n)return;if(wt.pts.length>=2&&(wt.pts=[],vt.clearMarks()),wt.pts.push(n.point),vt.addDot(n.point,16765503),wt.pts.length===2){vt.addLine(wt.pts,16765503);let s=wt.pts[0].distanceTo(wt.pts[1]);et("#toolout").textContent=`\u76F4\u7DDA\u8DDD\u96E2 ${ae(s)} cm`,et("#hint").textContent=et("#toolout").textContent}return}if(wt.tool==="girth"){let n=vt.pick(i,t,"only");if(!n)return;let s=qt.stri,r=qt.scls,o=qt.sbase,a=s[n.tri*3],l=qt.lm,c,h,d=g=>{let _=[];for(let m=0;m<qt.NTs;m++)g(s[m*3])&&g(s[m*3+1])&&g(s[m*3+2])&&_.push(m);return Uint32Array.from(_)},u=o[a*3]>=0?1:-1;r[a]>=16?(c=d(g=>r[g]>=16&&o[g*3]*u>0),h=(u>0?"\u5DE6":"\u53F3")+"\u4E0A\u80A2"):o[a*3+1]<l.yCrotch-.5?(c=d(g=>r[g]<16&&o[g*3]*u>.3&&o[g*3+1]<l.yCrotch+1),h=(u>0?"\u5DE6":"\u53F3")+"\u4E0B\u80A2"):(c=qt.bodyTris,h="\u8EC0\u5E79");let p=qt.girthAt(qt.spos,c,n.point.y,!0);vt.clearMarks(),p.pts.length&&vt.addLine(p.pts,16765503,!0),et("#toolout").textContent=`${h}\u570D\u5EA6 ${ae(p.len)} cm\uFF08\u96E2\u5730 ${ae(n.point.y)} cm\uFF0C\u76AE\u5C3A\u91CF\u6CD5\uFF09`,et("#hint").textContent=et("#toolout").textContent;return}let e=vt.pick(i,t,!1);Oi(e?e.part:null)}var to="msk2.cases",vr=()=>{try{return JSON.parse(localStorage.getItem(to)||"{}")}catch{return{}}};function eo(){let i=vr();et("#f-cases").replaceChildren(W("option",{value:""},Object.keys(i).length?"\u9078\u64C7\u500B\u6848\u2026":"\u5C1A\u7121"),...Object.keys(i).sort().map(e=>W("option",{value:e},e)))}function hg(){let i=wt.c;if(!i.id){et("#f-id").focus();return}let t=vr();t[i.id]={...i,off:[...i.off]};try{localStorage.setItem(to,JSON.stringify(t))}catch{}eo(),et("#f-cases").value=i.id}function ug(){let i=et("#f-cases").value,t=vr();!i||!t[i]||(Object.assign(wt.c,t[i],{off:[...t[i].off]}),rs(),ln(10))}function dg(){let i=et("#f-cases").value,t=vr();if(i){delete t[i];try{localStorage.setItem(to,JSON.stringify(t))}catch{}eo()}}async function no(i,t){let e=null;try{window.claude&&window.claude.use&&(e=await window.claude.use("downloads"))}catch{e=null}if(e){try{await e.save({filename:i,data:t})}catch{}return}let n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=i,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}var io=i=>((wt.c.id||"case").replace(/[^\w\-]+/g,"_")||"case")+"."+i;function fg(){let i=[["\u9805\u76EE","\u6578\u503C","\u55AE\u4F4D","\u7B49\u7D1A","\u91CF\u6CD5"],...Qa().map(([t,e,n,s,r])=>[t,ae(e),n,s,r])];no(io("csv"),new Blob(["\uFEFF"+i.map(t=>t.map(e=>'"'+String(e).replace(/"/g,'""')+'"').join(",")).join(`\r
`)],{type:"text/csv"}))}function pg(){let i=wt.res;no(io("json"),new Blob([JSON.stringify({tool:"\u500B\u6848\u5316\u808C\u9AA8\u6A21\u578B v0.6",source:"Z-Anatomy (CC BY-SA 4.0) / BodyParts3D",case:wt.c,ct:qt.ct?{applied:qt.ct.on,scan:qt.ct.hdr.scan,scaleFromCT:qt.ct.s_ct,fitErrorCm:qt.ct.hdr.fit,muscularity:qt.ct.hdr.g,measurementsSupine:qt.ct.hdr.meas,segmentation:qt.ct.hdr.seg_model}:null,solution:{muscle:i.gG,subcutaneousFatFactor:i.f,trunkScale:i.kf,legScale:i.legScale,upperBodyScale:i.upScale,breastProjectionCm:i.A,underbustCm:i.under,bodyFatPrior:i.bfPrior,bodyFatSource:i.bfSrc,mass:i.mass},measurements:Object.fromEntries(Qa().map(([t,e,n,s])=>[t,{value:+ae(e),unit:n,grade:s}])),regionMuscleVolumeL:Object.fromEntries(Bi.map((t,e)=>[t,+wt.meas.regVol[e].toFixed(3)]).slice(1))},null,2)],{type:"application/json"}))}async function mg(){no(io("png"),await vt.png())}sg();})();
