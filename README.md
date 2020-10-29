# MOLGENIS tutorials

This is a tutorials page for [MOLGENIS](https://molgenis.gitbook.io/molgenis/). The page contains slideshows that 
aim to explain the possibilities and options MOLGENIS has. 

## Add New Slideshow
The most complex part of creating a slideshow is automated. There are however still several steps that need to be taken 
in order to add a tutorial slideshow.

### Step 1
Create a folder for the slides in ```/src/tutorials/*your short tutorial name*``` (e.g. ```emx``` or ```import```). 

### Step 2
Copy the TemplateSlide.vue in ```/src/tutorials``` to your folder and give it an appropriate name. Update the name in the
```script``` section of the file as well. Use kebab-case and let it end with ```-slide``` for naming convention 
purposes. Replace anything between the first ```<div>```  last ```</div``` with the content of your slide 
(see ```Add new slide section``` for more extensive explanation). 

### Step 3
Copy the ```/src/tutorials/config-template.json``` to your folder and name it ```config.json```. 

### Step 4 
Copy the ```/src/tutorials/emx/index.js``` to your folder.

### Step 5
Add your slide to the config. Open the ```config.json``` you just pasted in your folder. Add an object to the 
```slides``` list. For instance:
```json
{
  "slides": [
    {
      "name": "first-slide",
      "title": "Beautiful title of tutorial", 
      "isFirst": true
     }
  ]
}
```
The ```isFirst: true``` option will invert the colours of the slide, the background will be blue and its characters will
be white. The default is ```false``` and therefore the ```isFirst``` can be left out when default behaviour is desired.  

For the last slide there is an option as well, conveniently called ```isLast```. For this option the default is 
```false``` as well. It will replace the ```next``` button with the ```home``` button on the slide marked as last. 

For each slide you also need to specify the number of steps it has. The default is one and if you just have one step in 
your slide, you can leave the ```step``` parameter out for your slide.

### Step 6
Create a new Slideshow file in the ```/src/slideshows``` folder. The easiest way to do this correctly, is by duplicating 
one of the existing slideshows and rename it. A few things need to be replaced:
* The ```id``` of the div should be renamed to ```mg-*short name for your tutorial*``` (e.g. ```mg-emx``` and 
```mg-import```) and rename the ```ref``` as well. 
* The ```imports``` on top in the ```script``` section should point to the folder you created for your tutorial.
* The ```name``` in the ```script``` section should be replaced. It should end with ```-tutorial``` and is written in 
kebab-case.
* The ```infos``` in the ```script``` section should be updated (i.e. title, description, and path)

### Step 7
Open ```/src/router/index.ts``` and add the route to your tutorial.

## Add new slide
The slides itself are as basic as possible. The only thing you need to worry about is writing correct HTML in the 
correct part of the template. You can see a slide file as a slide in a powerpoint presentation written in HTML. 

### Getting started
Assuming you already have created a slideshow to work in, you now want to add a new slide. The easiest way to do this is
by duplicating the ```/src/tutorials/TemplateSlide.vue``` to your tutorial folder. You need to rename the slide 
to the name you desire in the ```name``` property of the ```script``` section of the file. The name should end with 
```-slide``` and should be in kebab-case. The easiest way to make your slide is to delete anything between the first
```<div>``` and last ```</div```. Never delete the div's themselves. You can place the content of your slide in here
using HTML and Bootstrap 4. Remove the import statement in the ```script``` section, as well as the ```components``` 
line in that section. 

The only thing that is now left is, registering your slide in the ```config.json``` file if you haven't done it already.
To do this you add a new object to the array of slides. For instance:
```json
{
  "slides": [
    {
      "name": "first-slide",
      "title": "Beautiful title of tutorial",
      "isFirst": true
     },
    {
      "name": "my-second-slide",
      "title": "Interesting stuff"    
    }
  ]
}
```

For simple presentations this information should be enough to get you started. More complex options will be described 
below.

### Images
You might want to add an image to your slide. If you want to do so, place the image in the ```src/assets``` folder of 
this project. After that you can retrieve the image using the HTML image tag:
```html
<img src="@/assets/myImg.png" alt="My image" class="mg-my-img"/>
```
Additional styling of the image (e.g. size) can be applied in the ```style``` section using CSS. For more information 
see ```Additional styling``` below.

### Steps
If you create slideshows using PowerPoint, you probably know that most of the time one slide per subject is not enough. 
Sometimes you need several slides that are completely different, but other times, you duplicate complete slides and you 
alter them slightly. Especially for the last case using ```steps``` in your slide's might come in handy. 
Using steps basically allows you to keep part of a slide on your screen while you change the rest. In the 
```/src/tutorials/TemplateSlide.vue``` you can find a simple example. Every component you want to be visible in 
a certain step, needs a ```v-if="step === *insert your step*""```. It can be as simple as just keeping the title so you 
won't have to create several slides for a subject, or as difficult as continually changing just one component of your 
slide. For more complex examples, you can take a look at ```/src/tutorials/emx/Datatypes.vue```.  

### MolgenisTable component
When creating the first tutorial, for a lot of slides tables seemed like the best representation of information. The 
code didn't look clean anymore and creating a table in HTML with a lot of data in it, is not the nicest thing to do over
and over again. Therefore a MolgenisTable component was created. Using this component has several advantages:
* You don't need to create your own HTML table anymore. 
* All tables will look the same
* The table component is created in such a way that it will scale nicely. Bigger datasets will get smaller font and less 
padding, and on a smaller screen font and padding will also be altered.  

To use the component, first import it on top of your ```script``` section:
```javascript
import MolgenisTable from '@/components/MolgenisTable'
```
Then you register the component in the components parameter:
```javascript
components: { MolgenisTable }
```
Then you can use the component in the ```template``` section. You provide the header as a list of strings, and the data
as a list with for each row another list. 
```vue
<molgenis-table
            title="Table"
            :header="['Column 1', 'Column 2']"
            :data="[['Value 1', 'Value 2'],['Value 1', 'Value 2']]"/>
```
A complete example of the usage can be found in ```/src/tutorials/TemplateSlide.vue```

### MolgenisImg component
Sometimes you want to add a title or description to your image. To keep the style of these titles and descriptions all 
the same over all tutorials, the MOLGENIS image component was created. Usage is as follows:
```html
<molgenis-img title="MOLGENIS">
    <img src="@/assets/molgenis_blue.png" alt="molgenis"/>
</molgenis-img>
```
You provide the title to the component and provide the image tag for your image in between the molgenis-img tags.

### Additional styling
Sometimes basic bootstrap styling is not enough, you need to resize or recolor an element. You can 
do this using CSS. Simply add a ```class``` to the element you want to style. For instance:
```html
<img src="@/assets/myImg1.png" alt="My image" class="mg-my-img"/>
<img src="@/assets/myImg2.png" alt="My image" class="mg-my-img"/>
<img src="@/assets/myImg3.png" alt="My image" class="mg-my-other-img"/>
```
Then on on the bottom of your file in the ```style``` section, you can add CSS styling. For instance:
```css
img.mg-my-img {
  width: 20%;
  max-width: 20rem;
}
.my-other-img {
  height: 5rem;        
}
```
For sizes, it is recommended to use rems or percentages, rather than pixels.  

When using rem's the sizes you selected will change, when the fontsize changes. If you make your screen smaller, the 
letters will get smaller and so will in this case your image.  

With percentages, the image will resize when you resize your screen, it will always be the percentage you specified (in 
this case 20%) of the parent element. Because we also specified a max-width for this image, it will never become bigger 
than 20rem. The max-width wins from the width.  

You can reuse classes. In this case, the first images will have the same size, and the last one will be smaller.

### Layout using Bootstrap
The layout of slides can be created using [Bootstrap](https://getbootstrap.com/). Use Bootstrap col and row classes to 
make sure your elements are lined out the way you want. You can also change the layout when the screensize changes. For 
examples, you can look at step 2 and 3 of ```/src/tutorials/emx/DatatypesSlide.vue```. When the screen is mid-sized or
bigger, the left table will get 8 parts of the parent element and the right table, gets 4. When the screen gets smaller,
the left table gets 7 parts and the right one 5. These parts always add up to 12. More information about this can be 
found on the [Bootstrap website](https://getbootstrap.com/docs/4.5/layout/grid/). 

### Complex resizing
Probably your tutorial might have to work on smaller screens or maybe even mobile phones. Bootstrap col and row classes
are already applied to get some sort of resizing functionality. You might however want to add some complexer logic to 
make sure everything looks as stunning on every screen as it does on yours right now. You might want to hide certain 
elements or apply certain styling when the screen gets smaller. To do this, you need to be able to retrieve the size of 
your window. You need to add a few elements to be able to do that. A simple example can be found in 
```/src/tutorials/import/ImporterSlide.vue```. 
Add this part of code below the last parameter in the ```script``` section (before the last ```}```):
```javascript
data () {
  return {
    windowWidth: 0
  }
 },
methods: {
  onResize () {
    this.windowWidth = window.innerWidth
  }
 },
mounted () {
  this.$nextTick(() => {
    this.windowWidth = window.innerWidth
     window.addEventListener('resize', this.onResize)
  })
},
 beforeDestroy () {
  window.removeEventListener('resize', this.onResize)
}
```
Now you are able to reach the windowwidth in ```this.windowWidth```. In this case it is used to determine which image to
show for the MOLGENIS menu in step 1:
```vue
<img v-if="this.windowWidth > 989" class="mg-menu" src="@/assets/importer_menu.png" alt="menu"/>
<img v-if="this.windowWidth < 990" class="mg-menu-sm" src="@/assets/importer_menu_small.png" alt="menu"/>
```

For a complex example you can take a look at ```/src/components/MolgenisTable```. The size of the font and the padding 
in tables is dependent on the width of the table (not the window width!) and the size of the data. You can find it back 
in the ```computed``` parameter of the ```script``` section. For instance:
```javascript
needsSmallFont () {
  return !this.needsXsFont && (isAbove(this.headerLength, 10) || isAbove(this.dataLength, 13) || isBelow(this.windowWidth, 575))
}
```
The table will get a small font when the window width is below 575 pixels.

## Run the project

### Project setup
To get the project to run, the first thing you need to type is:
```
yarn install
```

#### Compiles and hot-reloads for development
To test your tutorial, type:
```
yarn serve
```

#### Lints and fixes files
To keep the code clean we use a linter. Before you commit your files to GitHub, run this command:
```
yarn lint --fix
```
It will test whether all indents are correct and whether the code is compliant with our code style. It will fix the 
simple errors. More difficult errors and warnings will be logged. These need to be fixed. If you followed the steps 
above carefully, you will probably not run into any errors and warnings. 

## Dev info

#### Compiles and minifies for production
```
yarn build
```

#### Run your unit tests
```
yarn test:unit
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
