var userFeed = new Instafeed({
    get: 'user',
    userId: '9175905370',
    accessToken: '9175905370.c472b03.b506b59adf5748a9bc8b6d151e3e9736',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}" class="works__link"><img src="{{image}}" class="works__pic"/></a>',
    sortBy: 'most-recent',
    limit: 6,
    links: false
});
userFeed.run();