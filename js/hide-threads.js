var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
	if (active_page != "index" && active_page != "ukko")
		return; // not index
		
	if (!localStorage.hiddenthreads)
		localStorage.hiddenthreads = '{}';
	
	// Load data from HTML5 localStorage
	var hidden_data = JSON.parse(localStorage.hiddenthreads);
	
	var store_data = function() {
		localStorage.hiddenthreads = JSON.stringify(hidden_data);
	};
	
	// Delete old hidden threads (7+ days old)
	for (var key in hidden_data) {
		for (var id in hidden_data[key]) {
			if (hidden_data[key][id] < Math.round(Date.now() / 1000) - 60 * 60 * 24 * 7) {
				delete hidden_data[key][id];
				store_data();
			}
		}
	}
	var fields_to_hide = 'div.file,div.post,div.video-container,video,iframe,img:not(.unanimated),canvas,p.fileinfo,a.hide-thread-link,div.new-posts,br';
	
	var do_hide_threads = function() {
		var id = $(this).attr('id').replace('thread_', '');
		var thread_container = $(this);

		var board = thread_container.data("board");

		if (!hidden_data[board]) {
			hidden_data[board] = {}; // id : timThis thread has been hidden.mp
		}
	
		$('<a class="hide-thread-link" style="float: right;font-size: 10px;margin-right: 4px;" href="javascript:void(0)"><img class="close" style="margin-bottom: -3px;" src="/static/close.png"></a><span> </span>')
			.insertBefore(thread_container.find(':not(h2,h2 *):first'))
			.click(function() {
				hidden_data[board][id] = Math.round(Date.now() / 1000);
				store_data();
				
				// Ocultar el contenedor del hilo y mostrar el mensaje de hilo oculto
				thread_container.hide();
				var hidden_div = $('<div class="hidden-thread-msg" style="font-size: 14px; text-shadow: 1px 1px 1px #000; font-weight: bold; margin-left: 30px; margin-bottom: 0px; color: #D0D0D0;">This thread has been hidden. <a href="javascript:void(0)" style="float: right;font-size: 10px;margin-right: 4px;" class="show-thread-link">Show thread</a></div><hr>');
				thread_container.after(hidden_div);
				hidden_div.find('.show-thread-link').click(function() {
					delete hidden_data[board][id];
					store_data();
					
					// Mostrar el contenedor del hilo y ocultar el mensaje de hilo oculto
					thread_container.show();
					hidden_div.remove();
				});
			});
		
		if (hidden_data[board][id]) {
			// Ocultar el contenedor del hilo y mostrar el mensaje de hilo oculto con el enlace "Show thread"
			thread_container.hide();
			var hidden_div = $('<div class="hidden-thread-msg" style="font-size: 14px; text-shadow: 1px 1px 1px #000; font-weight: bold; margin-left: 30px; margin-bottom: 0px; color: #D0D0D0;">This thread has been hidden. <a href="javascript:void(0)" style="float: right;font-size: 10px;margin-right: 4px;" class="show-thread-link">Show thread</a></div><hr>');
			thread_container.after(hidden_div);
			hidden_div.find('.show-thread-link').click(function() {
				delete hidden_data[board][id];
				store_data();
				
				// Mostrar el contenedor del hilo y ocultar el mensaje de hilo oculto
				thread_container.show();
				hidden_div.remove();
			});
		}
	}

	$('div[id^="thread_"]').each(function() {
		do_hide_threads.call(this);
	});

	$(document).on('new_post', function(e, post) {
		do_hide_threads.call($(post).find('div.post.op')[0]);
	});
});

$(document).ready(function() {

	if (!localStorage.hiddenthreads)
	  localStorage.hiddenthreads = '{}';
  
	// Load data from HTML5 localStorage
	var hidden_data = JSON.parse(localStorage.hiddenthreads);
  
	var store_data = function() {
	  localStorage.hiddenthreads = JSON.stringify(hidden_data);
	};
  
	// Delete old hidden threads (7+ days old)
	for (var key in hidden_data) {
	  for (var id in hidden_data[key]) {
		if (hidden_data[key][id] < Math.round(Date.now() / 1000) - 60 * 60 * 24 * 7) {
		  delete hidden_data[key][id];
		  store_data();
		}
	  }
	}
  
	var do_hide_threads = function() {
	  var thread_container = $(this);
	  var hideButton = thread_container.find('.ignorebtn');
	  var pBodyContainer = thread_container.find('.pBody');
	  var hiddenMessage = $('<p style="font-size: 14px; text-shadow: 1px 1px 1px #000; font-weight: bold; margin-left: 30px; margin-bottom: 0px; color: #D0D0D0;">Esta respuesta se ha ocultado</p>');
  
	  hideButton.click(function() {
		pBodyContainer.toggle();
		if (pBodyContainer.is(':visible')) {
		  hiddenMessage.remove();
		  // Remove the thread from hidden_data
		  delete hidden_data[thread_container.attr('id')];
		} else {
		  thread_container.append(hiddenMessage);
		  // Add the thread to hidden_data
		  hidden_data[thread_container.attr('id')] = Math.round(Date.now() / 1000);
		}
		store_data(); // Save the updated hidden_data to localStorage
	  });
  
	  // Restore thread visibility based on hidden_data
	  if (hidden_data[thread_container.attr('id')]) {
		pBodyContainer.hide();
		thread_container.append(hiddenMessage);
	  }
	};
  
	// ...
  
	$('div[id^="reply_"]').each(function() {
	  do_hide_threads.call(this);
	});
  
	// ...
  });
  

}
