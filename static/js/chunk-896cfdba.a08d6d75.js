(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-896cfdba"],{"30cf":function(e,t,a){"use strict";a("6632")},6632:function(e,t,a){},cc5e:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return i}));var r=a("b775");function n(){return Object(r["a"])({url:"/vue-element-admin/routes",method:"get"})}function s(){return Object(r["a"])({url:"/vue-element-admin/roles",method:"get"})}function l(e){return Object(r["a"])({url:"/vue-element-admin/role",method:"post",data:e})}function o(e,t){return Object(r["a"])({url:"/vue-element-admin/role/".concat(e),method:"put",data:t})}function i(e){return Object(r["a"])({url:"/vue-element-admin/role/".concat(e),method:"delete"})}},d5c0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticStyle:{padding:"10px"}},[a("el-card",[a("div",{staticStyle:{padding:"15px","text-align":"center"}},[a("el-form",{ref:"riskFactoryCheckApplyVo",staticClass:"form1",staticStyle:{"text-align":"center"},attrs:{model:e.riskFactoryCheckApplyVo,rules:e.ruleValidate,"label-width":"160px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"归属部门",prop:"companyAddress"}},[a("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[a("el-option",{attrs:{value:"A",label:"金融信息科技一部"}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"归属团队",prop:"companyAddress"}},[a("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[a("el-option",{attrs:{value:"A",label:"归属团队1"}}),a("el-option",{attrs:{value:"B",label:"归属团队2"}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"归属项目",prop:"companyAddress"}},[a("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[a("el-option",{attrs:{value:"A",label:"归属项目1"}}),a("el-option",{attrs:{value:"B",label:"归属项目2"}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"员工工号",prop:"companyAddress"}},[a("el-input",{staticClass:"picc-icon-btn-input",attrs:{placeholder:"请输入..."},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.queryYGGH},slot:"suffix"})])],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"资产成本",prop:"linkName"}},[a("el-input",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.linkName,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"linkName",t)},expression:"riskFactoryCheckApplyVo.linkName"}})],1)],1)],1),a("div",{staticStyle:{padding:"15px","text-align":"right"}},[a("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[a("el-table-column",{attrs:{align:"center",label:"资产编号",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"资产使用人员",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),a("el-table-column",{attrs:{align:"header-center",label:"资产性质"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),a("el-table-column",{attrs:{align:"header-center",label:"资产种类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description_a)+" ")]}}])}),a("el-table-column",{attrs:{align:"header-center",label:"资产配置"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description_b)+" ")]}}])}),a("el-table-column",{attrs:{align:"header-center",label:"资产采买路径"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description_c)+" ")]}}])}),a("el-table-column",{attrs:{align:"header-center",label:"价格参考"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description_d)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(a){return e.handleBuyEdit(t)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",size:"small",round:""},on:{click:function(a){return e.handleBuyDelete(t)}}},[e._v("删除")])]}}])})],1)],1)],1),a("br"),a("br"),a("br"),a("el-button",{attrs:{type:"primary",round:""}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"primary",round:""}},[e._v("提交")]),a("el-button",{staticStyle:{"text-align":"right"},attrs:{type:"primary",round:""},on:{click:e.handleBuyAddRole}},[e._v("增加资产信息")])],1)])],1),a("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),a("el-form-item",{attrs:{label:"Desc"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),a("el-form-item",{attrs:{label:"Menus"}},[a("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1),a("el-dialog",{attrs:{visible:e.dialogAssetBuy,title:(e.dialogType,"资产申请")},on:{"update:visible":function(t){e.dialogAssetBuy=t}}},[a("el-form",{attrs:{model:e.assetBuy,rules:e.ruleValidateAssetBuy,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"使用人员",prop:"name"}},[a("el-input",{staticClass:"picc-icon-btn-input",attrs:{placeholder:"请输入..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1),a("el-form-item",{attrs:{label:"资产性质",prop:"name"}},[a("el-select",{attrs:{type:"text",placeholder:"请选择",clearable:""},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}},e._l(e.industryInfoList,(function(e,t){return a("el-option",{key:t,attrs:{value:e.key,label:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"资产种类",prop:"name"}},[a("el-select",{attrs:{type:"text",placeholder:"请选择",clearable:""},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}},e._l(e.assetSortList,(function(e,t){return a("el-option",{key:t,attrs:{value:e.key,label:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"资产数量",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"资产配置",prop:"name"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"采买途径",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"价格参考",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"资产备注",prop:"name"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"订单信息",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"订单截图",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),a("el-form-item",{attrs:{label:"资产编号",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogAssetBuy=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmBuyRole}},[e._v("确定")])],1)],1)],1)},n=[],s=(a("a4d3"),a("e01a"),a("99af"),a("4de4"),a("4160"),a("caad"),a("a434"),a("b0c0"),a("2532"),a("159b"),a("5530")),l=a("2909"),o=a("b85c"),i=(a("96cf"),a("1da1")),c=a("df7c"),u=a.n(c),d=a("ed08"),p=a("cc5e"),m=a("c677"),y={key:"",name:"",description:"",routes:[]},f={components:{ElCard:m["a"]},data:function(){return{role:Object.assign({},y),routes:[],rolesList:[],dialogVisible:!1,dialogAssetBuy:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"},industryInfoList:[{value:"消耗品",key:"A"},{value:"非消耗品定向",key:"B"},{value:"非消耗品非定向",key:"C"}],assetSortList:[{value:"电脑",key:"A"},{value:"笔记本",key:"B"},{value:"卫生纸",key:"C"},{value:"桌子",key:"D"},{value:"椅子",key:"E"},{value:"夹子",key:"F"}],riskFactoryCheckApplyVo:{companyName:"",registrationNumber:"",companyAddress:"",industryInfo:"",expectedServiceDate:"",linkName:"",linkNumber:"",withSpecialRequire:"",pointx2000:"",pointy2000:"",addressDetail:"",addressProvince:"",addressCity:"",addressCounty:"",addressProvinceCode:"",addressCityCode:"",addressCountyCode:"",addressCode:""},assetBuy:{name:""},ruleValidate:{companyAddress:[{required:!0,message:"不能为空"}],linkName:[{required:!0,message:"不能为空"}]},ruleValidateAssetBuy:{name:[{required:!0,message:"不能为空"}]}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{queryYGGH:function(){},getRoutes:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["d"])();case 2:a=t.sent,e.serviceRoutes=a.data,e.routes=e.generateRoutes(a.data);case 5:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:a=t.sent,e.rolesList=a.data;case 4:case"end":return t.stop()}}),t)})))()},generateRoutes:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=Object(o["a"])(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(!s.hidden){var l=this.onlyOneShowingChild(s.children,s);s.children&&l&&!s.alwaysShow&&(s=l);var i={path:u.a.resolve(a,s.path),title:s.meta&&s.meta.title};s.children&&(i.children=this.generateRoutes(s.children,i.path)),r.push(i)}}}catch(c){n.e(c)}finally{n.f()}return r},generateArr:function(e){var t=this,a=[];return e.forEach((function(e){if(a.push(e),e.children){var r=t.generateArr(e.children);r.length>0&&(a=[].concat(Object(l["a"])(a),Object(l["a"])(r)))}})),a},handleAddRole:function(){this.role=Object.assign({},y),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleBuyAddRole:function(){this.dialogType="new",this.dialogAssetBuy=!0},handleBuyEdit:function(e){this.dialogType="edit",this.dialogAssetBuy=!0},handleBuyDelete:function(e){var t=this,a=e.$index,r=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["b"])(r.key);case 2:t.rolesList.splice(a,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(d["c"])(e.row),this.$nextTick((function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1}))},handleDelete:function(e){var t=this,a=e.$index,r=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["b"])(r.key);case 2:t.rolesList.splice(a,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},generateTree:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,n=[],s=Object(o["a"])(e);try{for(s.s();!(t=s.n()).done;){var l=t.value,i=u.a.resolve(a,l.path);l.children&&(l.children=this.generateTree(l.children,i,r)),(r.includes(i)||l.children&&l.children.length>=1)&&n.push(l)}}catch(c){s.e(c)}finally{s.f()}return n},confirmRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,l,o,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a="edit"===e.dialogType,r=e.$refs.tree.getCheckedKeys(),e.role.routes=e.generateTree(Object(d["c"])(e.serviceRoutes),"/",r),!a){t.next=16;break}return t.next=6,Object(p["e"])(e.role.key,e.role);case 6:n=0;case 7:if(!(n<e.rolesList.length)){t.next=14;break}if(e.rolesList[n].key!==e.role.key){t.next=11;break}return e.rolesList.splice(n,1,Object.assign({},e.role)),t.abrupt("break",14);case 11:n++,t.next=7;break;case 14:t.next=22;break;case 16:return t.next=18,Object(p["a"])(e.role);case 18:s=t.sent,l=s.data,e.role.key=l.key,e.rolesList.push(e.role);case 22:o=e.role,i=o.description,c=o.key,u=o.name,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(c,"</div>\n            <div>Role Name: ").concat(u,"</div>\n            <div>Description: ").concat(i,"</div>\n          "),type:"success"});case 25:case"end":return t.stop()}}),t)})))()},confirmBuyRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dialogAssetBuy=!1;case 1:case"end":return t.stop()}}),t)})))()},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=null,r=e.filter((function(e){return!e.hidden}));return 1===r.length?(a=r[0],a.path=u.a.resolve(t.path,a.path),a):0===r.length&&(a=Object(s["a"])(Object(s["a"])({},t),{},{path:"",noShowingChildren:!0}),a)}}},h=f,b=(a("30cf"),a("2877")),k=Object(b["a"])(h,r,n,!1,null,"b4a47ed4",null);t["default"]=k.exports}}]);