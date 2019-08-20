const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {

  // snapshot of home SCL page
  await page.goto('http://localhost:6060/');
  await percySnapshot('homepage');

  // accordion
  await page.goto('http://localhost:6060#!/Accordion');
  await percySnapshot('accordion page');
  await page.click('div[class="Label__AccordionLabel-sc-1531omd-0 mqEjm"]');
  await page.waitFor(3000);
  await percySnapshot('expanded accordion');

  // alert
  await page.goto('http://localhost:6060#!/Alert');
  await page.waitFor(5000);
  await percySnapshot('alert page');

  // badge
  await page.goto('http://localhost:6060#!/Badge');
  await percySnapshot('badge page');

  // Button
  await page.goto('http://localhost:6060#!/Button');
  await percySnapshot('button page');

  // callout
  await page.goto('http://localhost:6060#!/Callout');
  await page.waitFor(3000);
  await page.hover('button[class="scl-button Button-sc-4iie3h-0 fznJUE"]');
  await page.waitFor(3000);
  await percySnapshot('callout page');

  // card
  await page.goto('http://localhost:6060#!/Card');
  await percySnapshot('Card page');

  // checkbox
  await page.goto('http://localhost:6060#!/Checkbox');
  await percySnapshot('checkbox page');

  // code
  await page.goto('http://localhost:6060#!/Code');
  await percySnapshot('code page');

  // datepicker
  await page.goto('http://localhost:6060#!/DatePicker');
  await page.waitFor(3000);
  await page.click('input[class="DateInput_input DateInput_input_1"]');
  await page.waitFor(3000);
  await percySnapshot('datepicker page');

  // datetimepicker
  await page.goto('http://localhost:6060#!/DateTimePicker');
  await page.waitFor(3000);
  await page.click('input[class="DateInput_input DateInput_input_1"]');
  await page.waitFor(3000);
  await percySnapshot('datetimepicker page');

  // dragbox
  await page.goto('http://localhost:6060#!/DragBox');
  await percySnapshot('dragbox page');

  // draggroup
  await page.goto('http://localhost:6060#!/DragGroup');
  await percySnapshot('draggroup page');

  // draglist
  await page.goto('http://localhost:6060#!/DragList');
  await percySnapshot('draglist page');

  // file loader
  await page.goto('http://localhost:6060#!/FileLoader');
  await percySnapshot('fileloader page');

  // gutter
  await page.goto('http://localhost:6060#!/Gutter');
  await percySnapshot('gutter page');

  // H1
  await page.goto('http://localhost:6060#!/H1');
  await percySnapshot('h1 page');

  // H2
  await page.goto('http://localhost:6060#!/H2');
  await percySnapshot('h2 page');

  // H3
  await page.goto('http://localhost:6060#!/H3');
  await percySnapshot('h3 page');

  // H4
  await page.goto('http://localhost:6060#!/H4');
  await percySnapshot('h4 page');

  // H5
  await page.goto('http://localhost:6060#!/H5');
  await percySnapshot('h5 page');

  // headerbar
  await page.goto('http://localhost:6060#!/HeaderBar');
  await percySnapshot('headerbar page');

  // helptext
  await page.goto('http://localhost:6060#!/HelpText');
  await percySnapshot('helptext page');

  // Icon list test
  await page.goto('http://localhost:6060#!/Icon');
  await percySnapshot('Icon list');

  // input
  await page.goto('http://localhost:6060#!/Input');
  await percySnapshot('input page');

  // label
  await page.goto('http://localhost:6060#!/Label');
  await percySnapshot('label page');

  // link
  await page.goto('http://localhost:6060#!/Link');
  await percySnapshot('link page');

  // list
  await page.goto('http://localhost:6060#!/List');
  await percySnapshot('list page');

  // loader
  await page.goto('http://localhost:6060#!/Loader');
  await page.waitFor(3000);
  await percySnapshot('loader page');

  // logo
  await page.goto('http://localhost:6060#!/Logo');
  await percySnapshot('logo page');

  // methodtag
  await page.goto('http://localhost:6060#!/MethodTag');
  await percySnapshot('methodtag page');

  // modal test
  await page.goto('http://localhost:6060/#!/Modal');
  await percySnapshot('modal page');
  await page.click('button[class="scl-button Button-sc-4iie3h-0 fznJUE"]');
  await page.waitFor(3000);
  await percySnapshot('modal page main modal');

  // money
  await page.goto('http://localhost:6060#!/Money');
  await percySnapshot('money page');

  // navigation
  await page.goto('http://localhost:6060#!/Navigation');
  await percySnapshot('navigation page');

  // newbadge
  await page.goto('http://localhost:6060#!/NewBadge');
  await percySnapshot('newbadge page');

  // note
  await page.goto('http://localhost:6060#!/Note');
  await percySnapshot('note page');

  // p
  await page.goto('http://localhost:6060#!/P');
  await percySnapshot('p page');

  // pagination
  await page.goto('http://localhost:6060#!/Pagination');
  await percySnapshot('pagination page');

  // radio
  await page.goto('http://localhost:6060#!/Radio');
  await percySnapshot('radio page');

  // radiobutton
  await page.goto('http://localhost:6060#!/RadioButton');
  await percySnapshot('radiobutton page');

  // sectiontitle
  await page.goto('http://localhost:6060#!/SectionTitle');
  await percySnapshot('sectiontitle page');

  // select
  await page.goto('http://localhost:6060#!/Select');
  await percySnapshot('select page');

  // step
  await page.goto('http://localhost:6060#!/Step');
  await percySnapshot('step page');

  // tab
  await page.goto('http://localhost:6060#!/Tab');
  await percySnapshot('tab page');

  // table
  await page.goto('http://localhost:6060#!/Table');
  await percySnapshot('table page');

  // textarea
  await page.goto('http://localhost:6060#!/TextArea');
  await percySnapshot('textarea page');

  // timepicker
  await page.goto('http://localhost:6060#!/TimePicker');
  await percySnapshot('timepicker page');

  // timescrubber
  await page.goto('http://localhost:6060#!/TimeScrubber');
  await percySnapshot('timescrubber page');

  // toggle
  await page.goto('http://localhost:6060#!/Toggle');
  await percySnapshot('toggle page');

  // togglebutton
  await page.goto('http://localhost:6060#!/ToggleButton');
  await percySnapshot('togglebutton page');


});
