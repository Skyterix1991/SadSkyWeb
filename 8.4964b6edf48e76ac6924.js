(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1XzQ":function(e,t,n){"use strict";n.r(t),n.d(t,"MainPageModule",(function(){return L}));var i=n("ofXK"),o=n("VSwL"),r=n("4+EV"),c=n("fXoL");let a=(()=>{class e{constructor(){this.loginModalCloseEvent=new c.n,this.loginModalOpenEvent=new c.n,this.registerModalCloseEvent=new c.n,this.registerModalOpenEvent=new c.n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=n("tyNb"),l=n("6NWb");const b=["menuRef"],d=function(){return["/"]};let g=(()=>{class e{constructor(e,t){this.authenticationService=e,this.renderer=t,this.menuToggleIcon=o.faBars,this.isMenuOpened=!0}onLoginClicked(){this.authenticationService.loginModalOpenEvent.emit()}onRegisterClicked(){this.authenticationService.registerModalOpenEvent.emit()}onMenuToggle(){this.isMenuOpened?(this.menuToggleIcon=r.faTimes,this.renderer.setStyle(this.menuRef.nativeElement,"display","block")):(this.menuToggleIcon=o.faBars,this.renderer.setStyle(this.menuRef.nativeElement,"display","none")),this.isMenuOpened=!this.isMenuOpened}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(a),c.Hb(c.D))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-navbar"]],viewQuery:function(e,t){var n;1&e&&c.oc(b,!0),2&e&&c.dc(n=c.Sb())&&(t.menuRef=n.first)},decls:20,vars:3,consts:[[1,"navbar","navbar-expand-lg","navbar-light","fixed-top","bg-light","shadow-lg","p-0"],[1,"navbar-brand","pl-3","p-0",3,"routerLink"],["src","./assets/img/logo.png","alt","logo"],["type","button",1,"navbar-toggler","text-black-50","mr-3",3,"click"],["size","lg",1,"pl-2",3,"icon"],[1,"collapse","navbar-collapse","text-center","pr-3","ml-n2","bg-light"],["menuRef",""],[1,"navbar-nav","mr-auto","ml-3"],[1,"nav-item","active"],["routerLink","","fragment","header",1,"nav-link"],["routerLink","","fragment","advantages",1,"nav-link"],[1,"navbar-nav","form-inline"],[1,"nav-link","mr-2","d-inline-block","pointer",3,"click"],[1,"btn","btn-primary","d-inline-block","ml-1","pointer",3,"click"]],template:function(e,t){1&e&&(c.Kb(0,"nav",0),c.Kb(1,"a",1),c.Ib(2,"img",2),c.Jb(),c.Kb(3,"button",3),c.Rb("click",(function(){return t.onMenuToggle()})),c.Ib(4,"fa-icon",4),c.Jb(),c.Kb(5,"div",5,6),c.Kb(7,"ul",7),c.Kb(8,"li",8),c.Kb(9,"a",9),c.kc(10,"Strona g\u0142\xf3wna"),c.Jb(),c.Jb(),c.Kb(11,"li",8),c.Kb(12,"a",10),c.kc(13,"Mo\u017cliwo\u015bci"),c.Jb(),c.Jb(),c.Jb(),c.Kb(14,"div",11),c.Kb(15,"div",8),c.Kb(16,"a",12),c.Rb("click",(function(){return t.onLoginClicked()})),c.kc(17,"Zaloguj si\u0119"),c.Jb(),c.Kb(18,"button",13),c.Rb("click",(function(){return t.onRegisterClicked()})),c.kc(19,"Do\u0142\u0105cz do nas "),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(1),c.Yb("routerLink",c.Zb(2,d)),c.xb(3),c.Yb("icon",t.menuToggleIcon))},directives:[s.f,l.a],styles:[".navbar[_ngcontent-%COMP%]{height:70px;font-weight:300;text-transform:capitalize}.nav-item[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.navbar-toggler[_ngcontent-%COMP%]{outline:none;border:none;padding:0;width:40px;height:40px;line-height:40px;text-align:center}"]}),e})(),u=(()=>{class e{constructor(e){this.authenticationService=e}ngOnInit(){}onRegisterClicked(){this.authenticationService.registerModalOpenEvent.emit()}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(a))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-header"]],decls:12,vars:0,consts:[[1,"container"],[1,"row","text-center","pt-5"],[1,"col-12","mt-5"],[1,"display-4","lead"],[1,"text-gray"],[1,"btn","btn-info","rounded-pill","mt-3","join",3,"click"],["src","https://dummyimage.com/800x450/ccc/000","alt","user dashboard",1,"img-fluid"]],template:function(e,t){1&e&&(c.Kb(0,"section"),c.Kb(1,"div",0),c.Kb(2,"div",1),c.Kb(3,"div",2),c.Kb(4,"p",3),c.kc(5,"Bezp\u0142atne narz\u0119dzie do diagnozy"),c.Jb(),c.Kb(6,"p",4),c.kc(7,"Sprawd\u017a czy mo\u017cesz cierpie\u0107 na depresj\u0119 lub/i stany l\u0119kowe."),c.Jb(),c.Kb(8,"button",5),c.Rb("click",(function(){return t.onRegisterClicked()})),c.kc(9,"Do\u0142\u0105cz do nas"),c.Jb(),c.Jb(),c.Kb(10,"div",2),c.Ib(11,"img",6),c.Jb(),c.Jb(),c.Jb(),c.Jb())},styles:[".lead[_ngcontent-%COMP%]{font-weight:500}.join[_ngcontent-%COMP%]{padding:10px 30px}section[_ngcontent-%COMP%]{margin-top:70px}"]}),e})();var m=n("0smN"),h=n("sO7D");let p=(()=>{class e{constructor(){this.faClipboard=h.faClipboard,this.faEnvelope=m.faEnvelope}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-advantages"]],decls:36,vars:2,consts:[[1,"mt-5"],[1,"container","text-center"],[1,"h2","title"],[1,"row","mt-5"],[1,"col-xl-6","text-left"],[1,"h3"],[1,"text-gray"],[1,"advantage"],[1,"icon"],["size","2x",1,"d-inline-block",3,"icon"],[1,"d-inline-block"],[1,"w-75","lead"],[1,"w-75","mt-n3","text-gray"],[1,"col-xl-6"],["src","https://dummyimage.com/600x400/ccc/000","alt","user dashboard",1,"img-fluid"]],template:function(e,t){1&e&&(c.Kb(0,"section",0),c.Kb(1,"div",1),c.Kb(2,"span",2),c.kc(3,"Mo\u017cliwo\u015bci"),c.Jb(),c.Kb(4,"div",3),c.Kb(5,"div",4),c.Kb(6,"p",5),c.kc(7,"Kontrola emocji"),c.Jb(),c.Kb(8,"p",6),c.kc(9," Dokumentuj swoje emocje i otrzymaj rezultat wskazuj\u0105cy czy mo\u017cesz cierpie\u0107 na depresj\u0119 lub stany l\u0119kowe. "),c.Jb(),c.Kb(10,"div",7),c.Kb(11,"div",8),c.Ib(12,"fa-icon",9),c.Jb(),c.Kb(13,"div",10),c.Kb(14,"p",11),c.kc(15,"Rezultat"),c.Jb(),c.Kb(16,"p",12),c.kc(17,"Po tygodniu regularnego wprowadzania danych zostanie wygenerowany tw\xf3j rezultat na ich podstawie."),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(18,"div",13),c.Ib(19,"img",14),c.Jb(),c.Jb(),c.Kb(20,"div",3),c.Kb(21,"div",13),c.Ib(22,"img",14),c.Jb(),c.Kb(23,"div",4),c.Kb(24,"p",5),c.kc(25,"Praca ze specjalist\u0105"),c.Jb(),c.Kb(26,"p",6),c.kc(27," Nasze narz\u0119dzie umo\u017cliwia w \u0142atwy spos\xf3b wsp\xf3\u0142prac\u0119 z twoim specjlaist\u0105. Specjalista mo\u017ce przegl\u0105da\u0107 tw\xf3j profil pod k\u0105tem zmiany w nastroju. "),c.Jb(),c.Kb(28,"div",7),c.Kb(29,"div",8),c.Ib(30,"fa-icon",9),c.Jb(),c.Kb(31,"div",10),c.Kb(32,"p",11),c.kc(33,"Zaproszenia"),c.Jb(),c.Kb(34,"p",12),c.kc(35,"Dzi\u0119ki wbudowanemu systemowi zaprosze\u0144 wystarczy \u017ce podasz sw\xf3j identyfikator specjali\u015bcie i zaakceptujesz zaproszenie."),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(12),c.Yb("icon",t.faClipboard),c.xb(18),c.Yb("icon",t.faEnvelope))},directives:[l.a],styles:[".advantage[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:64px;width:64px;line-height:76px;background:#17a2b8;text-align:center;border-radius:100%;margin-bottom:10px}.advantage[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}.advantage[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%]{font-weight:400}.title[_ngcontent-%COMP%]{font-weight:600;text-transform:capitalize;border-bottom:3px solid #0275d8;padding-bottom:5px}"]}),e})();var f=n("3Pt+"),v=n("fxjp"),w=n("0phd"),C=n("xskJ"),x=n("l7P3");function y(e,t){if(1&e&&(c.Kb(0,"div",17),c.kc(1),c.Jb()),2&e){const e=c.Tb();c.xb(1),c.mc(" ",e.errorMessage," ")}}function k(e,t){1&e&&(c.Kb(0,"span"),c.kc(1,"Zaloguj"),c.Jb())}function M(e,t){if(1&e&&c.Ib(0,"fa-icon",18),2&e){const e=c.Tb();c.Yb("fixedWidth",!0)("icon",e.authenticatingIcon)}}let J=(()=>{class e{constructor(e,t,n){this.store=e,this.authenticationService=t,this.document=n,this.userIcon=v.faUser,this.authenticatingIcon=C.faCircleNotch}ngOnInit(){this.createLoginForm(),this.authenticationStoreSubscription=this.store.select("authentication").subscribe(e=>{this.errorMessage=e.errorMessage,this.isAuthenticating=e.isAuthenticating}),window.scroll(0,0),this.document.body.classList.add("modal-open")}ngOnDestroy(){this.authenticationStoreSubscription.unsubscribe(),this.document.body.classList.remove("modal-open")}onClose(){this.isAuthenticating||this.authenticationService.loginModalCloseEvent.emit()}onSubmit(){this.loginForm.valid&&this.store.dispatch(new w.j(this.loginForm.controls.email.value,this.loginForm.controls.password.value))}createLoginForm(){this.loginForm=new f.d({email:new f.b(null,[f.m.email,f.m.required]),password:new f.b(null,f.m.required)})}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(x.h),c.Hb(a),c.Hb(i.c))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-login"]],decls:21,vars:6,consts:[[1,"modal-backdrop","show"],[1,"login-modal"],[1,"content","overflow-auto","rounded-lg"],[1,"header"],[1,"float-right","p-3","close",3,"click"],[1,"body"],[1,"icon","d-inline-block","rounded-circle"],["size","3x",3,"icon"],[1,"title","h2","font-weight-light","mt-2"],[1,"p-3","mr-4","ml-4",3,"formGroup"],["class","alert alert-danger p-2 mb-4",4,"ngIf"],[1,"form-group"],["formControlName","email","placeholder","Email","type","email",1,"form-control"],["formControlName","password","placeholder","Has\u0142o","type","password",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block","p-3","mt-5",3,"disabled","click"],[4,"ngIf"],["class","text-white","size","sm","spin","true",3,"fixedWidth","icon",4,"ngIf"],[1,"alert","alert-danger","p-2","mb-4"],["size","sm","spin","true",1,"text-white",3,"fixedWidth","icon"]],template:function(e,t){1&e&&(c.Ib(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"div",3),c.Kb(4,"span",4),c.Rb("click",(function(){return t.onClose()})),c.kc(5,"\xd7"),c.Jb(),c.Jb(),c.Kb(6,"div",5),c.Kb(7,"div",6),c.Ib(8,"fa-icon",7),c.Jb(),c.Kb(9,"p",8),c.kc(10,"Logowanie"),c.Jb(),c.Kb(11,"form",9),c.jc(12,y,2,1,"div",10),c.Kb(13,"div",11),c.Ib(14,"input",12),c.Jb(),c.Kb(15,"div",11),c.Ib(16,"input",13),c.Jb(),c.Kb(17,"div",11),c.Kb(18,"button",14),c.Rb("click",(function(){return t.onSubmit()})),c.jc(19,k,2,0,"span",15),c.jc(20,M,1,2,"fa-icon",16),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(8),c.Yb("icon",t.userIcon),c.xb(3),c.Yb("formGroup",t.loginForm),c.xb(1),c.Yb("ngIf",!!t.errorMessage),c.xb(6),c.Yb("disabled",!t.loginForm.valid||t.isAuthenticating),c.xb(1),c.Yb("ngIf",!t.isAuthenticating),c.xb(1),c.Yb("ngIf",t.isAuthenticating))},directives:[l.a,f.o,f.h,f.e,i.j,f.a,f.g,f.c],styles:[".login-modal[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;text-align:center;z-index:1050;margin-top:-5vh}.login-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{min-height:56px}.login-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-top:-30px;border:2px solid #0275d8;line-height:120px;color:#0275d8;height:100px;width:100px}.login-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#3c3c3c}.login-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:inline-block;width:75vw;max-width:350px;min-height:450px;max-height:90vh;background:#fff}.login-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#3c3c3c;cursor:pointer;-webkit-user-select:none;user-select:none}"]}),e})();var K=n("vMDV");function O(e,t){if(1&e&&(c.Kb(0,"div",29),c.kc(1),c.Jb()),2&e){const e=c.Tb();c.xb(1),c.mc(" ",e.errorMessage," ")}}function I(e,t){if(1&e&&(c.Kb(0,"option",30),c.kc(1),c.Jb()),2&e){const e=t.$implicit;c.Yb("value",e),c.xb(1),c.lc(e)}}function P(e,t){if(1&e&&(c.Kb(0,"option",30),c.kc(1),c.Jb()),2&e){const e=t.$implicit;c.Yb("value",t.index+1),c.xb(1),c.lc(e)}}function z(e,t){if(1&e&&(c.Kb(0,"option",30),c.kc(1),c.Jb()),2&e){const e=t.$implicit;c.Yb("value",e),c.xb(1),c.lc(e)}}function _(e,t){1&e&&(c.Kb(0,"span"),c.kc(1,"Zarejestruj"),c.Jb())}function j(e,t){if(1&e&&c.Ib(0,"fa-icon",31),2&e){const e=c.Tb();c.Yb("fixedWidth",!0)("icon",e.authenticatingIcon)}}let F=(()=>{class e{constructor(e,t,n){this.store=e,this.authenticationService=t,this.document=n,this.userIcon=v.faUser,this.authenticatingIcon=C.faCircleNotch,this.months=K.b,this.years=K.c,this.daysInMonth=[]}ngOnInit(){this.createRegisterForm(),this.authenticationStoreSubscription=this.store.select("authentication").subscribe(e=>{this.errorMessage=e.errorMessage,this.isAuthenticating=e.isAuthenticating}),window.scroll(0,0),this.document.body.classList.add("modal-open")}ngOnDestroy(){this.authenticationStoreSubscription.unsubscribe(),this.document.body.classList.remove("modal-open")}onClose(){this.isAuthenticating||this.authenticationService.registerModalCloseEvent.emit()}onSubmit(){this.registerForm.valid&&this.store.dispatch(new w.o(this.registerForm.controls.firstName.value,this.registerForm.controls.lastName.value,[+this.registerForm.controls.year.value,+this.registerForm.controls.month.value,+this.registerForm.controls.day.value],this.registerForm.controls.email.value,this.registerForm.controls.password.value))}onBirthdayChange(){const e=K.a.getDaysInMonth(+this.registerForm.controls.month.value,+this.registerForm.controls.year.value);this.daysInMonth=[];for(let t=1;t<=e;t++)this.daysInMonth.push(t);e?this.registerForm.controls.day.enable():this.registerForm.controls.day.disable()}createRegisterForm(){this.registerForm=new f.d({firstName:new f.b(null,[f.m.required,f.m.minLength(2),f.m.maxLength(255),f.m.pattern("^[a-zA-Z]+$")]),lastName:new f.b(null,[f.m.required,f.m.minLength(2),f.m.maxLength(255),f.m.pattern("^[a-zA-Z]+$")]),day:new f.b({value:"Dzie\u0144",disabled:!0},[f.m.required]),month:new f.b("Miesi\u0105c",[f.m.required]),year:new f.b("Rok",[f.m.required]),email:new f.b(null,[f.m.email,f.m.required,f.m.maxLength(255)]),password:new f.b(null,[f.m.required,f.m.minLength(6),f.m.maxLength(40)])})}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(x.h),c.Hb(a),c.Hb(i.c))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-register"]],decls:42,vars:9,consts:[[1,"modal-backdrop","show"],[1,"register-modal"],[1,"content","overflow-auto","rounded-lg"],[1,"header"],[1,"float-right","p-3","close",3,"click"],[1,"body"],[1,"icon","d-inline-block","rounded-circle"],["size","3x",3,"icon"],[1,"title","h2","font-weight-light","mt-2"],[1,"p-3","mr-4","ml-4",3,"formGroup"],["class","alert alert-danger p-2 mb-4",4,"ngIf"],[1,"form-row","mt-2","mb-2"],[1,"form-group","col-sm"],["formControlName","firstName","placeholder","Imi\u0119","type","text",1,"form-control"],["formControlName","lastName","placeholder","Nazwisko","type","text",1,"form-control"],[1,"form-group","col-sm-4"],["formControlName","day",1,"form-control"],["disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","col-sm-5"],["formControlName","month",1,"form-control",3,"change"],[1,"form-group","col-sm-3"],["formControlName","year",1,"form-control",3,"change"],[1,"form-group"],["formControlName","email","placeholder","Email","type","email",1,"form-control"],["formControlName","password","placeholder","Has\u0142o","type","password",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block","p-3","mt-5",3,"disabled","click"],[4,"ngIf"],["class","text-white","size","sm","spin","true",3,"fixedWidth","icon",4,"ngIf"],[1,"alert","alert-danger","p-2","mb-4"],[3,"value"],["size","sm","spin","true",1,"text-white",3,"fixedWidth","icon"]],template:function(e,t){1&e&&(c.Ib(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"div",3),c.Kb(4,"span",4),c.Rb("click",(function(){return t.onClose()})),c.kc(5,"\xd7"),c.Jb(),c.Jb(),c.Kb(6,"div",5),c.Kb(7,"div",6),c.Ib(8,"fa-icon",7),c.Jb(),c.Kb(9,"p",8),c.kc(10,"Rejestracja"),c.Jb(),c.Kb(11,"form",9),c.jc(12,O,2,1,"div",10),c.Kb(13,"div",11),c.Kb(14,"div",12),c.Ib(15,"input",13),c.Jb(),c.Kb(16,"div",12),c.Ib(17,"input",14),c.Jb(),c.Jb(),c.Kb(18,"div",11),c.Kb(19,"div",15),c.Kb(20,"select",16),c.Kb(21,"option",17),c.kc(22,"Dzie\u0144"),c.Jb(),c.jc(23,I,2,2,"option",18),c.Jb(),c.Jb(),c.Kb(24,"div",19),c.Kb(25,"select",20),c.Rb("change",(function(){return t.onBirthdayChange()})),c.Kb(26,"option",17),c.kc(27,"Miesi\u0105c"),c.Jb(),c.jc(28,P,2,2,"option",18),c.Jb(),c.Jb(),c.Kb(29,"div",21),c.Kb(30,"select",22),c.Rb("change",(function(){return t.onBirthdayChange()})),c.Kb(31,"option",17),c.kc(32,"Rok"),c.Jb(),c.jc(33,z,2,2,"option",18),c.Jb(),c.Jb(),c.Jb(),c.Kb(34,"div",23),c.Ib(35,"input",24),c.Jb(),c.Kb(36,"div",23),c.Ib(37,"input",25),c.Jb(),c.Kb(38,"div",23),c.Kb(39,"button",26),c.Rb("click",(function(){return t.onSubmit()})),c.jc(40,_,2,0,"span",27),c.jc(41,j,1,2,"fa-icon",28),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(8),c.Yb("icon",t.userIcon),c.xb(3),c.Yb("formGroup",t.registerForm),c.xb(1),c.Yb("ngIf",!!t.errorMessage),c.xb(11),c.Yb("ngForOf",t.daysInMonth),c.xb(5),c.Yb("ngForOf",t.months),c.xb(5),c.Yb("ngForOf",t.years),c.xb(6),c.Yb("disabled",!t.registerForm.valid||t.isAuthenticating),c.xb(1),c.Yb("ngIf",!t.isAuthenticating),c.xb(1),c.Yb("ngIf",t.isAuthenticating))},directives:[l.a,f.o,f.h,f.e,i.j,f.a,f.g,f.c,f.l,f.i,f.n,i.i],styles:[".register-modal[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;text-align:center;z-index:1050;margin-top:-5vh}.register-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{min-height:56px}.register-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-top:-30px;border:2px solid #0275d8;line-height:120px;color:#0275d8;height:100px;width:100px}.register-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#3c3c3c}.register-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:inline-block;width:75vw;max-width:450px;min-height:500px;max-height:90vh;background:#fff}.register-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#3c3c3c;cursor:pointer;-webkit-user-select:none;user-select:none}"]}),e})(),S=(()=>{class e{}return e.\u0275mod=c.Fb({type:e,bootstrap:[J,F]}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[i.b,l.b,f.k]]}),e})();var R=n("3/oY");const N=[{path:"",component:(()=>{class e{constructor(e,t){this.authenticationService=e,this.componentFactoryResolver=t}ngOnInit(){this.loginOpenSubscription=this.authenticationService.loginModalOpenEvent.subscribe(e=>{this.loadLoginForm()}),this.loginCloseSubscription=this.authenticationService.loginModalCloseEvent.subscribe(e=>{this.viewContainerRef.clear()}),this.registerOpenSubscription=this.authenticationService.registerModalOpenEvent.subscribe(e=>{this.loadRegisterForm()}),this.registerCloseSubscription=this.authenticationService.registerModalCloseEvent.subscribe(e=>{this.viewContainerRef.clear()})}ngOnDestroy(){this.registerCloseSubscription.unsubscribe(),this.registerOpenSubscription.unsubscribe(),this.loginCloseSubscription.unsubscribe(),this.loginOpenSubscription.unsubscribe()}loadLoginForm(){const e=this.componentFactoryResolver.resolveComponentFactory(J);this.viewContainerRef=this.placeholderDirective.viewContainerRef,this.viewContainerRef.clear(),this.viewContainerRef.createComponent(e)}loadRegisterForm(){const e=this.componentFactoryResolver.resolveComponentFactory(F);this.viewContainerRef=this.placeholderDirective.viewContainerRef,this.viewContainerRef.clear(),this.viewContainerRef.createComponent(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(a),c.Hb(c.j))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-main-page"]],viewQuery:function(e,t){var n;1&e&&c.oc(R.a,!0),2&e&&c.dc(n=c.Sb())&&(t.placeholderDirective=n.first)},decls:4,vars:0,consts:[["appPlaceholder",""]],template:function(e,t){1&e&&(c.Ib(0,"div",0),c.Ib(1,"app-navbar"),c.Ib(2,"app-header"),c.Ib(3,"app-advantages"))},directives:[R.a,g,u,p],styles:[""]}),e})()},{path:"**",redirectTo:""}];let Y=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[i.b,s.g.forChild(N)],s.g]}),e})();var E=n("PCNd");let L=(()=>{class e{}return e.\u0275mod=c.Fb({type:e,bootstrap:[g,u,p]}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[i.b,S,l.b,Y,E.a]]}),e})()},sO7D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="clipboard",o=[],r="f328",c="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z";t.definition={prefix:"fas",iconName:i,icon:[384,512,o,r,c]},t.faClipboard=t.definition,t.prefix="fas",t.iconName=i,t.width=384,t.height=512,t.ligatures=o,t.unicode=r,t.svgPathData=c}}]);