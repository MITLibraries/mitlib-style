<div class="layout-3q1q layout-band">

  <aside class="content-sup col1q-r" role="complementary">
    <p class="copy-sup">This area is an example of secondary/supplementary content which is usually in a sidebar.</p>

    <div class="bit">
      <h3 class="title">On this page</h3>
      <ul>
        <li><a href="#typography">typography</a></li>
        <li><a href="#buttons">buttons</a></li>
        <li><a href="#forms">forms</a></li>
        <li><a href="#modules">modules</a></li>
        <li><a href="#colors">colors</a></li>
        <li><a href="#helpers">helpers and utility classes</a></li>
        <li><a href="#layouts">layout examples</a></li>
        <li><a href="#layout-elements">notes on layout elements</a></li>
        <li><a href="#wordpress">wordpress entry content</a></li>
      </ul>
    </div>
  </aside>

  <div class="col3q">

    <h2 id="typography" class="subtitle3">typography</h2>

    <div class="title-page">
      <h1>Example Page Title</h1>
    </div>

    <p>This section shows some typography examples.</p>

    <div class="title title-page">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>

    <h2 class="hd-2 title title-page">Page level header (usually h2)</h2>

    <p>Content should be semantically correct with headers levels appropriately representing the tree structure of the page. Want to know what your pages look like semantically? <a href="https://www.w3.org/2003/12/semantic-extractor.html">You can!</a> (<a href="http://webaim.org/techniques/semanticstructure/">Why should I bother?</a>)</p>

    <h3 class="hd-3 title">Section level header (usually h3)</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque odio soluta fuga esse accusantium, voluptate, eos quod impedit! Quas cum saepe eaque quisquam culpa libero ipsum fuga necessitatibus tempore? Sequi! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

    <p>Here are some things in lists to give you examples:</p>

    <h4 class="title">Unordered list and Sub-section header (usually h4)</h4>

    <ul>
      <li>Regular unordered list</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>

    <h4>Ordered list</h4>

    <ol>
      <li>Regular ordered list</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ol>

    <h4>Unbulleted list</h4>

    <ul class="list-unbulleted">
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>

    <h4>Inline list</h4>

    <ul class="list-inline">
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>

    <h4>Inline list with piping</h4>

    <ul class="list-inline-pipe">
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ul>

  </div>
  <!-- close 3q col -->

</div>
<!-- close layout-band -->

<hr />

<h2 id="buttons" class="subtitle3">buttons</a></h2>

<h3 class="hd-6">Base buttons</h3>

<p>
  <a class="btn button-primary" href="">Primary</a>
  <a class="btn button-secondary" href="">Secondary</a>
</p>

<p>
  <a class="btn button-primary green" href="">Green primary</a>
  <a class="btn button-secondary green" href="">Green secondary</a>
</p>

<p>
  <a class="btn button-primary warn" href="">Warn primary</a>
  <a class="btn button-secondary warn" href="">Warn secondary</a>
</p>

<h3 class="hd-6">Button variations</h3>

<p>
  <a class="btn button-subtle" href="">Subtle</a>
</p>

<p>
  <a class="btn button-secondary button-small" href="">Small</a>
</p>

<h3 class="hd-6">Pagination (aligns with kaminari ruby gem)</h3>
<div class="results-pagination">
  <nav class="pagination">
    <span class="page current">1</span>
    <span class="page">
      <a rel="next" href="/search?page=2&amp;q=Wizard+of+Oz&amp;target=books">2</a>
    </span>
    <span class="page">
      <a href="/search?page=3&amp;q=Wizard+of+Oz&amp;target=books">3</a>
    </span>
    <span class="page">
      <a href="/search?page=4&amp;q=Wizard+of+Oz&amp;target=books">4</a>
    </span>
    <span class="page">
      <a href="/search?page=5&amp;q=Wizard+of+Oz&amp;target=books">5</a>
    </span>
    <span class="page gap">…</span>
    <span class="next">
      <a rel="next" href="/search?page=2&amp;q=Wizard+of+Oz&amp;target=books">Next ›</a>
    </span>
    <span class="last">
      <a href="/search?page=25&amp;q=Wizard+of+Oz&amp;target=books">Last »</a>
    </span>
  </nav>
</div>

<h3 class="hd-6">Inline/filter-type buttons</h3>

<div class="wrap-filters">
    View:
   <a class="btn button-small button-secondary" href="/submissions">All</a>
   <a class="btn button-small button-secondary" href="/submissions?filter=failed">Failed</a>
   <a class="btn button-small button-secondary" href="/submissions?filter=in+review+queue">In Review Queue</a>
   <a class="btn button-small button-secondary" href="/submissions?filter=approved">Approved</a>
</div>

<hr />

<h2 id="forms" class="subtitle3">forms</a></h2>

<p>See <a href="#modules">modules</a> for examples of banner/page-level alerts for forms which can also be used elsewhere.</p>

<form>
  <div class="field-wrap">
    <label for="example-email-1" class="field-label">Email address</label>
    <input type="email" class="field field-text wide" id="example-email-1" placeholder="Email">
  </div>
  <div class="field-wrap error">
    <label for="example-text-1" class="field-label">Something wrong</label>
    <input type="text" class="field field-text" id="example-text-1" placeholder="nopenopenope" aria-invalid="true">
    <p class="tip">That's not going to work - be sure to include the aria-invalid attribute</p>
  </div>
  <div class="field-wrap">
    <label for="exampleInputPassword1" class="field-label">Password</label>
    <input type="password" class="field field-text" id="exampleInputPassword1" placeholder="Password">
    <p class="tip">Example tip help text here.</p>
  </div>
  <div class="field-wrap">
    <label for="example-file" class="field-label">File input</label>
    <input class="field field-upload" type="file" id="example-file">
    <p class="tip">Select a file from your local computer</p>
  </div>
  <div class="field-wrap list-checkboxes">
    <h3 class="field-label">Funders</h3>
    <div class="field-subitem">
      <label class="field-checkbox">
        <input type="checkbox" value="option1">
        Option one
      </label>
    </div>
    <div class="field-subitem">
      <label class="field-checkbox disabled">
        <input type="checkbox" value="" disabled>
        Option two is disabled
      </label>
    </div>
  </div>
  <div class="field-wrap list-radios">
    <div class="field-subitem">
      <label class="field-radio">
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one
      </label>
    </div>
    <div class="field-subitem">
      <label class="field-radio">
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two
      </label>
    </div>
    <div class="field-subitem">
      <label class="field-radio disabled">
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </div>
  </div>

  <div class="field-wrap">
    <label for="example-select-1" class="field-label">Single select drop down</label>
    <select id="example-select-1" class="field field-select">
      <option>Something number 1</option>
      <option>Another thing 2</option>
      <option>What is this thing 3</option>
      <option>Other stuff 4</option>
      <option>The best thing 5</option>
    </select>
   </div>

   <div class="group-inline">
     <div class="field-wrap">
       <label for="example-select-1" class="field-label">Month</label>
        <select id="submission_pub_date_2i" name="submission[pub_date(2i)]" class="date required field field-select">
          <option value=""></option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
     </div>
     <div class="field-wrap">
       <label for="example-select-1" class="field-label">Year</label>
        <select id="submission_pub_date_1i" name="submission[pub_date(1i)]" class="date required field field-select">
          <option value=""></option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
     </div>
     <p class="tip">Example help for the group here.</p>
    </div>

  <h3 class="hd-6">Do you need a fieldset? Here you go:</h3>

  <fieldset>
    <legend>title or explanatory caption</legend>

    <div class="field-wrap">
      <label for="example-select-2" class="field-label">Multi select</label>
      <select id="example-select-2" multiple class="field field-select">
        <option>One thing</option>
        <option>Two thing</option>
        <option>Three thing</option>
        <option>Four thing</option>
        <option>Five thing</option>
      </select>
    </div>
  </fieldset>

  <h3 class="hd-6">Below is an inline radio button example</h3>

  <div class="field-wrap">
    <label class="field-radio fields-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> One option
    </label>
    <label class="field-radio fields-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> Two option
    </label>
    <label class="field-radio fields-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3 option
    </label>
    <label class="field-radio fields-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"> Four
    </label>
  </div>

  <div class="field-wrap">
    <label for="example-textarea-1" class="field-label">A larger text input</label>
    <textarea id="example-textarea-1" class="field field-text field-textarea" rows="3"></textarea>
  </div>

  <button type="submit" class="btn button-primary">Submit</button>

</form>


<form class="form-horizontal" action="" method="get">
  <label for="b-search-main" class="field-label">Simple input-action inline form</label>
  <div class="form-group">
    <input id="b-search-main" class="field field-text form-input" name="q" placeholder="Enter your search" value="" type="search">
    <div class="b-search-submit form-action">
      <button type="submit" class="btn button-primary">Search</button>
    </div>
  </div>
</form>


<hr />

<h2 id="colors" class="subtitle3">colors</a></h2>

<h3>// grayscale</h3>

<div class="box-color black">
  <p>$black: #111;</p>
</div>

<div class="box-color black-t">
  <p>$black-t: #000; // true black</p>
</div>

<div class="box-color white">
  <p>$white: #fafafa;</p>
</div>

<div class="box-color white-warm">
  <p>$white-warm: #ede8e2;</p>
</div>

<div class="box-color white-t">
  <p>$white-t: #fff; // true white</p>
</div>

<div class="box-color gray">
  <p>$gray: #595959;</p>
</div>

<div class="box-color gray-d1">
  <p>$gray-d1: #333;</p>
</div>

<div class="box-color gray-d2">
  <p>$gray-d2: #222;</p>
</div>

<div class="box-color gray-l1">
  <p>$gray-l1: #999;</p>
</div>

<div class="box-color gray-l2">
  <p>$gray-l2: #ccc;</p>
</div>

<div class="box-color gray-l3">
  <p>$gray-l3: #dedede;</p>
</div>

<div class="box-color gray-l4">
  <p>$gray-l4: #f3f3f3;</p>
</div>

<div class="box-color gray-warm">
  <p>$gray-warm: #c6b6a3;</p>
</div>

<div class="box-color transparent">
  <p>$transparent: rgba(0, 0, 0, 0);</p>
</div>

<div class="box-color glare">
  <p>$glare: rgba($white-t, .3);</p>
</div>

<div class="box-color shadow">
  <p>$shadow: rgba($black-t, .5);</p>
</div>

<div class="box-color smoke">
  <p>$smoke: rgba($gray, .3);</p>
</div>

<div class="box-color wisp">
  <p>$wisp: rgba($gray, .1);</p>
</div>

<h3>// moth colors - named</h3>

<div class="box-color magenta">
  <p>$magenta: #9c3273;</p>
</div>

<div class="box-color yellow">
  <p>$yellow: #ffcc33;</p>
</div>

<div class="box-color orange">
  <p>$orange: #f58632;</p>
</div>

<div class="box-color barf">
  <p>$barf: #cca329;</p>
</div>

<div class="box-color green">
  <p>$green: #43926a;</p>
</div>

<div class="box-color blue">
  <p>$blue: #338bc5;</p>
</div>

<div class="box-color blue-bright">
  <p>$blue-bright: #0088D0;</p>
</div>

<div class="box-color blue-muted">
  <p>$blue-muted: #21759B;</p>
</div>

<h3>// colors - brand</h3>

<div class="box-color brand-primary">
  <p>$brand-primary: $blue;</p>
</div>

<div class="box-color brand-primary-accent">
  <p>$brand-primary-accent: rgb(14, 166, 236);</p>
</div>

<div class="box-color brand-primary2">
  <p>$brand-primary2: #83c8ff; // accessible on dark </p>
</div>

<div class="box-color brand-secondary">
  <p>$brand-secondary: $gray-d1;</p>
</div>

<div class="box-color brand-secondary-accent">
  <p>$brand-secondary-accent: rgb(242, 108, 170);</p>
</div>

<h3>// colors - utilities</h3>

<div class="box-color success">
  <p>$success: $green;</p>
</div>

<div class="box-color warning">
  <p>$warning: mix($yellow,$orange,50%);</p>
</div>

<div class="box-color error">
  <p>$error: #AC1D22;</p>
</div>

<div class="box-color informational">
  <p>$informational: mix($gray-warm,$black,55%);</p>
</div>


<hr />

<h2 id="helpers" class="subtitle3">helpers and utility classes</a></h2>

<hr />

<h2 id="modules" class="subtitle3">modules</a></h2>

<p>Page-level/banner alert styles:</p>

<div class="alert alert-banner">
  <p>Info-style: Hmm, maybe you meant to enter a search term?</p>
</div>

<div class="alert alert-banner error">
  <p>Danger-style: Whoa! Hold up there, cowboy!</p>
</div>

<div class="alert alert-banner warning">
  <p>Warning-style: Uh oh... Are you sure?</p>
</div>

<div class="alert alert-banner success">
  <p>Success-style: Yes! Rock on.</p>
</div>

<p>Bit module (often used in a sidebar context)</p>
<div class="bit">
  <h3 class="title">This is the title</h3>
  <p>Here is some content Lorem ipsum dolor sit amet, consetetur sadipscing elitr. And sometimes there are lists:</p>

  <ul>
    <li><a href="">One thing</a></li>
    <li><a href="">Another thing</a></li>
    <li><a href="">Something else</a></li>
  </ul>
</div>

<p>Informational panel:</p>

<div class="panel panel-warning">
  <div class="panel-heading">
    Fantastic Places of Mars
  </div>
  <div class="panel-body">
    Submitter: <br>
    Submitted: less than a minute ago<br>
    Status: unknown<br>
    Permanent URL: pending submission processing
    <br>
  </div>
  <div class="panel-footer">
    <a href="/submissions/1">View Details</a>
    --
    <a href="/submissions/package/1">View Sword Package</a>
    --
    <a rel="nofollow" data-method="post" href="/submissions/resubmit/1">Resubmit Package</a>
    --
    <a rel="nofollow" data-method="delete" href="/submissions/1">Delete Submission</a>
  </div>
</div>

<p>Sunken well for missing or callout content (regular and with action):</p>

<div class="about-bento well">
  <h3 class="title">About Discovery search</h3>
  <p>Discovery at the MIT Libraries is a new way to find books, movies, music, articles, journals, and other great stuff we have at the library. You will find results sorted into categories, Books and media, Articles and journals, and Library website, as well as links to more specific search tools and resources. If you need assistance, you can click to chat with one of the library staff. </p>
  <p><a href="">Let us know what you think of this new tool</a></p>
</div>

<div class="gridband">
  <div class="inline-action well">
    <div class="message">
      <h4 class="title">Get help from a research professional</h4>
      <p>Our librarians are trained to find what you need.</p>
    </div>
    <div class="actions">
      <a class="button button-primary" href="https://libraries.mit.edu/ask/">AskUs: Chat with a Librarian</a>
    </div>
  </div>
</div>

<hr />

<h2 id="layouts" class="subtitle3">layouts</a></h2>

<div class="layout-3q1q layout-band">
  <div class="col3q">
    <h3>Example 3 quarter - 1 quarter layout</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

  </div>
  <aside class="col1q-r">


    <div class="bit">
      <h3 class="title">This is a bit module title</h3>
      <p>This is where supplementary content can go, like related links, contact info, or helpful information. The <a href="#modules">bit module</a> goes nicely here. And sometimes there are lists:</p>

      <ul>
        <li><a href="">One thing</a></li>
        <li><a href="">Another thing</a></li>
        <li><a href="">Something else</a></li>
      </ul>
    </div>
  </aside>
</div>

<hr />

<div class="layout-1q3q layout-band">
  <div class="col3q">
    <h3>Example 1 quarter - 3 quarter layout</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

  </div>
  <aside class="col1q">
    <p>This area is often nav or filter type content</p>
  </aside>
</div>

<hr />

<div class="layout-1q2q1q layout-band">
  <div class="col1q">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
  </div>

  <div class="content-main">
    <h3>Example 1 quarter - content main - 1 quarter layout</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
  </div>

  <div class="col1q-r">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
  </div>
</div>

<hr />

<div class="layout-1t2t layout-band">
  <div class="col1t">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
  </div>
  <div class="col2t">

    <h3>Example 1 third - 2 third layout</h3>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>

  </div>
</div>

<hr />

<div class="gridband layout-4c">
  <div class="grid-item">
    <h3>Example of a 4-column flowing layout</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
  </div>
  <div class="grid-item">
    <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
  </div>
  <div class="grid-item">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
</div>

<hr />

<div class="gridband layout-3c">
  <div class="grid-item">
    <h3>Example of a 3-column flowing layout</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
  </div>
  <div class="grid-item">
    <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
  </div>
  <div class="grid-item">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
</div>

<hr />

<div class="gridband layout-2c">
  <div class="grid-item">
    <h3>Example of a 2-column flowing layout</h3>
    <p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
  </div>
  <div class="grid-item">
    <p>No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p>Lero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="grid-item">
    <p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
  </div>
</div>


<hr />

<h2 id="layout-elements" class="subtitle3">notes on layout elements</a></h2>

<h3>Layout-bands and Gridbands</h3>
<p>Layout-bands (.layout-band) are bands within the layout and can be used to allow for full bleed backgrounds. They can also be used to contain generic content, similar to gridbands but without enabling the grid functionality.</p>

<p>Gridbands (.gridband) wrap flowing grids and keep the pieces contained and the overall box cleared in the layout. You'll need this around any set of grid items (.grid-item).</p>

<h3>Layout types and structure</h3>
<p>There are several layout types are available (see <a href="#layouts">Layouts</a> section above for live examples). They need to be contained within a band to clear document flow. Here are the classes in nested structure:</p>

<ul>
  <li><code>layout-3q1q</code>
    <ul>
      <li><code>col3q</code></li>
      <li><code>col1q-r</code></li>
    </ul>
  </li>
  <li><code>layout-1q3q</code>
    <ul>
      <li><code>col1q</code></li>
      <li><code>col3q-r</code></li>
    </ul>
  </li>
  <li><code>layout-1q2q1q</code>
    <ul>
      <li><code>col1q</code></li>
      <li><code>content-main</code></li>
      <li><code>col1q-r</code></li>
    </ul>
  </li>
  <li><code>layout-1t2t</code>
    <ul>
      <li><code>col1t</code></li>
      <li><code>col2t</code></li>
    </ul>
  </li>
  <li><code>layout-2t1t</code>
    <ul>
      <li><code>col2t</code></li>
      <li><code>col1t-r</code></li>
    </ul>
  </li>
</ul>



<hr />

<h2 id="wordpress" class="subtitle3">wordpress entry content</a></h2>

<div class="entry-content">

  <h1>Entry-content area</h1>
  <h2 class="subtitle">This is a subtitle that might be longer</h2>
  <p>This section shows what content inside the wordpress "entry-content" class should look like - which is that it should look just like the non-entry content typography above. This is mostly a test section to be sure they are aligned. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque odio soluta fuga esse accusantium, voluptate, eos quod impedit! Quas cum saepe eaque quisquam culpa libero ipsum fuga necessitatibus tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque odio soluta fuga esse accusantium, voluptate, eos quod impedit! Quas cum saepe eaque quisquam culpa libero ipsum fuga necessitatibus tempore? Sequi!</p>

  <h2>Heading 2</h2>
  <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laborum explicabo, praesentium commodi libero non odio totam quas culpa debitis dolores cupiditate eveniet vel, consequatur voluptatum? Alias quasi nesciunt, iusto.</em></p>
  <ul>
    <li>Here are some things in another list:
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
        <li>Vestibulum auctor dapibus neque.</li>
      </ul>
    </li>
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
  </ul>
  <p><strong>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</strong></p>
  <p><em><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore saepe recusandae natus neque modi et minus, qui deleniti, sit voluptatibus laborum nemo quaerat dolorem id quam. Qui omnis incidunt illum.</strong></em></p>
  <ul>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
  </ul>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque odio soluta fuga esse accusantium, voluptate, eos quod impedit! Quas cum saepe eaque quisquam culpa libero ipsum fuga necessitatibus tempore? Sequi!</p>

</div>
