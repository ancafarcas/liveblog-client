var openUrl = require('./utils').open;

describe('blogs', function() {
    'use strict';

    describe('blog changes:', function() {
        beforeEach(openUrl('/#/liveblog/1'));
        });

        it('can modify blog title', function() {
            var inputTitle = element(by.model('blogs.title'));
            inputTitle.clear();
            inputTitle.sendKeys('ABC');
            expect(inputTitle.getAttribute('value')).toBe('ABC');
        });

        it('can modify blog description', function() {
            var inputDescription = element(by.model('blogs.description'));
            inputDescription.clear();
            inputDescription.sendKeys('test description');
            expect(inputDescription.getAttribute('value')).toBe('test description');
        });

});
