(()=>{var as={0:"\u808C\u8089",1:"\u808C\u8171\uFF0F\u8171\u819C\uFF0F\u652F\u6301\u5E36",7:"\u6DF1\u7B4B\u819C",2:"\u9AA8\u9ABC",3:"\u8EDF\u9AA8",4:"\u7259\u9F52",9:"\u773C\u7403",5:"\u97CC\u5E36",6:"\u95DC\u7BC0\u56CA",8:"\u6ED1\u6DB2\u56CA\uFF0F\u8171\u9798",10:"\u808C\u8089\u9644\u8457\u5340",11:"\u6BDB\u9AEE"},pl={0:"muscle",1:"tendon",7:"fascia",2:"bone",3:"cart",4:"bone",9:"eye",5:"lig",6:"bursa",8:"bursa",10:"ins",11:"hair"},Di=["","\u9838\u90E8","\u80A9\u90E8","\u80F8\u90E8","\u80CC\u90E8","\u8179\u90E8","\u4E0A\u81C2","\u524D\u81C2","\u81C0\u90E8","\u5927\u817F","\u5C0F\u817F"],sn=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Ue=4,Xe=760,Mn=2.2,ke=2;async function Qa(i){window.__MODEL_B64||await new Promise(s=>{let r=document.createElement("script");r.src="model.js",r.onload=s,r.onerror=s,document.head.appendChild(r)});let t;if(window.__MODEL_B64){let s=window.__MODEL_B64,r=0,o=s.map(l=>{let h=atob(l);return r+=h.length,h}),a=new Uint8Array(r),c=0;for(let l of o){for(let h=0;h<l.length;h++)a[c+h]=l.charCodeAt(h);c+=l.length}window.__MODEL_B64=null,t=new Blob([a]),i&&i(1)}else{let s=await fetch("model.bin");if(!s.ok)throw new Error("\u6A21\u578B\u8CC7\u6599\u4E0B\u8F09\u5931\u6557\uFF08"+s.status+"\uFF09");t=await s.blob(),i&&i(1)}let e=new Uint8Array(await t.slice(0,2).arrayBuffer()),n=e[0]===31&&e[1]===139?await new Response(t.stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():await t.arrayBuffer();return new gr(n)}var gr=class{constructor(t){let n=new DataView(t).getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n)));this.meta=s;let r=this.lm=s.lm,o=4+n,a=(L,D)=>{let Z=new L(t,o,D);return o=o+D*L.BYTES_PER_ELEMENT+3&-4,Z},c=this.NV=s.NV,l=this.NT=s.NT,h=this.NVd=s.NVd,u=this.NS=s.NS,p=this.NTs=s.NTs,f=a(Uint16Array,c*3),g=a(Uint16Array,l*3);this.F=a(Int8Array,h*3),this.VRG=a(Uint8Array,h),this.MIX=a(Uint8Array,c);let _=a(Uint16Array,u*3),m=a(Uint16Array,p*3),d=a(Int8Array,u*3),v=a(Int8Array,u*3),x=a(Int8Array,u*3),E=a(Uint8Array,u);this.scls=a(Uint8Array,u),this.srg=a(Uint8Array,u);let P=a(Uint8Array,u),T=a(Int8Array,u*3),C=a(Uint8Array,u);this.VRG2=a(Uint8Array,h),this.VFR=a(Uint8Array,h),this.srg2=a(Uint8Array,u),this.sfr=a(Uint8Array,u);let $=s.bmin,M=s.bsz,w=(L,D)=>{let Z=new Float32Array(D*3);for(let K=0;K<D*3;K++)Z[K]=$[K%3]+L[K]/65535*M[K%3];return Z},H=(L,D)=>{let Z=new Float32Array(L.length);for(let K=0;K<L.length;K++)Z[K]=L[K]*D;return Z};this.base=w(f,c),this.sbase=w(_,u),this.fk=s.inflScale/127,this.sn=H(d,1/127);for(let L=0;L<u;L++){let D=Math.hypot(this.sn[L*3],this.sn[L*3+1],this.sn[L*3+2])||1;this.sn[L*3]/=D,this.sn[L*3+1]/=D,this.sn[L*3+2]/=D}this.sF=H(v,this.fk),this.sFem=H(x,s.femScale/127),this.tb=H(E,s.tbScale),this.sgap=H(P,.02),this.sSm=H(T,s.smScale/127),this.sSmN=new Float32Array(u);for(let L=0;L<u;L++){let D=L*3,Z=this.sSm[D]*this.sn[D]+this.sSm[D+1]*this.sn[D+1]+this.sSm[D+2]*this.sn[D+2];this.sSmN[L]=Z,this.sSm[D]-=Z*this.sn[D],this.sSm[D+1]-=Z*this.sn[D+1],this.sSm[D+2]-=Z*this.sn[D+2]}this.stri=new Uint32Array(p*3),this.stri.set(m),this.parts=s.parts.map((L,D)=>({i:D,t:L[0],side:L[1],v0:L[2],nv:L[3],t0:L[4],nt:L[5],rg:L[6],kind:L[7]&3,seg:L[7]>>2&1,en:L[8],zh:L[9],grp:L[10],vol0:L[12],len0:L[13],layer:pl[L[0]],male:L[7]>>3&1})),this.idx=new Uint32Array(l*3);for(let L of this.parts)for(let D=L.t0*3,Z=(L.t0+L.nt)*3;D<Z;D++)this.idx[D]=g[D]+L.v0;this.pos=new Float32Array(c*3),this.nrm=new Float32Array(c*3),this.spos=new Float32Array(u*3),this.snrm=new Float32Array(u*3),this.box=new Float32Array(this.parts.length*6);let F=r.shoulder[0],J=(L,D)=>sn(F-1,F+2,Math.abs(L))*sn(r.yChest-8,r.yChest-2,D);this.armW=new Float32Array(c);for(let L of this.parts)for(let D=L.v0;D<L.v0+L.nv;D++)this.armW[D]=L.seg?1:J(this.base[D*3],this.base[D*3+1]);this.sarmW=H(C,1/255);let R=L=>{let D=new Float32Array(Xe+1);for(let Z=0;Z<=Xe;Z++)D[Z]=L(Z/Ue);return D};this.ZS=R(L=>Ka(r.zs,L)),this.LEGW=R(L=>sn(r.hipJ[1]-2,r.hipJ[1]-12,L)),this.SX=R(()=>1),this.SZ=R(()=>1),this.YM=R(L=>L);let U=[r.wrist3[0]-r.shoulder3[0],r.wrist3[1]-r.shoulder3[1],r.wrist3[2]-r.shoulder3[2]],V=Math.hypot(U[0],U[1],U[2]);this.armU=U.map(L=>L/V),this.r0=r.yTroch/r.H0,this.pr={leg:this.r0,arm:1,shoulder:1},this.g=new Float32Array(11),this.gSex=new Array(11).fill(0),this.s=1,this.f=1,this.A=0,this.kf={C:1,W:1,H:1},this.sex="M",this.tbEff=new Float32Array(u),this.bump=new Float32Array(u*3),this.wB=new Float32Array(u),this.setSex("M");let q=[];for(let L=0;L<p;L++){let D=this.stri[L*3],Z=this.stri[L*3+1],K=this.stri[L*3+2];this.scls[D]<16&&this.scls[Z]<16&&this.scls[K]<16&&q.push(L)}this.bodyTris=Uint32Array.from(q),this.band={};for(let[L,D]of[["C",r.yChest],["U",r.yUnder],["W",r.yWaist],["H",r.yHip]])this.band[L]=this.makeBand(this.bodyTris,D,9);this.hull=new Float32Array(4e4),this.buildLUT()}makeBand(t,e,n){let s=[],r=new Set,o=this.sbase,a=this.stri;for(let c of t){let l=a[c*3],h=a[c*3+1],u=a[c*3+2],p=Math.min(o[l*3+1],o[h*3+1],o[u*3+1]);Math.max(o[l*3+1],o[h*3+1],o[u*3+1])>e-n&&p<e+n&&(s.push(c),r.add(l),r.add(h),r.add(u))}return{tris:Uint32Array.from(s),verts:Uint32Array.from(r),y:e}}setSex(t){this.sex=t;let e=this.lm,n=t==="F",s=this.NS,r=this.sbase,o=this.sn,a=e.nipple,l=[[e.yAnkle+3,.2,.2],[e.yKnee-8,.45,.55],[e.yKnee+6,.6,.85],[e.yCrotch-12,.8,1.2],[e.yHip,.95,1.3],[e.yWaist,1,.95],[e.yChest-6,.9,.9],[e.yChest+4,.75,.85],[e.shoulder[1]+4,.4,.4]].map(h=>[h[0],n?h[2]:h[1]]);for(let h=0;h<s;h++){let u=this.scls[h],p=r[h*3+1],f;if(u&8)f=.1;else if((u&7)===5)f=.3;else if((u&7)===1||(u&7)===2)f=p>e.yElbow?.75:.45;else{f=Ka(l,p);let _=sn(e.yHip-4,e.yHip+6,p)*(1-sn(e.yChest-12,e.yChest-4,p));f*=1+_*((n?.25:.45)*Math.max(0,o[h*3+2])+.2*Math.abs(o[h*3]))}this.tbEff[h]=f*(.5*Math.min(2,Math.max(.3,this.tb[h]))+.4),this.bump[h*3]=n?this.sFem[h*3]:0,this.bump[h*3+1]=n?this.sFem[h*3+1]:0,this.bump[h*3+2]=n?this.sFem[h*3+2]:0;let g=0;if(n&&u===0&&o[h*3+2]>0){let _=Math.abs(r[h*3])-(a[0]+.6),m=p-a[1];Math.abs(_)<13&&m>-12&&m<16&&(g=Math.min(1,o[h*3+2]*3))}this.wB[h]=g}this.k0=n?{C:.88,W:.92,H:1.05,S:1}:{C:1,W:1,H:1,S:1},this.gSex=n?[0,-.3,-.45,-.5,-.45,-.3,-.45,-.4,-.15,-.25,-.25]:new Array(11).fill(0),this.phi0=n?.33:.25,this.air=n?1.9:2.4,this.kf={C:this.k0.C,W:this.k0.W,H:this.k0.H},this.A=0}setProportions(t){this.pr={leg:t.leg||this.r0,arm:t.arm||1,shoulder:t.shoulder||1}}buildLUT(){let t=this.lm,e=this.kf,n=this.k0,s=t.shoulder[1],r=(1+.7*(e.C/n.C-1))*n.S*this.pr.shoulder,o=[[t.yHip,e.H],[t.yWaist,e.W],[t.yUnder,e.C],[t.yChest,e.C],[s,r],[s+9,1]],a=[[t.yHip,1+(e.H-1)*.6],[t.yWaist,1+(e.W-1)*1.15],[t.yUnder,1+(e.C-1)*.9],[t.yChest,1+(e.C-1)*.9],[s,1+(r-1)*.4],[s+9,1]],c=t.H0,l=t.hipJ[1],h=E=>sn(l-2,l+8,E),u=0,p=0,f=Math.round(c*Ue),g=Math.round(t.yTroch*Ue);for(let E=0;E<f;E++){let P=h((E+.5)/Ue)/Ue;u+=P,E<g&&(p+=P)}let _=c-u,m=t.yTroch-p,d=(this.pr.leg*c-c*p/u)/(m-_*p/u),v=(c-d*_)/u;this.legScale=d,this.upScale=v,this.legK={I0:_,I1:u,T0:m,T1:p};let x=0;this.YM[0]=0;for(let E=0;E<=Xe;E++){let P=E/Ue;if(this.SX[E]=ja(o,P),this.SZ[E]=ja(a,P),E>0){let T=h((E-.5)/Ue);x+=(d+(v-d)*T)/Ue,this.YM[E]=x}}this.sxHip=this.SX[Math.round(l*Ue)],this.sxSh=this.SX[Math.round(s*Ue)],this.yShM=this.ymap(t.shoulder3[1])}ctOn(){return this.ct&&this.ct.on?this.ct:null}anchorWarp(){let t=this.lm,[e,n,s]=this.ct.anchor,r=n*Ue,o=r|0;o<0?o=0:o>=Xe&&(o=Xe-1);let a=this.LEGW[o],c=s-this.ZS[o],l=c>ke?c-ke:c<-ke?.3*(c+ke):0;return[e,this.YM[o]+(r-o)*(this.YM[o+1]-this.YM[o]),s+(1-a)*(this.SZ[o]-1)*l]}setCT(t){if(!t)return this.ct=null,null;let e=new DataView(t),n=e.getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,n)));if(s.NV!==this.NV||s.NS!==this.NS)throw new Error("\u500B\u6848\u6A94\u8207\u76EE\u524D\u6A21\u578B\u7248\u672C\u4E0D\u7B26");let r=4+n,o=(g,_)=>{let m=new g(t,r,_);return r=r+_*g.BYTES_PER_ELEMENT+3&-4,m},a=(g,_)=>{let m=new Float32Array(g.length);for(let d=0;d<g.length;d++)m[d]=g[d]*_;return m},c=a(o(Uint8Array,this.NV),1/255),l=a(o(Int16Array,this.NV*3),.01),h=a(o(Uint8Array,this.NS),1/255),u=a(o(Int16Array,this.NS*3),.01),p=s.overlays.map(g=>({...g,V:a(o(Int16Array,g.nv*3),.01),F:new Uint32Array(o(Uint32Array,g.nt*3))})),f={};for(let g in this.band){let _=0,m=this.band[g].verts;for(let d of m)_+=h[d];f[g]=_/m.length}return this.ct={hdr:s,w:c,u:l,ws:h,us:u,ov:p,anchor:s.anchor,s_ct:s.s_ct,band:f,on:!0},this.ct}ymap(t){let e=t*Ue,n=e|0;return n<0?n=0:n>=Xe&&(n=Xe-1),this.YM[n]+(e-n)*(this.YM[n+1]-this.YM[n])}deformSkin(t,e,n){let s=this.lm,r=this.sbase,o=this.sn,a=this.sF,c=this.g,l=this.SX,h=this.SZ,u=this.ZS,p=this.YM,f=this.LEGW,g=this.tbEff,_=this.sgap,m=this.sarmW,d=this.srg,v=this.srg2,x=this.sfr,E=this.bump,P=this.sSm,T=this.sSmN,C=this.wB,$=s.shoulder[0],M=s.hipJ[0],w=(this.sxSh-1)*($-Mn),H=(this.sxHip-1)*(M-Mn),F=n?this.s:1,J=this.f-1,R=Math.max(this.sex==="F"?.6:0,J>0?Math.min(1,J/1.2)*.85:0),U=this.A,V=s.shoulder3,q=this.armU,L=this.pr.arm-1,D=this.yShM,Z=e?e.length:this.NS,K=s.nipple[0]+.6,ut=s.nipple[1],X=this.sxSh,et=$-5,ft=$-.5,bt=s.yChest-10,St=s.yChest-3,Nt=this.sex==="F"?.18:0,Lt=this.ctOn(),Et=Lt?Lt.ws:null,Vt=Lt?Lt.us:null,z=1/this.s,[Kt,_t,Tt]=Lt?this.anchorWarp():[0,0,0];for(let yt=0;yt<Z;yt++){let It=e?e[yt]:yt,mt=It*3,S=r[mt],y=r[mt+1],k=r[mt+2],it=g[It]*J+T[It]*R;it<-_[It]&&(it=-_[It]),it+=Nt;let nt=x[It]/255,st=c[d[It]]*nt+c[v[It]]*(1-nt),vt=_[It]>.6?R:R*_[It]/.6;S+=o[mt]*it+a[mt]*st+E[mt]+P[mt]*vt,y+=o[mt+1]*it+a[mt+1]*st+E[mt+1]+P[mt+1]*vt,k+=o[mt+2]*it+a[mt+2]*st+E[mt+2]+P[mt+2]*vt;let ot=S>=0?1:-1;if(U>0&&C[It]>0){let Ut=(S<0?-r[mt]:r[mt])-K,at=r[mt+1]-ut+Math.min(.6,.06*U),I=Ut>=0?Ut/(7+.4*U):-Ut/(5.4+.2*U),ct=at>=0?at/(8.5+.35*U):-at/Math.min(6.2,4.6+.2*U),lt=1-I*I-ct*ct;if(lt>0){let Dt=at<=-2?0:at>=3?1:(at+2)/5,At=U*C[It]*Math.pow(lt,.8+.9*Dt);S+=.16*ot*At,y-=.03*U*At/(1+.1*U),k+=At}}let pt=y*Ue,gt=pt|0;gt<0?gt=0:gt>=Xe&&(gt=Xe-1);let Ct=m[It],Q=f[gt],Xt=S*ot,A=Xt>Mn?Xt-Mn:0,tt=k-u[gt],ht=tt>ke?tt-ke:tt<-ke?.3*(tt+ke):0,rt=l[gt];Xt>et&&y>bt&&(rt+=(X-rt)*sn(et,ft,Xt)*sn(bt,St,y));let wt=S+ot*(Q*H+(1-Q)*(rt-1)*A),kt=p[gt]+(pt-gt)*(p[gt+1]-p[gt]),Gt=k+(1-Q)*(h[gt]-1)*ht;if(Ct>0){let Ut=((S-ot*V[0])*q[0]*ot+(y-V[1])*q[1]+(k-V[2])*q[2])*L;wt+=Ct*(S+Ut*q[0]*ot+ot*w-wt),kt+=Ct*(D+(y-V[1])+Ut*q[1]-kt),Gt+=Ct*(k+Ut*q[2]-Gt)}if(Et){let Ut=Et[It];Ut>0&&(wt+=Ut*(Kt+Vt[mt]*z-wt),kt+=Ut*(_t+Vt[mt+1]*z-kt),Gt+=Ut*(Tt+Vt[mt+2]*z-Gt))}t[mt]=wt*F,t[mt+1]=kt*F,t[mt+2]=Gt*F}}deformStructure(){let t=this.lm,e=this.base,n=this.pos,s=this.F,r=this.VRG,o=this.VRG2,a=this.VFR,c=this.g,l=this.fk,h=this.SX,u=this.SZ,p=this.ZS,f=this.YM,g=this.LEGW,_=this.armW,m=this.NVd,d=this.s,v=this.box,x=t.shoulder[0],E=t.hipJ[0],P=(this.sxSh-1)*(x-Mn),T=(this.sxHip-1)*(E-Mn),C=t.shoulder3,$=this.armU,M=this.pr.arm-1,w=this.yShM,H=this.sxSh,F=x-5,J=x-.5,R=t.yChest-10,U=t.yChest-3,V=this.ctOn(),q=V?V.w:null,L=V?V.u:null,D=1/d,[Z,K,ut]=V?this.anchorWarp():[0,0,0];for(let X of this.parts){let et=1e9,ft=1e9,bt=1e9,St=-1e9,Nt=-1e9,Lt=-1e9;for(let Et=X.v0,Vt=X.v0+X.nv;Et<Vt;Et++){let z=Et*3,Kt=e[z],_t=e[z+1],Tt=e[z+2];if(Et<m){let Ct=a[Et],Q=(c[r[Et]]*Ct+c[o[Et]]*(255-Ct))*l/255;Q!==0&&(Kt+=s[z]*Q,_t+=s[z+1]*Q,Tt+=s[z+2]*Q)}let yt=_t*Ue,It=yt|0;It<0?It=0:It>=Xe&&(It=Xe-1);let mt=_[Et],S=g[It],y=Kt>=0?1:-1,k=Kt*y,it=k>Mn?k-Mn:0,nt=Tt-p[It],st=nt>ke?nt-ke:nt<-ke?.3*(nt+ke):0,vt=h[It];k>F&&_t>R&&(vt+=(H-vt)*sn(F,J,k)*sn(R,U,_t));let ot=Kt+y*(S*T+(1-S)*(vt-1)*it),pt=f[It]+(yt-It)*(f[It+1]-f[It]),gt=Tt+(1-S)*(u[It]-1)*st;if(mt>0){let Ct=((Kt-y*C[0])*$[0]*y+(_t-C[1])*$[1]+(Tt-C[2])*$[2])*M;ot+=mt*(Kt+Ct*$[0]*y+y*P-ot),pt+=mt*(w+(_t-C[1])+Ct*$[1]-pt),gt+=mt*(Tt+Ct*$[2]-gt)}if(q){let Ct=q[Et];Ct>0&&(ot+=Ct*(Z+L[z]*D-ot),pt+=Ct*(K+L[z+1]*D-pt),gt+=Ct*(ut+L[z+2]*D-gt))}Kt=ot*d,_t=pt*d,Tt=gt*d,n[z]=Kt,n[z+1]=_t,n[z+2]=Tt,Kt<et&&(et=Kt),Kt>St&&(St=Kt),_t<ft&&(ft=_t),_t>Nt&&(Nt=_t),Tt<bt&&(bt=Tt),Tt>Lt&&(Lt=Tt)}v.set([et,ft,bt,St,Nt,Lt],X.i*6)}}normals(t,e,n,s,r,o,a){n.fill(0,o*3,a*3);for(let c=s*3,l=r*3;c<l;c+=3){let h=e[c]*3,u=e[c+1]*3,p=e[c+2]*3,f=t[u]-t[h],g=t[u+1]-t[h+1],_=t[u+2]-t[h+2],m=t[p]-t[h],d=t[p+1]-t[h+1],v=t[p+2]-t[h+2],x=g*v-_*d,E=_*m-f*v,P=f*d-g*m;n[h]+=x,n[h+1]+=E,n[h+2]+=P,n[u]+=x,n[u+1]+=E,n[u+2]+=P,n[p]+=x,n[p+1]+=E,n[p+2]+=P}for(let c=o*3,l=a*3;c<l;c+=3){let h=Math.hypot(n[c],n[c+1],n[c+2])||1;n[c]/=h,n[c+1]/=h,n[c+2]/=h}}girthAt(t,e,n,s){let r=this.stri,o=this.hull,a=0;for(let g=0;g<e.length;g++){let _=e[g]*3,m=r[_]*3,d=r[_+1]*3,v=r[_+2]*3,x=t[m+1]-n,E=t[d+1]-n,P=t[v+1]-n;if(!(x<0==E<0&&E<0==P<0)){if(x<0!=E<0){let T=x/(x-E);o[a++]=t[m]+T*(t[d]-t[m]),o[a++]=t[m+2]+T*(t[d+2]-t[m+2])}if(E<0!=P<0){let T=E/(E-P);o[a++]=t[d]+T*(t[v]-t[d]),o[a++]=t[d+2]+T*(t[v+2]-t[d+2])}if(P<0!=x<0){let T=P/(P-x);o[a++]=t[v]+T*(t[m]-t[v]),o[a++]=t[v+2]+T*(t[m+2]-t[v+2])}if(a>o.length-8)break}}let c=a/2;if(c<3)return s?{len:0,pts:[]}:0;let l=new Uint32Array(c);for(let g=0;g<c;g++)l[g]=g;l.sort((g,_)=>o[g*2]-o[_*2]||o[g*2+1]-o[_*2+1]);let h=[],u=(g,_,m)=>(o[_*2]-o[g*2])*(o[m*2+1]-o[g*2+1])-(o[_*2+1]-o[g*2+1])*(o[m*2]-o[g*2]);for(let g=0;g<c;g++){for(;h.length>=2&&u(h[h.length-2],h[h.length-1],l[g])<=0;)h.pop();h.push(l[g])}let p=h.length+1;for(let g=c-2;g>=0;g--){for(;h.length>=p&&u(h[h.length-2],h[h.length-1],l[g])<=0;)h.pop();h.push(l[g])}h.pop();let f=0;for(let g=0;g<h.length;g++){let _=h[g],m=h[(g+1)%h.length];f+=Math.hypot(o[_*2]-o[m*2],o[_*2+1]-o[m*2+1])}return s?{len:f,pts:h.map(g=>[o[g*2],n,o[g*2+1]])}:f}skinVolume(t){let e=this.stri,n=0;for(let s=0,r=this.NTs*3;s<r;s+=3){let o=e[s]*3,a=e[s+1]*3,c=e[s+2]*3;n+=t[o]*(t[a+1]*t[c+2]-t[a+2]*t[c+1])-t[o+1]*(t[a]*t[c+2]-t[a+2]*t[c])+t[o+2]*(t[a]*t[c+1]-t[a+1]*t[c])}return Math.abs(n)/6e3}bandGirth(t){let e=this.band[t];return this.deformSkin(this.spos,e.verts,!1),this.girthAt(this.spos,e.tris,this.ymap(e.y))}setG(t,e){for(let n=1;n<=10;n++)this.g[n]=Math.min(2,Math.max(-.95,(this.gCT?this.gCT[n]:t+this.gSex[n])+(e&&e[n]||0)));this.g[0]=0}solve(t){t.sex!==this.sex&&this.setSex(t.sex);let e=this.ctOn(),n=t.H/this.lm.H0;if(this.setProportions({leg:t.leg,arm:t.arm,shoulder:e?e.s_ct/n*(t.shoulder||1):t.shoulder}),e&&t.legAuto){this.buildLUT();let F=this.legK,J=e.s_ct/n,R=(this.lm.H0-J*F.I1)/F.I0;this.pr.leg=(R*F.T0+J*F.T1)/this.lm.H0}let s=F=>e&&e.band[F]>.5,r=this.s=t.H/this.lm.H0,o=r**3,a=this.k0,c=this.air,l=this.phi0,h=t.sex==="F",u=h?t.under>0?t.under:Math.min(t.chest-7,Math.max(t.chest-22,.5*(.75*t.waist+22)+.5*(t.chest-13))):0,p={C:t.chest/r,U:u/r,W:t.waist/r,H:t.hip/r},f=t.W/o,g={},_=()=>(this.deformSkin(this.spos,null,!1),this.skinVolume(this.spos)),m=(F,J,R,U,V)=>{let q=F(),L=NaN;this.buildLUT();let D=this.bandGirth(R);for(let Z=0;Z<7&&Math.abs(D-p[R])>.02;Z++){let K=isFinite(L)&&Math.abs(L)>1e-6?q+(p[R]-D)/L:q*(1+1.15*(p[R]/D-1));if(K=Math.min(V,Math.max(U,K)),K===q)break;J(K),this.buildLUT();let ut=this.bandGirth(R);L=(ut-D)/(K-q),q=K,D=ut}},d=()=>{for(let F of["H","W"])s(F)||m(()=>this.kf[F],J=>{this.kf[F]=J},F,.55*a[F],1.9*a[F]);if(s("C"))this.A=0,this.kf.C=a.C;else if(h){this.A=0,m(()=>this.kf.C,J=>{this.kf.C=J},"U",.55*a.C,1.9*a.C),this.buildLUT();let F=this.bandGirth("C");if(p.C>F+.05){let J=Math.max(.5,this.Aprev||3);this.A=J;let R=this.bandGirth("C"),U=(R-F)/J;for(let V=0;V<7&&Math.abs(R-p.C)>.03&&U>1e-6;V++){let q=Math.min(13,Math.max(0,J+(p.C-R)/U));if(q===J)break;this.A=q;let L=this.bandGirth("C");U=(L-R)/(q-J),J=q,R=L}this.Aprev=this.A}else p.C<F-.05&&m(()=>this.kf.C,J=>{this.kf.C=J},"C",.55*a.C,1.9*a.C)}else this.A=0,m(()=>this.kf.C,F=>{this.kf.C=F},"C",.55*a.C,1.9*a.C);this.buildLUT()},v=0,x=F=>{this.setG(F,t.off),this.f=1,this.A=0,this.kf={C:a.C,W:a.W,H:a.H},this.buildLUT(),v=_()},E=F=>{this.f=F,d();let J=_(),R=this.A;this.f=1,this.A=0;let U=_();this.f=F,this.A=R;let V=U-v,q=Math.max(.03*J,l*v+(V>0?.75:.3)*V+(J-U)),L=.9007*q+1.1*(J-q-c);return{M:L,V:J,Vfat:q,bf:.9007*q/L*100}},P=(F,J,R,U,V,q)=>{let L=F(J)-U;if(L>=0)return{x:J,clamp:-1};let D=F(R)-U;if(D<=0)return{x:R,clamp:1};let Z=0,K=J;for(let ut=0;ut<q;ut++){K=(J*D-R*L)/(D-L);let X=F(K)-U;if(Math.abs(X)<V)break;X<0?(J=K,L=X,Z===-1&&(D/=2),Z=-1):(R=K,D=X,Z===1&&(L/=2),Z=1)}return{x:K,clamp:0}},T=null,C=F=>{x(F);let J=P(R=>E(R).M,.3,12,f,.03,12);return T=E(J.x),T.fclamp=J.clamp,T.f=J.x,T},$=t.muscle,M=null,w="";if(this.gCT=null,t.auto&&e&&e.hdr.g&&e.hdr.g.all!=null){let F=e.hdr.g;$=F.all,this.gCT=[0,F.all,F.chest??F.all,F.chest??F.all,F.back??F.all,F.all,F.all,F.all,F.all,F.all,F.all],w="CT \u808C\u8089\u91CF\uFF0B\u9AD4\u91CD"}else if(t.auto){let F=(h?76:64)-20*t.H/t.waist;t.bf>0?(M=t.bf,w="\u5BE6\u6E2C\u8F38\u5165"):(M=Math.min(h?52:45,Math.max(h?14:6,F)),w="RFM \u63A8\u4F30");let J=P(R=>{let U=C(R);return U.fclamp<0?5:U.fclamp>0?-100:-U.bf},-.8,1.5,-M,.12,10);$=J.x,J.clamp&&(g.g=J.clamp)}let H=C($);return H.fclamp&&(g.f=H.fclamp),{gG:$,f:H.f,A:this.A,under:u,kf:{...this.kf},k0:{...a},bfPrior:M,bfSrc:w,note:g,legScale:this.legScale,upScale:this.upScale,leg:this.pr.leg,ct:e?{band:e.band}:null,mass:{M:H.M*o,V:H.V*o,Vfat:H.Vfat*o,bf:H.bf}}}apply(t){this.buildLUT(),this.deformStructure(),this.deformSkin(this.spos,null,!0);let e=this.parts,n=e.findIndex(r=>r.v0>=this.NVd),s=n<0?e.length:n;t||this.ctOn()?this.normals(this.pos,this.idx,this.nrm,0,this.NT,0,this.NV):this.normals(this.pos,this.idx,this.nrm,0,e[s-1].t0+e[s-1].nt,0,this.NVd),this.normals(this.spos,this.stri,this.snrm,0,this.NTs,0,this.NS)}partVolume(t){let e=this.pos,n=this.idx,s=0;for(let r=t.t0*3,o=(t.t0+t.nt)*3;r<o;r+=3){let a=n[r]*3,c=n[r+1]*3,l=n[r+2]*3;s+=e[a]*(e[c+1]*e[l+2]-e[c+2]*e[l+1])-e[a+1]*(e[c]*e[l+2]-e[c+2]*e[l])+e[a+2]*(e[c]*e[l+1]-e[c+1]*e[l])}return Math.abs(s)/6}findPart(t,e,n){return this.parts.find(s=>s.en===t&&s.side===e&&(n===void 0||s.t===n))}measure(){let t=this.lm,e=this.s,n=this.spos,s=this.stri,r=this.scls,o=this.sbase,a={},c=v=>this.ymap(v)*e,l=v=>this.girthAt(n,this.band[v].tris,c(this.band[v].y));a.chest=l("C"),a.under=l("U"),a.waist=l("W"),a.hip=l("H");let h=v=>{let x=[];for(let E=0;E<this.NTs;E++){let P=s[E*3],T=s[E*3+1],C=s[E*3+2];v(P)&&v(T)&&v(C)&&x.push(E)}return Uint32Array.from(x)};this.mTris||(this.mTris={arm:h(v=>(r[v]&7)===1),leg:h(v=>r[v]<16&&o[v*3]>.4&&o[v*3+1]<t.yCrotch-1)});let u=v=>(this.yShM+(v-t.shoulder3[1])*(1+(this.pr.arm-1)*this.armU[1]*this.armU[1]))*e,p=(v,x,E,P)=>{let T=0;for(let C=x;C<=E;C+=1)T=Math.max(T,this.girthAt(n,v,P(C)));return T};a.upperArm=this.girthAt(n,this.mTris.arm,u((t.shoulder[1]+t.yElbow)/2)),a.forearm=p(this.mTris.arm,t.yWrist+6,t.yElbow-2,u),a.thigh=this.girthAt(n,this.mTris.leg,c((t.yCrotch-1+t.yKnee)/2)),a.calf=p(this.mTris.leg,t.yAnkle+8,t.yKnee-4,c);let f=(v,x)=>{let E=this.findPart(v,x,2);return E?this.box.subarray(E.i*6,E.i*6+6):null},g=v=>{let x=f(v,0),E=f(v,1);return x&&E?x[3]-E[0]:0};a.biacromial=g("Scapula"),a.biiliac=g("Hip bone");let _=(v,x)=>{let E=this.findPart(v,0,2);return E?E.len0*x*e:0};a.femur=_("Femur",this.legScale),a.tibia=_("Tibia",this.legScale),a.humerus=_("Humerus",this.pr.arm),a.radius=_("Radius",this.pr.arm),a.troch=c(t.yTroch),a.crotch=c(t.yCrotch),a.legRatio=a.troch/(t.H0*e)*100,a.sitting=t.H0*e-c(t.yCrotch-1.5);let m=0,d=new Float32Array(11);for(let v of this.parts)if(v.t===0){let x=this.partVolume(v);m+=x,d[v.rg]+=x}return a.muscleVol=m/1e3,a.regVol=Array.from(d,v=>v/1e3),a}};function Ka(i,t){if(t<=i[0][0])return i[0][1];let e=i.length;if(t>=i[e-1][0])return i[e-1][1];for(let n=1;n<e;n++)if(t<=i[n][0]){let s=(t-i[n-1][0])/(i[n][0]-i[n-1][0]);return i[n-1][1]+s*(i[n][1]-i[n-1][1])}return i[e-1][1]}function ja(i,t){if(t<=i[0][0])return i[0][1];let e=i.length;if(t>=i[e-1][0])return i[e-1][1];for(let n=1;n<e;n++)if(t<=i[n][0]){let s=(t-i[n-1][0])/(i[n][0]-i[n-1][0]),r=s*s*(3-2*s);return i[n-1][1]+r*(i[n][1]-i[n-1][1])}return i[e-1][1]}var jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ml=0,to=1,gl=2;var Rc=1,_l=2,pn=3,an=0,Ee=1,Ie=2;var Rn=0,bi=1,eo=2,no=3,io=4,xl=5,Vn=100,yl=101,vl=102,so=103,ro=104,Ml=200,bl=201,Sl=202,El=203,Zr=204,Jr=205,wl=206,Tl=207,Al=208,Cl=209,Rl=210,Pl=211,Ll=212,Il=213,Ul=214,Dl=0,Nl=1,Ol=2,Yn=3,Fl=4,Bl=5,zl=6,kl=7,Pc=0,Hl=1,Vl=2,Pn=0,Gl=1,Wl=2,Xl=3,ql=4,Yl=5,Zl=6;var Lc=300,wi=301,Ti=302,$r=303,Kr=304,nr=306,jr=1e3,$e=1001,Qr=1002,Pe=1003,ao=1004;var _r=1005;var Ve=1006,Jl=1007;var Gi=1008;var Ln=1009,$l=1010,Kl=1011,La=1012,Ic=1013,An=1014,Cn=1015,Wi=1016,Uc=1017,Dc=1018,Wn=1020,jl=1021,Ke=1023,Ql=1024,th=1025,Xn=1026,Ai=1027,eh=1028,Nc=1029,nh=1030,Oc=1031,Fc=1033,xr=33776,yr=33777,vr=33778,Mr=33779,oo=35840,co=35841,lo=35842,ho=35843,Bc=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,xo=37812,yo=37813,vo=37814,Mo=37815,bo=37816,So=37817,Eo=37818,wo=37819,To=37820,Ao=37821,br=36492,Co=36494,Ro=36495,ih=36283,Po=36284,Lo=36285,Io=36286;var Ls=2300,Is=2301,Sr=2302,Uo=2400,Do=2401,No=2402;var zc=3e3,qn=3001,sh=3200,rh=3201,kc=0,ah=1,Ge="",ye="srgb",_n="srgb-linear",Ia="display-p3",ir="display-p3-linear",Us="linear",ie="srgb",Ds="rec709",Ns="p3";var ni=7680;var Oo=519,oh=512,ch=513,lh=514,Hc=515,hh=516,uh=517,dh=518,fh=519,Fo=35044;var Bo="300 es",ta=1035,mn=2e3,Os=2001,on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=1234567,zi=Math.PI/180,Xi=180/Math.PI;function Li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Ua(i,t){return(i%t+t)%t}function ph(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mh(i,t,e){return i!==t?(e-i)/(t-i):0}function ki(i,t,e){return(1-e)*i+e*t}function gh(i,t,e,n){return ki(i,t,1-Math.exp(-e*n))}function _h(i,t=1){return t-Math.abs(Ua(i,t*2)-t)}function xh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mh(i,t){return i+Math.random()*(t-i)}function bh(i){return i*(.5-Math.random())}function Sh(i){i!==void 0&&(zo=i);let t=zo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eh(i){return i*zi}function wh(i){return i*Xi}function ea(i){return(i&i-1)===0&&i!==0}function Th(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ah(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var es={DEG2RAD:zi,RAD2DEG:Xi,generateUUID:Li,clamp:Se,euclideanModulo:Ua,mapLinear:ph,inverseLerp:mh,lerp:ki,damp:gh,pingpong:_h,smoothstep:xh,smootherstep:yh,randInt:vh,randFloat:Mh,randFloatSpread:bh,seededRandom:Sh,degToRad:Eh,radToDeg:wh,isPowerOfTwo:ea,ceilPowerOfTwo:Th,floorPowerOfTwo:Fs,setQuaternionFromProperEuler:Ah,normalize:Ce,denormalize:xi},zt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],v=s[1],x=s[4],E=s[7],P=s[2],T=s[5],C=s[8];return r[0]=o*_+a*v+c*P,r[3]=o*m+a*x+c*T,r[6]=o*d+a*E+c*C,r[1]=l*_+h*v+u*P,r[4]=l*m+h*x+u*T,r[7]=l*d+h*E+u*C,r[2]=p*_+f*v+g*P,r[5]=p*m+f*x+g*T,r[8]=p*d+f*E+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,f=l*r-o*c,g=e*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Er=new $t;function Vc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){let i=Bs("canvas");return i.style.display="block",i}var ko={};function Hi(i){i in ko||(ko[i]=!0,console.warn(i))}var Ho=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[_n]:{transfer:Us,primaries:Ds,toReference:i=>i,fromReference:i=>i},[ye]:{transfer:ie,primaries:Ds,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ir]:{transfer:Us,primaries:Ns,toReference:i=>i.applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(Ho)},[Ia]:{transfer:ie,primaries:Ns,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(Ho).convertLinearToSRGB()}},Rh=new Set([_n,ir]),te={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=os[t].toReference,s=os[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return os[i].primaries},getTransfer:function(i){return i===Ge?Us:os[i].transfer}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ii,zs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Bs("canvas")),ii.width=t.width,ii.height=t.height;let n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ph=0,ks=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Li(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tr(s[o].image)):r.push(Tr(s[o]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lh=0,je=class i extends on{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$e,s=$e,r=Ve,o=Gi,a=Ke,c=Ln,l=i.DEFAULT_ANISOTROPY,h=Ge){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Li(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qn?ye:Ge),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?qn:zc}set encoding(t){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qn?ye:Ge}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Lc;je.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,E=(f+1)/2,P=(d+1)/2,T=(h+p)/4,C=(u+_)/4,$=(g+m)/4;return x>E&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=$/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=$/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(p-h)/v,this.w=Math.acos((l+f+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},na=class extends on{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qn?ye:Ge),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hs=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ia=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==f||h!==g){let m=1-a,d=c*p+l*f+h*g+u*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),T=Math.atan2(P,d*v);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let E=a*v;if(c=c*m+p*E,l=l*m+f*E,h=h*m+g*E,u=u*m+_*E,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*p,t[e+1]=c*g+h*p+l*u-a*f,t[e+2]=l*g+h*f+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"YZX":this._x=p*h*u+l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u-p*f*g;break;case"XZY":this._x=p*h*u-l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Go.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ar.copy(this).projectOnVector(t),this.sub(Ar)}reflect(t){return this.sub(Ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ar=new O,Go=new Qe,Zn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),ls.subVectors(this.max,Ni),si.subVectors(t.a,Ni),ri.subVectors(t.b,Ni),ai.subVectors(t.c,Ni),bn.subVectors(ri,si),Sn.subVectors(ai,ri),Fn.subVectors(si,ai);let e=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-Fn.z,Fn.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,Fn.z,0,-Fn.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-Fn.y,Fn.x,0];return!Cr(e,si,ri,ai,ls)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,si,ri,ai,ls))?!1:(hs.crossVectors(bn,Sn),e=[hs.x,hs.y,hs.z],Cr(e,si,ri,ai,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ln=[new O,new O,new O,new O,new O,new O,new O,new O],qe=new O,cs=new Zn,si=new O,ri=new O,ai=new O,bn=new O,Sn=new O,Fn=new O,Ni=new O,ls=new O,hs=new O,Bn=new O;function Cr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bn.fromArray(i,r);let a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ih=new Zn,Oi=new O,Rr=new O,Ci=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ih.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);let e=Oi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(Rr)),this.expandByPoint(Oi.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new O,Pr=new O,us=new O,En=new O,Lr=new O,ds=new O,Ir=new O,Jn=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Pr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(us),a=En.dot(this.direction),c=-En.dot(us),l=En.lengthSq(),h=Math.abs(1-o*o),u,p,f,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(us,p),f}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){Lr.subVectors(e,t),ds.subVectors(n,t),Ir.crossVectors(Lr,ds);let o=this.direction.dot(Ir),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);let c=a*this.direction.dot(ds.crossVectors(En,ds));if(c<0)return null;let l=a*this.direction.dot(Lr.cross(En));if(l<0||c+l>o)return null;let h=-a*En.dot(Ir);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),o=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,f=c*u,g=l*h,_=l*u;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,f=c*u,g=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=p-_*u}else if(t.order==="XZY"){let p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uh,t,Dh)}lookAt(t,e,n){let s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),wn.crossVectors(n,Oe),wn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),wn.crossVectors(n,Oe)),wn.normalize(),fs.crossVectors(Oe,wn),s[0]=wn.x,s[4]=fs.x,s[8]=Oe.x,s[1]=wn.y,s[5]=fs.y,s[9]=Oe.y,s[2]=wn.z,s[6]=fs.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],x=n[7],E=n[11],P=n[15],T=s[0],C=s[4],$=s[8],M=s[12],w=s[1],H=s[5],F=s[9],J=s[13],R=s[2],U=s[6],V=s[10],q=s[14],L=s[3],D=s[7],Z=s[11],K=s[15];return r[0]=o*T+a*w+c*R+l*L,r[4]=o*C+a*H+c*U+l*D,r[8]=o*$+a*F+c*V+l*Z,r[12]=o*M+a*J+c*q+l*K,r[1]=h*T+u*w+p*R+f*L,r[5]=h*C+u*H+p*U+f*D,r[9]=h*$+u*F+p*V+f*Z,r[13]=h*M+u*J+p*q+f*K,r[2]=g*T+_*w+m*R+d*L,r[6]=g*C+_*H+m*U+d*D,r[10]=g*$+_*F+m*V+d*Z,r[14]=g*M+_*J+m*q+d*K,r[3]=v*T+x*w+E*R+P*L,r[7]=v*C+x*H+E*U+P*D,r[11]=v*$+x*F+E*V+P*Z,r[15]=v*M+x*J+E*q+P*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*f-n*c*f)+_*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=u*m*l-_*p*l+_*c*f-a*m*f-u*c*d+a*p*d,x=g*p*l-h*m*l-g*c*f+o*m*f+h*c*d-o*p*d,E=h*_*l-g*u*l+g*a*f-o*_*f-h*a*d+o*u*d,P=g*u*c-h*_*c-g*a*p+o*_*p+h*a*m-o*u*m,T=e*v+n*x+s*E+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=v*C,t[1]=(_*p*r-u*m*r-_*s*f+n*m*f+u*s*d-n*p*d)*C,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*C,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*f-n*c*f)*C,t[4]=x*C,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*d+e*p*d)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*C,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*f+e*c*f)*C,t[8]=E*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*d-e*u*d)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=P*C,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,f=r*h,g=r*u,_=o*h,m=o*u,d=a*u,v=c*l,x=c*h,E=c*u,P=n.x,T=n.y,C=n.z;return s[0]=(1-(_+d))*P,s[1]=(f+E)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(f-E)*T,s[5]=(1-(p+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*C,s[9]=(m-v)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=oi.set(s[0],s[1],s[2]).length(),o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let l=1/r,h=1/o,u=1/a;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),f,g;if(a===mn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Os)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,f=(n+s)*h,g,_;if(a===mn)g=(o+r)*u,_=-2*u;else if(a===Os)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},oi=new O,Ye=new de,Uh=new O(0,0,0),Dh=new O(1,1,1),wn=new O,fs=new O,Oe=new O,Wo=new de,Xo=new Qe,Vs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vs.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nh=0,qo=new O,ci=new Qe,un=new de,ps=new O,Fi=new O,Oh=new O,Fh=new Qe,Yo=new O(1,0,0),Zo=new O(0,1,0),Jo=new O(0,0,1),Bh={type:"added"},zh={type:"removed"},we=class i extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Vs,n=new Qe,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new $t}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis(Jo,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis(Jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Fi,ps,this.up):un.lookAt(ps,Fi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(un),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};we.DEFAULT_UP=new O(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new O,dn=new O,Ur=new O,fn=new O,li=new O,hi=new O,$o=new O,Dr=new O,Nr=new O,Or=new O,ms=!1,yi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),dn.subVectors(n,e),Ur.subVectors(t,e);let o=Ze.dot(Ze),a=Ze.dot(dn),c=Ze.dot(Ur),l=dn.dot(dn),h=dn.dot(Ur),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(t,e,n,s,r,o,a,c){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(o,fn.y),c.addScaledVector(a,fn.z),c)}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),dn.subVectors(t,e),Ze.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ze.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;li.subVectors(s,n),hi.subVectors(r,n),Dr.subVectors(t,n);let c=li.dot(Dr),l=hi.dot(Dr);if(c<=0&&l<=0)return e.copy(n);Nr.subVectors(t,s);let h=li.dot(Nr),u=hi.dot(Nr);if(h>=0&&u<=h)return e.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(li,o);Or.subVectors(t,r);let f=li.dot(Or),g=hi.dot(Or);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hi,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return $o.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector($o,a);let d=1/(m+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(li,o).addScaledVector(hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Fr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Ua(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fr(o,r,t+1/3),this.g=Fr(o,r,t),this.b=Fr(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=Gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return te.fromWorkingColorSpace(be.copy(this),t),Math.round(Se(be.r*255,0,255))*65536+Math.round(Se(be.g*255,0,255))*256+Math.round(Se(be.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ye){te.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(gs);let n=ki(Tn.h,gs.h,e),s=ki(Tn.s,gs.s,e),r=ki(Tn.l,gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Yt;Yt.NAMES=Gc;var kh=0,In=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=bi,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Un=class extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var he=new O,_s=new zt,oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}};var Gs=class extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Be=class extends oe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Hh=0,He=new de,Br=new we,ui=new O,Fe=new Zn,Bi=new Zn,_e=new O,De=class i extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?Ws:Gs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Fe.min,Bi.min),Fe.expandByPoint(_e),_e.addVectors(Fe.max,Bi.max),Fe.expandByPoint(_e)):(Fe.expandByPoint(Bi.min),Fe.expandByPoint(Bi.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_e.fromBufferAttribute(a,l),c&&(ui.fromBufferAttribute(t,l),_e.add(ui)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new O,h[w]=new O;let u=new O,p=new O,f=new O,g=new zt,_=new zt,m=new zt,d=new O,v=new O;function x(w,H,F){u.fromArray(s,w*3),p.fromArray(s,H*3),f.fromArray(s,F*3),g.fromArray(o,w*2),_.fromArray(o,H*2),m.fromArray(o,F*2),p.sub(u),f.sub(u),_.sub(g),m.sub(g);let J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(J),v.copy(f).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(J),l[w].add(d),l[H].add(d),l[F].add(d),h[w].add(v),h[H].add(v),h[F].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,H=E.length;w<H;++w){let F=E[w],J=F.start,R=F.count;for(let U=J,V=J+R;U<V;U+=3)x(n[U+0],n[U+1],n[U+2])}let P=new O,T=new O,C=new O,$=new O;function M(w){C.fromArray(r,w*3),$.copy(C);let H=l[w];P.copy(H),P.sub(C.multiplyScalar(C.dot(H))).normalize(),T.crossVectors($,H);let J=T.dot(h[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=J}for(let w=0,H=E.length;w<H;++w){let F=E[w],J=F.start,R=F.count;for(let U=J,V=J+R;U<V;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let d=0;d<h;d++)p[g++]=l[f++]}return new oe(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ko=new de,zn=new Jn,xs=new Ci,jo=new O,di=new O,fi=new O,pi=new O,zr=new O,ys=new O,vs=new zt,Ms=new zt,bs=new zt,Qo=new O,tc=new O,ec=new O,Ss=new O,Es=new O,ue=class extends we{constructor(t=new De,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(zr.fromBufferAttribute(u,t),o?ys.addScaledVector(zr,h):ys.addScaledVector(zr.sub(e),h))}e.add(ys)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),zn.copy(t.ray).recast(t.near),!(xs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(xs,jo)===null||zn.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Ko.copy(r).invert(),zn.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],d=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=v,P=x;E<P;E+=3){let T=a.getX(E),C=a.getX(E+1),$=a.getX(E+2);s=ws(this,d,t,n,l,h,u,T,C,$),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let v=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=ws(this,o,t,n,l,h,u,v,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],d=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=v,P=x;E<P;E+=3){let T=E,C=E+1,$=E+2;s=ws(this,d,t,n,l,h,u,T,C,$),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let v=m,x=m+1,E=m+2;s=ws(this,o,t,n,l,h,u,v,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vh(i,t,e,n,s,r,o,a){let c;if(t.side===Ee?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===an,a),c===null)return null;Es.copy(a),Es.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Es);return l<e.near||l>e.far?null:{distance:l,point:Es.clone(),object:i}}function ws(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,di),i.getVertexPosition(c,fi),i.getVertexPosition(l,pi);let h=Vh(i,t,e,n,di,fi,pi,Ss);if(h){s&&(vs.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,c),bs.fromBufferAttribute(s,l),h.uv=yi.getInterpolation(Ss,di,fi,pi,vs,Ms,bs,new zt)),r&&(vs.fromBufferAttribute(r,a),Ms.fromBufferAttribute(r,c),bs.fromBufferAttribute(r,l),h.uv1=yi.getInterpolation(Ss,di,fi,pi,vs,Ms,bs,new zt),h.uv2=h.uv1),o&&(Qo.fromBufferAttribute(o,a),tc.fromBufferAttribute(o,c),ec.fromBufferAttribute(o,l),h.normal=yi.getInterpolation(Ss,di,fi,pi,Qo,tc,ec,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};yi.getNormal(di,fi,pi,u.normal),h.face=u}return h}var Yi=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function g(_,m,d,v,x,E,P,T,C,$,M){let w=E/C,H=P/$,F=E/2,J=P/2,R=T/2,U=C+1,V=$+1,q=0,L=0,D=new O;for(let Z=0;Z<V;Z++){let K=Z*H-J;for(let ut=0;ut<U;ut++){let X=ut*w-F;D[_]=X*v,D[m]=K*x,D[d]=R,l.push(D.x,D.y,D.z),D[_]=0,D[m]=0,D[d]=T>0?1:-1,h.push(D.x,D.y,D.z),u.push(ut/C),u.push(1-Z/$),q+=1}}for(let Z=0;Z<$;Z++)for(let K=0;K<C;K++){let ut=p+K+U*Z,X=p+K+U*(Z+1),et=p+(K+1)+U*(Z+1),ft=p+(K+1)+U*Z;c.push(ut,X,ft),c.push(X,et,ft),L+=6}a.addGroup(f,L,M),f+=L,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ri(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=Ri(i[e]);for(let s in n)t[s]=n[s]}return t}function Gh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}var Wh={clone:Ri,merge:Re},Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xs=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mi=-90,gi=1,sa=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(mi,gi,t,e);s.layers=this.layers,this.add(s);let r=new Le(mi,gi,t,e);r.layers=this.layers,this.add(r);let o=new Le(mi,gi,t,e);o.layers=this.layers,this.add(o);let a=new Le(mi,gi,t,e);a.layers=this.layers,this.add(a);let c=new Le(mi,gi,t,e);c.layers=this.layers,this.add(c);let l=new Le(mi,gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ra=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qn?ye:Ge),this.texture=new qs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Rn});r.uniforms.tEquirect.value=e;let o=new ue(s,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Ve),new sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},kr=new O,Yh=new O,Zh=new $t,Je=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=kr.subVectors(n,e).cross(Yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zh.getNormalMatrix(t),s=this.coplanarPoint(kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new Ci,Ts=new O,Zi=class{constructor(t=new Je,e=new Je,n=new Je,s=new Je,r=new Je,o=new Je){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],f=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],x=s[14],E=s[15];if(n[0].setComponents(c-r,p-l,m-f,E-d).normalize(),n[1].setComponents(c+r,p+l,m+f,E+d).normalize(),n[2].setComponents(c+o,p+h,m+g,E+v).normalize(),n[3].setComponents(c-o,p-h,m-g,E-v).normalize(),n[4].setComponents(c-a,p-u,m-_,E-x).normalize(),e===mn)n[5].setComponents(c+a,p+u,m+_,E+x).normalize();else if(e===Os)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ts.x=s.normal.x>0?t.max.x:t.min.x,Ts.y=s.normal.y>0?t.max.y:t.min.y,Ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jh(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,p=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,p),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let p=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,p),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var aa=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,f=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let v=d*p-o;for(let x=0;x<l;x++){let E=x*u-r;g.push(E,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let x=v+l*d,E=v+l*(d+1),P=v+1+l*(d+1),T=v+1+l*d;f.push(x,E,T),f.push(E,P,T)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kh=`#ifdef USE_ALPHAHASH
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
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nu=`#ifdef USE_AOMAP
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
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
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
#endif`,ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lu=`#ifdef USE_IRIDESCENCE
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
#endif`,hu=`#ifdef USE_BUMPMAP
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mu=`vec3 transformedNormal = objectNormal;
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
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`
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
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
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
}`,Bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vu=`uniform bool receiveShadow;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
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
#endif`,Ju=`struct PhysicalMaterial {
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
}`,$u=`
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hd=`#ifdef USE_MORPHNORMALS
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
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
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
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dd=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
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
}`,nf=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,rf=`#define DISTANCE
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
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
}`,lf=`uniform vec3 diffuse;
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
}`,hf=`#include <common>
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#define LAMBERT
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define MATCAP
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
}`,mf=`#define MATCAP
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
}`,gf=`#define NORMAL
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
}`,_f=`#define NORMAL
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
}`,xf=`#define PHONG
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
}`,yf=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,Mf=`#define STANDARD
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
}`,bf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,Ef=`uniform float size;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Af=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:$h,alphahash_pars_fragment:Kh,alphamap_fragment:jh,alphamap_pars_fragment:Qh,alphatest_fragment:tu,alphatest_pars_fragment:eu,aomap_fragment:nu,aomap_pars_fragment:iu,batching_pars_vertex:su,batching_vertex:ru,begin_vertex:au,beginnormal_vertex:ou,bsdfs:cu,iridescence_fragment:lu,bumpmap_pars_fragment:hu,clipping_planes_fragment:uu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:fu,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:gu,color_pars_vertex:_u,color_vertex:xu,common:yu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:Mu,displacementmap_pars_vertex:bu,displacementmap_vertex:Su,emissivemap_fragment:Eu,emissivemap_pars_fragment:wu,colorspace_fragment:Tu,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Pu,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Gu,envmap_vertex:Iu,fog_vertex:Uu,fog_pars_vertex:Du,fog_fragment:Nu,fog_pars_fragment:Ou,gradientmap_pars_fragment:Fu,lightmap_fragment:Bu,lightmap_pars_fragment:zu,lights_lambert_fragment:ku,lights_lambert_pars_fragment:Hu,lights_pars_begin:Vu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:qu,lights_phong_pars_fragment:Yu,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ju,lights_fragment_begin:$u,lights_fragment_maps:Ku,lights_fragment_end:ju,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:sd,map_particle_fragment:rd,map_particle_pars_fragment:ad,metalnessmap_fragment:od,metalnessmap_pars_fragment:cd,morphcolor_vertex:ld,morphnormal_vertex:hd,morphtarget_pars_vertex:ud,morphtarget_vertex:dd,normal_fragment_begin:fd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:_d,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:Md,iridescence_pars_fragment:bd,opaque_fragment:Sd,packing:Ed,premultiplied_alpha_fragment:wd,project_vertex:Td,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Id,shadowmap_vertex:Ud,shadowmask_pars_fragment:Dd,skinbase_vertex:Nd,skinning_pars_vertex:Od,skinning_vertex:Fd,skinnormal_vertex:Bd,specularmap_fragment:zd,specularmap_pars_fragment:kd,tonemapping_fragment:Hd,tonemapping_pars_fragment:Vd,transmission_fragment:Gd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:qd,uv_vertex:Yd,worldpos_vertex:Zd,background_vert:Jd,background_frag:$d,backgroundCube_vert:Kd,backgroundCube_frag:jd,cube_vert:Qd,cube_frag:tf,depth_vert:ef,depth_frag:nf,distanceRGBA_vert:sf,distanceRGBA_frag:rf,equirect_vert:af,equirect_frag:of,linedashed_vert:cf,linedashed_frag:lf,meshbasic_vert:hf,meshbasic_frag:uf,meshlambert_vert:df,meshlambert_frag:ff,meshmatcap_vert:pf,meshmatcap_frag:mf,meshnormal_vert:gf,meshnormal_frag:_f,meshphong_vert:xf,meshphong_frag:yf,meshphysical_vert:vf,meshphysical_frag:Mf,meshtoon_vert:bf,meshtoon_frag:Sf,points_vert:Ef,points_frag:wf,shadow_vert:Tf,shadow_frag:Af,sprite_vert:Cf,sprite_frag:Rf},dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},rn={basic:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Re([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Re([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Re([dt.points,dt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Re([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Re([dt.common,dt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Re([dt.sprite,dt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Re([dt.common,dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Re([dt.lights,dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};rn.physical={uniforms:Re([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var As={r:0,b:0,g:0};function Pf(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,h,u=null,p=0,f=null;function g(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===nr)?(h===void 0&&(h=new ue(new Yi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ri(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=te.getTransfer(x.colorSpace)!==ie,(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ue(new aa(2,2),new yn({name:"BackgroundMaterial",uniforms:Ri(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(As,Wc(i)),n.buffers.color.setClear(As.r,As.g,As.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Lf(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(R,U,V,q,L){let D=!1;if(o){let Z=_(q,V,U);l!==Z&&(l=Z,f(l.object)),D=d(R,q,V,L),D&&v(R,q,V,L)}else{let Z=U.wireframe===!0;(l.geometry!==q.id||l.program!==V.id||l.wireframe!==Z)&&(l.geometry=q.id,l.program=V.id,l.wireframe=Z,D=!0)}L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,$(R,U,V,q),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,U,V){let q=V.wireframe===!0,L=a[R.id];L===void 0&&(L={},a[R.id]=L);let D=L[U.id];D===void 0&&(D={},L[U.id]=D);let Z=D[q];return Z===void 0&&(Z=m(p()),D[q]=Z),Z}function m(R){let U=[],V=[],q=[];for(let L=0;L<s;L++)U[L]=0,V[L]=0,q[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:q,object:R,attributes:{},index:null}}function d(R,U,V,q){let L=l.attributes,D=U.attributes,Z=0,K=V.getAttributes();for(let ut in K)if(K[ut].location>=0){let et=L[ut],ft=D[ut];if(ft===void 0&&(ut==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),ut==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;Z++}return l.attributesNum!==Z||l.index!==q}function v(R,U,V,q){let L={},D=U.attributes,Z=0,K=V.getAttributes();for(let ut in K)if(K[ut].location>=0){let et=D[ut];et===void 0&&(ut==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),ut==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));let ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),L[ut]=ft,Z++}l.attributes=L,l.attributesNum=Z,l.index=q}function x(){let R=l.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function E(R){P(R,0)}function P(R,U){let V=l.newAttributes,q=l.enabledAttributes,L=l.attributeDivisors;V[R]=1,q[R]===0&&(i.enableVertexAttribArray(R),q[R]=1),L[R]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),L[R]=U)}function T(){let R=l.newAttributes,U=l.enabledAttributes;for(let V=0,q=U.length;V<q;V++)U[V]!==R[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function C(R,U,V,q,L,D,Z){Z===!0?i.vertexAttribIPointer(R,U,V,L,D):i.vertexAttribPointer(R,U,V,q,L,D)}function $(R,U,V,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let L=q.attributes,D=V.getAttributes(),Z=U.defaultAttributeValues;for(let K in D){let ut=D[K];if(ut.location>=0){let X=L[K];if(X===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){let et=X.normalized,ft=X.itemSize,bt=e.get(X);if(bt===void 0)continue;let St=bt.buffer,Nt=bt.type,Lt=bt.bytesPerElement,Et=n.isWebGL2===!0&&(Nt===i.INT||Nt===i.UNSIGNED_INT||X.gpuType===Ic);if(X.isInterleavedBufferAttribute){let Vt=X.data,z=Vt.stride,Kt=X.offset;if(Vt.isInstancedInterleavedBuffer){for(let _t=0;_t<ut.locationSize;_t++)P(ut.location+_t,Vt.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let _t=0;_t<ut.locationSize;_t++)E(ut.location+_t);i.bindBuffer(i.ARRAY_BUFFER,St);for(let _t=0;_t<ut.locationSize;_t++)C(ut.location+_t,ft/ut.locationSize,Nt,et,z*Lt,(Kt+ft/ut.locationSize*_t)*Lt,Et)}else{if(X.isInstancedBufferAttribute){for(let Vt=0;Vt<ut.locationSize;Vt++)P(ut.location+Vt,X.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Vt=0;Vt<ut.locationSize;Vt++)E(ut.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Vt=0;Vt<ut.locationSize;Vt++)C(ut.location+Vt,ft/ut.locationSize,Nt,et,ft*Lt,ft/ut.locationSize*Vt*Lt,Et)}}else if(Z!==void 0){let et=Z[K];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(ut.location,et);break;case 3:i.vertexAttrib3fv(ut.location,et);break;case 4:i.vertexAttrib4fv(ut.location,et);break;default:i.vertexAttrib1fv(ut.location,et)}}}}T()}function M(){F();for(let R in a){let U=a[R];for(let V in U){let q=U[V];for(let L in q)g(q[L].object),delete q[L];delete U[V]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;let U=a[R.id];for(let V in U){let q=U[V];for(let L in q)g(q[L].object),delete q[L];delete U[V]}delete a[R.id]}function H(R){for(let U in a){let V=a[U];if(V[R.id]===void 0)continue;let q=V[R.id];for(let L in q)g(q[L].object),delete q[L];delete V[R.id]}}function F(){J(),h=!0,l!==c&&(l=c,f(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:E,disableUnusedAttributes:T}}function If(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,p){if(p===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,p),e.update(u,r,p)}function l(h,u,p){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Uf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,E=o||t.has("OES_texture_float"),P=x&&E,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:T}}function Df(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Je,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,x=v*4,E=d.clippingState||null;c.value=E,E=h(g,p,x,f);for(let P=0;P!==x;++P)E[P]=e[P];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=f+_*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,E=f;x!==_;++x,E+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Nf(i){let t=new WeakMap;function e(o,a){return a===$r?o.mapping=wi:a===Kr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$r||a===Kr)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ra(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ys=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vi=4,nc=[.125,.215,.35,.446,.526,.582],Gn=20,Hr=new Ys,ic=new Yt,Vr=null,Gr=0,Wr=0,Hn=(1+Math.sqrt(5))/2,_i=1/Hn,sc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Hn,_i),new O(0,Hn,-_i),new O(_i,0,Hn),new O(-_i,0,Hn),new O(Hn,_i,0),new O(-Hn,_i,0)],Zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Vr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vr,Gr,Wr),t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Wi,format:Ke,colorSpace:_n,depthBuffer:!1},s=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Of(r)),this._blurMaterial=Ff(r,t,e)}return s}_compileMaterial(t){let e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(ic),h.toneMapping=Pn,h.autoClear=!1;let f=new Un({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new ue(new Yi,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ic),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;Cs(s,v*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Hr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sc[(s-1)%sc.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ue(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);let d=[],v=0;for(let C=0;C<Gn;++C){let $=C/_,M=Math.exp(-$*$/2);d.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;let E=this._sizeLods[s],P=3*E*(s>x-vi?s-x+vi:0),T=4*(this._cubeSize-E);Cs(e,P,T,3*E,2*E),c.setRenderTarget(e),c.render(u,Hr)}};function Of(i){let t=[],e=[],n=[],s=i,r=i-vi+1+nc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-vi?c=nc[o-i+vi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),E=new Float32Array(d*g*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,$=T>2?0:-1,M=[C,$,0,C+2/3,$,0,C+2/3,$+1,0,C,$,0,C+2/3,$+1,0,C,$+1,0];v.set(M,_*g*T),x.set(p,m*g*T);let w=[T,T,T,T,T,T];E.set(w,d*g*T)}let P=new De;P.setAttribute("position",new oe(v,_)),P.setAttribute("uv",new oe(x,m)),P.setAttribute("faceIndex",new oe(E,d)),t.push(P),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ff(i,t,e){let n=new Float32Array(Gn),s=new O(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ac(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function oc(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function Bf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===$r||c===Kr,h=c===wi||c===Ti;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Zs(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Zs(i));let p=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kf(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let p=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let x=0,E=v.length;x<E;x+=3){let P=v[x+0],T=v[x+1],C=v[x+2];p.push(P,T,T,C,C,P)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,E=v.length/3-1;x<E;x+=3){let P=x+0,T=x+1,C=x+2;p.push(P,T,T,C,C,P)}}else return;let m=new(Vc(p)?Ws:Gs)(p,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Hf(i,t,e,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,f*c,_),e.update(g,r,_)}function p(f,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(f[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Vf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gf(i,t){return i[0]-t[0]}function Wf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Xf(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let p=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let R=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],$=0;v===!0&&($=1),x===!0&&($=2),E===!0&&($=3);let M=h.attributes.position.count*$,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let H=new Float32Array(M*w*4*g),F=new Hs(H,M,w,g);F.type=Cn,F.needsUpdate=!0;let J=$*4;for(let U=0;U<g;U++){let V=P[U],q=T[U],L=C[U],D=M*w*4*U;for(let Z=0;Z<V.count;Z++){let K=Z*J;v===!0&&(o.fromBufferAttribute(V,Z),H[D+K+0]=o.x,H[D+K+1]=o.y,H[D+K+2]=o.z,H[D+K+3]=0),x===!0&&(o.fromBufferAttribute(q,Z),H[D+K+4]=o.x,H[D+K+5]=o.y,H[D+K+6]=o.z,H[D+K+7]=0),E===!0&&(o.fromBufferAttribute(L,Z),H[D+K+8]=o.x,H[D+K+9]=o.y,H[D+K+10]=o.z,H[D+K+11]=L.itemSize===4?o.w:1)}}_={count:g,texture:F,size:new zt(M,w)},r.set(h,_),h.addEventListener("dispose",R)}let m=0;for(let v=0;v<p.length;v++)m+=p[v];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=p===void 0?0:p.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let E=g[x];E[0]=x,E[1]=p[x]}g.sort(Wf);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Gf);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let E=a[x],P=E[0],T=E[1];P!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[P]&&h.setAttribute("morphTarget"+x,_[P]),m&&h.getAttribute("morphNormal"+x)!==m[P]&&h.setAttribute("morphNormal"+x,m[P]),s[x]=T,d+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function qf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Js=class extends je{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xn&&(n=An),n===void 0&&h===Ai&&(n=Wn),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pe,this.minFilter=c!==void 0?c:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qc=new je,Yc=new Js(1,1);Yc.compareFunction=Hc;var Zc=new Hs,Jc=new ia,$c=new qs,cc=[],lc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Ii(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sr(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function Kf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),pe(e,n)}}function jf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),pe(e,n)}}function Qf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),pe(e,n)}}function tp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function sp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yc:qc;e.setTexture2D(t||r,s)}function lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jc,s)}function hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$c,s)}function up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zc,s)}function dp(i){switch(i){case 5126:return Yf;case 35664:return Zf;case 35665:return Jf;case 35666:return $f;case 35674:return Kf;case 35675:return jf;case 35676:return Qf;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function fp(i,t){i.uniform1fv(this.addr,t)}function pp(i,t){let e=Ii(t,this.size,2);i.uniform2fv(this.addr,e)}function mp(i,t){let e=Ii(t,this.size,3);i.uniform3fv(this.addr,e)}function gp(i,t){let e=Ii(t,this.size,4);i.uniform4fv(this.addr,e)}function _p(i,t){let e=Ii(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xp(i,t){let e=Ii(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){let e=Ii(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vp(i,t){i.uniform1iv(this.addr,t)}function Mp(i,t){i.uniform2iv(this.addr,t)}function bp(i,t){i.uniform3iv(this.addr,t)}function Sp(i,t){i.uniform4iv(this.addr,t)}function Ep(i,t){i.uniform1uiv(this.addr,t)}function wp(i,t){i.uniform2uiv(this.addr,t)}function Tp(i,t){i.uniform3uiv(this.addr,t)}function Ap(i,t){i.uniform4uiv(this.addr,t)}function Cp(i,t,e){let n=this.cache,s=t.length,r=sr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qc,r[o])}function Rp(i,t,e){let n=this.cache,s=t.length,r=sr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jc,r[o])}function Pp(i,t,e){let n=this.cache,s=t.length,r=sr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$c,r[o])}function Lp(i,t,e){let n=this.cache,s=t.length,r=sr(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zc,r[o])}function Ip(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return vp;case 35667:case 35671:return Mp;case 35668:case 35672:return bp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return wp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}var oa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dp(e.type)}},ca=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ip(e.type)}},la=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xr=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function Up(i,t,e){let n=i.name,s=n.length;for(Xr.lastIndex=0;;){let r=Xr.exec(n),o=Xr.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fc(e,l===void 0?new oa(a,i,t):new ca(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new la(a),fc(e,u)),e=u}}}var Ei=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Up(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function pc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dp=37297,Np=0;function Op(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Fp(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===Ns&&e===Ds?n="LinearDisplayP3ToLinearSRGB":t===Ds&&e===Ns&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case ir:return[n,"LinearTransferOETF"];case ye:case Ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Op(i.getShaderSource(t),o)}else return s}function Bp(i,t){let e=Fp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zp(i,t){let e;switch(t){case Gl:e="Linear";break;case Wl:e="Reinhard";break;case Xl:e="OptimizedCineon";break;case ql:e="ACESFilmic";break;case Zl:e="AgX";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mi).join(`
`)}function Vp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mi(i){return i!==""}function gc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(i){return i.replace(Wp,qp)}var Xp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qp(i,t){let e=qt[t];if(e===void 0){let n=Xp.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}var Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(Yp,Zp)}function Zp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ti:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ti&&(t="ENVMAP_MODE_REFRACTION"),t}function jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Hl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Jp(e),l=$p(e),h=Kp(e),u=jp(e),p=Qp(e),f=e.isWebGL2?"":kp(e),g=Hp(e),_=Vp(r),m=s.createProgram(),d,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mi).join(`
`),d.length>0&&(d+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mi).join(`
`),v.length>0&&(v+=`
`)):(d=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),v=[f,yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Bp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mi).join(`
`)),o=ha(o),o=gc(o,e),o=_c(o,e),a=ha(a),a=gc(a,e),a=_c(a,e),o=xc(o),a=xc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=x+d+o,P=x+v+a,T=pc(s,s.VERTEX_SHADER,E),C=pc(s,s.FRAGMENT_SHADER,P);s.attachShader(m,T),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function $(F){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(C).trim(),V=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,C);else{let L=mc(s,T,"vertex"),D=mc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+L+`
`+D)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(R===""||U==="")&&(q=!1);q&&(F.diagnostics={runnable:V,programLog:J,vertexShader:{log:R,prefix:d},fragmentShader:{log:U,prefix:v}})}s.deleteShader(T),s.deleteShader(C),M=new Ei(s,m),w=Gp(s,m)}let M;this.getUniforms=function(){return M===void 0&&$(this),M};let w;this.getAttributes=function(){return w===void 0&&$(this),w};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,Dp)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=C,this}var em=0,ua=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new da(t),e.set(t,n)),n}},da=class{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}};function nm(i,t,e,n,s,r,o){let a=new qi,c=new ua,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,H,F,J){let R=F.fog,U=J.geometry,V=M.isMeshStandardMaterial?F.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),L=q&&q.mapping===nr?q.image.height:null,D=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,K=Z!==void 0?Z.length:0,ut=0;U.morphAttributes.position!==void 0&&(ut=1),U.morphAttributes.normal!==void 0&&(ut=2),U.morphAttributes.color!==void 0&&(ut=3);let X,et,ft,bt;if(D){let Te=rn[D];X=Te.vertexShader,et=Te.fragmentShader}else X=M.vertexShader,et=M.fragmentShader,c.update(M),ft=c.getVertexShaderID(M),bt=c.getFragmentShaderID(M);let St=i.getRenderTarget(),Nt=J.isInstancedMesh===!0,Lt=J.isBatchedMesh===!0,Et=!!M.map,Vt=!!M.matcap,z=!!q,Kt=!!M.aoMap,_t=!!M.lightMap,Tt=!!M.bumpMap,yt=!!M.normalMap,It=!!M.displacementMap,mt=!!M.emissiveMap,S=!!M.metalnessMap,y=!!M.roughnessMap,k=M.anisotropy>0,it=M.clearcoat>0,nt=M.iridescence>0,st=M.sheen>0,vt=M.transmission>0,ot=k&&!!M.anisotropyMap,pt=it&&!!M.clearcoatMap,gt=it&&!!M.clearcoatNormalMap,Ct=it&&!!M.clearcoatRoughnessMap,Q=nt&&!!M.iridescenceMap,Xt=nt&&!!M.iridescenceThicknessMap,A=st&&!!M.sheenColorMap,tt=st&&!!M.sheenRoughnessMap,ht=!!M.specularMap,rt=!!M.specularColorMap,wt=!!M.specularIntensityMap,kt=vt&&!!M.transmissionMap,Gt=vt&&!!M.thicknessMap,Ut=!!M.gradientMap,at=!!M.alphaMap,I=M.alphaTest>0,ct=!!M.alphaHash,lt=!!M.extensions,Dt=!!U.attributes.uv1,At=!!U.attributes.uv2,jt=!!U.attributes.uv3,Qt=Pn;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Qt=i.toneMapping),{isWebGL2:h,shaderID:D,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:et,defines:M.defines,customVertexShaderID:ft,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Lt,instancing:Nt,instancingColor:Nt&&J.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:_n,map:Et,matcap:Vt,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:L,aoMap:Kt,lightMap:_t,bumpMap:Tt,normalMap:yt,displacementMap:p&&It,emissiveMap:mt,normalMapObjectSpace:yt&&M.normalMapType===ah,normalMapTangentSpace:yt&&M.normalMapType===kc,metalnessMap:S,roughnessMap:y,anisotropy:k,anisotropyMap:ot,clearcoat:it,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ct,iridescence:nt,iridescenceMap:Q,iridescenceThicknessMap:Xt,sheen:st,sheenColorMap:A,sheenRoughnessMap:tt,specularMap:ht,specularColorMap:rt,specularIntensityMap:wt,transmission:vt,transmissionMap:kt,thicknessMap:Gt,gradientMap:Ut,opaque:M.transparent===!1&&M.blending===bi,alphaMap:at,alphaTest:I,alphaHash:ct,combine:M.combine,mapUv:Et&&_(M.map.channel),aoMapUv:Kt&&_(M.aoMap.channel),lightMapUv:_t&&_(M.lightMap.channel),bumpMapUv:Tt&&_(M.bumpMap.channel),normalMapUv:yt&&_(M.normalMap.channel),displacementMapUv:It&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:ot&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:A&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&_(M.sheenRoughnessMap.channel),specularMapUv:ht&&_(M.specularMap.channel),specularColorMapUv:rt&&_(M.specularColorMap.channel),specularIntensityMapUv:wt&&_(M.specularIntensityMap.channel),transmissionMapUv:kt&&_(M.transmissionMap.channel),thicknessMapUv:Gt&&_(M.thicknessMap.channel),alphaMapUv:at&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(yt||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:At,vertexUv3s:jt,pointsUvs:J.isPoints===!0&&!!U.attributes.uv&&(Et||at),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ie,flipSided:M.side===Ee,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:lt&&M.extensions.derivatives===!0,extensionFragDepth:lt&&M.extensions.fragDepth===!0,extensionDrawBuffers:lt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let H in M.defines)w.push(H),w.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(v(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){let w=g[M.type],H;if(w){let F=rn[w];H=Wh.clone(F.uniforms)}else H=M.uniforms;return H}function P(M,w){let H;for(let F=0,J=l.length;F<J;F++){let R=l[F];if(R.cacheKey===w){H=R,++H.usedTimes;break}}return H===void 0&&(H=new tm(i,w,M,r),l.push(H)),H}function T(M){if(--M.usedTimes===0){let w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function $(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:$}}function im(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,f,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,p,f,g,_,m){let d=o(u,p,f,g,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(u,p,f,g,_,m){let d=o(u,p,f,g,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||sm),n.length>1&&n.sort(p||vc),s.length>1&&s.sort(p||vc)}function h(){for(let u=t,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function rm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Mc,i.set(n,[o])):s>=r.length?(o=new Mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function am(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cm=0;function lm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hm(i,t){let e=new am,n=om(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new de,a=new de;function c(h,u){let p=0,f=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let _=0,m=0,d=0,v=0,x=0,E=0,P=0,T=0,C=0,$=0,M=0;h.sort(lm);let w=u===!0?Math.PI:1;for(let F=0,J=h.length;F<J;F++){let R=h[F],U=R.color,V=R.intensity,q=R.distance,L=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=U.r*V*w,f+=U.g*V*w,g+=U.b*V*w;else if(R.isLightProbe){for(let D=0;D<9;D++)s.probe[D].addScaledVector(R.sh.coefficients[D],V);M++}else if(R.isDirectionalLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.directionalShadow[_]=K,s.directionalShadowMap[_]=L,s.directionalShadowMatrix[_]=R.shadow.matrix,E++}s.directional[_]=D,_++}else if(R.isSpotLight){let D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(U).multiplyScalar(V*w),D.distance=q,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,s.spot[d]=D;let Z=R.shadow;if(R.map&&(s.spotLightMap[C]=R.map,C++,Z.updateMatrices(R),R.castShadow&&$++),s.spotLightMatrix[d]=Z.matrix,R.castShadow){let K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.spotShadow[d]=K,s.spotShadowMap[d]=L,T++}d++}else if(R.isRectAreaLight){let D=e.get(R);D.color.copy(U).multiplyScalar(V),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),s.rectArea[v]=D,v++}else if(R.isPointLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity*w),D.distance=R.distance,D.decay=R.decay,R.castShadow){let Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,s.pointShadow[m]=K,s.pointShadowMap[m]=L,s.pointShadowMatrix[m]=R.shadow.matrix,P++}s.point[m]=D,m++}else if(R.isHemisphereLight){let D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(V*w),D.groundColor.copy(R.groundColor).multiplyScalar(V*w),s.hemi[x]=D,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=g;let H=s.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==d||H.rectAreaLength!==v||H.hemiLength!==x||H.numDirectionalShadows!==E||H.numPointShadows!==P||H.numSpotShadows!==T||H.numSpotMaps!==C||H.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=T+C-$,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=M,H.directionalLength=_,H.pointLength=m,H.spotLength=d,H.rectAreaLength=v,H.hemiLength=x,H.numDirectionalShadows=E,H.numPointShadows=P,H.numSpotShadows=T,H.numSpotMaps=C,H.numLightProbes=M,s.version=cm++)}function l(h,u){let p=0,f=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let E=h[v];if(E.isDirectionalLight){let P=s.directional[p];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),p++}else if(E.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(E.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let P=s.point[f];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(d),f++}else if(E.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function bc(i,t){let e=new hm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function um(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new bc(i,t),e.set(r,[c])):o>=a.length?(c=new bc(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var fa=class extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pa=class extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
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
}`;function pm(i,t,e){let n=new Zi,s=new zt,r=new zt,o=new xe,a=new fa({depthPacking:rh}),c=new pa,l={},h=e.maxTextureSize,u={[an]:Ee,[Ee]:an,[Ie]:Ie},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:dm,fragmentShader:fm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ue(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let d=this.type;this.render=function(T,C,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Rn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let J=d!==pn&&this.type===pn,R=d===pn&&this.type!==pn;for(let U=0,V=T.length;U<V;U++){let q=T[U],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let D=L.getFrameExtents();if(s.multiply(D),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/D.x),s.x=r.x*D.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/D.y),s.y=r.y*D.y,L.mapSize.y=r.y)),L.map===null||J===!0||R===!0){let K=this.type!==pn?{minFilter:Pe,magFilter:Pe}:{};L.map!==null&&L.map.dispose(),L.map=new xn(s.x,s.y,K),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let Z=L.getViewportCount();for(let K=0;K<Z;K++){let ut=L.getViewport(K);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),F.viewport(o),L.updateMatrices(q,K),n=L.getFrustum(),E(C,$,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===pn&&v(L,$),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,H)};function v(T,C){let $=t.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,$,p,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,$,f,_,null)}function x(T,C,$,M){let w=null,H=$.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)w=H;else if(w=$.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=w.uuid,J=C.uuid,R=l[F];R===void 0&&(R={},l[F]=R);let U=R[J];U===void 0&&(U=w.clone(),R[J]=U,C.addEventListener("dispose",P)),w=U}if(w.visible=C.visible,w.wireframe=C.wireframe,M===pn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=i.properties.get(w);F.light=$}return w}function E(T,C,$,M,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld);let J=t.update(T),R=T.material;if(Array.isArray(R)){let U=J.groups;for(let V=0,q=U.length;V<q;V++){let L=U[V],D=R[L.materialIndex];if(D&&D.visible){let Z=x(T,D,M,w);T.onBeforeShadow(i,T,C,$,J,Z,L),i.renderBufferDirect($,null,J,Z,T,L),T.onAfterShadow(i,T,C,$,J,Z,L)}}}else if(R.visible){let U=x(T,R,M,w);T.onBeforeShadow(i,T,C,$,J,U,null),i.renderBufferDirect($,null,J,U,T,null),T.onAfterShadow(i,T,C,$,J,U,null)}}let F=T.children;for(let J=0,R=F.length;J<R;J++)E(F[J],C,$,M,w)}function P(T){T.target.removeEventListener("dispose",P);for(let $ in l){let M=l[$],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function mm(i,t,e){let n=e.isWebGL2;function s(){let I=!1,ct=new xe,lt=null,Dt=new xe(0,0,0,0);return{setMask:function(At){lt!==At&&!I&&(i.colorMask(At,At,At,At),lt=At)},setLocked:function(At){I=At},setClear:function(At,jt,Qt,me,Te){Te===!0&&(At*=me,jt*=me,Qt*=me),ct.set(At,jt,Qt,me),Dt.equals(ct)===!1&&(i.clearColor(At,jt,Qt,me),Dt.copy(ct))},reset:function(){I=!1,lt=null,Dt.set(-1,0,0,0)}}}function r(){let I=!1,ct=null,lt=null,Dt=null;return{setTest:function(At){At?Lt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(At){ct!==At&&!I&&(i.depthMask(At),ct=At)},setFunc:function(At){if(lt!==At){switch(At){case Dl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Yn:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=At}},setLocked:function(At){I=At},setClear:function(At){Dt!==At&&(i.clearDepth(At),Dt=At)},reset:function(){I=!1,ct=null,lt=null,Dt=null}}}function o(){let I=!1,ct=null,lt=null,Dt=null,At=null,jt=null,Qt=null,me=null,Te=null;return{setTest:function(ee){I||(ee?Lt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!I&&(i.stencilMask(ee),ct=ee)},setFunc:function(ee,Ae,nn){(lt!==ee||Dt!==Ae||At!==nn)&&(i.stencilFunc(ee,Ae,nn),lt=ee,Dt=Ae,At=nn)},setOp:function(ee,Ae,nn){(jt!==ee||Qt!==Ae||me!==nn)&&(i.stencilOp(ee,Ae,nn),jt=ee,Qt=Ae,me=nn)},setLocked:function(ee){I=ee},setClear:function(ee){Te!==ee&&(i.clearStencil(ee),Te=ee)},reset:function(){I=!1,ct=null,lt=null,Dt=null,At=null,jt=null,Qt=null,me=null,Te=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,p={},f={},g=new WeakMap,_=[],m=null,d=!1,v=null,x=null,E=null,P=null,T=null,C=null,$=null,M=new Yt(0,0,0),w=0,H=!1,F=null,J=null,R=null,U=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,D=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Z)[1]),L=D>=1):Z.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),L=D>=2);let K=null,ut={},X=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),ft=new xe().fromArray(X),bt=new xe().fromArray(et);function St(I,ct,lt,Dt){let At=new Uint8Array(4),jt=i.createTexture();i.bindTexture(I,jt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<lt;Qt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ct,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ct+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return jt}let Nt={};Nt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(i.DEPTH_TEST),c.setFunc(Yn),mt(!1),S(to),Lt(i.CULL_FACE),yt(Rn);function Lt(I){p[I]!==!0&&(i.enable(I),p[I]=!0)}function Et(I){p[I]!==!1&&(i.disable(I),p[I]=!1)}function Vt(I,ct){return f[I]!==ct?(i.bindFramebuffer(I,ct),f[I]=ct,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct)),!0):!1}function z(I,ct){let lt=_,Dt=!1;if(I)if(lt=g.get(ct),lt===void 0&&(lt=[],g.set(ct,lt)),I.isWebGLMultipleRenderTargets){let At=I.texture;if(lt.length!==At.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,Qt=At.length;jt<Qt;jt++)lt[jt]=i.COLOR_ATTACHMENT0+jt;lt.length=At.length,Dt=!0}}else lt[0]!==i.COLOR_ATTACHMENT0&&(lt[0]=i.COLOR_ATTACHMENT0,Dt=!0);else lt[0]!==i.BACK&&(lt[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Kt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let _t={[Vn]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};if(n)_t[so]=i.MIN,_t[ro]=i.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(_t[so]=I.MIN_EXT,_t[ro]=I.MAX_EXT)}let Tt={[Ml]:i.ZERO,[bl]:i.ONE,[Sl]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[Rl]:i.SRC_ALPHA_SATURATE,[Al]:i.DST_COLOR,[wl]:i.DST_ALPHA,[El]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[Cl]:i.ONE_MINUS_DST_COLOR,[Tl]:i.ONE_MINUS_DST_ALPHA,[Pl]:i.CONSTANT_COLOR,[Ll]:i.ONE_MINUS_CONSTANT_COLOR,[Il]:i.CONSTANT_ALPHA,[Ul]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(I,ct,lt,Dt,At,jt,Qt,me,Te,ee){if(I===Rn){d===!0&&(Et(i.BLEND),d=!1);return}if(d===!1&&(Lt(i.BLEND),d=!0),I!==xl){if(I!==v||ee!==H){if((x!==Vn||T!==Vn)&&(i.blendEquation(i.FUNC_ADD),x=Vn,T=Vn),ee)switch(I){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,P=null,C=null,$=null,M.set(0,0,0),w=0,v=I,H=ee}return}At=At||ct,jt=jt||lt,Qt=Qt||Dt,(ct!==x||At!==T)&&(i.blendEquationSeparate(_t[ct],_t[At]),x=ct,T=At),(lt!==E||Dt!==P||jt!==C||Qt!==$)&&(i.blendFuncSeparate(Tt[lt],Tt[Dt],Tt[jt],Tt[Qt]),E=lt,P=Dt,C=jt,$=Qt),(me.equals(M)===!1||Te!==w)&&(i.blendColor(me.r,me.g,me.b,Te),M.copy(me),w=Te),v=I,H=!1}function It(I,ct){I.side===Ie?Et(i.CULL_FACE):Lt(i.CULL_FACE);let lt=I.side===Ee;ct&&(lt=!lt),mt(lt),I.blending===bi&&I.transparent===!1?yt(Rn):yt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let Dt=I.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),k(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(I){F!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),F=I)}function S(I){I!==ml?(Lt(i.CULL_FACE),I!==J&&(I===to?i.cullFace(i.BACK):I===gl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),J=I}function y(I){I!==R&&(L&&i.lineWidth(I),R=I)}function k(I,ct,lt){I?(Lt(i.POLYGON_OFFSET_FILL),(U!==ct||V!==lt)&&(i.polygonOffset(ct,lt),U=ct,V=lt)):Et(i.POLYGON_OFFSET_FILL)}function it(I){I?Lt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function nt(I){I===void 0&&(I=i.TEXTURE0+q-1),K!==I&&(i.activeTexture(I),K=I)}function st(I,ct,lt){lt===void 0&&(K===null?lt=i.TEXTURE0+q-1:lt=K);let Dt=ut[lt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ut[lt]=Dt),(Dt.type!==I||Dt.texture!==ct)&&(K!==lt&&(i.activeTexture(lt),K=lt),i.bindTexture(I,ct||Nt[I]),Dt.type=I,Dt.texture=ct)}function vt(){let I=ut[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function A(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(I){ft.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function kt(I){bt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),bt.copy(I))}function Gt(I,ct){let lt=u.get(ct);lt===void 0&&(lt=new WeakMap,u.set(ct,lt));let Dt=lt.get(I);Dt===void 0&&(Dt=i.getUniformBlockIndex(ct,I.name),lt.set(I,Dt))}function Ut(I,ct){let Dt=u.get(ct).get(I);h.get(ct)!==Dt&&(i.uniformBlockBinding(ct,Dt,I.__bindingPointIndex),h.set(ct,Dt))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},K=null,ut={},f={},g=new WeakMap,_=[],m=null,d=!1,v=null,x=null,E=null,P=null,T=null,C=null,$=null,M=new Yt(0,0,0),w=0,H=!1,F=null,J=null,R=null,U=null,V=null,ft.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Lt,disable:Et,bindFramebuffer:Vt,drawBuffers:z,useProgram:Kt,setBlending:yt,setMaterial:It,setFlipSided:mt,setCullFace:S,setLineWidth:y,setPolygonOffset:k,setScissorTest:it,activeTexture:nt,bindTexture:st,unbindTexture:vt,compressedTexImage2D:ot,compressedTexImage3D:pt,texImage2D:ht,texImage3D:rt,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:A,texStorage3D:tt,texSubImage2D:gt,texSubImage3D:Ct,compressedTexSubImage2D:Q,compressedTexSubImage3D:Xt,scissor:wt,viewport:kt,reset:at}}function gm(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):Bs("canvas")}function _(S,y,k,it){let nt=1;if((S.width>it||S.height>it)&&(nt=it/Math.max(S.width,S.height)),nt<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let st=y?Fs:Math.floor,vt=st(nt*S.width),ot=st(nt*S.height);u===void 0&&(u=g(vt,ot));let pt=k?g(vt,ot):u;return pt.width=vt,pt.height=ot,pt.getContext("2d").drawImage(S,0,0,vt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+vt+"x"+ot+")."),pt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return ea(S.width)&&ea(S.height)}function d(S){return a?!1:S.wrapS!==$e||S.wrapT!==$e||S.minFilter!==Pe&&S.minFilter!==Ve}function v(S,y){return S.generateMipmaps&&y&&S.minFilter!==Pe&&S.minFilter!==Ve}function x(S){i.generateMipmap(S)}function E(S,y,k,it,nt=!1){if(a===!1)return y;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let st=y;if(y===i.RED&&(k===i.FLOAT&&(st=i.R32F),k===i.HALF_FLOAT&&(st=i.R16F),k===i.UNSIGNED_BYTE&&(st=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(st=i.R8UI),k===i.UNSIGNED_SHORT&&(st=i.R16UI),k===i.UNSIGNED_INT&&(st=i.R32UI),k===i.BYTE&&(st=i.R8I),k===i.SHORT&&(st=i.R16I),k===i.INT&&(st=i.R32I)),y===i.RG&&(k===i.FLOAT&&(st=i.RG32F),k===i.HALF_FLOAT&&(st=i.RG16F),k===i.UNSIGNED_BYTE&&(st=i.RG8)),y===i.RGBA){let vt=nt?Us:te.getTransfer(it);k===i.FLOAT&&(st=i.RGBA32F),k===i.HALF_FLOAT&&(st=i.RGBA16F),k===i.UNSIGNED_BYTE&&(st=vt===ie?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function P(S,y,k){return v(S,k)===!0||S.isFramebufferTexture&&S.minFilter!==Pe&&S.minFilter!==Ve?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function T(S){return S===Pe||S===ao||S===_r?i.NEAREST:i.LINEAR}function C(S){let y=S.target;y.removeEventListener("dispose",C),M(y),y.isVideoTexture&&h.delete(y)}function $(S){let y=S.target;y.removeEventListener("dispose",$),H(y)}function M(S){let y=n.get(S);if(y.__webglInit===void 0)return;let k=S.source,it=p.get(k);if(it){let nt=it[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(S),Object.keys(it).length===0&&p.delete(k)}n.remove(S)}function w(S){let y=n.get(S);i.deleteTexture(y.__webglTexture);let k=S.source,it=p.get(k);delete it[y.__cacheKey],o.memory.textures--}function H(S){let y=S.texture,k=n.get(S),it=n.get(y);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(k.__webglFramebuffer[nt]))for(let st=0;st<k.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(k.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(k.__webglFramebuffer[nt]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[nt])}else{if(Array.isArray(k.__webglFramebuffer))for(let nt=0;nt<k.__webglFramebuffer.length;nt++)i.deleteFramebuffer(k.__webglFramebuffer[nt]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let nt=0;nt<k.__webglColorRenderbuffer.length;nt++)k.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[nt]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let nt=0,st=y.length;nt<st;nt++){let vt=n.get(y[nt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(y[nt])}n.remove(y),n.remove(S)}let F=0;function J(){F=0}function R(){let S=F;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),F+=1,S}function U(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function V(S,y){let k=n.get(S);if(S.isVideoTexture&&It(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let it=S.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(k,S,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function q(S,y){let k=n.get(S);if(S.version>0&&k.__version!==S.version){ft(k,S,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function L(S,y){let k=n.get(S);if(S.version>0&&k.__version!==S.version){ft(k,S,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function D(S,y){let k=n.get(S);if(S.version>0&&k.__version!==S.version){bt(k,S,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let Z={[jr]:i.REPEAT,[$e]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},K={[Pe]:i.NEAREST,[ao]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Jl]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ut={[oh]:i.NEVER,[fh]:i.ALWAYS,[ch]:i.LESS,[Hc]:i.LEQUAL,[lh]:i.EQUAL,[dh]:i.GEQUAL,[hh]:i.GREATER,[uh]:i.NOTEQUAL};function X(S,y,k){if(k?(i.texParameteri(S,i.TEXTURE_WRAP_S,Z[y.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Z[y.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Z[y.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,K[y.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,K[y.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==$e||y.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Pe&&y.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Pe||y.minFilter!==_r&&y.minFilter!==Gi||y.type===Cn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Wi&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(S,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function et(S,y){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",C));let it=y.source,nt=p.get(it);nt===void 0&&(nt={},p.set(it,nt));let st=U(y);if(st!==S.__cacheKey){nt[st]===void 0&&(nt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),nt[st].usedTimes++;let vt=nt[S.__cacheKey];vt!==void 0&&(nt[S.__cacheKey].usedTimes--,vt.usedTimes===0&&w(y)),S.__cacheKey=st,S.__webglTexture=nt[st].texture}return k}function ft(S,y,k){let it=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(it=i.TEXTURE_3D);let nt=et(S,y),st=y.source;e.bindTexture(it,S.__webglTexture,i.TEXTURE0+k);let vt=n.get(st);if(st.version!==vt.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);let ot=te.getPrimaries(te.workingColorSpace),pt=y.colorSpace===Ge?null:te.getPrimaries(y.colorSpace),gt=y.colorSpace===Ge||ot===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ct=d(y)&&m(y.image)===!1,Q=_(y.image,Ct,!1,s.maxTextureSize);Q=mt(y,Q);let Xt=m(Q)||a,A=r.convert(y.format,y.colorSpace),tt=r.convert(y.type),ht=E(y.internalFormat,A,tt,y.colorSpace,y.isVideoTexture);X(it,y,Xt);let rt,wt=y.mipmaps,kt=a&&y.isVideoTexture!==!0&&ht!==Bc,Gt=vt.__version===void 0||nt===!0,Ut=P(y,Q,Xt);if(y.isDepthTexture)ht=i.DEPTH_COMPONENT,a?y.type===Cn?ht=i.DEPTH_COMPONENT32F:y.type===An?ht=i.DEPTH_COMPONENT24:y.type===Wn?ht=i.DEPTH24_STENCIL8:ht=i.DEPTH_COMPONENT16:y.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Xn&&ht===i.DEPTH_COMPONENT&&y.type!==La&&y.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=An,tt=r.convert(y.type)),y.format===Ai&&ht===i.DEPTH_COMPONENT&&(ht=i.DEPTH_STENCIL,y.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Wn,tt=r.convert(y.type))),Gt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,ht,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,A,tt,null));else if(y.isDataTexture)if(wt.length>0&&Xt){kt&&Gt&&e.texStorage2D(i.TEXTURE_2D,Ut,ht,wt[0].width,wt[0].height);for(let at=0,I=wt.length;at<I;at++)rt=wt[at],kt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,rt.width,rt.height,A,tt,rt.data):e.texImage2D(i.TEXTURE_2D,at,ht,rt.width,rt.height,0,A,tt,rt.data);y.generateMipmaps=!1}else kt?(Gt&&e.texStorage2D(i.TEXTURE_2D,Ut,ht,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,A,tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,A,tt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,ht,wt[0].width,wt[0].height,Q.depth);for(let at=0,I=wt.length;at<I;at++)rt=wt[at],y.format!==Ke?A!==null?kt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,rt.width,rt.height,Q.depth,A,rt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,ht,rt.width,rt.height,Q.depth,0,rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,rt.width,rt.height,Q.depth,A,tt,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,ht,rt.width,rt.height,Q.depth,0,A,tt,rt.data)}else{kt&&Gt&&e.texStorage2D(i.TEXTURE_2D,Ut,ht,wt[0].width,wt[0].height);for(let at=0,I=wt.length;at<I;at++)rt=wt[at],y.format!==Ke?A!==null?kt?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,rt.width,rt.height,A,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,ht,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,rt.width,rt.height,A,tt,rt.data):e.texImage2D(i.TEXTURE_2D,at,ht,rt.width,rt.height,0,A,tt,rt.data)}else if(y.isDataArrayTexture)kt?(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,ht,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,A,tt,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,A,tt,Q.data);else if(y.isData3DTexture)kt?(Gt&&e.texStorage3D(i.TEXTURE_3D,Ut,ht,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,A,tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,A,tt,Q.data);else if(y.isFramebufferTexture){if(Gt)if(kt)e.texStorage2D(i.TEXTURE_2D,Ut,ht,Q.width,Q.height);else{let at=Q.width,I=Q.height;for(let ct=0;ct<Ut;ct++)e.texImage2D(i.TEXTURE_2D,ct,ht,at,I,0,A,tt,null),at>>=1,I>>=1}}else if(wt.length>0&&Xt){kt&&Gt&&e.texStorage2D(i.TEXTURE_2D,Ut,ht,wt[0].width,wt[0].height);for(let at=0,I=wt.length;at<I;at++)rt=wt[at],kt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,A,tt,rt):e.texImage2D(i.TEXTURE_2D,at,ht,A,tt,rt);y.generateMipmaps=!1}else kt?(Gt&&e.texStorage2D(i.TEXTURE_2D,Ut,ht,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,A,tt,Q)):e.texImage2D(i.TEXTURE_2D,0,ht,A,tt,Q);v(y,Xt)&&x(it),vt.__version=st.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function bt(S,y,k){if(y.image.length!==6)return;let it=et(S,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+k);let st=n.get(nt);if(nt.version!==st.__version||it===!0){e.activeTexture(i.TEXTURE0+k);let vt=te.getPrimaries(te.workingColorSpace),ot=y.colorSpace===Ge?null:te.getPrimaries(y.colorSpace),pt=y.colorSpace===Ge||vt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let gt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ct=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let at=0;at<6;at++)!gt&&!Ct?Q[at]=_(y.image[at],!1,!0,s.maxCubemapSize):Q[at]=Ct?y.image[at].image:y.image[at],Q[at]=mt(y,Q[at]);let Xt=Q[0],A=m(Xt)||a,tt=r.convert(y.format,y.colorSpace),ht=r.convert(y.type),rt=E(y.internalFormat,tt,ht,y.colorSpace),wt=a&&y.isVideoTexture!==!0,kt=st.__version===void 0||it===!0,Gt=P(y,Xt,A);X(i.TEXTURE_CUBE_MAP,y,A);let Ut;if(gt){wt&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,rt,Xt.width,Xt.height);for(let at=0;at<6;at++){Ut=Q[at].mipmaps;for(let I=0;I<Ut.length;I++){let ct=Ut[I];y.format!==Ke?tt!==null?wt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,ct.width,ct.height,tt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,rt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,ct.width,ct.height,tt,ht,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,rt,ct.width,ct.height,0,tt,ht,ct.data)}}}else{Ut=y.mipmaps,wt&&kt&&(Ut.length>0&&Gt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,rt,Q[0].width,Q[0].height));for(let at=0;at<6;at++)if(Ct){wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Q[at].width,Q[at].height,tt,ht,Q[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,rt,Q[at].width,Q[at].height,0,tt,ht,Q[at].data);for(let I=0;I<Ut.length;I++){let lt=Ut[I].image[at].image;wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,lt.width,lt.height,tt,ht,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,rt,lt.width,lt.height,0,tt,ht,lt.data)}}else{wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,tt,ht,Q[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,rt,tt,ht,Q[at]);for(let I=0;I<Ut.length;I++){let ct=Ut[I];wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,tt,ht,ct.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,rt,tt,ht,ct.image[at])}}}v(y,A)&&x(i.TEXTURE_CUBE_MAP),st.__version=nt.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function St(S,y,k,it,nt,st){let vt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),pt=E(k.internalFormat,vt,ot,k.colorSpace);if(!n.get(y).__hasExternalTextures){let Ct=Math.max(1,y.width>>st),Q=Math.max(1,y.height>>st);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,st,pt,Ct,Q,y.depth,0,vt,ot,null):e.texImage2D(nt,st,pt,Ct,Q,0,vt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),yt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,nt,n.get(k).__webglTexture,0,Tt(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,nt,n.get(k).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(S,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let it=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||yt(y)){let nt=y.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Cn?it=i.DEPTH_COMPONENT32F:nt.type===An&&(it=i.DEPTH_COMPONENT24));let st=Tt(y);yt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,it,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,it,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let it=Tt(y);k&&yt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,y.width,y.height):yt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let it=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let nt=0;nt<it.length;nt++){let st=it[nt],vt=r.convert(st.format,st.colorSpace),ot=r.convert(st.type),pt=E(st.internalFormat,vt,ot,st.colorSpace),gt=Tt(y);k&&yt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,pt,y.width,y.height):yt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let it=n.get(y.depthTexture).__webglTexture,nt=Tt(y);if(y.depthTexture.format===Xn)yt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(y.depthTexture.format===Ai)yt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Et(S){let y=n.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,S)}else if(k){y.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[it]),y.__webglDepthbuffer[it]=i.createRenderbuffer(),Nt(y.__webglDepthbuffer[it],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Nt(y.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(S,y,k){let it=n.get(S);y!==void 0&&St(it.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Et(S)}function z(S){let y=S.texture,k=n.get(S),it=n.get(y);S.addEventListener("dispose",$),S.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=y.version,o.memory.textures++);let nt=S.isWebGLCubeRenderTarget===!0,st=S.isWebGLMultipleRenderTargets===!0,vt=m(S)||a;if(nt){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let pt=0;pt<y.mipmaps.length;pt++)k.__webglFramebuffer[ot][pt]=i.createFramebuffer()}else k.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)k.__webglFramebuffer[ot]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let ot=S.texture;for(let pt=0,gt=ot.length;pt<gt;pt++){let Ct=n.get(ot[pt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&yt(S)===!1){let ot=st?y:[y];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<ot.length;pt++){let gt=ot[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);let Ct=r.convert(gt.format,gt.colorSpace),Q=r.convert(gt.type),Xt=E(gt.internalFormat,Ct,Q,gt.colorSpace,S.isXRRenderTarget===!0),A=Tt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,A,Xt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(k.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),X(i.TEXTURE_CUBE_MAP,y,vt);for(let ot=0;ot<6;ot++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)St(k.__webglFramebuffer[ot][pt],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else St(k.__webglFramebuffer[ot],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(y,vt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let ot=S.texture;for(let pt=0,gt=ot.length;pt<gt;pt++){let Ct=ot[pt],Q=n.get(Ct);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),X(i.TEXTURE_2D,Ct,vt),St(k.__webglFramebuffer,S,Ct,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),v(Ct,vt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ot=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,it.__webglTexture),X(ot,y,vt),a&&y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)St(k.__webglFramebuffer[pt],S,y,i.COLOR_ATTACHMENT0,ot,pt);else St(k.__webglFramebuffer,S,y,i.COLOR_ATTACHMENT0,ot,0);v(y,vt)&&x(ot),e.unbindTexture()}S.depthBuffer&&Et(S)}function Kt(S){let y=m(S)||a,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0,nt=k.length;it<nt;it++){let st=k[it];if(v(st,y)){let vt=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(st).__webglTexture;e.bindTexture(vt,ot),x(vt),e.unbindTexture()}}}function _t(S){if(a&&S.samples>0&&yt(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],k=S.width,it=S.height,nt=i.COLOR_BUFFER_BIT,st=[],vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(S),pt=S.isWebGLMultipleRenderTargets===!0;if(pt)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){st.push(i.COLOR_ATTACHMENT0+gt),S.depthBuffer&&st.push(vt);let Ct=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Ct===!1&&(S.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),pt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[gt]),Ct===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),pt){let Q=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,k,it,0,0,k,it,nt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[gt]);let Ct=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Tt(S){return Math.min(s.maxSamples,S.samples)}function yt(S){let y=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function It(S){let y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function mt(S,y){let k=S.colorSpace,it=S.format,nt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ta||k!==_n&&k!==Ge&&(te.getTransfer(k)===ie?a===!1?t.has("EXT_sRGB")===!0&&it===Ke?(S.format=ta,S.minFilter=Ve,S.generateMipmaps=!1):y=zs.sRGBToLinear(y):(it!==Ke||nt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=L,this.setTextureCube=D,this.rebindTextures=Vt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=St,this.useMultisampledRTT=yt}function _m(i,t,e){let n=e.isWebGL2;function s(r,o=Ge){let a,c=te.getTransfer(o);if(r===Ln)return i.UNSIGNED_BYTE;if(r===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$l)return i.BYTE;if(r===Kl)return i.SHORT;if(r===La)return i.UNSIGNED_SHORT;if(r===Ic)return i.INT;if(r===An)return i.UNSIGNED_INT;if(r===Cn)return i.FLOAT;if(r===Wi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jl)return i.ALPHA;if(r===Ke)return i.RGBA;if(r===Ql)return i.LUMINANCE;if(r===th)return i.LUMINANCE_ALPHA;if(r===Xn)return i.DEPTH_COMPONENT;if(r===Ai)return i.DEPTH_STENCIL;if(r===ta)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===eh)return i.RED;if(r===Nc)return i.RED_INTEGER;if(r===nh)return i.RG;if(r===Oc)return i.RG_INTEGER;if(r===Fc)return i.RGBA_INTEGER;if(r===xr||r===yr||r===vr||r===Mr)if(c===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oo||r===co||r===lo||r===ho)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===co)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uo||r===fo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===uo)return c===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===po||r===mo||r===go||r===_o||r===xo||r===yo||r===vo||r===Mo||r===bo||r===So||r===Eo||r===wo||r===To||r===Ao)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===po)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===go)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_o)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===So)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===To)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ao)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===br||r===Co||r===Ro)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===br)return c===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Co)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ih||r===Po||r===Lo||r===Io)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===br)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Io)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ma=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},gn=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ga=class extends on{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,g=null,_=e.getContextAttributes(),m=null,d=null,v=[],x=[],E=new zt,P=null,T=new Le;T.layers.enable(1),T.viewport=new xe;let C=new Le;C.layers.enable(2),C.viewport=new xe;let $=[T,C],M=new ma;M.layers.enable(1),M.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=v[X];return et===void 0&&(et=new Vi,v[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=v[X];return et===void 0&&(et=new Vi,v[X]=et),et.getGripSpace()},this.getHand=function(X){let et=v[X];return et===void 0&&(et=new Vi,v[X]=et),et.getHandSpace()};function F(X){let et=x.indexOf(X.inputSource);if(et===-1)return;let ft=v[et];ft!==void 0&&(ft.update(X.inputSource,X.frame,l||o),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",R);for(let X=0;X<v.length;X++){let et=x[X];et!==null&&(x[X]=null,v[X].disconnect(et))}w=null,H=null,t.setRenderTarget(m),f=null,p=null,u=null,s=null,d=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",J),s.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new xn(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,ft=null,bt=null;_.depth&&(bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Ai:Xn,ft=_.stencil?Wn:An);let St={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(St),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new xn(p.textureWidth,p.textureHeight,{format:Ke,type:Ln,depthTexture:new Js(p.textureWidth,p.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Nt=t.properties.get(d);Nt.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(X){for(let et=0;et<X.removed.length;et++){let ft=X.removed[et],bt=x.indexOf(ft);bt>=0&&(x[bt]=null,v[bt].disconnect(ft))}for(let et=0;et<X.added.length;et++){let ft=X.added[et],bt=x.indexOf(ft);if(bt===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=x.length){x.push(ft),bt=Nt;break}else if(x[Nt]===null){x[Nt]=ft,bt=Nt;break}if(bt===-1)break}let St=v[bt];St&&St.connect(ft)}}let U=new O,V=new O;function q(X,et,ft){U.setFromMatrixPosition(et.matrixWorld),V.setFromMatrixPosition(ft.matrixWorld);let bt=U.distanceTo(V),St=et.projectionMatrix.elements,Nt=ft.projectionMatrix.elements,Lt=St[14]/(St[10]-1),Et=St[14]/(St[10]+1),Vt=(St[9]+1)/St[5],z=(St[9]-1)/St[5],Kt=(St[8]-1)/St[0],_t=(Nt[8]+1)/Nt[0],Tt=Lt*Kt,yt=Lt*_t,It=bt/(-Kt+_t),mt=It*-Kt;et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(mt),X.translateZ(It),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let S=Lt+It,y=Et+It,k=Tt-mt,it=yt+(bt-mt),nt=Vt*Et/y*S,st=z*Et/y*S;X.projectionMatrix.makePerspective(k,it,nt,st,S,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function L(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;M.near=C.near=T.near=X.near,M.far=C.far=T.far=X.far,(w!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,H=M.far);let et=X.parent,ft=M.cameras;L(M,et);for(let bt=0;bt<ft.length;bt++)L(ft[bt],et);ft.length===2?q(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),D(X,M,et)};function D(X,et,ft){ft===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Xi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let Z=null;function K(X,et){if(h=et.getViewerPose(l||o),g=et,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let bt=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,bt=!0);for(let St=0;St<ft.length;St++){let Nt=ft[St],Lt=null;if(f!==null)Lt=f.getViewport(Nt);else{let Vt=u.getViewSubImage(p,Nt);Lt=Vt.viewport,St===0&&(t.setRenderTargetTextures(d,Vt.colorTexture,p.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(d))}let Et=$[St];Et===void 0&&(Et=new Le,Et.layers.enable(St),Et.viewport=new xe,$[St]=Et),Et.matrix.fromArray(Nt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Nt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),St===0&&(M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),bt===!0&&M.cameras.push(Et)}}for(let ft=0;ft<v.length;ft++){let bt=x[ft],St=v[ft];bt!==null&&St!==void 0&&St.update(bt,et,l||o)}Z&&Z(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let ut=new Xc;ut.setAnimationLoop(K),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}};function ym(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Wc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ee&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ee&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vm(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){let E=x.program;n.uniformBlockBinding(v,E)}function l(v,x){let E=s[v.id];E===void 0&&(g(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(v,P);let T=t.render.frame;r[v.id]!==T&&(p(v),r[v.id]=T)}function h(v){let x=u();v.__bindingPointIndex=x;let E=i.createBuffer(),P=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let x=s[v.id],E=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=E.length;T<C;T++){let $=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,w=$.length;M<w;M++){let H=$[M];if(f(H,T,M,P)===!0){let F=H.__offset,J=Array.isArray(H.value)?H.value:[H.value],R=0;for(let U=0;U<J.length;U++){let V=J[U],q=_(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+R,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,R),R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,E,P){let T=v.value,C=x+"_"+E;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{let $=P[C];if(typeof T=="number"||typeof T=="boolean"){if($!==T)return P[C]=T,!0}else if($.equals(T)===!1)return $.copy(T),!0}return!1}function g(v){let x=v.uniforms,E=0,P=16;for(let C=0,$=x.length;C<$;C++){let M=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,H=M.length;w<H;w++){let F=M[w],J=Array.isArray(F.value)?F.value:[F.value];for(let R=0,U=J.length;R<U;R++){let V=J[R],q=_(V),L=E%P;L!==0&&P-L<q.boundary&&(E+=P-L),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=q.storage}}}let T=E%P;return T>0&&(E+=P-T),v.__size=E,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ji=class{constructor(t={}){let{canvas:e=Ch(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;let x=this,E=!1,P=0,T=0,C=null,$=-1,M=null,w=new xe,H=new xe,F=null,J=new Yt(0),R=0,U=e.width,V=e.height,q=1,L=null,D=null,Z=new xe(0,0,U,V),K=new xe(0,0,U,V),ut=!1,X=new Zi,et=!1,ft=!1,bt=null,St=new de,Nt=new zt,Lt=new O,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return C===null?q:1}let z=n;function Kt(b,B){for(let W=0;W<b.length;W++){let Y=b[W],G=e.getContext(Y,B);if(G!==null)return G}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ct,!1),z===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),z=Kt(B,b),z===null)throw Kt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _t,Tt,yt,It,mt,S,y,k,it,nt,st,vt,ot,pt,gt,Ct,Q,Xt,A,tt,ht,rt,wt,kt;function Gt(){_t=new zf(z),Tt=new Uf(z,_t,t),_t.init(Tt),rt=new _m(z,_t,Tt),yt=new mm(z,_t,Tt),It=new Vf(z),mt=new im,S=new gm(z,_t,yt,mt,Tt,rt,It),y=new Nf(x),k=new Bf(x),it=new Jh(z,Tt),wt=new Lf(z,_t,it,Tt),nt=new kf(z,it,It,wt),st=new qf(z,nt,it,It),A=new Xf(z,Tt,S),Ct=new Df(mt),vt=new nm(x,y,k,_t,Tt,wt,Ct),ot=new ym(x,mt),pt=new rm,gt=new um(_t,Tt),Xt=new Pf(x,y,k,yt,st,p,c),Q=new pm(x,st,Tt),kt=new vm(z,It,Tt,yt),tt=new If(z,_t,It,Tt),ht=new Hf(z,_t,It,Tt),It.programs=vt.programs,x.capabilities=Tt,x.extensions=_t,x.properties=mt,x.renderLists=pt,x.shadowMap=Q,x.state=yt,x.info=It}Gt();let Ut=new ga(x,z);this.xr=Ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=_t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=_t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(U,V,!1))},this.getSize=function(b){return b.set(U,V)},this.setSize=function(b,B,W=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,V=B,e.width=Math.floor(b*q),e.height=Math.floor(B*q),W===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(U*q,V*q).floor()},this.setDrawingBufferSize=function(b,B,W){U=b,V=B,q=W,e.width=Math.floor(b*W),e.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,B,W,Y){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,B,W,Y),yt.viewport(w.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,B,W,Y){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,B,W,Y),yt.scissor(H.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){yt.setScissorTest(ut=b)},this.setOpaqueSort=function(b){L=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(b=!0,B=!0,W=!0){let Y=0;if(b){let G=!1;if(C!==null){let xt=C.texture.format;G=xt===Fc||xt===Oc||xt===Nc}if(G){let xt=C.texture.type,Pt=xt===Ln||xt===An||xt===La||xt===Wn||xt===Uc||xt===Dc,Ot=Xt.getClearColor(),Bt=Xt.getClearAlpha(),Zt=Ot.r,Ht=Ot.g,Wt=Ot.b;Pt?(f[0]=Zt,f[1]=Ht,f[2]=Wt,f[3]=Bt,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=Zt,g[1]=Ht,g[2]=Wt,g[3]=Bt,z.clearBufferiv(z.COLOR,0,g))}else Y|=z.COLOR_BUFFER_BIT}B&&(Y|=z.DEPTH_BUFFER_BIT),W&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),gt.dispose(),mt.dispose(),y.dispose(),k.dispose(),st.dispose(),wt.dispose(),kt.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Te),Ut.removeEventListener("sessionend",ee),bt&&(bt.dispose(),bt=null),Ae.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=It.autoReset,B=Q.enabled,W=Q.autoUpdate,Y=Q.needsUpdate,G=Q.type;Gt(),It.autoReset=b,Q.enabled=B,Q.autoUpdate=W,Q.needsUpdate=Y,Q.type=G}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){let B=b.target;B.removeEventListener("dispose",lt),Dt(B)}function Dt(b){At(b),mt.remove(b)}function At(b){let B=mt.get(b).programs;B!==void 0&&(B.forEach(function(W){vt.releaseProgram(W)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,Y,G,xt){B===null&&(B=Et);let Pt=G.isMesh&&G.matrixWorld.determinant()<0,Ot=hl(b,B,W,Y,G);yt.setMaterial(Y,Pt);let Bt=W.index,Zt=1;if(Y.wireframe===!0){if(Bt=nt.getWireframeAttribute(W),Bt===void 0)return;Zt=2}let Ht=W.drawRange,Wt=W.attributes.position,le=Ht.start*Zt,Ne=(Ht.start+Ht.count)*Zt;xt!==null&&(le=Math.max(le,xt.start*Zt),Ne=Math.min(Ne,(xt.start+xt.count)*Zt)),Bt!==null?(le=Math.max(le,0),Ne=Math.min(Ne,Bt.count)):Wt!=null&&(le=Math.max(le,0),Ne=Math.min(Ne,Wt.count));let ge=Ne-le;if(ge<0||ge===1/0)return;wt.setup(G,Y,Ot,W,Bt);let cn,ae=tt;if(Bt!==null&&(cn=it.get(Bt),ae=ht,ae.setIndex(cn)),G.isMesh)Y.wireframe===!0?(yt.setLineWidth(Y.wireframeLinewidth*Vt()),ae.setMode(z.LINES)):ae.setMode(z.TRIANGLES);else if(G.isLine){let Jt=Y.linewidth;Jt===void 0&&(Jt=1),yt.setLineWidth(Jt*Vt()),G.isLineSegments?ae.setMode(z.LINES):G.isLineLoop?ae.setMode(z.LINE_LOOP):ae.setMode(z.LINE_STRIP)}else G.isPoints?ae.setMode(z.POINTS):G.isSprite&&ae.setMode(z.TRIANGLES);if(G.isBatchedMesh)ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ae.renderInstances(le,ge,G.count);else if(W.isInstancedBufferGeometry){let Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,dr=Math.min(W.instanceCount,Jt);ae.renderInstances(le,ge,dr)}else ae.render(le,ge)};function jt(b,B,W){b.transparent===!0&&b.side===Ie&&b.forceSinglePass===!1?(b.side=Ee,b.needsUpdate=!0,rs(b,B,W),b.side=an,b.needsUpdate=!0,rs(b,B,W),b.side=Ie):rs(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),m=gt.get(W),m.init(),v.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);let Y=new Set;return b.traverse(function(G){let xt=G.material;if(xt)if(Array.isArray(xt))for(let Pt=0;Pt<xt.length;Pt++){let Ot=xt[Pt];jt(Ot,W,G),Y.add(Ot)}else jt(xt,W,G),Y.add(xt)}),v.pop(),m=null,Y},this.compileAsync=function(b,B,W=null){let Y=this.compile(b,B,W);return new Promise(G=>{function xt(){if(Y.forEach(function(Pt){mt.get(Pt).currentProgram.isReady()&&Y.delete(Pt)}),Y.size===0){G(b);return}setTimeout(xt,10)}_t.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Qt=null;function me(b){Qt&&Qt(b)}function Te(){Ae.stop()}function ee(){Ae.start()}let Ae=new Xc;Ae.setAnimationLoop(me),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(b){Qt=b,Ut.setAnimationLoop(b),b===null?Ae.stop():Ae.start()},Ut.addEventListener("sessionstart",Te),Ut.addEventListener("sessionend",ee),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(B),B=Ut.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,C),m=gt.get(b,v.length),m.init(),v.push(m),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(St),ft=this.localClippingEnabled,et=Ct.init(this.clippingPlanes,ft),_=pt.get(b,d.length),_.init(),d.push(_),nn(b,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(L,D),this.info.render.frame++,et===!0&&Ct.beginShadows();let W=m.state.shadowsArray;if(Q.render(W,b,B),et===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(_,b),m.setupLights(x._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let G=0,xt=Y.length;G<xt;G++){let Pt=Y[G];Xa(_,b,Pt,Pt.viewport)}}else Xa(_,b,B);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,B),wt.resetDefaultState(),$=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function nn(b,B,W,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){Y&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);let Pt=st.update(b),Ot=b.material;Ot.visible&&_.push(b,Pt,Ot,W,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let Pt=st.update(b),Ot=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Lt.copy(Pt.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){let Bt=Pt.groups;for(let Zt=0,Ht=Bt.length;Zt<Ht;Zt++){let Wt=Bt[Zt],le=Ot[Wt.materialIndex];le&&le.visible&&_.push(b,Pt,le,W,Lt.z,Wt)}}else Ot.visible&&_.push(b,Pt,Ot,W,Lt.z,null)}}let xt=b.children;for(let Pt=0,Ot=xt.length;Pt<Ot;Pt++)nn(xt[Pt],B,W,Y)}function Xa(b,B,W,Y){let G=b.opaque,xt=b.transmissive,Pt=b.transparent;m.setupLightsView(W),et===!0&&Ct.setGlobalState(x.clippingPlanes,W),xt.length>0&&ll(G,xt,B,W),Y&&yt.viewport(w.copy(Y)),G.length>0&&ss(G,B,W),xt.length>0&&ss(xt,B,W),Pt.length>0&&ss(Pt,B,W),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ll(b,B,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let xt=Tt.isWebGL2;bt===null&&(bt=new xn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Wi:Ln,minFilter:Gi,samples:xt?4:0})),x.getDrawingBufferSize(Nt),xt?bt.setSize(Nt.x,Nt.y):bt.setSize(Fs(Nt.x),Fs(Nt.y));let Pt=x.getRenderTarget();x.setRenderTarget(bt),x.getClearColor(J),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let Ot=x.toneMapping;x.toneMapping=Pn,ss(b,W,Y),S.updateMultisampleRenderTarget(bt),S.updateRenderTargetMipmap(bt);let Bt=!1;for(let Zt=0,Ht=B.length;Zt<Ht;Zt++){let Wt=B[Zt],le=Wt.object,Ne=Wt.geometry,ge=Wt.material,cn=Wt.group;if(ge.side===Ie&&le.layers.test(Y.layers)){let ae=ge.side;ge.side=Ee,ge.needsUpdate=!0,qa(le,W,Y,Ne,ge,cn),ge.side=ae,ge.needsUpdate=!0,Bt=!0}}Bt===!0&&(S.updateMultisampleRenderTarget(bt),S.updateRenderTargetMipmap(bt)),x.setRenderTarget(Pt),x.setClearColor(J,R),x.toneMapping=Ot}function ss(b,B,W){let Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,xt=b.length;G<xt;G++){let Pt=b[G],Ot=Pt.object,Bt=Pt.geometry,Zt=Y===null?Pt.material:Y,Ht=Pt.group;Ot.layers.test(W.layers)&&qa(Ot,B,W,Bt,Zt,Ht)}}function qa(b,B,W,Y,G,xt){b.onBeforeRender(x,B,W,Y,G,xt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(x,B,W,Y,b,xt),G.transparent===!0&&G.side===Ie&&G.forceSinglePass===!1?(G.side=Ee,G.needsUpdate=!0,x.renderBufferDirect(W,B,Y,G,b,xt),G.side=an,G.needsUpdate=!0,x.renderBufferDirect(W,B,Y,G,b,xt),G.side=Ie):x.renderBufferDirect(W,B,Y,G,b,xt),b.onAfterRender(x,B,W,Y,G,xt)}function rs(b,B,W){B.isScene!==!0&&(B=Et);let Y=mt.get(b),G=m.state.lights,xt=m.state.shadowsArray,Pt=G.state.version,Ot=vt.getParameters(b,G.state,xt,B,W),Bt=vt.getProgramCacheKey(Ot),Zt=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||Y.environment),Zt===void 0&&(b.addEventListener("dispose",lt),Zt=new Map,Y.programs=Zt);let Ht=Zt.get(Bt);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===Pt)return Za(b,Ot),Ht}else Ot.uniforms=vt.getUniforms(b),b.onBuild(W,Ot,x),b.onBeforeCompile(Ot,x),Ht=vt.acquireProgram(Ot,Bt),Zt.set(Bt,Ht),Y.uniforms=Ot.uniforms;let Wt=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=Ct.uniform),Za(b,Ot),Y.needsLights=dl(b),Y.lightsStateVersion=Pt,Y.needsLights&&(Wt.ambientLightColor.value=G.state.ambient,Wt.lightProbe.value=G.state.probe,Wt.directionalLights.value=G.state.directional,Wt.directionalLightShadows.value=G.state.directionalShadow,Wt.spotLights.value=G.state.spot,Wt.spotLightShadows.value=G.state.spotShadow,Wt.rectAreaLights.value=G.state.rectArea,Wt.ltc_1.value=G.state.rectAreaLTC1,Wt.ltc_2.value=G.state.rectAreaLTC2,Wt.pointLights.value=G.state.point,Wt.pointLightShadows.value=G.state.pointShadow,Wt.hemisphereLights.value=G.state.hemi,Wt.directionalShadowMap.value=G.state.directionalShadowMap,Wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Wt.spotShadowMap.value=G.state.spotShadowMap,Wt.spotLightMatrix.value=G.state.spotLightMatrix,Wt.spotLightMap.value=G.state.spotLightMap,Wt.pointShadowMap.value=G.state.pointShadowMap,Wt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function Ya(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Ei.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Za(b,B){let W=mt.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function hl(b,B,W,Y,G){B.isScene!==!0&&(B=Et),S.resetTextureUnits();let xt=B.fog,Pt=Y.isMeshStandardMaterial?B.environment:null,Ot=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_n,Bt=(Y.isMeshStandardMaterial?k:y).get(Y.envMap||Pt),Zt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Wt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,Ne=!!W.morphAttributes.color,ge=Pn;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=x.toneMapping);let cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=cn!==void 0?cn.length:0,Jt=mt.get(Y),dr=m.state.lights;if(et===!0&&(ft===!0||b!==M)){let ze=b===M&&Y.id===$;Ct.setState(Y,b,ze)}let ce=!1;Y.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==dr.state.version||Jt.outputColorSpace!==Ot||G.isBatchedMesh&&Jt.batching===!1||!G.isBatchedMesh&&Jt.batching===!0||G.isInstancedMesh&&Jt.instancing===!1||!G.isInstancedMesh&&Jt.instancing===!0||G.isSkinnedMesh&&Jt.skinning===!1||!G.isSkinnedMesh&&Jt.skinning===!0||G.isInstancedMesh&&Jt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Jt.instancingColor===!1&&G.instanceColor!==null||Jt.envMap!==Bt||Y.fog===!0&&Jt.fog!==xt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ct.numPlanes||Jt.numIntersection!==Ct.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==Ht||Jt.morphTargets!==Wt||Jt.morphNormals!==le||Jt.morphColors!==Ne||Jt.toneMapping!==ge||Tt.isWebGL2===!0&&Jt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Jt.__version=Y.version);let Nn=Jt.currentProgram;ce===!0&&(Nn=rs(Y,B,G));let Ja=!1,Ui=!1,fr=!1,ve=Nn.getUniforms(),On=Jt.uniforms;if(yt.useProgram(Nn.program)&&(Ja=!0,Ui=!0,fr=!0),Y.id!==$&&($=Y.id,Ui=!0),Ja||M!==b){ve.setValue(z,"projectionMatrix",b.projectionMatrix),ve.setValue(z,"viewMatrix",b.matrixWorldInverse);let ze=ve.map.cameraPosition;ze!==void 0&&ze.setValue(z,Lt.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ui=!0,fr=!0)}if(G.isSkinnedMesh){ve.setOptional(z,G,"bindMatrix"),ve.setOptional(z,G,"bindMatrixInverse");let ze=G.skeleton;ze&&(Tt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),ve.setValue(z,"boneTexture",ze.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(ve.setOptional(z,G,"batchingTexture"),ve.setValue(z,"batchingTexture",G._matricesTexture,S));let pr=W.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&Tt.isWebGL2===!0)&&A.update(G,W,Nn),(Ui||Jt.receiveShadow!==G.receiveShadow)&&(Jt.receiveShadow=G.receiveShadow,ve.setValue(z,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(On.envMap.value=Bt,On.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Ui&&(ve.setValue(z,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&ul(On,fr),xt&&Y.fog===!0&&ot.refreshFogUniforms(On,xt),ot.refreshMaterialUniforms(On,Y,q,V,bt),Ei.upload(z,Ya(Jt),On,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ei.upload(z,Ya(Jt),On,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(z,"center",G.center),ve.setValue(z,"modelViewMatrix",G.modelViewMatrix),ve.setValue(z,"normalMatrix",G.normalMatrix),ve.setValue(z,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let ze=Y.uniformsGroups;for(let mr=0,fl=ze.length;mr<fl;mr++)if(Tt.isWebGL2){let $a=ze[mr];kt.update($a,Nn),kt.bind($a,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function ul(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function dl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,W){mt.get(b.texture).__webglTexture=B,mt.get(b.depthTexture).__webglTexture=W;let Y=mt.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){let W=mt.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){C=b,P=B,T=W;let Y=!0,G=null,xt=!1,Pt=!1;if(b){let Bt=mt.get(b);Bt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):Bt.__webglFramebuffer===void 0?S.setupRenderTarget(b):Bt.__hasExternalTextures&&S.rebindTextures(b,mt.get(b.texture).__webglTexture,mt.get(b.depthTexture).__webglTexture);let Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Pt=!0);let Ht=mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?G=Ht[B][W]:G=Ht[B],xt=!0):Tt.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?G=mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[W]:G=Ht,w.copy(b.viewport),H.copy(b.scissor),F=b.scissorTest}else w.copy(Z).multiplyScalar(q).floor(),H.copy(K).multiplyScalar(q).floor(),F=ut;if(yt.bindFramebuffer(z.FRAMEBUFFER,G)&&Tt.drawBuffers&&Y&&yt.drawBuffers(b,G),yt.viewport(w),yt.scissor(H),yt.setScissorTest(F),xt){let Bt=mt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Bt.__webglTexture,W)}else if(Pt){let Bt=mt.get(b.texture),Zt=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,W||0,Zt)}$=-1},this.readRenderTargetPixels=function(b,B,W,Y,G,xt,Pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){yt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{let Bt=b.texture,Zt=Bt.format,Ht=Bt.type;if(Zt!==Ke&&rt.convert(Zt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Ht===Wi&&(_t.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Ht!==Ln&&rt.convert(Ht)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Cn&&(Tt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&W>=0&&W<=b.height-G&&z.readPixels(B,W,Y,G,rt.convert(Zt),rt.convert(Ht),xt)}finally{let Bt=C!==null?mt.get(C).__webglFramebuffer:null;yt.bindFramebuffer(z.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(b,B,W=0){let Y=Math.pow(2,-W),G=Math.floor(B.image.width*Y),xt=Math.floor(B.image.height*Y);S.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,b.x,b.y,G,xt),yt.unbindTexture()},this.copyTextureToTexture=function(b,B,W,Y=0){let G=B.image.width,xt=B.image.height,Pt=rt.convert(W.format),Ot=rt.convert(W.type);S.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,b.x,b.y,G,xt,Pt,Ot,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Pt,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,b.x,b.y,Pt,Ot,B.image),Y===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W,Y,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=b.max.x-b.min.x+1,Pt=b.max.y-b.min.y+1,Ot=b.max.z-b.min.z+1,Bt=rt.convert(Y.format),Zt=rt.convert(Y.type),Ht;if(Y.isData3DTexture)S.setTexture3D(Y,0),Ht=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)S.setTexture2DArray(Y,0),Ht=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);let Wt=z.getParameter(z.UNPACK_ROW_LENGTH),le=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ne=z.getParameter(z.UNPACK_SKIP_PIXELS),ge=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES),ae=W.isCompressedTexture?W.mipmaps[G]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Ht,G,B.x,B.y,B.z,xt,Pt,Ot,Bt,Zt,ae.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ht,G,B.x,B.y,B.z,xt,Pt,Ot,Bt,ae.data)):z.texSubImage3D(Ht,G,B.x,B.y,B.z,xt,Pt,Ot,Bt,Zt,ae),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,le),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),G===0&&Y.generateMipmaps&&z.generateMipmap(Ht),yt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){P=0,T=0,C=null,yt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ia?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?qn:zc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qn?ye:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},_a=class extends Ji{};_a.prototype.isWebGL1Renderer=!0;var $s=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var $i=class extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sc=new O,Ec=new O,wc=new de,qr=new Jn,Rs=new Ci,Ki=class extends we{constructor(t=new De,e=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sc.fromBufferAttribute(e,s-1),Ec.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sc.distanceTo(Ec);t.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;wc.copy(s).invert(),qr.copy(t.ray).applyMatrix4(wc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,h=new O,u=new O,p=new O,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=d,E=v-1;x<E;x+=f){let P=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,P),h.fromBufferAttribute(m,T),qr.distanceSqToSegment(l,h,p,u)>c)continue;p.applyMatrix4(this.matrixWorld);let $=t.ray.origin.distanceTo(p);$<t.near||$>t.far||e.push({distance:$,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=d,E=v-1;x<E;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),qr.distanceSqToSegment(l,h,p,u)>c)continue;p.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(p);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Ks=class extends Ki{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var js=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,p=new O,f=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let v=[],x=d/n,E=0;d===0&&o===0?E=.5/e:d===n&&c===Math.PI&&(E=-.5/e);for(let P=0;P<=e;P++){let T=P/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(T+E,1-x),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let x=h[d][v+1],E=h[d][v],P=h[d+1][v],T=h[d+1][v+1];(d!==0||o>0)&&f.push(x,E,T),(d!==n-1||c<Math.PI)&&f.push(E,P,T)}this.setIndex(f),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vn=class extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ps(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uo,endingEnd:Uo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Do:r=t,a=2*e-n;break;case No:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Do:o=t,c=2*n-e;break;case No:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-p*m+2*p*_-p*g,v=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+v*o[l+P]+x*o[c+P]+E*o[u+P];return r}},ya=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},va=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case Is:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Mm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[p+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Is;var $n=class extends tn{};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ls;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends tn{};Ma.prototype.ValueTypeName="color";var ba=class extends tn{};ba.prototype.ValueTypeName="number";var Sa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Qe.slerpFlat(r,0,o,l-a,o,l,c);return r}},ji=class extends tn{InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=Is;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends tn{};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Ls;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends tn{};Ea.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},bm=new wa,Ta=class{constructor(t){this.manager=t!==void 0?t:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},tr=class extends Qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Yr=new de,Tc=new O,Ac=new O,Aa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ca=class extends Aa{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Ca}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Na="\\[\\]\\.:\\/",Sm=new RegExp("["+Na+"]","g"),Oa="[^"+Na+"]",Em="[^"+Na.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",Oa),Tm=/(WCOD+)?/.source.replace("WCOD",Em),Am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oa),Cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oa),Rm=new RegExp("^"+wm+Tm+Am+Cm+"$"),Pm=["material","materials","bones","map"],Ra=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sm,"")}static parseTrackName(t){let e=Rm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Ra;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ig=new Float32Array(1);var er=class{constructor(t,e,n=0,s=1/0){this.ray=new Jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(Cc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pa(t[s],this,n,e);return n.sort(Cc),n}};function Cc(i,t){return i.distance-t.distance}function Pa(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Pa(s[r],t,e,!0)}}var ts=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Kc={type:"change"},Fa={type:"start"},jc={type:"end"},rr=new Jn,Qc=new Je,Im=Math.cos(70*es.DEG2RAD),ar=class extends on{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",st),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kc),n.update(),r=s.NONE},this.update=(function(){let A=new O,tt=new Qe().setFromUnitVectors(t.up,new O(0,1,0)),ht=tt.clone().invert(),rt=new O,wt=new Qe,kt=new O,Gt=2*Math.PI;return function(at=null){let I=n.object.position;A.copy(I).sub(n.target),A.applyQuaternion(tt),a.setFromVector3(A),n.autoRotate&&r===s.NONE&&H(M(at)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ct=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(ct)&&isFinite(lt)&&(ct<-Math.PI?ct+=Gt:ct>Math.PI&&(ct-=Gt),lt<-Math.PI?lt+=Gt:lt>Math.PI&&(lt-=Gt),ct<=lt?a.theta=Math.max(ct,Math.min(lt,a.theta)):a.theta=a.theta>(ct+lt)/2?Math.max(ct,a.theta):Math.min(lt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=D(a.radius):a.radius=D(a.radius*l),A.setFromSpherical(a),A.applyQuaternion(ht),I.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Dt=!1;if(n.zoomToCursor&&T){let At=null;if(n.object.isPerspectiveCamera){let jt=A.length();At=D(jt*l);let Qt=jt-At;n.object.position.addScaledVector(E,Qt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let jt=new O(P.x,P.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Dt=!0;let Qt=new O(P.x,P.y,0);Qt.unproject(n.object),n.object.position.sub(Qt).add(jt),n.object.updateMatrixWorld(),At=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;At!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(At).add(n.object.position):(rr.origin.copy(n.object.position),rr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(rr.direction))<Im?t.lookAt(n.target):(Qc.setFromNormalAndCoplanarPoint(n.object.up,n.target),rr.intersectPlane(Qc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Dt=!0);return l=1,T=!1,Dt||rt.distanceToSquared(n.object.position)>o||8*(1-wt.dot(n.object.quaternion))>o||kt.distanceToSquared(n.target)>0?(n.dispatchEvent(Kc),rt.copy(n.object.position),wt.copy(n.object.quaternion),kt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pt),n.domElement.removeEventListener("pointerdown",mt),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new ts,c=new ts,l=1,h=new O,u=new zt,p=new zt,f=new zt,g=new zt,_=new zt,m=new zt,d=new zt,v=new zt,x=new zt,E=new O,P=new zt,T=!1,C=[],$={};function M(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function w(A){let tt=Math.abs(A)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*tt)}function H(A){c.theta-=A}function F(A){c.phi-=A}let J=(function(){let A=new O;return function(ht,rt){A.setFromMatrixColumn(rt,0),A.multiplyScalar(-ht),h.add(A)}})(),R=(function(){let A=new O;return function(ht,rt){n.screenSpacePanning===!0?A.setFromMatrixColumn(rt,1):(A.setFromMatrixColumn(rt,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ht),h.add(A)}})(),U=(function(){let A=new O;return function(ht,rt){let wt=n.domElement;if(n.object.isPerspectiveCamera){let kt=n.object.position;A.copy(kt).sub(n.target);let Gt=A.length();Gt*=Math.tan(n.object.fov/2*Math.PI/180),J(2*ht*Gt/wt.clientHeight,n.object.matrix),R(2*rt*Gt/wt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(ht*(n.object.right-n.object.left)/n.object.zoom/wt.clientWidth,n.object.matrix),R(rt*(n.object.top-n.object.bottom)/n.object.zoom/wt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function V(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(A,tt){if(!n.zoomToCursor)return;T=!0;let ht=n.domElement.getBoundingClientRect(),rt=A-ht.left,wt=tt-ht.top,kt=ht.width,Gt=ht.height;P.x=rt/kt*2-1,P.y=-(wt/Gt)*2+1,E.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function D(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function Z(A){u.set(A.clientX,A.clientY)}function K(A){L(A.clientX,A.clientX),d.set(A.clientX,A.clientY)}function ut(A){g.set(A.clientX,A.clientY)}function X(A){p.set(A.clientX,A.clientY),f.subVectors(p,u).multiplyScalar(n.rotateSpeed);let tt=n.domElement;H(2*Math.PI*f.x/tt.clientHeight),F(2*Math.PI*f.y/tt.clientHeight),u.copy(p),n.update()}function et(A){v.set(A.clientX,A.clientY),x.subVectors(v,d),x.y>0?V(w(x.y)):x.y<0&&q(w(x.y)),d.copy(v),n.update()}function ft(A){_.set(A.clientX,A.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_),n.update()}function bt(A){L(A.clientX,A.clientY),A.deltaY<0?q(w(A.deltaY)):A.deltaY>0&&V(w(A.deltaY)),n.update()}function St(A){let tt=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),tt=!0;break}tt&&(A.preventDefault(),n.update())}function Nt(A){if(C.length===1)u.set(A.pageX,A.pageY);else{let tt=Xt(A),ht=.5*(A.pageX+tt.x),rt=.5*(A.pageY+tt.y);u.set(ht,rt)}}function Lt(A){if(C.length===1)g.set(A.pageX,A.pageY);else{let tt=Xt(A),ht=.5*(A.pageX+tt.x),rt=.5*(A.pageY+tt.y);g.set(ht,rt)}}function Et(A){let tt=Xt(A),ht=A.pageX-tt.x,rt=A.pageY-tt.y,wt=Math.sqrt(ht*ht+rt*rt);d.set(0,wt)}function Vt(A){n.enableZoom&&Et(A),n.enablePan&&Lt(A)}function z(A){n.enableZoom&&Et(A),n.enableRotate&&Nt(A)}function Kt(A){if(C.length==1)p.set(A.pageX,A.pageY);else{let ht=Xt(A),rt=.5*(A.pageX+ht.x),wt=.5*(A.pageY+ht.y);p.set(rt,wt)}f.subVectors(p,u).multiplyScalar(n.rotateSpeed);let tt=n.domElement;H(2*Math.PI*f.x/tt.clientHeight),F(2*Math.PI*f.y/tt.clientHeight),u.copy(p)}function _t(A){if(C.length===1)_.set(A.pageX,A.pageY);else{let tt=Xt(A),ht=.5*(A.pageX+tt.x),rt=.5*(A.pageY+tt.y);_.set(ht,rt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),U(m.x,m.y),g.copy(_)}function Tt(A){let tt=Xt(A),ht=A.pageX-tt.x,rt=A.pageY-tt.y,wt=Math.sqrt(ht*ht+rt*rt);v.set(0,wt),x.set(0,Math.pow(v.y/d.y,n.zoomSpeed)),V(x.y),d.copy(v);let kt=(A.pageX+tt.x)*.5,Gt=(A.pageY+tt.y)*.5;L(kt,Gt)}function yt(A){n.enableZoom&&Tt(A),n.enablePan&&_t(A)}function It(A){n.enableZoom&&Tt(A),n.enableRotate&&Kt(A)}function mt(A){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",y)),gt(A),A.pointerType==="touch"?vt(A):k(A))}function S(A){n.enabled!==!1&&(A.pointerType==="touch"?ot(A):it(A))}function y(A){Ct(A),C.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(jc),r=s.NONE}function k(A){let tt;switch(A.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case jn.DOLLY:if(n.enableZoom===!1)return;K(A),r=s.DOLLY;break;case jn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;ut(A),r=s.PAN}else{if(n.enableRotate===!1)return;Z(A),r=s.ROTATE}break;case jn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;Z(A),r=s.ROTATE}else{if(n.enablePan===!1)return;ut(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Fa)}function it(A){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(A);break;case s.DOLLY:if(n.enableZoom===!1)return;et(A);break;case s.PAN:if(n.enablePan===!1)return;ft(A);break}}function nt(A){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(A.preventDefault(),n.dispatchEvent(Fa),bt(A),n.dispatchEvent(jc))}function st(A){n.enabled===!1||n.enablePan===!1||St(A)}function vt(A){switch(Q(A),C.length){case 1:switch(n.touches.ONE){case Qn.ROTATE:if(n.enableRotate===!1)return;Nt(A),r=s.TOUCH_ROTATE;break;case Qn.PAN:if(n.enablePan===!1)return;Lt(A),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(A),r=s.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(A),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Fa)}function ot(A){switch(Q(A),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Kt(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;_t(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;It(A),n.update();break;default:r=s.NONE}}function pt(A){n.enabled!==!1&&A.preventDefault()}function gt(A){C.push(A.pointerId)}function Ct(A){delete $[A.pointerId];for(let tt=0;tt<C.length;tt++)if(C[tt]==A.pointerId){C.splice(tt,1);return}}function Q(A){let tt=$[A.pointerId];tt===void 0&&(tt=new zt,$[A.pointerId]=tt),tt.set(A.pageX,A.pageY)}function Xt(A){let tt=A.pointerId===C[0]?C[1]:C[0];return $[tt]}n.domElement.addEventListener("contextmenu",pt),n.domElement.addEventListener("pointerdown",mt),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",nt,{passive:!1}),this.update()}};var ne={muscle:11680306,tendonIn:14937072,tendon:14279658,bone:14468500,cartOn:6269139,cart:6269139,teeth:16052970,lig:7323560,capsule:10850256,fascia:12175315,bursa:15776058,origin:14698558,insertion:3112928,skin:14264716,select:16765503,sclera:15855334,iris:4862756,hair:2760988},Um=["muscle","tendon","bone","cart","lig","eye","hair"],or=class{constructor(t,e){this.m=e,this.canvas=t,(this.renderer=new Ji({canvas:t,antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})).setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new $s,this.camera=new Le(26,1,5,3e3),this.scene.add(this.camera),this.scene.add(new tr(16777215,5525580,1.15));let s=new Qi(16777215,1.9);s.position.set(-.55,.75,1),this.camera.add(s);let r=new Qi(14674175,.55);r.position.set(.9,-.2,.6),this.camera.add(r),this.controls=new ar(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.rotateSpeed=.8,this.controls.zoomSpeed=.9,this.controls.addEventListener("change",()=>this.req()),this.layers={skin:0,muscle:!0,tendon:!0,fascia:!1,lig:!0,bone:!0,cart:!0,bursa:!1,ins:!1,eye:!0,hair:!1},this.sideMode="all",this.outline=!0,this.hidden=new Set,this.isolate=null,this.selected=null,this.uOutline={value:.07},this.build(),this.need=!0,this.tick=this.tick.bind(this),requestAnimationFrame(this.tick),new ResizeObserver(()=>this.resize()).observe(t.parentElement),this.resize()}req(){this.need=!0}tick(){requestAnimationFrame(this.tick),(this.controls.update()||this.need)&&(this.need=!1,this.renderer.render(this.scene,this.camera))}resize(){let t=this.canvas.parentElement,e=t.clientWidth,n=t.clientHeight;!e||!n||(this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.req())}setBackground(t){this.scene.background=new Yt(t),this.req()}build(){let t=this.m,e=t.NV,n=new Yt,s=new Yt,r=this.col=new Uint8Array(e*3),o=f=>(n.setHex(f),[n.r,n.g,n.b]),a={muscle:o(ne.muscle),tin:o(ne.tendonIn),tendon:o(ne.tendon),bone:o(ne.bone),cart:o(ne.cart),teeth:o(ne.teeth),lig:o(ne.lig),capsule:o(ne.capsule),fascia:o(ne.fascia),bursa:o(ne.bursa),origin:o(ne.origin),insertion:o(ne.insertion),sclera:o(ne.sclera),iris:o(ne.iris),hair:o(ne.hair)};for(let f of t.parts){let g=(f.i*2654435761>>>0)/4294967296,_=f.t===0?.86+.26*g:f.t===2?.95+.08*g:f.t===9||f.t===11?1:.94+.1*g,m=f.t===0?a.muscle:f.t===1?a.tendon:f.t===2?a.bone:f.t===3?a.cart:f.t===4?a.teeth:f.t===5?a.lig:f.t===6?a.capsule:f.t===7?a.fascia:f.t===8?a.bursa:f.t===9?f.en==="Iris"?a.iris:a.sclera:f.t===11?a.hair:f.kind===1?a.origin:a.insertion,d=f.t===0?a.tin:f.t===2?a.cart:null;for(let v=f.v0;v<f.v0+f.nv;v++){let x=d?t.MIX[v]/255:0;for(let E=0;E<3;E++){let P=m[E]*_*(1-x)+(d?d[E]*x:0);r[v*3+E]=Math.min(255,Math.round(P*255))}}}this.col0=r.slice(),this.aPos=new oe(t.pos,3),this.aNrm=new oe(t.nrm,3),this.aCol=new oe(r,3,!0);let c=()=>{let f=new De;return f.setAttribute("position",this.aPos),f.setAttribute("normal",this.aNrm),f.setAttribute("color",this.aCol),f.setIndex(new oe(new Uint32Array(3),1)),f},l=(f,g)=>(f.customProgramCacheKey=()=>g,f.onBeforeCompile=_=>{_.fragmentShader=_.fragmentShader.replace("#include <dithering_fragment>",`float fr = pow(clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 0.55);
 gl_FragColor.rgb *= mix(0.5, 1.0, fr);
#include <dithering_fragment>`)},f);this.G={};let h=f=>l(new vn({vertexColors:!0,roughness:.58,metalness:0,side:Ie,...f}),"std"+JSON.stringify(f));this.G.opaque=new ue(c(),h({}));let u=new Un({color:1707275,side:Ee});u.customProgramCacheKey=()=>"outline",u.onBeforeCompile=f=>{f.uniforms.uOutline=this.uOutline,f.vertexShader=`uniform float uOutline;
`+f.vertexShader.replace("#include <begin_vertex>","vec3 transformed = vec3(position) + normal * uOutline;")},this.G.outline=new ue(this.G.opaque.geometry,u),this.G.ins=new ue(c(),new vn({vertexColors:!0,roughness:.7,side:Ie,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),this.G.fascia=new ue(c(),new vn({vertexColors:!0,roughness:.5,side:Ie,transparent:!0,opacity:.5,depthWrite:!1})),this.G.fascia.renderOrder=3,this.G.bursa=new ue(c(),new vn({vertexColors:!0,roughness:.4,side:Ie,transparent:!0,opacity:.7,depthWrite:!1})),this.G.bursa.renderOrder=4;for(let f in this.G)this.G[f].frustumCulled=!1,this.scene.add(this.G[f]);let p=new De;this.sPos=new oe(t.spos,3),this.sNrm=new oe(t.snrm,3),p.setAttribute("position",this.sPos),p.setAttribute("normal",this.sNrm),p.setIndex(new oe(t.stri,1)),this.skinMat=l(new vn({color:ne.skin,roughness:.75,side:an}),"skin"),this.skin=new ue(p,this.skinMat),this.skin.frustumCulled=!1,this.skin.renderOrder=6,this.skinPre=new ue(p,new Un({colorWrite:!1,transparent:!0})),this.skinPre.frustumCulled=!1,this.skinPre.renderOrder=5,this.scene.add(this.skinPre,this.skin),this.marks=new gn,this.scene.add(this.marks),this.rebuild(),this.setSkin(0)}visible(t){return!(!this.layers[t.layer]||this.hidden.has(t.i)||this.m.sex==="F"&&t.male||this.isolate&&!this.isolate.has(t.i)||this.sideMode==="L"&&t.side===1||this.sideMode==="R"&&t.side===0)}rebuild(){let t=this.m,e={opaque:[],ins:[],fascia:[],bursa:[]};this.vis=new Uint8Array(t.parts.length);for(let n of t.parts)this.visible(n)&&(this.vis[n.i]=1,e[Um.includes(n.layer)?"opaque":n.layer].push(n));for(let n in e){let s=0;for(let c of e[n])s+=c.nt*3;let r=new Uint32Array(Math.max(3,s)),o=0;for(let c of e[n])r.set(t.idx.subarray(c.t0*3,(c.t0+c.nt)*3),o),o+=c.nt*3;let a=this.G[n].geometry;a.setIndex(new oe(r,1)),a.setDrawRange(0,s),this.G[n].visible=s>0}this.G.outline.visible=this.outline&&this.G.opaque.visible,this.req()}setLayer(t,e){this.layers[t]=e,t==="skin"?this.setSkin(e):this.rebuild()}setSkin(t){this.layers.skin=t;let e=t>.01,n=t>.985,s=t>.5;s!==this.layers.hair&&(this.layers.hair=s,this.rebuild()),this.skin.visible=e,this.skinPre.visible=e&&!n,this.skinMat.transparent=!n,this.skinMat.opacity=n?1:t,this.skinMat.depthWrite=n,this.skinMat.depthFunc=n?Yn:Yn,this.skinMat.needsUpdate=!0,this.req()}setOutline(t){this.outline=t,this.G.outline.visible=t&&this.G.opaque.visible,this.req()}refresh(){this.placeOverlays(),this.aPos.needsUpdate=!0,this.aNrm.needsUpdate=!0,this.sPos.needsUpdate=!0,this.sNrm.needsUpdate=!0,this.uOutline.value=.07*this.m.s,this.req()}select(t){let e=this.col,n=this.col0,s=new Yt(ne.select);if(this.selected){let r=this.selected;e.set(n.subarray(r.v0*3,(r.v0+r.nv)*3),r.v0*3)}if(this.selected=t||null,t)for(let r=t.v0;r<t.v0+t.nv;r++)e[r*3]=Math.round((n[r*3]/255*.3+s.r*.7)*255),e[r*3+1]=Math.round((n[r*3+1]/255*.3+s.g*.7)*255),e[r*3+2]=Math.round((n[r*3+2]/255*.3+s.b*.7)*255);this.aCol.needsUpdate=!0,this.req()}view(t){let e=this.m.s,n=this.m.lm.H0*e,s=new O(0,n*.5,0),r=Math.tan(es.degToRad(this.camera.fov/2)),o=t==="left"||t==="right",a=Math.max(n*.54/r,(o?20:37)*e/(r*this.camera.aspect)),c={front:[0,0,1],back:[0,0,-1],left:[1,0,0],right:[-1,0,0]}[t]||[0,0,1];this.controls.target.copy(s),this.camera.position.set(s.x+c[0]*a,s.y+c[1]*a,s.z+c[2]*a),this.controls.update(),this.req()}focus(t){let e=this.m.box.subarray(t.i*6,t.i*6+6),n=new O((e[0]+e[3])/2,(e[1]+e[4])/2,(e[2]+e[5])/2),s=Math.max(6,Math.hypot(e[3]-e[0],e[4]-e[1],e[5]-e[2])/2),r=this.camera.position.clone().sub(this.controls.target).normalize(),o=s*2.4/Math.tan(es.degToRad(this.camera.fov/2));this.controls.target.copy(n),this.camera.position.copy(n).addScaledVector(r,o),this.controls.update(),this.req()}ray(t,e){let n=this.canvas.getBoundingClientRect(),s=new zt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new er;return r.setFromCamera(s,this.camera),r.ray}pick(t,e,n){let s=this.ray(t,e),r=s.origin,o=s.direction,a=this.m,c=1/0,l=null,h=(u,p,f,g)=>{let _=u[f]-u[p],m=u[f+1]-u[p+1],d=u[f+2]-u[p+2],v=u[g]-u[p],x=u[g+1]-u[p+1],E=u[g+2]-u[p+2],P=o.y*E-o.z*x,T=o.z*v-o.x*E,C=o.x*x-o.y*v,$=_*P+m*T+d*C;if($>-1e-9&&$<1e-9)return 1/0;let M=1/$,w=r.x-u[p],H=r.y-u[p+1],F=r.z-u[p+2],J=(w*P+H*T+F*C)*M;if(J<0||J>1)return 1/0;let R=H*d-F*m,U=F*_-w*d,V=w*m-H*_,q=(o.x*R+o.y*U+o.z*V)*M;if(q<0||J+q>1)return 1/0;let L=(v*R+x*U+E*V)*M;return L>.01?L:1/0};if(n!=="only"){let u=[];for(let p of a.parts){if(!this.vis[p.i]||p.t===11)continue;let f=a.box,g=p.i*6,_=0,m=1/0,d=!0;for(let v=0;v<3;v++){let x=v===0?r.x:v===1?r.y:r.z,E=v===0?o.x:v===1?o.y:o.z,P=(f[g+v]-x)/E,T=(f[g+3+v]-x)/E;if(_=Math.max(_,Math.min(P,T)),m=Math.min(m,Math.max(P,T)),_>m){d=!1;break}}d&&u.push([_,p])}u.sort((p,f)=>p[0]-f[0]);for(let[p,f]of u){if(p>c)break;let g=a.idx,_=a.pos;for(let m=f.t0*3,d=(f.t0+f.nt)*3;m<d;m+=3){let v=h(_,g[m]*3,g[m+1]*3,g[m+2]*3);v<c&&(c=v,l={part:f})}}}if(n&&this.layers.skin>.01){let u=a.stri,p=a.spos,f=1/0,g=-1;for(let _=0,m=a.NTs*3;_<m;_+=3){let d=h(p,u[_]*3,u[_+1]*3,u[_+2]*3);d<f&&(f=d,g=_)}f<1/0&&(n==="only"||f<c||this.layers.skin>.6)&&(c=f,l={skin:!0,tri:g/3})}return l&&(l.point=new O(r.x+o.x*c,r.y+o.y*c,r.z+o.z*c)),l}setOverlays(t){if(this.ovGroup&&(this.scene.remove(this.ovGroup),this.ovGroup.traverse(n=>{n.geometry&&n.geometry.dispose()})),this.ovGroup=null,this.ov={},!t){this.req();return}let e=new gn;e.renderOrder=9;for(let n of t){let s=new De;s.setAttribute("position",new oe(n.V,3)),s.setIndex(new oe(n.F,1)),s.computeVertexNormals();let r=/體表/.test(n.name),o=new vn({color:n.color,roughness:.6,transparent:!0,opacity:r?.16:.5,depthWrite:!1,side:Ie}),a=new ue(s,o);a.renderOrder=r?11:10,a.visible=!1,a.frustumCulled=!1,e.add(a),this.ov[n.name]=a}this.ovGroup=e,this.scene.add(e),this.placeOverlays(),this.req()}placeOverlays(){if(!this.ovGroup||!this.m.ct)return;let t=this.m.s,e=this.m.anchorWarp();this.ovGroup.position.set(e[0]*t,e[1]*t,e[2]*t),this.req()}showOverlay(t,e){this.ov&&this.ov[t]&&(this.ov[t].visible=e,this.req())}clearMarks(){for(let t of[...this.marks.children])this.marks.remove(t),t.geometry&&t.geometry.dispose();this.req()}addLine(t,e,n){let s=new De().setFromPoints(t.map(a=>a.isVector3?a:new O(a[0],a[1],a[2]))),r=new $i({color:e,depthTest:!1,transparent:!0}),o=n?new Ks(s,r):new Ki(s,r);o.renderOrder=20,this.marks.add(o),this.req()}addDot(t,e){let n=new ue(new js(.55*this.m.s,12,10),new Un({color:e,depthTest:!1,transparent:!0}));n.position.copy(t),n.renderOrder=21,this.marks.add(n),this.req()}png(){return this.renderer.render(this.scene,this.camera),new Promise(t=>this.canvas.toBlob(t,"image/png"))}};var j=(i,t=document)=>t.querySelector(i),N=(i,t={},...e)=>{let n=document.createElement(i);for(let s in t)s==="class"?n.className=t[s]:s.startsWith("on")?n.addEventListener(s.slice(2),t[s]):s==="html"?n.innerHTML=t[s]:t[s]!==!1&&t[s]!=null&&n.setAttribute(s,t[s]);for(let s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n},se=i=>(Math.round(i*10)/10).toFixed(1),Rt={c:{id:"",sex:"M",H:171,W:75,chest:104,waist:82,hip:95,under:0,bf:0,leg:0,legAuto:!1,arm:1,shoulder:1,auto:!0,muscle:0,off:new Array(11).fill(0)},res:null,meas:null,tool:null,pts:[],last:null},Ft,Mt,tl=0,il={H:[140,200,.5],W:[35,160,.5],chest:[65,150,.5],waist:[50,150,.5],hip:[65,150,.5]},sl=[["muscle","\u808C\u8089",ne.muscle],["tendon","\u808C\u8171\u3001\u8171\u819C\u3001\u652F\u6301\u5E36",ne.tendon],["fascia","\u6DF1\u7B4B\u819C\uFF08\u5305\u8986\u808C\u8089\uFF0C\u534A\u900F\u660E\uFF09",ne.fascia],["lig","\u97CC\u5E36",ne.lig],["bone","\u9AA8\u9ABC",ne.bone],["cart","\u8EDF\u9AA8\u3001\u690E\u9593\u76E4\u3001\u534A\u6708\u677F",ne.cart],["bursa","\u95DC\u7BC0\u56CA\u3001\u6ED1\u6DB2\u56CA\u8207\u8171\u9798\uFF08\u534A\u900F\u660E\uFF09",ne.capsule],["ins","\u808C\u8089\u8D77\u9EDE\uFF08\u7D05\uFF09\u8207\u6B62\u9EDE\uFF08\u85CD\uFF09",ne.origin]],Dm=i=>"#"+i.toString(16).padStart(6,"0");async function Nm(){let i=j("#lbar"),t=j("#lmsg");try{Ft=await Qa(()=>{t.textContent="\u89E3\u58D3\u7E2E\u6A21\u578B\u8CC7\u6599\u2026"}),t.textContent="\u5EFA\u7ACB\u6A21\u578B\u2026",await new Promise(r=>setTimeout(r,30)),Mt=new or(j("#cv"),Ft),rl();let e=Ft.lm;Ft.s=1,Ft.setG(0),Ft.buildLUT(),Ft.deformSkin(Ft.spos,null,!1);let n=Ft.skinVolume(Ft.spos),s={M:.9007*Ft.phi0*n+1.1*(n*(1-Ft.phi0)-Ft.air)};Object.assign(Rt.c,{H:Math.round(e.H0),W:Math.round(s.M),chest:Math.round(e.girth0[0]),waist:Math.round(e.girth0[1]),hip:Math.round(e.girth0[2])}),Rt.c.leg=Math.round(Ft.r0*1e3)/10,Rt.base={...Rt.c},Fm(),lr("surface"),ei(),Mt.view("front"),j("#loading").hidden=!0,window.__app={M:Ft,V:Mt,state:Rt,update:ei,setCase:Om,preset:lr,select:is,tap:ol,setTool:cr,loadCT:Wa,ready:!0},Zm()}catch(e){t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+(e&&e.message?e.message:e),console.error(e)}}function rl(){let i=matchMedia("(prefers-color-scheme: dark)").matches;Mt.setBackground(i?1316636:15330802)}matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>Mt&&rl());function en(i=140){clearTimeout(tl),j("#busy").hidden=!1,tl=setTimeout(ei,i)}function ei(){let i=Rt.c,t=performance.now(),e=Rt.res=Ft.solve({...i,leg:i.leg/100}),n=[Ft.s,e.kf.C,e.kf.W,e.kf.H,i.sex,i.leg,i.arm,i.shoulder].join(",");if(Rt.sexShown!==i.sex&&(Rt.sexShown=i.sex,Mt.rebuild()),Ft.apply(n!==Rt.last),Rt.last=n,Mt.refresh(),Rt.meas=Ft.measure(),Rt.ms=Math.round(performance.now()-t),Bm(),zm(),km(),Mt.selected&&al(Mt.selected),j("#busy").hidden=!0,i.auto){let s=j("#f-muscle");s&&(s.value=Math.round(e.gG*100),j("#v-muscle").textContent=ns(e.gG))}Ft.ctOn()&&i.legAuto&&(j("#p-leg").value=(e.leg*100).toFixed(1),j("#pv-leg").textContent=(e.leg*100).toFixed(1)+"%")}var ns=i=>(i>=0?"+":"")+Math.round(i*100)+"%\u3000"+(i<-.5?"\u660E\u986F\u504F\u5C11":i<-.2?"\u504F\u5C11":i<.2?"\u4E00\u822C\uFF08\u6A21\u578B\u57FA\u6E96\uFF09":i<.6?"\u7D50\u5BE6":i<1?"\u767C\u9054":"\u975E\u5E38\u767C\u9054");function Om(i){Object.assign(Rt.c,i),Dn(),ei()}function Fm(){let i=Rt.c,t=(a,c,l)=>{let[h,u,p]=il[a],f=N("input",{type:"number",id:"n-"+a,min:h,max:u,step:p,value:i[a],inputmode:"decimal"}),g=N("input",{type:"range",id:"r-"+a,min:h,max:u,step:p,value:i[a]}),_=(m,d)=>{m=Math.min(u,Math.max(h,+m||h)),i[a]=m,d!==f&&(f.value=m),d!==g&&(g.value=m),en()};return f.addEventListener("change",()=>_(f.value,null)),g.addEventListener("input",()=>_(g.value,g)),N("div",{class:"row"},N("label",{for:"n-"+a},c),g,N("span",{class:"numw"},f,N("i",{},l)))},e=(a,c,l,h,u,p,f)=>{let g=()=>f?Math.round(i[a]*f):i[a],_=N("span",{class:"gv",id:"pv-"+a},g()+p);return N("div",{class:"row"},N("label",{},c),N("input",{type:"range",id:"p-"+a,min:l,max:h,step:u,value:g(),oninput:m=>{i[a]=f?m.target.value/f:+m.target.value,_.textContent=(+m.target.value).toFixed(u<1?1:0)+p,en(40)}}),_)};j("#t-case").append(N("div",{class:"row"},N("label",{},"\u500B\u6848\u4EE3\u865F"),N("input",{type:"text",id:"f-id",placeholder:"\u4F8B\uFF1AS-001",value:i.id,oninput:a=>{i.id=a.target.value}}),N("button",{class:"btn",onclick:Hm},"\u5132\u5B58")),N("div",{class:"row"},N("label",{},"\u5DF2\u5B58\u500B\u6848"),N("select",{id:"f-cases",onchange:Vm}),N("button",{class:"btn ghost",onclick:Gm},"\u522A\u9664")),N("div",{class:"row"},N("label",{},"\u6027\u5225"),N("div",{class:"seg",id:"f-sex"},N("button",{"data-v":"M",class:"on"},"\u7537"),N("button",{"data-v":"F"},"\u5973"))),N("p",{class:"note warn",id:"femnote",hidden:!0},"\u5973\u6027\u9AD4\u578B\u70BA\u7537\u6027\u89E3\u5256\u8CC7\u6599\u7684\u8FD1\u4F3C\u8B8A\u5F62\uFF1A\u80A9\u8207\u80F8\u5ED3\u8F03\u7A84\u3001\u9AA8\u76C6\u8F03\u5BEC\uFF1B\u4E0B\u80F8\u570D\u6C7A\u5B9A\u80F8\u5ED3\u5927\u5C0F\uFF0C\u4E0A\u80F8\u570D\u6C7A\u5B9A\u4E73\u623F\u9AD4\u7A4D\u3002\u9AA8\u76C6\u8207\u9871\u9AA8\u7684\u6027\u5225\u5DEE\u7570\u5C1A\u672A\u500B\u5225\u5EFA\u6A21\u3002"),t("H","\u8EAB\u9AD8","cm"),t("W","\u9AD4\u91CD","kg"),t("chest","\u80F8\u570D","cm"),t("waist","\u8170\u570D","cm"),t("hip","\u81C0\u570D","cm"),N("div",{class:"row",id:"row-under",hidden:!0},N("label",{for:"n-under"},"\u4E0B\u80F8\u570D"),N("span",{class:"dim",style:"flex:1"},"\u9078\u586B\u3002\u672A\u586B\u6642\u7531\u8170\u570D\u63A8\u4F30"),N("span",{class:"numw"},N("input",{type:"number",id:"n-under",min:55,max:140,step:.5,placeholder:"\u2014",inputmode:"decimal",onchange:a=>{let c=+a.target.value;i.under=c>=55&&c<=140?c:0,i.under||(a.target.value=""),en(20)}}),N("i",{},"cm"))),N("div",{class:"row"},N("label",{for:"n-bf"},"\u9AD4\u8102\u7387"),N("span",{class:"dim",style:"flex:1"},"\u9078\u586B\u3002\u6709 BIA \u6216 DXA \u5BE6\u6E2C\u503C\u6642\u8F38\u5165"),N("span",{class:"numw"},N("input",{type:"number",id:"n-bf",min:3,max:60,step:.1,placeholder:"\u2014",inputmode:"decimal",onchange:a=>{let c=+a.target.value;i.bf=c>=3&&c<=60?c:0,i.bf||(a.target.value=""),en(20)}}),N("i",{},"%"))),N("h3",{},"\u9AD4\u578B\u6BD4\u4F8B"),e("leg","\u817F\u9577",45,57,.1,"%"),e("arm","\u81C2\u9577",90,110,1,"%",100),e("shoulder","\u80A9\u5BEC",88,112,1,"%",100),N("p",{class:"note"},"\u817F\u9577\u70BA\u5927\u8F49\u5B50\u9AD8\u4F54\u8EAB\u9AD8\u7684\u6BD4\u4F8B\uFF0C\u8EAB\u9AD8\u4E0D\u8B8A\uFF0C\u817F\u8207\u4E0A\u8EAB\u6B64\u6D88\u5F7C\u9577\u3002\u81C2\u9577\u3001\u80A9\u5BEC\u70BA\u76F8\u5C0D\u57FA\u6E96\u7684\u767E\u5206\u6BD4\u3002"),N("h3",{},"\u808C\u8089\u767C\u9054\u7A0B\u5EA6"),N("label",{class:"chk"},N("input",{type:"checkbox",id:"f-auto",checked:i.auto?"":!1,onchange:a=>{i.auto=a.target.checked,j("#f-muscle").disabled=i.auto,!i.auto&&Rt.res&&(i.muscle=Math.round(Rt.res.gG*100)/100),en(20)}}),"\u7531\u9AD4\u91CD\u8207\u9AD4\u8102\u7387\u81EA\u52D5\u63A8\u4F30"),N("div",{class:"row"},N("label",{},"\u6574\u9AD4"),N("input",{type:"range",id:"f-muscle",min:-80,max:150,step:1,value:0,disabled:i.auto?"":!1,oninput:a=>{i.muscle=a.target.value/100,j("#v-muscle").textContent=ns(i.muscle),en(30)}})),N("div",{class:"val",id:"v-muscle"},ns(0)),N("p",{class:"note"},"\u81EA\u52D5\u6A21\u5F0F\uFF1A\u9AD4\u8102\u7387\u53D6\u5BE6\u6E2C\u503C\uFF0C\u672A\u586B\u6642\u4EE5\u8170\u570D\u8EAB\u9AD8\u6BD4\uFF08RFM\uFF09\u63A8\u4F30\uFF0C\u518D\u7531\u9AD4\u91CD\u53CD\u63A8\u808C\u8089\u91CF\u3002\u95DC\u9589\u5F8C\u53EF\u81EA\u884C\u62D6\u52D5\u3002\u5404\u90E8\u4F4D\u5728\u300C\u808C\u8089\u300D\u9801\u5206\u5225\u8ABF\u6574\uFF1B\u808C\u8179\u589E\u7C97\uFF0C\u808C\u8171\u8207\u8D77\u6B62\u9EDE\u4E0D\u52D5\u3002"),N("h3",{},"\u543B\u5408\u7D50\u679C"),N("div",{id:"fit"}),N("div",{class:"row"},N("button",{class:"btn ghost",onclick:()=>{Object.assign(i,Rt.base,{id:i.id,off:i.off}),Dn(),en(10)}},"\u56DE\u5230\u57FA\u6E96\u9AD4\u578B"))),j("#f-sex").addEventListener("click",a=>{let c=a.target.closest("button");if(!c)return;let l=i.sex;if(i.sex=c.dataset.v,l!==i.sex){let h=i.sex==="F"?{H:160,W:55,chest:86,waist:70,hip:93}:{...Rt.base};Object.assign(i,{H:h.H,W:h.W,chest:h.chest,waist:h.waist,hip:h.hip,bf:0,under:0})}Dn(),en(10)});let n=j("#t-muscle");n.append(N("p",{class:"note"},"\u4EE5\u6574\u9AD4\u7A0B\u5EA6\u70BA\u57FA\u6E96\uFF0C\u5404\u90E8\u4F4D\u518D\u52A0\u6E1B\u3002\u53F3\u6B04\u70BA\u8A72\u90E8\u4F4D\u76EE\u524D\u7684\u808C\u8089\u9AD4\u7A4D\uFF08\u5DE6\u53F3\u5408\u8A08\uFF09\u3002"));for(let a=1;a<=10;a++)n.append(N("div",{class:"row"},N("label",{},Di[a]),N("input",{type:"range",id:"g-"+a,min:-50,max:100,step:1,value:0,oninput:c=>{i.off[a]=c.target.value/100,j("#gv-"+a).textContent=(i.off[a]>=0?"+":"")+Math.round(i.off[a]*100)+"%",en(30)}}),N("span",{class:"gv",id:"gv-"+a},"+0%"),N("span",{class:"gl",id:"gl-"+a},"")));n.append(N("div",{class:"row"},N("button",{class:"btn ghost",onclick:()=>{i.off.fill(0),Dn(),en(10)}},"\u5404\u90E8\u4F4D\u6B78\u96F6")));let s=j("#t-layer");s.append(N("div",{class:"row"},N("label",{},"\u76AE\u819A"),N("input",{type:"range",id:"l-skin",min:0,max:100,step:1,value:0,oninput:a=>{Mt.setSkin(a.target.value/100),j("#lv-skin").textContent=a.target.value+"%",hr(null)}}),N("span",{class:"gv",id:"lv-skin"},"0%")));for(let[a,c,l]of sl)s.append(N("label",{class:"chk"},N("input",{type:"checkbox",id:"l-"+a,checked:Mt.layers[a]?"":!1,onchange:h=>{Mt.setLayer(a,h.target.checked),hr(null)}}),N("i",{class:"sw",style:"background:"+Dm(l)}),c));s.append(N("label",{class:"chk"},N("input",{type:"checkbox",id:"l-outline",checked:"",onchange:a=>Mt.setOutline(a.target.checked)}),"\u808C\u8089\u8207\u9AA8\u9ABC\u7684\u5206\u754C\u7DDA"),N("div",{class:"row"},N("label",{},"\u986F\u793A\u7BC4\u570D"),N("div",{class:"seg",id:"l-side"},N("button",{"data-v":"all",class:"on"},"\u5168\u8EAB"),N("button",{"data-v":"R"},"\u53F3\u534A"),N("button",{"data-v":"L"},"\u5DE6\u534A"))),N("div",{class:"row"},N("button",{class:"btn ghost",onclick:()=>{Mt.hidden.clear(),Mt.isolate=null,Mt.rebuild()}},"\u6062\u5FA9\u6240\u6709\u88AB\u96B1\u85CF\u7684\u7D50\u69CB")),N("p",{class:"note"},"\u984F\u8272\uFF1A\u808C\u8179\u7D05\u3001\u808C\u8171\u8207\u8171\u819C\u51B7\u767D\u3001\u9AA8\u9ABC\u7C73\u8272\u3001\u95DC\u7BC0\u8EDF\u9AA8\u85CD\u3001\u97CC\u5E36\u9752\u7DA0\u3001\u95DC\u7BC0\u56CA\u7D2B\u3002\u808C\u8179\u8207\u808C\u8171\u7684\u5206\u754C\u3001\u8D77\u6B62\u9EDE\u4F4D\u7F6E\u7686\u53D6\u81EA\u4F86\u6E90\u6A21\u578B\uFF0C\u975E\u63A8\u7B97\u3002"),N("p",{class:"note"},"\u6A21\u578B\u8CC7\u6599\uFF1A\u201CZ-Anatomy - The libre 3D atlas of anatomy - CC-BY-SA 4.0\u201D\uFF1B\u201CBodyParts3D - The Database Center for Life Science - CC-BY-SA 2.1 Japan\u201D\u3002\u672C\u5DE5\u5177\u5C0D\u539F\u59CB\u7DB2\u683C\u505A\u4E86\u6E1B\u9762\u8207\u53C3\u6578\u5316\u8B8A\u5F62\uFF0C\u884D\u751F\u7684\u6A21\u578B\u8CC7\u6599\u4F9D\u76F8\u540C\u6388\u6B0A\u91CB\u51FA\u3002\u4F9B\u7814\u7A76\u8207\u6559\u5B78\u53C3\u8003\uFF0C\u975E\u91AB\u7642\u5668\u6750\u3002")),j("#l-side").addEventListener("click",a=>{let c=a.target.closest("button");if(c){for(let l of j("#l-side").children)l.classList.toggle("on",l===c);Mt.sideMode=c.dataset.v,Mt.rebuild()}}),j("#t-meas").append(N("div",{class:"row tools"},N("button",{class:"btn",id:"tl-dist",onclick:()=>cr("dist")},"\u91CF\u8DDD\u96E2"),N("button",{class:"btn",id:"tl-girth",onclick:()=>cr("girth")},"\u91CF\u570D\u5EA6"),N("button",{class:"btn ghost",onclick:()=>{cr(null),Mt.clearMarks(),j("#toolout").textContent=""}},"\u6E05\u9664")),N("div",{class:"val",id:"toolout"}),N("div",{id:"mtable"}),N("p",{class:"note"},"\u7B49\u7D1A A\uFF1A\u76F4\u63A5\u8F38\u5165\u6216\u5DF2\u543B\u5408\u8F38\u5165\u503C\u3002B\uFF1A\u5728\u6A21\u578B\u5E7E\u4F55\u4E0A\u91CF\u5F97\u3002C\uFF1A\u7531\u6A21\u578B\u9AD4\u7A4D\u8207\u5BC6\u5EA6\u5047\u8A2D\u63A8\u4F30\u3002"),N("div",{class:"row"},N("button",{class:"btn",onclick:Wm},"\u532F\u51FA\u91CF\u6E2C CSV"),N("button",{class:"btn",onclick:Xm},"\u532F\u51FA\u500B\u6848 JSON"),N("button",{class:"btn",onclick:qm},"\u532F\u51FA\u756B\u9762 PNG"))),j("#t-list").append(N("div",{class:"row"},N("input",{type:"search",id:"s-q",placeholder:"\u641C\u5C0B\u4E2D\u6587\u6216\u82F1\u6587\u540D\u7A31\uFF0C\u4F8B\uFF1A\u80A1\u76F4\u808C\u3001ACL\u3001patella",oninput:Ba}),N("select",{id:"s-t",onchange:Ba},N("option",{value:""},"\u5168\u90E8\u985E\u5225"),...[0,1,2,3,5,6,7,8].map(a=>N("option",{value:a},as[a])))),N("div",{id:"slist"})),Ba(),Ha(),Ym(),j("#tabs").addEventListener("click",a=>{let c=a.target.closest("button[data-t]");if(c){for(let l of j("#tabs").querySelectorAll("button[data-t]"))l.classList.toggle("on",l===c);for(let l of document.querySelectorAll(".tab"))l.hidden=l.id!=="t-"+c.dataset.t;j("#panel").classList.remove("min")}}),j("#collapse").addEventListener("click",()=>j("#panel").classList.toggle("min")),j("#views").addEventListener("click",a=>{let c=a.target.closest("button");c&&Mt.view(c.dataset.v)}),j("#preset").addEventListener("click",a=>{let c=a.target.closest("button");c&&lr(c.dataset.v)});let r=j("#cv"),o=null;r.addEventListener("pointerdown",a=>{o={x:a.clientX,y:a.clientY,t:performance.now(),id:a.pointerId}}),r.addEventListener("pointerup",a=>{if(!o||o.id!==a.pointerId)return;let c=Math.hypot(a.clientX-o.x,a.clientY-o.y),l=performance.now()-o.t;o=null,c<7&&l<500&&ol(a.clientX,a.clientY)}),j("#i-hide").addEventListener("click",()=>{let a=Mt.selected;if(a){for(let c of el(a))Mt.hidden.add(c.i);is(null),Mt.rebuild()}}),j("#i-solo").addEventListener("click",()=>{let a=Mt.selected;a&&(Mt.isolate?(Mt.isolate=null,j("#i-solo").textContent="\u53EA\u770B\u9019\u500B"):(Mt.isolate=new Set(el(a).map(c=>c.i)),j("#i-solo").textContent="\u986F\u793A\u5176\u4ED6"),Mt.rebuild())}),j("#i-focus").addEventListener("click",()=>Mt.selected&&Mt.focus(Mt.selected)),j("#i-close").addEventListener("click",()=>is(null))}var el=i=>Ft.parts.filter(t=>t.en===i.en&&t.t===i.t);function Dn(){let i=Rt.c;for(let t in il)j("#n-"+t).value=i[t],j("#r-"+t).value=i[t];for(let t of j("#f-sex").children)t.classList.toggle("on",t.dataset.v===i.sex);j("#femnote").hidden=i.sex!=="F",j("#row-under").hidden=i.sex!=="F",j("#n-under").value=i.under>0?i.under:"",document.querySelector("label[for=n-chest]").textContent=i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",j("#p-leg").value=i.leg,j("#pv-leg").textContent=(+i.leg).toFixed(1)+"%",j("#p-arm").value=Math.round(i.arm*100),j("#pv-arm").textContent=Math.round(i.arm*100)+"%",j("#p-shoulder").value=Math.round(i.shoulder*100),j("#pv-shoulder").textContent=Math.round(i.shoulder*100)+"%",j("#f-auto").checked=i.auto,j("#f-muscle").disabled=i.auto,j("#f-muscle").value=Math.round(i.muscle*100),j("#v-muscle").textContent=ns(i.muscle),j("#f-id").value=i.id||"",j("#n-bf").value=i.bf>0?i.bf:"";for(let t=1;t<=10;t++)j("#g-"+t).value=Math.round(i.off[t]*100),j("#gv-"+t).textContent=(i.off[t]>=0?"+":"")+Math.round(i.off[t]*100)+"%"}function lr(i){let t={surface:[1,1,1,1],xray:[.38,1,1,1],muscle:[0,1,1,1],bone:[0,0,0,1]}[i];if(t){Mt.layers.muscle=!!t[1],Mt.layers.tendon=!!t[2],Mt.layers.fascia=!1,Mt.layers.bone=!0,Mt.layers.cart=!0,Mt.layers.lig=!0,Mt.rebuild(),Mt.setSkin(t[0]),j("#l-skin").value=Math.round(t[0]*100),j("#lv-skin").textContent=Math.round(t[0]*100)+"%";for(let[e]of sl)j("#l-"+e).checked=!!Mt.layers[e];hr(i)}}function hr(i){for(let t of j("#preset").children)t.classList.toggle("on",t.dataset.v===i)}function Bm(){let i=Rt.c,t=Rt.res,e=Rt.meas,n=i.W/(i.H/100)**2,s=(l,h,u,p,f)=>{let g=h-u,_=Math.abs(g)<=(p==="kg"?.3:.4);return N("div",{class:"fitrow"+(_?"":" off")},N("span",{},l),N("b",{},se(h)+" "+p),N("span",{class:"dim"},(f||"\u8F38\u5165")+" "+se(u)),N("span",{class:"tag"},_?"\u543B\u5408":(g>0?"+":"")+se(g)))},r=l=>{let h=Math.round((t.kf[l]/t.k0[l]-1)*100);return(h>=0?"+":"")+h+"%"},o=[];Math.abs(t.mass.M-i.W)>.3&&o.push(`\u6A21\u578B\u9AD4\u91CD ${se(t.mass.M)} kg\uFF0C\u8207\u8F38\u5165\u5DEE ${se(t.mass.M-i.W)} kg\uFF1A\u9019\u7D44\u8EAB\u9AD8\u3001\u4E09\u570D\u3001\u9AD4\u91CD\u8207\u808C\u8089\u91CF\u7684\u7D44\u5408\u8D85\u51FA\u53EF\u8ABF\u7BC4\u570D\uFF0C\u4E09\u570D\u512A\u5148\u543B\u5408\u3002`),t.note.g&&o.push(t.note.g<0?"\u808C\u8089\u91CF\u63A8\u4F30\u5DF2\u9054\u4E0B\u9650\u3002":"\u808C\u8089\u91CF\u63A8\u4F30\u5DF2\u9054\u4E0A\u9650\u3002"),t.note.f&&o.push(t.note.f<0?"\u76AE\u4E0B\u8102\u80AA\u5C64\u5DF2\u9054\u4E0B\u9650\u3002":"\u76AE\u4E0B\u8102\u80AA\u5C64\u5DF2\u9054\u4E0A\u9650\u3002"),i.auto&&t.bfPrior!=null&&Math.abs(t.mass.bf-t.bfPrior)>1.5&&o.push(`\u76EE\u6A19\u9AD4\u8102\u7387 ${se(t.bfPrior)}%\uFF08${t.bfSrc}\uFF09\u7121\u6CD5\u5B8C\u5168\u9054\u6210\uFF0C\u6A21\u578B\u70BA ${se(t.mass.bf)}%\u3002`);let a=l=>t.ct&&t.ct.band[l]>.5,c=(l,h)=>N("div",{class:"fitrow"},N("span",{},l),N("b",{},se(h)+" cm"),N("span",{class:"dim"},"\u7531 CT \u6C7A\u5B9A\uFF08\u4EF0\u81E5\uFF09"),N("span",{class:"tag"},"CT"));j("#fit").replaceChildren(a("C")?c(i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",e.chest):s(i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",e.chest,i.chest,"cm"),...i.sex==="F"&&!a("C")?[s("\u4E0B\u80F8\u570D",e.under,t.under,"cm",i.under>0?"\u8F38\u5165":"\u63A8\u4F30")]:[],a("W")?c("\u8170\u570D",e.waist):s("\u8170\u570D",e.waist,i.waist,"cm"),a("H")?c("\u81C0\u570D",e.hip):s("\u81C0\u570D",e.hip,i.hip,"cm"),s("\u9AD4\u91CD",t.mass.M,i.W,"kg"),N("div",{class:"fitrow"},N("span",{},"BMI"),N("b",{},se(n)),N("span",{class:"dim"},"\u9AD4\u8102\u7387"+(i.auto?`\uFF08${t.bfSrc}\uFF09`:"\uFF08\u7531\u9AD4\u91CD\u53CD\u63A8\uFF09")),N("b",{},se(t.mass.bf)+" %")),N("p",{class:"note"},`\u76AE\u4E0B\u8102\u80AA\u5C64\u70BA\u57FA\u6E96\u7684 ${t.f.toFixed(2)} \u500D\uFF1B\u8EC0\u5E79\u5BEC\u6DF1\u76F8\u5C0D\u57FA\u6E96\uFF1A\u80F8\u5ED3 ${r("C")}\u3001\u8179\u90E8 ${r("W")}\u3001\u9AA8\u76C6 ${r("H")}\u3002`+(i.sex==="F"?`\u4E0A\u4E0B\u80F8\u570D\u5DEE ${se(e.chest-e.under)} cm`+(i.under>0?"\u3002":"\uFF08\u4E0B\u80F8\u570D\u70BA\u63A8\u4F30\u503C\uFF09\u3002"):"")+`\u817F\u6BB5 \xD7${t.legScale.toFixed(3)}\u3001\u4E0A\u8EAB \xD7${t.upScale.toFixed(3)}\u3002`),...o.map(l=>N("p",{class:"note warn"},l))),j("#status").textContent=`${i.sex==="F"?"\u5973":"\u7537"}\u3000${se(i.H)} cm\u3000${se(i.W)} kg\u3000\u80F8 ${se(e.chest)}\u3000\u8170 ${se(e.waist)}\u3000\u81C0 ${se(e.hip)}`}function za(){let i=Rt.c,t=Rt.meas,e=Rt.res;return[["\u8EAB\u9AD8",i.H,"cm","A","\u8F38\u5165\u503C"],["\u9AD4\u91CD",e.mass.M,"kg",Math.abs(e.mass.M-i.W)<=.3?"A":"C","\u6A21\u578B\u9AD4\u7A4D \xD7 \u7D44\u7E54\u5BC6\u5EA6"],[i.sex==="F"?"\u4E0A\u80F8\u570D":"\u80F8\u570D",t.chest,"cm","A","\u4E73\u982D\u9AD8\u5EA6\uFF0C\u4E0D\u542B\u4E0A\u80A2"],...i.sex==="F"?[["\u4E0B\u80F8\u570D",t.under,"cm",i.under>0?"A":"C",i.under>0?"\u4E73\u623F\u4E0B\u7DE3":"\u7531\u8170\u570D\u63A8\u4F30\u5F8C\u5EFA\u6A21"]]:[],["\u8170\u570D",t.waist,"cm","A","\u808B\u4E0B\u7DE3\u8207\u9AC2\u5D74\u4E4B\u9593\u6700\u7D30\u8655"],["\u81C0\u570D",t.hip,"cm","A","\u81C0\u90E8\u6700\u5F8C\u51F8\u8655"],["\u9AD4\u8102\u7387",e.mass.bf,"%",i.auto&&i.bf>0?"A":"C",i.auto?i.bf>0?"\u5BE6\u6E2C\u8F38\u5165":"\u8170\u570D\u8EAB\u9AD8\u6BD4 RFM \u63A8\u4F30":"\u7531\u9AD4\u91CD\u8207\u808C\u8089\u91CF\u53CD\u63A8"],["\u8EAB\u9AD4\u9AD4\u7A4D",e.mass.V,"L","B","\u76AE\u819A\u7DB2\u683C\u9AD4\u7A4D"],["\u808C\u8089\u7E3D\u9AD4\u7A4D",t.muscleVol,"L","B","\u6240\u6709\u808C\u8089\u7DB2\u683C\uFF08\u542B\u808C\u8171\uFF09"],["\u9AA8\u9ABC\u808C\u91CF",t.muscleVol*1.06,"kg","C","\u9AD4\u7A4D \xD7 1.06 kg/L"],["\u4E0A\u81C2\u570D",t.upperArm,"cm","B","\u80A9\u5CF0\u8207\u8098\u4E2D\u9EDE"],["\u524D\u81C2\u570D",t.forearm,"cm","B","\u6700\u7C97\u8655"],["\u5927\u817F\u570D",t.thigh,"cm","B","\u6703\u9670\u8207\u819D\u4E2D\u9EDE"],["\u5C0F\u817F\u570D",t.calf,"cm","B","\u6700\u7C97\u8655"],["\u80A9\u5BEC",t.biacromial,"cm","B","\u5DE6\u53F3\u80A9\u80DB\u9AA8\u6700\u5916\u7DE3"],["\u9AA8\u76C6\u5BEC",t.biiliac,"cm","B","\u5DE6\u53F3\u9AD6\u9AA8\u6700\u5916\u7DE3"],["\u5927\u8F49\u5B50\u9AD8",t.troch,"cm","B","\u817F\u9577"],["\u817F\u9577\u4F54\u8EAB\u9AD8",t.legRatio,"%","A","\u5927\u8F49\u5B50\u9AD8 \xF7 \u8EAB\u9AD8"],["\u6703\u9670\u9AD8",t.crotch,"cm","B",""],["\u4E0A\u8EAB\u9577",t.sitting,"cm","B","\u982D\u9802\u81F3\u5750\u9AA8\uFF0C\u8FD1\u4F3C\u5750\u9AD8"],["\u80A1\u9AA8\u9577",t.femur,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u817F\u9577\u6BD4\u4F8B"],["\u811B\u9AA8\u9577",t.tibia,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u817F\u9577\u6BD4\u4F8B"],["\u80B1\u9AA8\u9577",t.humerus,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u81C2\u9577"],["\u6A48\u9AA8\u9577",t.radius,"cm","B","\u96A8\u8EAB\u9AD8\u8207\u81C2\u9577"]]}function zm(){let i=N("table",{},N("thead",{},N("tr",{},N("th",{},"\u9805\u76EE"),N("th",{},"\u6578\u503C"),N("th",{},"\u7B49\u7D1A"),N("th",{},"\u91CF\u6CD5")))),t=N("tbody");for(let[e,n,s,r,o]of za())t.append(N("tr",{},N("td",{},e),N("td",{class:"n"},se(n)+" "+s),N("td",{},N("span",{class:"gr gr"+r},r)),N("td",{class:"dim"},o)));i.append(t),j("#mtable").replaceChildren(i)}function km(){let i=Rt.meas;for(let t=1;t<=10;t++){let e=j("#gl-"+t);e&&(e.textContent=i.regVol[t].toFixed(2)+" L")}}function Ba(){let i=(j("#s-q").value||"").trim().toLowerCase(),t=j("#s-t").value,e=new Map;for(let o of Ft.parts){if(o.t===10||o.t===4||o.t===9||o.t===11||t!==""&&+t!==o.t||i&&!(o.zh.toLowerCase().includes(i)||o.en.toLowerCase().includes(i)))continue;let a=o.t+"|"+o.en;e.has(a)||e.set(a,[]),e.get(a).push(o)}let n={0:0,2:1,5:2,3:3,1:4,6:5,7:6,8:7},s=[...e.values()];i&&s.sort((o,a)=>n[o[0].t]-n[a[0].t]||o[0].zh.length-a[0].zh.length);let r=j("#slist");r.replaceChildren(N("p",{class:"note"},`\u5171 ${s.length} \u9805`+(s.length>120?"\uFF0C\u986F\u793A\u524D 120 \u9805\uFF0C\u8ACB\u8F38\u5165\u95DC\u9375\u5B57\u7E2E\u5C0F\u7BC4\u570D\u3002":"")));for(let o of s.slice(0,120)){let a=o[0];r.append(N("button",{class:"li",onclick:()=>{let c=o.find(l=>l.side===0)||o[0];if(!Mt.layers[c.layer]){Mt.setLayer(c.layer,!0);let l=j("#l-"+c.layer);l&&(l.checked=!0)}Mt.hidden.delete(c.i),Mt.rebuild(),is(c),Mt.focus(c)}},N("b",{},a.zh||a.en),N("span",{class:"dim"},a.en),N("span",{class:"tag"},as[a.t]+(o.length>1?"\u30FB\u5DE6\u53F3":""))))}}function is(i){Mt.select(i),i?al(i):(j("#info").hidden=!0,Mt.isolate&&(Mt.isolate=null,Mt.rebuild()),j("#i-solo").textContent="\u53EA\u770B\u9019\u500B")}function al(i){let t=["\u5DE6","\u53F3","\u6B63\u4E2D"][i.side],e=[];if(e.push(["\u985E\u5225",as[i.t]+(i.t===10?i.kind===1?"\uFF08\u8D77\u9EDE\uFF09":"\uFF08\u6B62\u9EDE\uFF09":"")],["\u5074\u5225",t]),i.grp&&e.push(["\u6240\u5C6C",i.grp]),i.rg&&e.push(["\u8ABF\u6574\u90E8\u4F4D",Di[i.rg]]),[0,1,2,3].includes(i.t)){let n=Ft.partVolume(i),s=i.vol0*Ft.s**3;e.push(["\u9AD4\u7A4D",se(n)+" cm\xB3"+(i.t===0&&Math.abs(n-s)>.05*s?`\uFF08\u57FA\u6E96 ${se(s)}\uFF09`:"")]),e.push(["\u9577\u5EA6",se(i.len0*Ft.s)+" cm"])}j("#i-zh").textContent=i.zh||i.en,j("#i-en").textContent=i.en,j("#i-sum").textContent=[e[0][1],t,i.rg?Di[i.rg]:""].filter(Boolean).join("\u30FB"),j("#i-more").open=innerWidth>=900,j("#i-kv").replaceChildren(...e.map(([n,s])=>N("div",{},N("span",{},n),N("b",{},s)))),j("#info").hidden=!1}function cr(i){Rt.tool=Rt.tool===i?null:i,Rt.pts=[],j("#tl-dist").classList.toggle("on",Rt.tool==="dist"),j("#tl-girth").classList.toggle("on",Rt.tool==="girth"),Rt.tool==="girth"&&Mt.layers.skin<.05&&(Mt.setSkin(.38),j("#l-skin").value=38,j("#lv-skin").textContent="38%",hr("xray")),j("#toolout").textContent=Rt.tool==="dist"?"\u5728\u6A21\u578B\u4E0A\u9EDE\u5169\u500B\u4F4D\u7F6E\u3002":Rt.tool==="girth"?"\u9EDE\u76AE\u819A\u4E0A\u8981\u91CF\u7684\u9AD8\u5EA6\uFF08\u8EC0\u5E79\u3001\u4E0A\u80A2\u6216\u4E0B\u80A2\uFF09\u3002":"",j("#hint").textContent=Rt.tool?j("#toolout").textContent:"",j("#hint").hidden=!Rt.tool}function ol(i,t){if(Rt.tool==="dist"){let n=Mt.pick(i,t,!0);if(!n)return;if(Rt.pts.length>=2&&(Rt.pts=[],Mt.clearMarks()),Rt.pts.push(n.point),Mt.addDot(n.point,16765503),Rt.pts.length===2){Mt.addLine(Rt.pts,16765503);let s=Rt.pts[0].distanceTo(Rt.pts[1]);j("#toolout").textContent=`\u76F4\u7DDA\u8DDD\u96E2 ${se(s)} cm`,j("#hint").textContent=j("#toolout").textContent}return}if(Rt.tool==="girth"){let n=Mt.pick(i,t,"only");if(!n)return;let s=Ft.stri,r=Ft.scls,o=Ft.sbase,a=s[n.tri*3],c=Ft.lm,l,h,u=g=>{let _=[];for(let m=0;m<Ft.NTs;m++)g(s[m*3])&&g(s[m*3+1])&&g(s[m*3+2])&&_.push(m);return Uint32Array.from(_)},p=o[a*3]>=0?1:-1;r[a]>=16?(l=u(g=>r[g]>=16&&o[g*3]*p>0),h=(p>0?"\u5DE6":"\u53F3")+"\u4E0A\u80A2"):o[a*3+1]<c.yCrotch-.5?(l=u(g=>r[g]<16&&o[g*3]*p>.3&&o[g*3+1]<c.yCrotch+1),h=(p>0?"\u5DE6":"\u53F3")+"\u4E0B\u80A2"):(l=Ft.bodyTris,h="\u8EC0\u5E79");let f=Ft.girthAt(Ft.spos,l,n.point.y,!0);Mt.clearMarks(),f.pts.length&&Mt.addLine(f.pts,16765503,!0),j("#toolout").textContent=`${h}\u570D\u5EA6 ${se(f.len)} cm\uFF08\u96E2\u5730 ${se(n.point.y)} cm\uFF0C\u76AE\u5C3A\u91CF\u6CD5\uFF09`,j("#hint").textContent=j("#toolout").textContent;return}let e=Mt.pick(i,t,!1);is(e?e.part:null)}var ka="msk2.cases",ur=()=>{try{return JSON.parse(localStorage.getItem(ka)||"{}")}catch{return{}}};function Ha(){let i=ur();j("#f-cases").replaceChildren(N("option",{value:""},Object.keys(i).length?"\u9078\u64C7\u500B\u6848\u2026":"\u5C1A\u7121"),...Object.keys(i).sort().map(e=>N("option",{value:e},e)))}function Hm(){let i=Rt.c;if(!i.id){j("#f-id").focus();return}let t=ur();t[i.id]={...i,off:[...i.off]};try{localStorage.setItem(ka,JSON.stringify(t))}catch{}Ha(),j("#f-cases").value=i.id}function Vm(){let i=j("#f-cases").value,t=ur();!i||!t[i]||(Object.assign(Rt.c,t[i],{off:[...t[i].off]}),Dn(),en(10))}function Gm(){let i=j("#f-cases").value,t=ur();if(i){delete t[i];try{localStorage.setItem(ka,JSON.stringify(t))}catch{}Ha()}}async function Va(i,t){let e=null;try{window.claude&&window.claude.use&&(e=await window.claude.use("downloads"))}catch{e=null}if(e){try{await e.save({filename:i,data:t})}catch{}return}let n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=i,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}var Ga=i=>((Rt.c.id||"case").replace(/[^\w\-]+/g,"_")||"case")+"."+i;function Wm(){let i=[["\u9805\u76EE","\u6578\u503C","\u55AE\u4F4D","\u7B49\u7D1A","\u91CF\u6CD5"],...za().map(([t,e,n,s,r])=>[t,se(e),n,s,r])];Va(Ga("csv"),new Blob(["\uFEFF"+i.map(t=>t.map(e=>'"'+String(e).replace(/"/g,'""')+'"').join(",")).join(`\r
`)],{type:"text/csv"}))}function Xm(){let i=Rt.res;Va(Ga("json"),new Blob([JSON.stringify({tool:"\u500B\u6848\u5316\u808C\u9AA8\u6A21\u578B v0.4",source:"Z-Anatomy (CC BY-SA 4.0) / BodyParts3D",case:Rt.c,ct:Ft.ct?{applied:Ft.ct.on,scan:Ft.ct.hdr.scan,scaleFromCT:Ft.ct.s_ct,fitErrorCm:Ft.ct.hdr.fit,muscularity:Ft.ct.hdr.g,measurementsSupine:Ft.ct.hdr.meas,segmentation:Ft.ct.hdr.seg_model}:null,solution:{muscle:i.gG,subcutaneousFatFactor:i.f,trunkScale:i.kf,legScale:i.legScale,upperBodyScale:i.upScale,breastProjectionCm:i.A,underbustCm:i.under,bodyFatPrior:i.bfPrior,bodyFatSource:i.bfSrc,mass:i.mass},measurements:Object.fromEntries(za().map(([t,e,n,s])=>[t,{value:+se(e),unit:n,grade:s}])),regionMuscleVolumeL:Object.fromEntries(Di.map((t,e)=>[t,+Rt.meas.regVol[e].toFixed(3)]).slice(1))},null,2)],{type:"application/json"}))}async function qm(){Va(Ga("png"),await Mt.png())}Nm();var We={server:!1,job:null,show:{"CT \u9AA8\u9ABC":!1,"CT \u9AD4\u8868":!1,"CT \u80BA\u8207\u5FC3\u81DF":!1}};function Ym(){let i=j("#t-ct"),t=N("input",{type:"file",webkitdirectory:"",multiple:"",hidden:!0,onchange:n=>nl([...n.target.files])}),e=N("input",{type:"file",multiple:"",accept:".zip,.nii,.gz,.nrrd,.dcm,.mha",hidden:!0,onchange:n=>nl([...n.target.files])});i.append(N("p",{class:"note"},"\u4E0A\u50B3\u80F8\u90E8\uFF08\u6216\u4EFB\u4F55\u90E8\u4F4D\uFF09\u7684 CT\uFF0C\u7CFB\u7D71\u6703\u5206\u5272\u9AA8\u9ABC\u3001\u808C\u8089\u8207\u76AE\u4E0B\u8102\u80AA\uFF0C\u628A\u5F71\u50CF\u7BC4\u570D\u5167\u7684\u9AA8\u9ABC\u5F62\u72C0\u3001\u808C\u8089\u5C64\u8207\u8102\u80AA\u5C64\u539A\u5EA6\u63DB\u6210\u9019\u4F4D\u500B\u6848\u7684\u5BE6\u969B\u503C\uFF0C\u7BC4\u570D\u5916\u6CBF\u7528\u6A21\u677F\u4E26\u5E73\u9806\u929C\u63A5\u3002"),N("div",{id:"ct-up"},N("div",{class:"note warn",id:"ct-srv"},"\u6B63\u5728\u78BA\u8A8D\u5730\u7AEF\u4F3A\u670D\u5668\u2026"),N("div",{class:"row",id:"ct-btns",hidden:!0},t,e,N("button",{class:"btn",onclick:()=>t.click()},"\u9078\u64C7 DICOM \u8CC7\u6599\u593E"),N("button",{class:"btn ghost",onclick:()=>e.click()},"\u9078\u64C7\u6A94\u6848\uFF08zip\uFF0Fnii\uFF0Fnrrd\uFF09")),N("div",{id:"ct-prog",hidden:!0},N("div",{class:"track"},N("div",{id:"ct-bar"})),N("div",{class:"val",id:"ct-step"}),N("pre",{id:"ct-log"}))),N("div",{class:"row"},N("button",{class:"btn ghost",id:"ct-demo",onclick:Km},"\u8F09\u5165\u793A\u7BC4\u500B\u6848\uFF08\u516C\u958B\u80F8\u90E8 CT\uFF09")),N("div",{id:"ct-res",hidden:!0}))}async function Zm(){let i=!1;try{let t=await fetch("api/health",{cache:"no-store"});i=t.ok&&(await t.json()).ok}catch{i=!1}We.server=i,j("#ct-srv").textContent=i?"\u5DF2\u9023\u4E0A\u5730\u7AEF\u4F3A\u670D\u5668\u3002\u5F71\u50CF\u53EA\u5728\u9019\u53F0\u4F3A\u670D\u5668\u4E0A\u8655\u7406\uFF0C\u4E0D\u6703\u4E0A\u50B3\u5230\u5916\u90E8\u3002":"\u76EE\u524D\u4E0D\u662F\u5F9E\u5730\u7AEF\u4F3A\u670D\u5668\u958B\u555F\uFF0C\u7121\u6CD5\u4E0A\u50B3 CT\u3002\u5728\u9662\u5167\u6216\u516C\u53F8\u96FB\u8166\u57F7\u884C server.py \u5F8C\uFF0C\u7528\u700F\u89BD\u5668\u958B http://localhost:8765 \u5373\u53EF\u4E0A\u50B3\uFF1B\u9019\u88E1\u53EF\u4EE5\u5148\u770B\u793A\u7BC4\u500B\u6848\u3002",j("#ct-srv").className=i?"note":"note warn",j("#ct-btns").hidden=!i}function Jm(i){let t=[],e=new TextEncoder;for(let n of i){let s=e.encode(n.webkitRelativePath||n.name),r=new ArrayBuffer(4+s.length+8),o=new DataView(r);o.setUint32(0,s.length,!0),new Uint8Array(r,4,s.length).set(s),o.setBigUint64(4+s.length,BigInt(n.size),!0),t.push(r,n)}return new Blob(t)}function ti(i,t,e){j("#ct-prog").hidden=!1,j("#ct-step").textContent=i,j("#ct-bar").style.width=Math.round(t*100)+"%",e&&(j("#ct-log").textContent=e.slice(-8).join(`
`))}function nl(i){if(!i.length)return;let t=i.reduce((n,s)=>n+s.size,0);ti(`\u4E0A\u50B3 ${i.length} \u500B\u6A94\u6848\uFF08${(t/1e6).toFixed(0)} MB\uFF09`,0);let e=new XMLHttpRequest;e.open("POST","api/ct"),e.upload.onprogress=n=>{n.lengthComputable&&ti(`\u4E0A\u50B3\u4E2D ${Math.round(n.loaded/n.total*100)}%`,.1*n.loaded/n.total)},e.onload=()=>{if(e.status!==200){ti("\u4E0A\u50B3\u5931\u6557\uFF1A"+e.responseText.slice(0,200),0);return}We.job=JSON.parse(e.responseText).id,cl()},e.onerror=()=>ti("\u4E0A\u50B3\u5931\u6557\uFF1A\u7121\u6CD5\u9023\u7DDA\u5230\u4F3A\u670D\u5668",0),e.send(Jm(i))}async function cl(){try{let i=await(await fetch("api/ct/"+We.job,{cache:"no-store"})).json();if(ti(i.state==="error"?"\u8655\u7406\u5931\u6557\uFF1A"+i.error:i.step,i.progress||0,i.log),i.state==="done"){let t=await(await fetch("api/ct/"+We.job+"/case")).arrayBuffer();await Wa(t),ti("\u5B8C\u6210",1,i.log);return}i.state!=="error"&&setTimeout(cl,1500)}catch(i){ti("\u9023\u7DDA\u4E2D\u65B7\uFF1A"+i.message,0)}}async function $m(i){let t=new Uint8Array(i);return t[0]!==31||t[1]!==139?i:new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}async function Km(){let i=j("#ct-demo");i.disabled=!0,i.textContent="\u8F09\u5165\u793A\u7BC4\u500B\u6848\u2026";try{window.__CT_DEMO||await new Promise((n,s)=>{let r=document.createElement("script");r.src="ct-demo.js",r.onload=n,r.onerror=()=>s(new Error("\u627E\u4E0D\u5230\u793A\u7BC4\u8CC7\u6599")),document.head.appendChild(r)});let t=window.__CT_DEMO.map(atob).join(""),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);await Wa(e.buffer,!0)}catch(t){jm(t.message)}i.disabled=!1,i.textContent="\u8F09\u5165\u793A\u7BC4\u500B\u6848\uFF08\u516C\u958B\u80F8\u90E8 CT\uFF09"}function jm(i){j("#ct-res").hidden=!1,j("#ct-res").replaceChildren(N("p",{class:"note warn"},i))}async function Wa(i,t){let e=Ft.setCT(await $m(i)),n=e.hdr,s=Rt.c;Mt.setOverlays(e.ov);for(let r in We.show)Mt.showOverlay(r,We.show[r]);s.legAuto=!0,s.sex=(n.scan.sex||"").toUpperCase().slice(0,1)==="M"?"M":(n.scan.sex||"").toUpperCase().startsWith("F")?"F":s.sex,s.H=Math.round(e.s_ct*Ft.lm.H0),s.auto=!0,We.demo=!!t,We.Hest=s.H,Dn(),j("#p-leg").disabled=!0,ei(),tg(),lr("xray")}function Qm(){Ft.setCT(null),Mt.setOverlays(null),Rt.c.legAuto=!1,Rt.c.leg=Math.round(Ft.r0*1e3)/10,j("#p-leg").disabled=!1,Dn(),ei(),j("#ct-res").hidden=!0}function tg(){let i=Ft.ct;if(!i)return;let t=i.hdr,e=t.scan,n=t.meas,s=t.fit,r=t.g||{},o=f=>f==null?"\u2014":(f*10).toFixed(1),a=f=>{let g=s.bones.filter(_=>f.test(_.name)&&!_.partial);return g.length?[g.length,g.reduce((_,m)=>_+m.mean,0)/g.length,Math.max(...g.map(_=>_.p95))]:null},c=[["\u80F8\u8170\u690E",a(/^vertebrae_/)],["\u808B\u9AA8",a(/^rib_/)],["\u80F8\u9AA8",a(/^sternum/)],["\u9396\u9AA8\u8207\u80A9\u80DB\u9AA8",a(/^(clavicula|scapula)/)]].filter(f=>f[1]),l=(f,g)=>N("table",{},N("thead",{},N("tr",{},...f.map(_=>N("th",{},_)))),N("tbody",{},...g.map(_=>N("tr",{},..._.map((m,d)=>N("td",{class:d?"n":""},m==null?"\u2014":String(m))))))),h=["T4","T8","T12","L1"].filter(f=>n[f]),u=f=>N("label",{class:"chk"},N("input",{type:"checkbox",checked:We.show[f]?"":!1,onchange:g=>{We.show[f]=g.target.checked,Mt.showOverlay(f,g.target.checked)}}),f+"\u758A\u5716"),p=r.all==null?"\u7121\u6CD5\u63A8\u4F30":ns(r.all).replace(/^\S+\s/,"")+`\uFF08${r.all>=0?"+":""}${Math.round(r.all*100)}%\uFF09`;j("#ct-res").hidden=!1,j("#ct-res").replaceChildren(N("h3",{},We.demo?"\u793A\u7BC4\u500B\u6848\uFF083D Slicer \u7BC4\u4F8B\u80F8\u90E8 CT\uFF09":"\u500B\u6848 CT"),N("div",{class:"note"},`\u5F71\u50CF ${e.size.join("\xD7")}\uFF0C\u9593\u8DDD ${e.spacing.join("\xD7")} mm\uFF1B\u6DB5\u84CB ${n.levels?n.levels.join("\u2013"):"\u2014"}\uFF1B\u5206\u5272 ${t.seg_model}\uFF1B\u8655\u7406 ${t.seconds} \u79D2\u3002${t.demo?"\u793A\u7BC4\u8CC7\u6599\uFF1A"+t.source+"\u3002":""}`),N("div",{class:"note"+(t.arms_down?"":" warn")},t.arms_down?"\u4E0A\u81C2\u81EA\u7136\u4E0B\u5782\uFF1A\u80A9\u80DB\u9AA8\u3001\u9396\u9AA8\u4E00\u4F75\u4F9D CT \u64EC\u5408\u3002":"\u4E0A\u81C2\u4E0A\u8209\u6216\u4E0D\u5728\u5F71\u50CF\u5167\uFF1A\u80A9\u5E36\u8207\u4E0A\u81C2\u6CBF\u7528\u6A21\u677F\uFF0C\u80F8\u58C1\u808C\u8089\u88AB\u62C9\u9577\uFF0C\u539A\u5EA6\u8207\u808C\u8089\u91CF\u63A8\u4F30\u53EF\u80FD\u504F\u4F4E\u3002"),N("label",{class:"chk"},N("input",{type:"checkbox",checked:i.on?"":!1,onchange:f=>{i.on=f.target.checked,eg(),ei(),Mt.placeOverlays()}}),"\u5957\u7528 CT \u5F62\u72C0\uFF08\u53D6\u6D88\u53EF\u5C0D\u7167\u6A21\u677F\uFF09"),u("CT \u9AA8\u9ABC"),u("CT \u9AD4\u8868"),u("CT \u80BA\u8207\u5FC3\u81DF"),N("p",{class:"note"},`\u8EAB\u9AD8\u9810\u8A2D\u70BA\u7531\u80F8\u5ED3\u5927\u5C0F\u63A8\u4F30\u7684 ${We.Hest} cm\uFF0C\u8ACB\u6539\u6210\u5BE6\u6E2C\u503C\uFF1B\u817F\u9577\u6BD4\u4F8B\u7531 CT \u7684\u4E0A\u8EAB\u6BD4\u4F8B\u63A8\u7B97\u3002\u808C\u8089\u767C\u9054\u7A0B\u5EA6\uFF08CT \u7BC4\u570D\u5916\u6CBF\u7528\uFF09\uFF1A${p}\u3002`),N("h3",{},"\u64EC\u5408\u8AA4\u5DEE\uFF08\u6A21\u578B\u8868\u9762\u5230 CT \u8868\u9762\uFF0Cmm\uFF09"),l(["\u7D50\u69CB","\u4EF6\u6578","\u5E73\u5747","P95"],[...c.map(([f,g])=>[f,g[0],o(g[1]),o(g[2])]),["\u9AD4\u8868","",o(s.skin_mean),o(s.skin_p95)]]),N("p",{class:"note"},`\u5C04\u7DDA\u6709\u6548\u6BD4\u4F8B\uFF1A\u76AE\u4E0B\u8102\u80AA\u5C64 ${Math.round(s.rays_fat*100)}%\u3001\u808C\u8089\u5C64 ${Math.round(s.rays_muscle*100)}%\u3002\u7121\u6548\u7684\u4F4D\u7F6E\uFF08\u4F8B\u5982\u4E0A\u81C2\u4E0A\u8209\u7684\u80A9\u90E8\u3001\u5F71\u50CF\u908A\u7DE3\uFF09\u6703\u8F03\u591A\u6CBF\u7528\u6A21\u677F\u3002`),N("h3",{},"CT \u5BE6\u6E2C\uFF08\u4EF0\u81E5\uFF09"),l(["\u690E\u9AD4\u9AD8\u5EA6",...h],[["\u9AA8\u9ABC\u808C\u9762\u7A4D cm\xB2",...h.map(f=>n[f].muscle_cm2)],["\u9AA8\u9ABC\u808C\u5E73\u5747 HU",...h.map(f=>n[f].muscle_hu)],["\u8C4E\u810A\u808C\u9762\u7A4D cm\xB2",...h.map(f=>n[f].erector_cm2)],["\u8C4E\u810A\u808C\u5E73\u5747 HU",...h.map(f=>n[f].erector_hu)],["\u76AE\u4E0B\u8102\u80AA\u9762\u7A4D cm\xB2",...h.map(f=>n[f].subq_fat_cm2)],["\u80F8\u5ED3\u5BEC cm",...h.map(f=>n[f].ribcage_width_cm)],["\u80F8\u5ED3\u524D\u5F8C\u5F91 cm",...h.map(f=>n[f].ribcage_depth_cm)]]),N("p",{class:"note"},`\u76AE\u4E0B\u8102\u80AA\u539A\u5EA6\uFF08\u4E2D\u4F4D\u6578\uFF0Cmm\uFF09\uFF1A\u524D ${n.subq_mm.anterior??"\u2014"}\u3001\u5F8C ${n.subq_mm.posterior??"\u2014"}\u3001\u5DE6 ${n.subq_mm.left??"\u2014"}\u3001\u53F3 ${n.subq_mm.right??"\u2014"}\u3002\u9AA8\u9ABC\u808C\u4EE5 \u221229\uFF5E150 HU\u3001\u8102\u80AA\u4EE5 \u2212190\uFF5E\u221230 HU \u5224\u5B9A\uFF0C\u5DF2\u6392\u9664\u80F8\u8154\u8207\u8179\u8154\u5167\u5BB9\u7269\u3002`),N("div",{class:"row"},N("button",{class:"btn ghost",onclick:Qm},"\u79FB\u9664 CT")))}function eg(){let i=Ft.ctOn();Rt.c.legAuto=!!i,j("#p-leg").disabled=!!i,i||(Rt.c.leg=Math.round(Ft.r0*1e3)/10,Dn())}})();
