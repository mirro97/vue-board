(function(e){function t(t){for(var s,a,o=t[0],r=t[1],l=t[2],b=0,u=[];b<o.length;b++)a=o[b],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],s=!0,o=1;o<c.length;o++){var r=c[o];0!==n[r]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=c[0]))}return e}var s={},n={app:0},i=[];function a(t){if(s[t])return s[t].exports;var c=s[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=s,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(c,s,function(t){return e[t]}.bind(null,s));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=r;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"042e":function(e,t,c){},"04f2":function(e,t,c){},"10bc":function(e,t,c){},"187a":function(e,t,c){"use strict";c("04f2")},2468:function(e,t,c){},"24b4":function(e,t){e.exports="data:image/jpeg;base64,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"},4079:function(e,t,c){},"42ed":function(e,t,c){e.exports=c.p+"img/bear.da7f4bda.jpg"},5261:function(e,t,c){e.exports=c.p+"img/apple.02355237.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);var s=c("7a23");function n(e,t,c,n,i,a){const o=Object(s["B"])("Header"),r=Object(s["B"])("router-view");return Object(s["u"])(),Object(s["f"])(s["a"],null,[Object(s["i"])(o),Object(s["i"])(r)],64)}const i=Object(s["h"])("게시판 프로젝트"),a={class:"flex-x"},o={key:0,class:"dropdown"},r={class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},l={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},d=Object(s["h"])("회원정보 수정하기"),b={key:1},u=Object(s["h"])("로그인하기");function p(e,t,c,n,p,j){const O=Object(s["B"])("router-link");return Object(s["u"])(),Object(s["f"])("header",null,[Object(s["g"])("h1",null,[Object(s["i"])(O,{to:"/dashboard"},{default:Object(s["I"])(()=>[i]),_:1})]),Object(s["g"])("div",a,[p.isLogin?(Object(s["u"])(),Object(s["f"])("div",o,[Object(s["g"])("button",r,Object(s["D"])(p.userId)+" 님",1),Object(s["g"])("ul",l,[Object(s["g"])("li",null,[Object(s["i"])(O,{to:"/modify"},{default:Object(s["I"])(()=>[d]),_:1})])])])):p.isLogin?Object(s["e"])("",!0):(Object(s["u"])(),Object(s["f"])("span",b,[Object(s["i"])(O,{to:"/login"},{default:Object(s["I"])(()=>[u]),_:1})])),p.isLogin?(Object(s["u"])(),Object(s["f"])("button",{key:2,class:"logout",onClick:t[0]||(t[0]=(...e)=>j.logout&&j.logout(...e))},"로그아웃")):Object(s["e"])("",!0)])])}var j={data(){return{isLogin:this.$store.state.isLogin,userId:this.$store.state.user.id,text:""}},computed:{checkIsLogin(){return this.$store.state.user.id},checkId(){return this.$store.state.user.id}},watch:{checkIsLogin(e){this.isLogin=e},checkId(e){this.userId=e}},created(){},methods:{userIsLogin(){return this.userId?this.isLogin=!0:this.isLogin=!1},async logout(){try{await this.$store.dispatch("userLogout").then(()=>{this.isLogin=!1,alert("로그아웃 하셨습니다"),this.$router.push("/dashboard")})}catch(e){console.log(e)}}}},O=(c("f13b"),c("6b0d")),g=c.n(O);const f=g()(j,[["render",p],["__scopeId","data-v-177e9691"]]);var h=f,m={name:"App",components:{Header:h}};c("59e3");const v=g()(m,[["render",n]]);var y=v,I=c("bc3a"),w=c.n(I),k=c("130e"),E=c("6c02");const x=e=>(Object(s["x"])("data-v-7a79ba1e"),e=e(),Object(s["v"])(),e),C={class:"board-page"},U=x(()=>Object(s["g"])("h1",{class:"home-title"},"게시판",-1)),P={class:"board-container"},D={class:"table-wrapper"},L=x(()=>Object(s["g"])("div",{class:"table-header"},[Object(s["g"])("div",null,"번호"),Object(s["g"])("div",null,"제목"),Object(s["g"])("div",null,"작성자"),Object(s["g"])("div",null,"날짜")],-1)),M={class:"table-body"},B={class:"title"},S={key:0,class:"is-reply"},N={class:"links"},A=Object(s["h"])("글쓰기");function R(e,t,c,n,i,a){const o=Object(s["B"])("router-link");return Object(s["u"])(),Object(s["f"])("section",C,[U,Object(s["g"])("div",null,[Object(s["g"])("button",{class:Object(s["o"])(["index",{"cur-board":void 0===i.curType}]),onClick:t[0]||(t[0]=e=>a.getBoardData())},"전체 게시판",2),Object(s["g"])("button",{class:Object(s["o"])(["index",{"cur-board":"free"===i.curType}]),onClick:t[1]||(t[1]=e=>a.getBoardData("free"))},"자유 게시판",2),Object(s["g"])("button",{class:Object(s["o"])(["index",{"cur-board":"share"===i.curType}]),onClick:t[2]||(t[2]=e=>a.getBoardData("share"))},"정보공유 게시판",2),Object(s["g"])("button",{class:Object(s["o"])(["index",{"cur-board":"daily"===i.curType}]),onClick:t[3]||(t[3]=e=>a.getBoardData("daily"))},"일상 게시판",2)]),Object(s["g"])("div",P,[Object(s["g"])("div",D,[L,Object(s["g"])("div",M,[(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(i.board,(e,t)=>(Object(s["u"])(),Object(s["d"])(o,{to:"/content/"+e.boardId,class:"content",key:t},{default:Object(s["I"])(()=>[Object(s["g"])("div",null,Object(s["D"])(t+1),1),Object(s["g"])("div",B,[Object(s["h"])(Object(s["D"])(e.title)+" ",1),0!==e.replyCount?(Object(s["u"])(),Object(s["f"])("span",S,"["+Object(s["D"])(e.replyCount)+"]",1)):Object(s["e"])("",!0)]),Object(s["g"])("div",null,Object(s["D"])(e.writer),1),Object(s["g"])("div",null,Object(s["D"])(e.regdate),1)]),_:2},1032,["to"]))),128))])]),Object(s["g"])("div",N,[Object(s["i"])(o,{to:"/newboard",class:"btn write"},{default:Object(s["I"])(()=>[A]),_:1})])])])}var T={name:"Home",data(){return{board:{},curType:""}},created(){this.getBoardData()},methods:{async getBoardData(e){this.curType=e,console.log(this.curType);const t=await this.axios.get("/api/Board",{params:{type:this.curType}});this.board=t.data}}};c("b91b");const V=g()(T,[["render",R],["__scopeId","data-v-7a79ba1e"]]);var Y=V;const Q=e=>(Object(s["x"])("data-v-21d3500d"),e=e(),Object(s["v"])(),e),J={class:"newBoard-container"},H={class:"header-wrapper"},F=Q(()=>Object(s["g"])("h1",{class:"title"},"새 글 작성하기",-1)),G={class:"text-input"},q=Q(()=>Object(s["g"])("label",{for:"title",class:"input-label"},"제목을 입력해주세요",-1)),K={class:"editor"};function X(e,t,c,n,i,a){const o=Object(s["B"])("QuillEditor");return Object(s["u"])(),Object(s["f"])("section",J,[Object(s["g"])("div",H,[F,Object(s["g"])("button",{class:"btn",onClick:t[0]||(t[0]=e=>a.writeNewBoard())},"등록")]),Object(s["g"])("div",G,[q,Object(s["J"])(Object(s["g"])("input",{type:"text",id:"title",class:"input-design","onUpdate:modelValue":t[1]||(t[1]=e=>i.title=e)},null,512),[[s["G"],i.title]])]),Object(s["g"])("div",K,[Object(s["i"])(o,{ref:"quillEditor",theme:"snow",content:i.content,"onUpdate:content":t[2]||(t[2]=e=>i.content=e),contentType:"html"},null,8,["content"])])])}var Z=c("93e8"),z=(c("d263"),{components:{QuillEditor:Z["a"]},data(){return{title:"",writer:"GANGI",content:"",boardData:{}}},methods:{async writeNewBoard(){""===this.title?alert("제목을 입력하세요"):""===this.content?alert("내용을 입력하세요"):await this.axios.post("/api/Board/Insert",{boardData:{title:this.title,writer:this.writer,content:this.content}}).then(()=>{alert("등록을 완료했습니다"),this.$router.push("/dashboard")})}}});c("9df6");const W=g()(z,[["render",X],["__scopeId","data-v-21d3500d"]]);var _=W;const $=e=>(Object(s["x"])("data-v-344fcf9e"),e=e(),Object(s["v"])(),e),ee={class:"content-container"},te={class:"content-wrapper"},ce={class:"header-wrapper flex-w"},se=$(()=>Object(s["g"])("h1",{class:"board-type"},"게시판 {타입-이후 추가될 예정}",-1)),ne=Object(s["h"])("목록"),ie={class:"title"},ae={class:"content-info flex-w"},oe={class:"flex-w"},re={class:"regdate"},le={class:"content"},de=["innerHTML"];function be(e,t,c,n,i,a){const o=Object(s["B"])("router-link"),r=Object(s["B"])("ReplyView"),l=Object(s["B"])("ProfileModal");return Object(s["u"])(),Object(s["f"])(s["a"],null,[Object(s["g"])("section",ee,[Object(s["g"])("div",te,[Object(s["g"])("div",ce,[se,Object(s["i"])(o,{to:"/dashboard",class:"btn"},{default:Object(s["I"])(()=>[ne]),_:1})]),Object(s["g"])("h2",ie,Object(s["D"])(i.content.title),1),Object(s["g"])("div",ae,[Object(s["g"])("div",oe,[Object(s["g"])("span",{class:"writer",title:"프로필 보기",onClick:t[0]||(t[0]=e=>a.openProfile())},Object(s["D"])(i.content.writer),1),Object(s["g"])("span",re,Object(s["D"])(i.content.regdate),1),i.curUserId===i.content.writer?(Object(s["u"])(),Object(s["f"])("button",{key:0,class:"delete",onClick:t[1]||(t[1]=e=>a.deleteContent())},"삭제")):Object(s["e"])("",!0)]),Object(s["g"])("div",{class:"like flex-w",onClick:t[2]||(t[2]=e=>a.clickLike())},[Object(s["g"])("i",{class:Object(s["o"])([{thumb:i.isLiked},"far fa-thumbs-up"])},null,2),Object(s["g"])("span",null,Object(s["D"])(i.content.likeCount),1)])]),Object(s["g"])("div",le,[Object(s["g"])("div",{innerHTML:i.content.content},null,8,de)]),Object(s["i"])(r,{boardId:i.content.boardId},null,8,["boardId"])])]),i.openModal?(Object(s["u"])(),Object(s["d"])(l,{key:0,onClick:t[3]||(t[3]=Object(s["K"])(e=>a.close(),["self"])),onClose:a.close,userId:i.content.writer},null,8,["onClose","userId"])):Object(s["e"])("",!0)],64)}const ue=e=>(Object(s["x"])("data-v-48c8f3b4"),e=e(),Object(s["v"])(),e),pe={class:"profile-container"},je={class:"profile"},Oe=ue(()=>Object(s["g"])("i",{class:"fas fa-times"},null,-1)),ge=[Oe],fe=ue(()=>Object(s["g"])("div",{class:"profile-image"},[Object(s["g"])("i",{class:"fas fa-user"})],-1)),he={class:"id"},me={class:"introduce"};function ve(e,t,c,n,i,a){return Object(s["u"])(),Object(s["f"])("section",pe,[Object(s["g"])("div",je,[Object(s["g"])("div",{class:"x",onClick:t[0]||(t[0]=e=>a.close())},ge),fe,Object(s["g"])("span",he,Object(s["D"])(i.userInfo.nickname)+" ("+Object(s["D"])(i.userInfo.id)+")",1),Object(s["g"])("span",me,Object(s["D"])(i.userInfo.introduce),1)])])}var ye={props:{userId:String},data(){return{userInfo:{}}},created(){this.getUserData()},methods:{async getUserData(){const e=await this.axios.get("/api/User/Item",{params:{userId:this.userId}});this.userInfo=e.data},close(){this.$emit("close")}}};c("a342");const Ie=g()(ye,[["render",ve],["__scopeId","data-v-48c8f3b4"]]);var we=Ie;const ke=e=>(Object(s["x"])("data-v-1e376644"),e=e(),Object(s["v"])(),e),Ee={class:"reply-container"},xe={key:0,class:"margin-bottom"},Ce={key:1,class:"margin-bottom"},Ue={class:"reply-wrapper"},Pe={key:0},De={class:"reply-bottom"},Le={class:"user-info flex-w"},Me=["onClick"],Be=ke(()=>Object(s["g"])("div",{class:"profile-image profile"},[Object(s["g"])("i",{class:"fas fa-user"})],-1)),Se={class:"reply-info"},Ne={class:"writer profile",title:"프로필보기"},Ae={class:"regdate"},Re=["onClick"],Te=["innerHTML"],Ve={key:1,class:"reply-alert"},Ye={class:"editor-container"},Qe={class:"user-info flex-w self"},Je={class:"user-profil flex-w self"},He=ke(()=>Object(s["g"])("div",{class:"profile-image self"},[Object(s["g"])("i",{class:"fas fa-user-check"})],-1)),Fe={key:0,class:"writer profile self",title:"내 프로필"},Ge={key:1},qe={class:"editor"};function Ke(e,t,c,n,i,a){const o=Object(s["B"])("QuillEditor"),r=Object(s["B"])("ProfileModal");return Object(s["u"])(),Object(s["f"])(s["a"],null,[Object(s["g"])("section",Ee,[Object(s["g"])("div",null,[0===i.replys.length?(Object(s["u"])(),Object(s["f"])("h2",xe,"댓글")):(Object(s["u"])(),Object(s["f"])("h2",Ce,"댓글 "+Object(s["D"])(i.replys.length)+"개",1))]),Object(s["g"])("div",Ue,[0!==i.replys.length?(Object(s["u"])(),Object(s["f"])("ul",Pe,[(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(i.replys,(e,t)=>(Object(s["u"])(),Object(s["f"])("li",{key:t,class:"reply"},[Object(s["g"])("div",De,[Object(s["g"])("div",Le,[Object(s["g"])("div",{class:"user-profil flex-w",onClick:t=>a.openProfile(e.writer)},[Be,Object(s["g"])("div",Se,[Object(s["g"])("span",Ne,Object(s["D"])(e.writer),1),Object(s["g"])("span",Ae,Object(s["D"])(e.regdate),1)])],8,Me),i.curUserId===e.writer?(Object(s["u"])(),Object(s["f"])("button",{key:0,class:"delete",onClick:t=>a.deleteReply(e.replyId)},"삭제",8,Re)):Object(s["e"])("",!0)]),Object(s["g"])("div",{class:"reply-content",innerHTML:e.content},null,8,Te)])]))),128))])):(Object(s["u"])(),Object(s["f"])("span",Ve,"첫번째 댓글을 달아주세요!")),Object(s["g"])("div",Ye,[Object(s["g"])("div",Qe,[Object(s["g"])("div",Je,[He,i.isLogin?(Object(s["u"])(),Object(s["f"])("span",Fe,Object(s["D"])(i.curUserId),1)):i.isLogin?Object(s["e"])("",!0):(Object(s["u"])(),Object(s["f"])("span",Ge,"로그인을 해주세요!"))]),Object(s["g"])("button",{class:"submit btn",onClick:t[0]||(t[0]=(...e)=>a.writeNewReply&&a.writeNewReply(...e))},"제출")]),Object(s["g"])("div",qe,[Object(s["i"])(o,{ref:"quillEditor",theme:"bubble",content:i.content,"onUpdate:content":t[1]||(t[1]=e=>i.content=e),contentType:"html"},null,8,["content"])])])])]),i.openModal?(Object(s["u"])(),Object(s["d"])(r,{key:0,onClick:t[2]||(t[2]=Object(s["K"])(e=>a.close(),["self"])),onClose:a.close,userId:i.userId},null,8,["onClose","userId"])):Object(s["e"])("",!0)],64)}c("d96d");var Xe={components:{QuillEditor:Z["a"],ProfileModal:we},props:{boardId:Number},data(){return{replys:[],content:"",userId:"",openModal:!1,isLogin:this.$store.state.isLogin,curUserId:this.$store.state.user.id}},created(){this.getReplys()},methods:{async getReplys(){const e=await this.axios.get("/api/Reply",{params:{boardID:this.$route.params.id}});this.replys=e.data},async writeNewReply(){""===this.content?alert("내용을 입력하세요"):!1===this.isLogin?alert("로그인 후 이용해주세요"):await this.axios.post("/api/Reply/Insert",{replyData:{boardId:this.boardId,writer:this.curUserId,content:this.content}}).then(()=>{this.getReplys(),this.$refs.quillEditor.setHTML("")})},openProfile(e){this.userId=e,this.openModal=!0},deleteReply(e){confirm("댓글을 삭제하시겠습니까?")&&this.axios.post("/api/Reply/Delete",{replyId:e}).then(()=>{this.getReplys()})},close(){this.openModal=!1}}};c("d6bc");const Ze=g()(Xe,[["render",Ke],["__scopeId","data-v-1e376644"]]);var ze=Ze,We={components:{ReplyView:ze,ProfileModal:we},data(){return{content:{},openModal:!1,isLiked:!1,curUserId:this.$store.state.user.id}},created(){this.getContent()},methods:{async getContent(){const e=await this.axios.get("/api/Board/Content",{params:{boardId:this.$route.params.id}});this.content=e.data,this.getLikeList()},async getLikeList(){await this.axios.get("/api/Board/Like",{params:{boardId:this.content.boardId,id:this.$store.state.user.id}}).then(e=>{let t=e.data;for(var c in t)t[c]===this.curUserId&&(this.isLiked=!0)})},async clickLike(){await this.axios.post("/api/Board/Like",{boardId:this.content.boardId,id:this.$store.state.user.id}).then(e=>{let t=e.data;t.isLiked?t.isLiked&&alert(t.message):alert(t.message)}),this.getContent()},async deleteContent(){await this.axios.post("/api/Board/Delete",{boardId:this.content.boardId}).then(e=>{alert(e.data),this.$router.push("/dashboard")})},openProfile(){this.openModal=!0},close(){this.openModal=!1}}};c("a44f");const _e=g()(We,[["render",be],["__scopeId","data-v-344fcf9e"]]);var $e=_e;const et=e=>(Object(s["x"])("data-v-77653038"),e=e(),Object(s["v"])(),e),tt={class:"modify-user-container"},ct={class:"modify-user-wrapper"},st={class:"img-wrapper flex-r"},nt=["src"],it={class:"input-container"},at={class:"user-info"},ot=et(()=>Object(s["g"])("span",null,"Id ",-1)),rt={class:"user-info"},lt=et(()=>Object(s["g"])("span",null,"닉네임 ",-1)),dt={class:"user-info"},bt=et(()=>Object(s["g"])("span",null,"한줄 소개 ",-1)),ut={class:"btn-container"};function pt(e,t,n,i,a,o){const r=Object(s["B"])("ModifyImage");return Object(s["u"])(),Object(s["f"])(s["a"],null,[Object(s["g"])("div",tt,[Object(s["g"])("div",ct,[Object(s["g"])("div",st,[a.userInfo.imageUrl?(Object(s["u"])(),Object(s["f"])("img",{key:0,class:"profile-img",src:c("710a")(`./${a.userInfo.imageUrl}.jpg`),alt:"유저 이미지"},null,8,nt)):Object(s["e"])("",!0),Object(s["g"])("button",{class:"modify",onClick:t[0]||(t[0]=e=>o.openModifyImage())},"프로필 사진 변경하기")]),Object(s["g"])("div",it,[Object(s["g"])("div",at,[ot,Object(s["J"])(Object(s["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>a.userInfo.id=e),disabled:""},null,512),[[s["G"],a.userInfo.id]])]),Object(s["g"])("div",rt,[lt,Object(s["J"])(Object(s["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>a.userInfo.nickname=e)},null,512),[[s["G"],a.userInfo.nickname]])]),Object(s["g"])("div",dt,[bt,Object(s["J"])(Object(s["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>a.userInfo.introduce=e)},null,512),[[s["G"],a.userInfo.introduce]])]),Object(s["g"])("div",ut,[Object(s["g"])("button",{class:"quit",onClick:t[4]||(t[4]=e=>o.deleteInfo())},"회원 탈퇴하기")])])]),Object(s["g"])("button",{class:"modify",onClick:t[5]||(t[5]=e=>o.modifyInfo())},"수정")]),a.openModal?(Object(s["u"])(),Object(s["d"])(r,{key:0,onClick:t[6]||(t[6]=Object(s["K"])(e=>o.close(),["self"])),onClose:o.close,curImage:a.userInfo.imageUrl,onChangedImg:o.changedImg},null,8,["onClose","curImage","onChangedImg"])):Object(s["e"])("",!0)],64)}var jt=c("24b4"),Ot=c.n(jt),gt=c("b48b"),ft=c.n(gt),ht=c("42ed"),mt=c.n(ht),vt=c("5261"),yt=c.n(vt),It=c("64ce"),wt=c.n(It);const kt=e=>(Object(s["x"])("data-v-43c52c8a"),e=e(),Object(s["v"])(),e),Et={class:"modify-image-container flex-c"},xt={class:"modify-image-wrapper flex-c"},Ct={class:"select-image"},Ut={class:"image-info"},Pt=kt(()=>Object(s["g"])("img",{src:Ot.a,alt:"기본"},null,-1)),Dt={class:"input-wrapper"},Lt=kt(()=>Object(s["g"])("label",{for:"default"},"기본",-1)),Mt={class:"image-info"},Bt=kt(()=>Object(s["g"])("img",{src:ft.a,alt:"치킨"},null,-1)),St={class:"input-wrapper"},Nt=kt(()=>Object(s["g"])("label",{for:"chicken"},"치킨",-1)),At={class:"image-info"},Rt=kt(()=>Object(s["g"])("img",{src:mt.a,alt:"곰"},null,-1)),Tt={class:"input-wrapper"},Vt=kt(()=>Object(s["g"])("label",{for:"bear"},"곰",-1)),Yt={class:"image-info"},Qt=kt(()=>Object(s["g"])("img",{src:yt.a,alt:"사과"},null,-1)),Jt={class:"input-wrapper"},Ht=kt(()=>Object(s["g"])("label",{for:"apple"},"사과",-1)),Ft={class:"image-info"},Gt=kt(()=>Object(s["g"])("img",{src:wt.a,alt:"물"},null,-1)),qt={class:"input-wrapper"},Kt=kt(()=>Object(s["g"])("label",{for:"water"},"물",-1)),Xt={class:"btn-wrapper"};function Zt(e,t,c,n,i,a){return Object(s["u"])(),Object(s["f"])("div",Et,[Object(s["g"])("div",xt,[Object(s["g"])("div",Ct,[Object(s["g"])("div",Ut,[Pt,Object(s["g"])("div",Dt,[Object(s["J"])(Object(s["g"])("input",{type:"radio",id:"default",value:"default","onUpdate:modelValue":t[0]||(t[0]=e=>i.picked=e)},null,512),[[s["F"],i.picked]]),Lt])]),Object(s["g"])("div",Mt,[Bt,Object(s["g"])("div",St,[Object(s["J"])(Object(s["g"])("input",{type:"radio",id:"chicken",value:"chicken","onUpdate:modelValue":t[1]||(t[1]=e=>i.picked=e)},null,512),[[s["F"],i.picked]]),Nt])]),Object(s["g"])("div",At,[Rt,Object(s["g"])("div",Tt,[Object(s["J"])(Object(s["g"])("input",{type:"radio",id:"bear",value:"bear","onUpdate:modelValue":t[2]||(t[2]=e=>i.picked=e)},null,512),[[s["F"],i.picked]]),Vt])]),Object(s["g"])("div",Yt,[Qt,Object(s["g"])("div",Jt,[Object(s["J"])(Object(s["g"])("input",{type:"radio",id:"apple",value:"apple","onUpdate:modelValue":t[3]||(t[3]=e=>i.picked=e)},null,512),[[s["F"],i.picked]]),Ht])]),Object(s["g"])("div",Ft,[Gt,Object(s["g"])("div",qt,[Object(s["J"])(Object(s["g"])("input",{type:"radio",id:"water",value:"water","onUpdate:modelValue":t[4]||(t[4]=e=>i.picked=e)},null,512),[[s["F"],i.picked]]),Kt])])]),Object(s["g"])("div",Xt,[Object(s["g"])("button",{class:"modify",onClick:t[5]||(t[5]=(...e)=>a.changeImage&&a.changeImage(...e))},"수정"),Object(s["g"])("button",{class:"cancle",onClick:t[6]||(t[6]=(...e)=>a.close&&a.close(...e))},"취소")])])])}var zt={props:{curImage:String},data(){return{picked:[]}},created(){this.picked=this.curImage},methods:{async changeImage(){this.$emit("changedImg",this.picked),this.close()},close(){this.$emit("close")}}};c("187a");const Wt=g()(zt,[["render",Zt],["__scopeId","data-v-43c52c8a"]]);var _t=Wt,$t={components:{ModifyImage:_t},data(){return{userInfo:{},curUserId:this.$store.state.user.id,profileImg:"",openModal:!1}},created(){this.getUserData()},methods:{async getUserData(){const e=await this.axios.get("/api/User/Item",{params:{userId:this.curUserId}});this.userInfo=e.data},openModifyImage(){this.openModal=!0},changedImg(e){this.userInfo.imageUrl=e},async modifyInfo(){await this.axios.post("/api/User/Update",{userInfo:{nickname:this.userInfo.nickname,introduce:this.userInfo.introduce,imageUrl:this.userInfo.imageUrl,id:this.userInfo.id}}).then(()=>{alert("회원정보가 수정되었습니다")})},async deleteInfo(){confirm("회원 탈퇴를 하시겠습니까?")&&await this.axios.post("/api/User/Delete",{userInfo:{id:this.userInfo.id}}).then(async()=>{try{await this.$store.dispatch("userLogout").then(()=>{this.isLogin=!1,alert("탈퇴가 완료되었습니다. 메인페이지로 이동합니다"),this.$router.push("/dashboard")})}catch(e){console.log(e)}})},close(){this.openModal=!1}}};c("829e");const ec=g()($t,[["render",pt],["__scopeId","data-v-77653038"]]);var tc=ec;const cc=e=>(Object(s["x"])("data-v-29a70ede"),e=e(),Object(s["v"])(),e),sc={class:"login-container"},nc=cc(()=>Object(s["g"])("h2",{class:"title"},"Login",-1)),ic={class:"input-wrapper"},ac=cc(()=>Object(s["g"])("label",{for:"id",class:"label-info"},"ID",-1)),oc={class:"input-wrapper"},rc=cc(()=>Object(s["g"])("label",{for:"pw",class:"label-info"},"Password",-1)),lc={class:"error-wrapper"},dc={key:0,class:"alert-error"},bc={key:1,class:"alert-error"},uc={key:2,class:"alert-error"},pc=Object(s["h"])(" 비밀번호를 입력해주세요 "),jc=cc(()=>Object(s["g"])("br",null,null,-1)),Oc=Object(s["h"])(" (영문자/숫자/특수문자) "),gc=[pc,jc,Oc],fc={key:3,class:"alert-error"},hc=Object(s["h"])(" 계정 혹은 비밀번호가 일치하지 않습니다. "),mc=cc(()=>Object(s["g"])("br",null,null,-1)),vc=Object(s["h"])(" 다시 확인해주세요 "),yc=[hc,mc,vc],Ic=cc(()=>Object(s["g"])("button",{class:"login"},"로그인",-1)),wc=Object(s["h"])("회원가입");function kc(e,t,c,n,i,a){const o=Object(s["B"])("router-link");return Object(s["u"])(),Object(s["f"])("section",sc,[nc,Object(s["g"])("form",{class:"login-form",onSubmit:t[2]||(t[2]=Object(s["K"])((...e)=>a.login&&a.login(...e),["prevent"]))},[Object(s["g"])("div",ic,[ac,Object(s["J"])(Object(s["g"])("input",{class:"input-id",type:"text",id:"id","onUpdate:modelValue":t[0]||(t[0]=e=>i.userId=e)},null,512),[[s["G"],i.userId]])]),Object(s["g"])("div",oc,[rc,Object(s["J"])(Object(s["g"])("input",{class:"input-pw",type:"password",id:"pw","onUpdate:modelValue":t[1]||(t[1]=e=>i.userPw=e)},null,512),[[s["G"],i.userPw]])]),Object(s["g"])("div",lc,[i.userId||i.userPw?i.userId?i.userPw?i.loginError?(Object(s["u"])(),Object(s["f"])("span",fc,yc)):Object(s["e"])("",!0):(Object(s["u"])(),Object(s["f"])("span",uc,gc)):(Object(s["u"])(),Object(s["f"])("span",bc,"아이디를 입력해주세요")):(Object(s["u"])(),Object(s["f"])("span",dc,"계정을 입력해주세요"))]),Ic],32),Object(s["i"])(o,{to:"/join",class:"join"},{default:Object(s["I"])(()=>[wc]),_:1})])}var Ec={data(){return{userId:"",userPw:"",loginError:!1}},methods:{async login(){try{await this.$store.dispatch("userLogin",{id:this.userId,password:this.userPw}).then(()=>{this.$store.state.user.id?this.$router.push("dashboard"):console.log("로그인 실패!")})}catch(e){console.log(e)}}}};c("8fe6");const xc=g()(Ec,[["render",kc],["__scopeId","data-v-29a70ede"]]);var Cc=xc;const Uc=[{path:"/",name:"MainpPage",component:Y},{path:"/dashboard",name:"HomePage",component:Y},{path:"/newBoard",name:"NewBoardView",component:_},{path:"/content/:id",name:"ContentView",component:$e},{path:"/modify",name:"ModifyUserView",component:tc},{path:"/login",name:"LoginView",component:Cc}],Pc=Object(E["a"])({history:Object(E["b"])("/"),routes:Uc});var Dc=Pc,Lc=c("5502"),Mc=c("0e44"),Bc=Object(Lc["a"])({state:{user:{id:"",nickName:"",introduce:"",regdate:""},isLogin:!1},mutations:{SET_USER(e,t){t&&(e.user.id=t.id,e.user.nickName=t.nickName,e.user.introduce=t.introduce,e.user.regdate=t.regdate,e.isLogin=!0)},DELETE_USER(e){e.user.id="",e.user.nickName="",e.user.introduce="",e.user.regdate="",e.isLogin=!1}},actions:{async userLogin({commit:e},{id:t,password:c}){return await w.a.post("/api/Auth/login",{id:t,password:c}).then(t=>{t.data.id&&e("SET_USER",t.data)})},async userLogout({commit:e}){e("DELETE_USER")}},modules:{},plugins:[Object(Mc["a"])()]});c("7b17");Object(s["c"])(y).use(Bc).use(k["a"],w.a).use(Dc).mount("#app")},"59e3":function(e,t,c){"use strict";c("8a0c")},"64ce":function(e,t,c){e.exports=c.p+"img/water.fc13a266.jpg"},"710a":function(e,t,c){var s={"./apple.jpg":"5261","./bear.jpg":"42ed","./chicken.jpg":"b48b","./default.jpg":"24b4","./water.jpg":"64ce"};function n(e){var t=i(e);return c(t)}function i(e){if(!c.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="710a"},"829e":function(e,t,c){"use strict";c("042e")},"86c8":function(e,t,c){},"8a0c":function(e,t,c){},"8fe6":function(e,t,c){"use strict";c("2468")},"9df6":function(e,t,c){"use strict";c("ec50")},a342:function(e,t,c){"use strict";c("f12f")},a44f:function(e,t,c){"use strict";c("10bc")},b48b:function(e,t,c){e.exports=c.p+"img/chicken.946a78f2.jpg"},b91b:function(e,t,c){"use strict";c("86c8")},c4f7:function(e,t,c){},d6bc:function(e,t,c){"use strict";c("c4f7")},ec50:function(e,t,c){},f12f:function(e,t,c){},f13b:function(e,t,c){"use strict";c("4079")}});
//# sourceMappingURL=app.f93f0af7.js.map