"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1408,8865],{21071:(e,r,t)=>{t.d(r,{p:()=>d});var a=t(30758),n=t(62411),s=t(97285),i=t(98293),o=t(12864),l=t(39566),c=t(20784),u=t(86070);const d=a.memo((function({uri:e,divider:r,removeLabel:t}){const d=(0,n.wA)(),m=!(0,l.n)(),p=(0,c.f)(),h=(0,a.useCallback)((async()=>{d((0,i.aw)(e,!0))}),[d,e]);return(0,u.jsx)(o.D,{role:"menuitem",divider:r,disabled:m&&!p?.getCapabilities().canModifyOffline,onClick:h,leadingIcon:(0,u.jsx)(s.k,{semanticColor:"textBrightAccent",size:"small"}),children:t})}))},59076:(e,r,t)=>{t.d(r,{P:()=>f});var a=t(30758),n=t(31417),s=t(10994),i=t(59521),o=t(20772),l=t(21489),c=t(67865),u=t(21071),d=t(44672),m=t(20817),p=t(78774),h=t(7307),x=t(86070);const f=a.memo((function({uri:e,artistUri:r,canPin:t=m.oT.NO,isPinned:a=!1,canRemove:f=!1}){const{spec:g}=(0,p.o)(e);return(0,x.jsx)(d.pZ,{value:"album",children:(0,x.jsxs)(s.W,{children:[f&&(0,x.jsx)(u.p,{uri:e,removeLabel:n.Ru.get("contextmenu.remove-from-library")}),r&&(0,x.jsx)(o.z,{spec:g,divider:"after",uri:r,displayText:n.Ru.get("contextmenu.go-to-artist-radio")}),t!==m.oT.NO&&(0,x.jsx)(c.k,{uri:e,canPin:t,isPinned:a,type:h.c.PRE_RELEASE_ALBUM,spec:g}),(0,x.jsx)(i.m,{uri:e,spec:g,displayText:n.Ru.get("context-menu.copy-album-link")}),(0,x.jsx)(l.q,{spec:g,divider:"before",uri:e})]})})}))},43673:(e,r,t)=>{t.d(r,{G:()=>w});var a=t(97500),n=t.n(a),s=t(31417),i=t(95530);const o="YNXLVjlRXPfM4xObTojA",l="CVRy4NtxZYSle8dJ1E67",c="holKDGFNEFSz85czBeSv",u="gqidZhN1lgoZDfI_7E6w",d="_IQ8dgA5pEr_V8PfUkWa",m="xNkPMA_OvAxcFTdfyroI";var p=t(86070);const h=({value:e,label:r,hasDivider:t=!1})=>(0,p.jsxs)("div",{className:c,"aria-hidden":"true",children:[(0,p.jsx)(i.E,{variant:"titleSmall",className:n()({[d]:t}),children:e}),(0,p.jsx)(i.E,{variant:"marginal",semanticColor:"textSubdued",children:r})]});var x=t(30758);const f=1e3,g=60*f,v=60*g,b=24*v;var y=t(95204),j=t(19870);const k={days:0,hours:0,minutes:0,seconds:0};function R(e){return e>0?function(e){const r=Math.abs(e);return{days:Math.floor(r/b),hours:Math.floor(r%b/v),minutes:Math.floor(r%v/g),seconds:Math.floor(r%g/f)}}(e):k}var P=t(32255),C=t(7307);const w=({targetDate:e,className:r,onComplete:t,images:a,imageTitle:i})=>{const{days:c,hours:d,minutes:f,seconds:g}=((e,r)=>{const t=(0,x.useRef)(r);t.current=r;const[a,n]=(0,x.useState)((()=>R((0,y.u)(e))));return(0,j.$)((r=>{const a=(0,y.u)(e),s=R(a);n(s),a<=0&&(r(),t.current?.())}),1e3),a})(e,t),v=void 0!==a&&a.length>0&&i,b=s.Ru.get("web-player.prerelease.countdown_label",{days:c,hours:d,minutes:f,seconds:g});return(0,p.jsxs)("div",{className:n()(o,r,{[l]:v}),role:"timer","data-testid":"countdown",children:[(0,p.jsx)("span",{className:m,children:b}),v&&(0,p.jsx)(P.b,{images:a,type:C.c.ALBUM,shape:P.u.ROUNDED_CORNERS,className:u,title:i}),(0,p.jsx)(h,{value:c,label:s.Ru.get("web-player.prerelease.days",c),hasDivider:!0}),(0,p.jsx)(h,{value:d,label:s.Ru.get("web-player.prerelease.hours",d),hasDivider:!0}),(0,p.jsx)(h,{value:f,label:s.Ru.get("web-player.prerelease.minutes",f),hasDivider:!0}),(0,p.jsx)(h,{value:g,label:s.Ru.get("web-player.prerelease.seconds",g)})]})}},2070:(e,r,t)=>{t.d(r,{B:()=>i});var a=t(95530),n=t(55760),s=t(86070);const i=({children:e})=>(0,s.jsx)(a.E,{variant:"bodySmall",className:n.A.pretitle,children:e})},13611:(e,r,t)=>{t.d(r,{h:()=>d});var a=t(30758),n=t(57239),s=t(74941),i=t(67668),o=t(70028),l=t(30157);var c=t(26184),u=t(86070);const d=({children:e,action:r,uri:t})=>{const d=(0,i.V)(),m=(0,l.N)(o.JD);let p;const h=()=>{const e={triggerId:s.d,triggerAction:{type:r}};n.h.set((r=>({...r,...e}))),m.storeAction(o.j8,{operation:c.tS.ADD,uris:[t]})};try{p=a.Children.only(e)}catch(r){return(0,u.jsx)(u.Fragment,{children:e})}return d?a.cloneElement(p,{onClick:h}):(0,u.jsx)(u.Fragment,{children:e})}},11584:(e,r,t)=>{t.d(r,{v:()=>m});var a=t(74159),n=t(97285),s=t(86677),i=t(41562),o=t(31417),l=t(13611),c=t(36213),u=t(20463),d=t(86070);const m=({uri:e,isBook:r=!1})=>{const{isPreSaved:t,addPresave:m,removePresave:p}=(0,c.w)({uri:e,isBook:r});return t?(0,d.jsx)(a.n,{onClick:p,iconTrailing:n.k,children:o.Ru.get("web-player.prerelease.presaved")}):(0,d.jsx)(l.h,{uri:e,action:u.no.SAVE_PRERELEASE,children:(0,d.jsx)(s.$,{disabled:void 0===t,onClick:m,iconTrailing:i.P,children:o.Ru.get("web-player.prerelease.presave")})})}},53926:(e,r,t)=>{t.r(r),t.d(r,{AlbumPrerelease:()=>ye});var a=t(97500),n=t.n(a),s=t(85387),i=t(95530),o=t(22726),l=t(31417),c=t(95204),u=t(15292),d=t(92202),m=t(30758),p=t(3117),h=t(88260),x=t(60038),f=t(53187),g=t(75830),v=t(59076),b=t(11584),y=t(86677),j=t(47698),k=t(21549),R=t(86070);const P=({uri:e})=>{const r=(0,j.V)(e),{spec:t,logger:a}=(0,k.r)(p.k,{data:{uri:e||""}}),n=(0,m.useCallback)((()=>{e&&(a.logInteraction(t.actionBarFactory().preSaveButtonFactory().hitUiNavigate({destination:e})),r())}),[r,t,e,a]);return e?(0,R.jsx)(y.$,{onClick:n,children:l.Ru.get("web-player.prerelease.listen_now")}):null};var C=t(29368);const w=({prerelease:e,backgroundColor:r})=>{const t=function(e){const[r,t]=(0,m.useState)((()=>!!e&&(0,c.u)(e)<=0));return(0,m.useEffect)((()=>{if(!e)return;const r=(0,c.u)(e);if(r<=0)return void t(!0);if(r>=36e5)return void t(!1);const a=setTimeout((()=>{t(!0)}),r);return()=>{clearTimeout(a)}}),[e]),r}(e.releaseDate?.isoString),{spec:a,UBIFragment:n}=(0,k.r)(p.k,{data:{uri:e.uri}}),s=(0,C.j)();return(0,R.jsx)(h.E,{backgroundColor:r,children:(0,R.jsxs)(x.S,{children:[t?(0,R.jsx)(P,{uri:e.content?.uri}):(0,R.jsx)(b.v,{uri:e.uri}),(0,R.jsx)(n,{spec:a,children:(0,R.jsx)(g.b,{menu:(0,R.jsx)(v.P,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:(0,R.jsx)(f.e,{label:l.Ru.get("more.label.context",e.content?.name),size:s})})})]})})};var E=t(65462),T=t(43673),I=t(25577),_=t(17843),A=t(88711),S=t(46110),D=t(1246),N=t(73658),L=t(7858),B=t(18449),M=t(21646),U=t(2070),F=t(62986),z=t(98712),O=t(51354),$=t(13155);const G="LFDgGRo4wD273tY6cKQ0",H=({prerelease:e,children:r})=>(0,R.jsx)(E.h,{menu:(0,R.jsx)(v.P,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:r}),V=({prerelease:e,backgroundColor:r})=>{const{content:t,releaseDate:a}=e,n=(0,O.y)(),s=n===z.E.SMALL||n===z.E.XSMALL,{spec:i,logger:o}=(0,k.r)(p.k,{data:{uri:e.uri}}),l=(0,m.useCallback)(((e,r)=>{if(i){const e=i.headerFactory().artistNameFactory().hitUiNavigate({destination:r.creator.uri});o.logInteraction(e)}}),[o,i]),c=t,u=(0,m.useMemo)((()=>a?.isoString?new Date(a.isoString):void 0),[a]);return(0,R.jsxs)(I.z,{backgroundColor:r,size:I.K.LARGE,children:[(0,R.jsx)(S.h,{children:c.name?(0,R.jsx)(H,{prerelease:e,children:(0,R.jsx)(D.X,{text:c.name})}):null}),!s&&(0,R.jsx)(H,{prerelease:e,children:(0,R.jsx)(_.K,{images:c.coverArt.sources,name:c.name??"",placeholderType:"album"})}),(0,R.jsxs)(A.Y,{children:[(0,R.jsx)(U.B,{children:(0,$.C)(c.type)}),(0,R.jsx)(H,{prerelease:e,children:(0,R.jsx)(F.mm,{scaleAtMinWidth:F.Cl,children:c.name})}),(0,R.jsxs)(N.X,{children:[(0,R.jsx)(L.j,{creators:c.artists,onCreatorClick:l}),(0,R.jsx)(M.J,{}),(0,R.jsx)(B.H,{releaseDate:a,timeZone:e.timezone})]}),u&&c.name?(0,R.jsx)(T.G,{images:s?c.coverArt.sources:[],className:G,imageTitle:c.name,targetDate:u}):null]})]})};var W=t(37115),X=t(3175),Z=t(96614),q=t(60690),K=t(4266),Y=t(57776),J=t(59147);const Q=new Y.l("albumPreReleaseTracks","query","dfbdcf2688995adc2c2196fcdd7802b2a5137a2549b361aa7fb23cd6493f4672",null);var ee=t(81834),re=t(16157);const te={totalLength:0,items:[]};function ae(e){const r=e.preReleaseContent,t=[];if(r?.tracks)for(const e of r.tracks.items)t.push({uri:e.uri,name:e.name?e.name:"",isPlayable:e.playability.playable,durationMs:e.duration?.totalMilliseconds??0,hasOriginalAudio:e.hasOriginalAudio,artists:ne(e.artists.items),isExplicit:e.contentRating?.label===re.x7.Explicit,is19PlusOnly:e.contentRating?.label===re.x7.NineteenPlus});return{totalLength:r?.tracks.totalCount??0,items:t}}function ne(e){const r=[];for(const t of e)"Artist"===t.data.__typename&&r.push({name:t.data.profile.name,uri:t.data.uri});return r}const se=[K.$.INDEX,K.$.TITLE_AND_ARTIST,K.$.DURATION],ie=(0,m.memo)((function({ariaLabel:e,nrTracks:r,prereleaseUri:t,highlightUri:a,scrollToIndex:n,usePlayContextItem:s,hasHeaderRow:i=!0,initalTracks:o}){const{spec:l,UBIFragment:c}=(0,k.r)(p.k,{data:{uri:t}}),u=(e=>{const{request:r}=(0,m.useContext)(ee.j);return(0,m.useCallback)((async(t,a)=>{const n=await r(Q,{uri:e,offset:t,limit:a});for(const r of n?.data?.lookup||[])if("PreReleaseResponseWrapper"===r.__typename&&"PreRelease"===r.data.__typename&&r.data.uri===e)return ae(r.data);return te}),[r,e])})(t),d=(0,m.useRef)(!1),h=(0,m.useRef)(null),[x,f]=(0,m.useState)(null),g=(0,m.useCallback)((e=>({uri:e.uri})),[]);(0,m.useEffect)((()=>{h.current&&(x?h.current.scrollToIndex(x):n&&h.current.scrollToIndex(n))}),[x,n]);const v=(0,m.useCallback)((async(e,r)=>{const t=await u(e,r);if(a&&!x){const e=t.items.findIndex((e=>e?.uri===a));f(e||-1)}return t}),[u,a,x]),b=(0,m.useCallback)(((e,r)=>{const n=!d.current&&!!a&&a===e.uri;return n&&(d.current=!0),(0,R.jsx)(X.d,{uri:e.uri,isPlayable:e.isPlayable,name:e.name,trackNumber:r+1,index:r,artists:e.artists,playcount:0,contextUri:t,duration_ms:e.hasOriginalAudio?e.durationMs:null,usePlayContextItem:s,isMOGEFRestricted:e.is19PlusOnly,isExplicit:e.isExplicit,shouldHighLight:n,isReleased:e.isPlayable},r+e.uri)}),[a,t,s]);return(0,R.jsx)(c,{spec:l,children:(0,R.jsx)(q.a,{columns:se,children:(0,R.jsx)(Z.S4,{ariaLabel:e,columns:se,hasHeaderRow:i,rowPlaceholder:W.Bz,renderRow:b,resolveItem:g,nrTracks:r,fetchTracks:v,limit:300,tracks:o,outerRef:h,columnPersistenceKey:"album-tracklist"},t)})})})),oe=new Y.l("albumPreRelease","query","e1a5537a42c3b8a687f10ae865c3b6776d6d797f8c0c272b2d40dc159a8e1a94",null),le=(e,r)=>(0,J.I)(oe,e,r),ce=(e,r=le)=>{const{data:t,loading:a,error:n}=r({uri:e},{staleTime:3e5,gcTime:36e5});return{loading:a,error:!!n,prerelease:(0,m.useMemo)((()=>{if(!t)return null;for(const r of t.lookup)if("PreReleaseResponseWrapper"===r.__typename&&"PreRelease"===r.data.__typename&&r.data.uri===e)return de(r.data);return null}),[t,e])}};function ue(e){return e.includes("℗")?{type:"P",text:e}:{type:"C",text:e}}function de(e){const r=e.preReleaseContent;let t;if(r){const a=ae(e);t={artists:me(r.artists.items),name:r.name??void 0,uri:r.uri,coverArt:{extractedColors:r.coverArt?.extractedColors?.colorRaw,sources:r.coverArt?.sources??[]},type:r.type,tracks:a,copyrights:r.copyright?.split("\n").map(ue)??[]}}return{uri:e.uri,releaseDate:e.releaseDate,timezone:e.timezone??void 0,content:t}}function me(e){const r=[];for(const t of e)"Artist"===t.data.__typename&&r.push({name:t.data.profile.name,id:t.data.id,uri:t.data.uri,images:t.data.visuals.avatarImage?.sources??[]});return r}var pe=t(84291);var he=t(2983),xe=t(88007),fe=t(28340),ge=t(7307);const ve="IVrwmRlzBI3lrWleZGbW",be="nPhSYFMXHpfImT4H04k3",ye=e=>{const{uri:r}=e,{prerelease:t,loading:a,error:m}=ce(r),p=(e=>{const r=e?.content?.coverArt.extractedColors?.hex;return(0,pe.z)(r),r})(t),h=parseInt(new URLSearchParams((0,s.zy)().search).get("index")||"0",10),{usePlayContextItem:x}=(0,fe.P)({uri:r,pages:[{items:(f=t?.content?.tracks.items||[],f.filter((e=>e.isPlayable)).map((e=>({uri:e.uri,uid:null,type:ge.c.TRACK,provider:null}))))}]},{featureIdentifier:"album_prerelease"});var f;if(a||m||!t)return(0,R.jsx)(d.LoadingPage,{hasError:!!m,errorMessage:l.Ru.get("error.not_found.title.album")});if(t?.content?.uri&&function(e,r){if(!e.content?.uri||!e.releaseDate?.isoString)return!1;const t=(0,c.u)(e.releaseDate.isoString);if(t>0)return!1;return t<=-1*r}(t,1728e5)){const e=(0,o.Lce)(t?.content?.uri);if(e)return(0,R.jsx)(he.$,{to:e.toURLPath(!0)})}return(0,R.jsxs)("section",{className:ve,children:[(0,R.jsx)(u.Q,{children:l.Ru.get("album.page-title",t.content?.name??"")}),(0,R.jsx)(V,{prerelease:t,backgroundColor:p}),(0,R.jsx)(w,{prerelease:t,backgroundColor:p}),t.content?.tracks.totalLength?(0,R.jsxs)("div",{className:"contentSpacing",children:[(0,R.jsx)(i.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",children:l.Ru.get("web-player.prerelease.album_tracklist_preview")}),(0,R.jsx)(ie,{prereleaseUri:r,ariaLabel:t.content?.name??l.Ru.get("error.not_found.title.album"),nrTracks:t.content?.tracks.totalLength??0,scrollToIndex:h,usePlayContextItem:x,initalTracks:t.content?.tracks.items,albumUri:t.content?.uri})]}):null,(0,R.jsx)("div",{className:n()(be,"contentSpacing"),children:(0,R.jsx)(xe.Z,{copyrights:t.content?.copyrights??[]})})]})}},95204:(e,r,t)=>{function a(e){const r=new Date;return(e instanceof Date?e:new Date(e)).getTime()-r.getTime()}t.d(r,{u:()=>a})},36213:(e,r,t)=>{t.d(r,{w:()=>u});var a=t(30758),n=t(3117),s=t(31417),i=t(53133),o=t(74008),l=t(48905),c=t(21549);const u=({uri:e,isBook:r})=>{const{add:t,remove:u}=(0,l.p)("prerelease"),d=(0,o.o)("prerelease",[e]).at(0),{enqueueSnackbar:m}=(0,i.d)(),{spec:p,logger:h}=(0,c.r)(n.k,{data:{uri:e}});return{isPreSaved:d,addPresave:(0,a.useCallback)((async()=>{h.logInteraction(p.actionBarFactory().preSaveButtonFactory().hitPresave({prereleaseId:e,itemToBePresaved:e,contextUri:e})),await t(e),m(r?s.Ru.get("web-player.prerelease.audiobook_feedback_presaved"):s.Ru.get("web-player.prerelease.album_feedback_presaved"))}),[t,m,r,h,p,e]),removePresave:(0,a.useCallback)((async()=>{h.logInteraction(p.actionBarFactory().preSaveButtonFactory().hitRemovePresave({prereleaseId:e,itemToBeRemovedFromPresaved:e,contextUri:e})),await u(e)}),[h,u,p,e])}}},19870:(e,r,t)=>{t.d(r,{$:()=>n});var a=t(30758);const n=(e,r)=>{const t=(0,a.useRef)(e);(0,a.useEffect)((()=>{t.current=e}),[e]),(0,a.useEffect)((()=>{let e;function a(){e&&clearInterval(e)}if(null!==r)return e=setInterval((function(){t.current(a)}),r),a}),[r])}},84291:(e,r,t)=>{t.d(r,{f:()=>o,z:()=>i});var a=t(30758),n=t(85505),s=t(47095);function i(e,r=n.l0o){const t=(0,s.as)();return(0,a.useEffect)((()=>(e&&t((0,s.Mo)(e)),()=>{t((0,s.Hf)())})),[e,t]),e||r}const o=({color:e,fallbackColor:r})=>(i(e,r),null)}}]);
//# sourceMappingURL=xpui-routes-album-prerelease.js.map