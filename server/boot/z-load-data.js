'use strict';

module.exports = function(app) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  app.models.Member.create({
    'username': 'antonio.trapani@gmail.com',
    'email': 'antonio.trapani@gmail.com',
    'password': 'password',
    'firstName': 'Antonio',
    'lastName': 'Trapani'
  }, (err, member) => {
    if (err) {
      console.log(err)
    }

    app.models.Website.create({
      'url': 'https://moneymour.com',
      'category': 'fintech',
      'public': true,
      'memberId': member.id
    }, (err, website) => {
      if (err) {
        console.log(err)
      }

      app.models.Login.create({
        provider_name: "provider_name",
        token: "token",
        websiteId: website.id
      }, (err, login) => {
        if (err) {
          console.log(err)
        }
      })
    })
  })
}
