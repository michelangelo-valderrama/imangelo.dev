import{A as g,a as H,b as M,N as y,F as D,E as C,c as q,d as dt,r as it,i as U,e as gt,f as N,g as ht,D as xt,_ as ft,h as ut,j as et}from"./astro/assets-service.Dt0krELq.js";import{k as E,m as wt}from"./utils.DpFHxlYG.js";import{c as at,r as z,m as st}from"./instance.MjLduAVP.js";const vt="4.16.16";function bt(){return i=>{if(typeof i=="string")throw new g({...H,message:H.message(JSON.stringify(i))});let e=[...Object.values(i)];if(e.length===0)throw new g({...M,message:M.message(JSON.stringify(i))});return Promise.all(e.map(a=>a()))}}function ot(t){return{site:new URL(t),generator:`Astro v${vt}`,glob:bt()}}function j(t={},i,{class:e}={}){let a="";e&&(typeof t.class<"u"?t.class+=` ${e}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],e]:t.class=e);for(const[s,o]of Object.entries(t))a+=E(o,s,!0);return wt(a)}function yt(t){return t.fsPath&&!("fsPath"in t)}const jt=new TextDecoder,l=(t,i=0,e=t.length)=>jt.decode(t.slice(i,e)),I=(t,i=0,e=t.length)=>t.slice(i,e).reduce((a,s)=>a+("0"+s.toString(16)).slice(-2),""),G=(t,i=0)=>{const e=t[i]+t[i+1]*256;return e|(e&2**15)*131070},A=(t,i=0)=>t[i]*2**8+t[i+1],m=(t,i=0)=>t[i]+t[i+1]*2**8,Y=(t,i=0)=>t[i]+t[i+1]*2**8+t[i+2]*2**16,It=(t,i=0)=>t[i]+t[i+1]*2**8+t[i+2]*2**16+(t[i+3]<<24),p=(t,i=0)=>t[i]*2**24+t[i+1]*2**16+t[i+2]*2**8+t[i+3],v=(t,i=0)=>t[i]+t[i+1]*2**8+t[i+2]*2**16+t[i+3]*2**24,Et={readUInt16BE:A,readUInt16LE:m,readUInt32BE:p,readUInt32LE:v};function h(t,i,e,a){e=e||0;const s=a?"BE":"LE",o="readUInt"+i+s;return Et[o](t,e)}function kt(t,i){if(t.length-i<4)return;const e=p(t,i);if(!(t.length-i<e))return{name:l(t,4+i,8+i),offset:i,size:e}}function w(t,i,e){for(;e<t.length;){const a=kt(t,e);if(!a)break;if(a.name===i)return a;e+=a.size}}const Tt={validate:t=>l(t,0,2)==="BM",calculate:t=>({height:Math.abs(It(t,22)),width:v(t,18)})},St=1,At=6,Pt=16;function V(t,i){const e=t[i];return e===0?256:e}function J(t,i){const e=At+i*Pt;return{height:V(t,e+1),width:V(t,e)}}const ct={validate(t){const i=m(t,0),e=m(t,4);return i!==0||e===0?!1:m(t,2)===St},calculate(t){const i=m(t,4),e=J(t,0);if(i===1)return e;const a=[e];for(let s=1;s<i;s+=1)a.push(J(t,s));return{height:e.height,images:a,width:e.width}}},_t=2,Ft={validate(t){const i=m(t,0),e=m(t,4);return i!==0||e===0?!1:m(t,2)===_t},calculate:t=>ct.calculate(t)},Nt={validate:t=>v(t,0)===542327876,calculate:t=>({height:v(t,12),width:v(t,16)})},zt=/^GIF8[79]a/,$t={validate:t=>zt.test(l(t,0,6)),calculate:t=>({height:m(t,8),width:m(t,6)})},nt={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};function Ot(t,i,e){let a={};for(let s=i;s<=e;s+=4){const o=l(t,s,s+4);o in nt&&(a[o]=1)}if("avif"in a)return"avif";if("heic"in a||"heix"in a||"hevc"in a||"hevx"in a)return"heic";if("mif1"in a||"msf1"in a)return"heif"}const Lt={validate(t){const i=l(t,4,8),e=l(t,8,12);return i==="ftyp"&&e in nt},calculate(t){const i=w(t,"meta",0),e=i&&w(t,"iprp",i.offset+12),a=e&&w(t,"ipco",e.offset+8),s=a&&w(t,"ispe",a.offset+8);if(s)return{height:p(t,s.offset+16),width:p(t,s.offset+12),type:Ot(t,8,i.offset)};throw new TypeError("Invalid HEIF, no size found")}},Rt=8,Bt=4,Ht=4,Mt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function X(t,i){const e=i+Ht;return[l(t,i,e),p(t,e)]}function W(t){const i=Mt[t];return{width:i,height:i,type:t}}const Dt={validate:t=>l(t,0,4)==="icns",calculate(t){const i=t.length,e=p(t,Bt);let a=Rt,s=X(t,a),o=W(s[0]);if(a+=s[1],a===e)return o;const n={height:o.height,images:[o],width:o.width};for(;a<e&&a<i;)s=X(t,a),o=W(s[0]),a+=s[1],n.images.push(o);return n}},Ct={validate:t=>I(t,0,4)==="ff4fff51",calculate:t=>({height:p(t,12),width:p(t,8)})},qt={validate(t){if(p(t,4)!==1783636e3||p(t,0)<1)return!1;const i=w(t,"ftyp",0);return i?p(t,i.offset+4)===1718909296:!1},calculate(t){const i=w(t,"jp2h",0),e=i&&w(t,"ihdr",i.offset+8);if(e)return{height:p(t,e.offset+8),width:p(t,e.offset+12)};throw new TypeError("Unsupported JPEG 2000 format")}},Ut="45786966",Gt=2,$=6,Yt=2,Vt="4d4d",Jt="4949",Z=12,Xt=2;function Wt(t){return I(t,2,6)===Ut}function Zt(t,i){return{height:A(t,i),width:A(t,i+2)}}function Kt(t,i){const a=$+8,s=h(t,16,a,i);for(let o=0;o<s;o++){const n=a+Xt+o*Z,d=n+Z;if(n>t.length)return;const r=t.slice(n,d);if(h(r,16,0,i)===274)return h(r,16,2,i)!==3||h(r,32,4,i)!==1?void 0:h(r,16,8,i)}}function Qt(t,i){const e=t.slice(Gt,i),a=I(e,$,$+Yt),s=a===Vt;if(s||a===Jt)return Kt(e,s)}function ti(t,i){if(i>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits")}const ii={validate:t=>I(t,0,2)==="ffd8",calculate(t){t=t.slice(4);let i,e;for(;t.length;){const a=A(t,0);if(t[a]!==255){t=t.slice(a);continue}if(Wt(t)&&(i=Qt(t,a)),ti(t,a),e=t[a+1],e===192||e===193||e===194){const s=Zt(t,a+5);return i?{height:s.height,orientation:i,width:s.width}:s}t=t.slice(a+2)}throw new TypeError("Invalid JPG, no size found")}},ei={validate:t=>{const i=l(t,1,7);return["KTX 11","KTX 20"].includes(i)},calculate:t=>{const i=t[5]===49?"ktx":"ktx2",e=i==="ktx"?36:20;return{height:v(t,e+4),width:v(t,e),type:i}}},ai=`PNG\r

`,si="IHDR",K="CgBI",oi={validate(t){if(ai===l(t,1,8)){let i=l(t,12,16);if(i===K&&(i=l(t,28,32)),i!==si)throw new TypeError("Invalid PNG");return!0}return!1},calculate(t){return l(t,12,16)===K?{height:p(t,36),width:p(t,32)}:{height:p(t,20),width:p(t,16)}}},Q={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},tt={default:t=>{let i=[];for(;t.length>0;){const e=t.shift();if(e[0]!=="#"){i=e.split(" ");break}}if(i.length===2)return{height:parseInt(i[1],10),width:parseInt(i[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const i={};for(;t.length>0;){const e=t.shift();if(e.length>16||e.charCodeAt(0)>128)continue;const[a,s]=e.split(" ");if(a&&s&&(i[a.toLowerCase()]=parseInt(s,10)),i.height&&i.width)break}if(i.height&&i.width)return{height:i.height,width:i.width};throw new TypeError("Invalid PAM")}},ci={validate:t=>l(t,0,2)in Q,calculate(t){const i=l(t,0,2),e=Q[i],a=l(t,3).split(/[\r\n]+/);return(tt[e]||tt.default)(a)}},ni={validate:t=>l(t,0,4)==="8BPS",calculate:t=>({height:p(t,14),width:p(t,18)})},lt=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,S={height:/\sheight=(['"])([^%]+?)\1/,root:lt,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},F=2.54,pt={in:96,cm:96/F,em:16,ex:8,m:96/F*100,mm:96/F/10,pc:96/72/12,pt:96/72,px:1},li=new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(pt).join("|")})?$`);function P(t){const i=li.exec(t);if(i)return Math.round(Number(i[1])*(pt[i[2]]||1))}function pi(t){const i=t.split(" ");return{height:P(i[3]),width:P(i[2])}}function ri(t){const i=S.width.exec(t),e=S.height.exec(t),a=S.viewbox.exec(t);return{height:e&&P(e[2]),viewbox:a&&pi(a[2]),width:i&&P(i[2])}}function mi(t){return{height:t.height,width:t.width}}function di(t,i){const e=i.width/i.height;return t.width?{height:Math.floor(t.width/e),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*e)}:{height:i.height,width:i.width}}const gi={validate:t=>lt.test(l(t,0,1e3)),calculate(t){const i=S.root.exec(l(t));if(i){const e=ri(i[0]);if(e.width&&e.height)return mi(e);if(e.viewbox)return di(e,e.viewbox)}throw new TypeError("Invalid SVG")}},hi={validate(t){return m(t,0)===0&&m(t,4)===0},calculate(t){return{height:m(t,14),width:m(t,12)}}};function xi(t,i){const e=h(t,32,4,i);return t.slice(e+2)}function fi(t,i){const e=h(t,16,8,i);return(h(t,16,10,i)<<16)+e}function ui(t){if(t.length>24)return t.slice(12)}function wi(t,i){const e={};let a=t;for(;a&&a.length;){const s=h(a,16,0,i),o=h(a,16,2,i),n=h(a,32,4,i);if(s===0)break;n===1&&(o===3||o===4)&&(e[s]=fi(a,i)),a=ui(a)}return e}function vi(t){const i=l(t,0,2);if(i==="II")return"LE";if(i==="MM")return"BE"}const bi=["49492a00","4d4d002a"],yi={validate:t=>bi.includes(I(t,0,4)),calculate(t){const i=vi(t)==="BE",e=xi(t,i),a=wi(e,i),s=a[256],o=a[257];if(!s||!o)throw new TypeError("Invalid Tiff. Missing tags");return{height:o,width:s}}};function ji(t){return{height:1+Y(t,7),width:1+Y(t,4)}}function Ii(t){return{height:1+((t[4]&15)<<10|t[3]<<2|(t[2]&192)>>6),width:1+((t[2]&63)<<8|t[1])}}function Ei(t){return{height:G(t,8)&16383,width:G(t,6)&16383}}const ki={validate(t){const i=l(t,0,4)==="RIFF",e=l(t,8,12)==="WEBP",a=l(t,12,15)==="VP8";return i&&e&&a},calculate(t){const i=l(t,12,16);if(t=t.slice(20,30),i==="VP8X"){const a=t[0],s=(a&192)===0,o=(a&1)===0;if(s&&o)return ji(t);throw new TypeError("Invalid WebP")}if(i==="VP8 "&&t[0]!==47)return Ei(t);const e=I(t,3,6);if(i==="VP8L"&&e!=="9d012a")return Ii(t);throw new TypeError("Invalid WebP")}},_=new Map([["bmp",Tt],["cur",Ft],["dds",Nt],["gif",$t],["heif",Lt],["icns",Dt],["ico",ct],["j2c",Ct],["jp2",qt],["jpg",ii],["ktx",ei],["png",oi],["pnm",ci],["psd",ni],["svg",gi],["tga",hi],["tiff",yi],["webp",ki]]),Ti=Array.from(_.keys()),Si=new Map([[56,"psd"],[66,"bmp"],[68,"dds"],[71,"gif"],[73,"tiff"],[77,"tiff"],[82,"webp"],[105,"icns"],[137,"png"],[255,"jpg"]]);function Ai(t){const i=t[0],e=Si.get(i);return e&&_.get(e).validate(t)?e:Ti.find(a=>_.get(a).validate(t))}const Pi={disabledTypes:[]};function _i(t){const i=Ai(t);if(typeof i<"u"){if(Pi.disabledTypes.includes(i))throw new TypeError("disabled file type: "+i);const e=_.get(i).calculate(t);if(e!==void 0)return e.type=e.type??i,e}throw new TypeError("unsupported file type: "+i)}async function Fi(t,i){try{const e=_i(t);if(!e.height||!e.width||!e.type)throw new g({...y,message:y.message(i)});const{width:a,height:s,type:o,orientation:n}=e,d=(n||0)>=5;return{width:d?s:a,height:d?a:s,format:o,orientation:n}}catch{throw new g({...y,message:y.message(i)})}}async function Ni(t){const i=await fetch(t);if(!i.body||!i.ok)throw new g({...D,message:D.message(t)});const e=i.body.getReader();let a,s,o=new Uint8Array;for(;!a;){const n=await e.read();if(a=n.done,a)break;if(n.value){s=n.value;let d=new Uint8Array(o.length+s.length);d.set(o,0),d.set(s,o.length),o=d;try{const r=await Fi(o,t);if(r)return await e.cancel(),r}catch{}}}throw new g({...y,message:y.message(t)})}async function zi(){if(!globalThis?.astroAsset?.imageService){const{default:t}=await ft(async()=>{const{default:i}=await import("./astro/assets-service.Dt0krELq.js").then(e=>e.s);return{default:i}},[]).catch(i=>{const e=new g(ut);throw e.cause=i,e});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=t,t}return globalThis.astroAsset.imageService}async function $i(t,i){if(!t||typeof t!="object")throw new g({...C,message:C.message(JSON.stringify(t))});if(typeof t.src>"u")throw new g({...q,message:q.message(t.src,"undefined",JSON.stringify(t))});if(yt(t))throw new g(dt);const e=await zi(),a={...t,src:await it(t.src)};if(t.inferSize&&U(a.src)&&gt(a.src)){const c=await Ni(a.src);a.width??=c.width,a.height??=c.height,delete a.inferSize}const s=N(a.src)?a.src.fsPath:void 0,o=N(a.src)?a.src.clone??a.src:a.src;a.src=o;const n=e.validateOptions?await e.validateOptions(a,i):a,d=e.getSrcSet?await e.getSrcSet(n,i):[];let r=await e.getURL(n,i),f=await Promise.all(d.map(async c=>({transform:c.transform,url:await e.getURL(c.transform,i),descriptor:c.descriptor,attributes:c.attributes})));if(ht(e)&&globalThis.astroAsset.addStaticImage&&!(U(n.src)&&r===n.src)){const c=e.propertiesToHash??xt;r=globalThis.astroAsset.addStaticImage(n,c,s),f=d.map(x=>({transform:x.transform,url:globalThis.astroAsset.addStaticImage(x.transform,c,s),descriptor:x.descriptor,attributes:x.attributes}))}return{rawOptions:a,options:n,src:r,srcSet:{values:f,attribute:f.map(c=>`${c.url} ${c.descriptor}`).join(", ")},attributes:e.getHTMLAttributes!==void 0?await e.getHTMLAttributes(n,i):{}}}const Oi=ot("https://imangelo.dev"),Li=at(async(t,i,e)=>{const a=t.createAstro(Oi,i,e);a.self=Li;const s=a.props;if(s.alt===void 0||s.alt===null)throw new g(et);typeof s.width=="string"&&(s.width=parseInt(s.width)),typeof s.height=="string"&&(s.height=parseInt(s.height));const o=await O(s),n={};return o.srcSet.values.length>0&&(n.srcset=o.srcSet.attribute),z`${st()}<img${E(o.src,"src")}${j(n)}${j(o.attributes)}>`},"/home/imangelo/Documents/01_Projects/imangelo.dev/node_modules/astro/components/Image.astro",void 0),Ri={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function Bi(t){let i=(""+t).trim().toLowerCase(),e=i.lastIndexOf(".");return Ri[~e?i.substring(++e):i]}const Hi=ot("https://imangelo.dev"),Mi=at(async(t,i,e)=>{const a=t.createAstro(Hi,i,e);a.self=Mi;const s=["webp"],o="png",n=["gif","svg","jpg","jpeg"],{formats:d=s,pictureAttributes:r={},fallbackFormat:f,...c}=a.props;if(c.alt===void 0||c.alt===null)throw new g(et);const x=c.class?.match(/\bastro-\w{8}\b/)?.[0];x&&(r.class?r.class=`${r.class} ${x}`:r.class=x);for(const b in c)b.startsWith("data-astro-cid")&&(r[b]=c[b]);const k=await it(c.src),rt=await Promise.all(d.map(async b=>await O({...c,src:k,format:b,widths:c.widths,densities:c.densities})));let L=f??o;!f&&N(k)&&n.includes(k.format)&&(L=k.format);const T=await O({...c,format:L,widths:c.widths,densities:c.densities}),R={},B={};return c.sizes&&(B.sizes=c.sizes),T.srcSet.values.length>0&&(R.srcset=T.srcSet.attribute),z`${st()}<picture${j(r)}> ${Object.entries(rt).map(([b,u])=>{const mt=c.densities||!c.densities&&!c.widths?`${u.src}${u.srcSet.values.length>0?", "+u.srcSet.attribute:""}`:u.srcSet.attribute;return z`<source${E(mt,"srcset")}${E(Bi(u.options.format??u.src)??`image/${u.options.format}`,"type")}${j(B)}>`})} <img${E(T.src,"src")}${j(R)}${j(T.attributes)}> </picture>`},"/home/imangelo/Documents/01_Projects/imangelo.dev/node_modules/astro/components/Picture.astro",void 0),Di={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:[],remotePatterns:[]},O=async t=>await $i(t,Di);export{Li as $,ot as c,O as g,j as s};
