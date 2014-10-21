Ember.TEMPLATES["album"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"panel panel-default\">\r\n	<div class=\"panel body\">\r\n		<p>");
  stack1 = helpers._triageMustache.call(depth0, "nome", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n		<p>");
  stack1 = helpers._triageMustache.call(depth0, "descricao", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\r\n\r\n		<button class=\"btn btn-primary\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Editar</button>\r\n	</div>\r\n\r\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["album/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"form-group\">\r\n<label>Nome do Album</label>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("nome")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n<label>Descricao do Album</label>\r\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("descricao")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n<button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "salvar", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >Salvar</button>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["albums"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n					<tr>\r\n						<td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "album", "album", options) : helperMissing.call(depth0, "link-to", "album", "album", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n					</tr>\r\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "album.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "album.nome", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-fluid\">\r\n	<div class=row-fluid>\r\n		<div class=\"span3\">\r\n			<table class=\"table\">\r\n				<thead>\r\n					<tr>\r\n						<th>Albuns</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n					");
  stack1 = helpers.each.call(depth0, "album", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				</tbody>\r\n			</table>\r\n\r\n		</div>\r\n	</div>\r\n	<span class=\"label label-primary\"> Albuns: ");
  stack1 = helpers._triageMustache.call(depth0, "albumContador", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n\r\n");
  return buffer;
  
});

Ember.TEMPLATES["components/footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("footer");
  
});

Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>footer</h2>");
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"header\" class=\"navbar-header\">\r\n<h1>Cabecalho</h1>\r\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Albuns");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "albums", options) : helperMissing.call(depth0, "link-to", "albums", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  
});