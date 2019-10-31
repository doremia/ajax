$.get('/fortune', (response) => {
  $('#fortune-text').text(response);
});