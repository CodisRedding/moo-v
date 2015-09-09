Moo-v
=====

Prerequisites
-------------
Before you start, you will need:
* [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js and Node Package Manager (NPM)](https://nodejs.org/download/)
* [Serve (NPM)] (https://www.npmjs.com/package/serve)

Get the Code
------------
Now go ahead and download the code.
```
git clone https://github.com/fourq/moo-v.git
cd moo-v
```

And install and run the `serve` package so you can build the app.

```
npm install -g serve
serve src/
```

Navigate to `http://localhost:3000` and view the movies.

Note*

The initial movie listing is from the Rotten Tomatoes API.
The individual movie details are from the OMDB API.

Testing
-------


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
