describe('game-page', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/game');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Terram Game';
    expect(subject).toEqual(result);
  });

  it('should have a game-view', () => {
    let ele = element(by.css('game-view'));
    expect(ele).not.toBe(null);
  });
});
