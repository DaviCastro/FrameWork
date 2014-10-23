Ember.TEMPLATES["album"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n		<h1>sss</h1>\r\n		");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" <span\r\n		class=\"label label-default\">Nome: </span> ");
  stack1 = helpers._triageMustache.call(depth0, "nome", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span\r\n		class=\"label label-default\">Descricao: </span> ");
  stack1 = helpers._triageMustache.call(depth0, "descricao", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "deleteMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n	<!-- Modal -->\r\n	<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\"\r\n		aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n		<div class=\"modal-dialog\">\r\n			<div class=\"modal-content\">\r\n				<div class=\"modal-header\">\r\n					<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"close\"\r\n						data-dismiss=\"modal\">\r\n						<span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\r\n					</button>\r\n					<h4 class=\"modal-title\" id=\"myModalLabel\">Album</h4>\r\n				</div>\r\n				<div class=\"modal-body\">Tem certeza que quer deletar este\r\n					registro?</div>\r\n				<div class=\"modal-footer\">\r\n					<button type=\"button\"\r\n						");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\"\r\n						data-dismiss=\"modal\">Cancelar</button>\r\n					<button type=\"button\"\r\n						");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirmDelete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Confirmar</button>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	");
  return buffer;
  }

  data.buffer.push("\r\n\r\n<div class=\"col-xs-6\">\r\n		\r\n		\r\n		");
  stack1 = helpers.each.call(depth0, "acoes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n\r\n\r\n	<div class=\"btn-group pull-right\">\r\n		<button class=\"btn btn-default\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Editar</button>\r\n		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-danger\" data-toggle=\"modal\"\r\n			data-target=\"#myModal\">deletar</button>\r\n	</div>\r\n	");
  stack1 = (helper = helpers['panel-primary'] || (depth0 && depth0['panel-primary']),options={hash:{
    'title': ("Album"),
    'bootStrapClass': ("panel panel-success")
  },hashTypes:{'title': "STRING",'bootStrapClass': "STRING"},hashContexts:{'title': depth0,'bootStrapClass': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "panel-primary", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n</div>\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["album/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col-xs-6\">\r\n\r\n	<div class=\"panel panel-success\">\r\n		<div class=\"panel-heading\">\r\n			<div class=\"pull-right\">\r\n				<button class=\"btn btn-default\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "salvar", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Salvar</button>\r\n			</div>\r\n			<h3 data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n				href=\"#collapseOne\" class=\"panel-title\">\r\n\r\n				<span class=\"glyphicon glyphicon-collapse-down\"></span> Editar\r\n			</h3>\r\n			<div class=\"clearfix\"></div>\r\n		</div>\r\n		<div id=\"collapseOne\" class=\"panel-collapse collapse in\">\r\n			<div class=\"panel-body\">\r\n				<form class=\"form-horizontal\" role=\"form\">\r\n					<div class=\"form-group\">\r\n\r\n						<label class=\"col-xs-4 control-label\" for=\"nome\">Nome do\r\n							Album</label>\r\n						<div class=\"col-xs-8\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.MyText", {hash:{
    'value': ("nome"),
    'placeholder': ("Nome do Album"),
    'class': ("form-control"),
    'id': ("nome")
  },hashTypes:{'value': "ID",'placeholder': "STRING",'class': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'class': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\r\n					</div>\r\n\r\n					<div class=\"form-group\">\r\n						<label class=\"col-sm-4 control-label\" for=\"descricao\">Descricao\r\n							do Album</label>\r\n\r\n						<div class=\"col-xs-8\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.MyText", {hash:{
    'placeholder': ("Descricao"),
    'value': ("descricao"),
    'class': ("form-control"),
    'id': ("descricao")
  },hashTypes:{'placeholder': "STRING",'value': "ID",'class': "STRING",'id': "STRING"},hashContexts:{'placeholder': depth0,'value': depth0,'class': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\r\n					</div>\r\n\r\n				</form>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["albums"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" Novo\r\n				");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n			<li class=\"list-group-item\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "album", "album", options) : helperMissing.call(depth0, "link-to", "album", "album", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li> ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "album.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "album.nome", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-6\">\r\n\r\n	<div class=\"panel panel-primary\">\r\n		<div class=\"panel-heading\">\r\n\r\n			<div class=\"pull-right\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button btn btn-default btn-sm")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "albums.create", options) : helperMissing.call(depth0, "link-to", "albums.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n\r\n			<h3 class=\"panel-title\">Albuns</h3>\r\n			<div class=\"clearfix\"></div>\r\n\r\n		</div>\r\n		<ul class=\"list-group-item\">\r\n			");
  stack1 = helpers.each.call(depth0, "album", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n		</ul>\r\n		<div class=\"panel-footer\">\r\n			<span class=\"label label-primary\"> Albuns: ");
  stack1 = helpers._triageMustache.call(depth0, "albumContador", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/panel-primary"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("bootStrapClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\r\n	<div class=\"panel-heading\">\r\n		<h3 class=\"panel-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\r\n	</div>\r\n	<div class=\"panel-body\">");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>footer</h2>");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n	<div class=\"container-fluid\">\r\n		<div id=\"header\" class=\"navbar-header\">\r\n			<h1>Cabecalho</h1>\r\n		</div>\r\n	</div>\r\n</nav>");
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Albuns");
  }

  data.buffer.push("\r\n<div class=\"col-xs-6\">\r\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "albums", options) : helperMissing.call(depth0, "link-to", "albums", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n ");
  return buffer;
  
});