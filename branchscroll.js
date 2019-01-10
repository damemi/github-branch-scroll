$(document).ready(function(){
  var headRef = $('.head-ref').text()
  var baseRef = $('.base-ref').text()
  $("#partial-discussion-sidebar").append('<div class="discussion-sidebar-item"><div class="discussion-sidebar-heading text-bold">Head Branch</div><span class="commit-ref">'+headRef+'</span></div><div class="discussion-sidebar-item"><div class="discussion-sidebar-heading text-bold">Base Branch</div><span class="commit-ref">'+baseRef+'</span></div>')
});
