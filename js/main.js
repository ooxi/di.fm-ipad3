$(function() {
	$.get('http://www.di.fm/', function(content) {
		var difm = $(content.responseText);

		var channels = [];
		var html = '';

		difm.find('.lists a').each(function() {
			var $this = $(this);

			var img = URI($this.children('img').attr('src'))
				.removeSearch('size')
				.addSearch('size', '200x200');

			channels.push({
				name:	$this.children('span').text(),
				img:	img,
				url:	$this.attr('href')
			});
		});

		html += '<ul class="thumbnails">';
		for (var i = 0; i < channels.length; ++i) {
			var channel = channels[i];

			html += ''
				+'<li>'
					+'<a class="thumbnail" href="http://listen.di.fm/public2'+ channel.url +'.pls">'
						+'<img src="'+ channel.img +'" />'
						+'<h4>'+ channel.name +'</h4>'
					+'</a>'
				+'</li>'
			;
		}
		html += '</ul>';

		$('#main_content').html(html);
	});
});

