Rickshaw.namespace("Rickshaw.Graph.RangeSlider"),Rickshaw.Graph.RangeSlider=Rickshaw.Class.create({initialize:function(i){var a=this.element=i.element,n=this.graph=i.graph;this.slideCallbacks=[],this.build(),n.onUpdate(function(){this.update()}.bind(this))},build:function(){var i=this.element,a=this.graph,n=a.dataDomain(),e=this;$(function(){$(i).slider({range:!0,min:n[0],max:n[1],values:[n[0],n[1]],slide:function(i,n){if(!(n.values[1]<=n.values[0])){a.window.xMin=n.values[0],a.window.xMax=n.values[1],a.update();var s=a.dataDomain();s[0]==n.values[0]&&(a.window.xMin=void 0),s[1]==n.values[1]&&(a.window.xMax=void 0),e.slideCallbacks.forEach(function(i){i(a,a.window.xMin,a.window.xMax)})}}})}),$(i)[0].style.width=a.width+"px"},update:function(){var i=this.element,a=this.graph,n=$(i).slider("option","values"),e=a.dataDomain();$(i).slider("option","min",e[0]),$(i).slider("option","max",e[1]),null==a.window.xMin&&(n[0]=e[0]),null==a.window.xMax&&(n[1]=e[1]),$(i).slider("option","values",n)},onSlide:function(i){this.slideCallbacks.push(i)}});