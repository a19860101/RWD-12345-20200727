# 響應式網頁 

* PLUGINS

* Live Server
* Chinese (Traditional) Language Pack for Visual Studio Code
* Chinese Lorem

### HTML

#### 標題 h1-h6

#### 段落 p

#### 連結 a

* href
* target
* title

#### 圖片 img

* src
* alt
* width
* height
* title

#### 清單 ul,ol,li,dl,dd,dt

* type

#### 表格 table,tr,th,td,thead,tbody,tfoot

* colspan,rowspan

#### 表單 form,input,label,select,textarea

* text,password,radio,checkbox,file,button,submit,reset
* date,number,email
* placeholder,require

#### 文字相關

* b,i,em,strong,small,u,del,sup,sub

#### 元素分類

* 區塊block
* 行內inline

#### HTML5 語意標籤

* nav,header,footer,aside,main,article,section,picture,figure,figcaption

#### picture用法

```html
<picture>
	<source media="(min-width:1000px)"srcset="https://picsum.photos/id/18/1000/300">
	<source media="(min-width:600px)"srcset="https://picsum.photos/id/16/600/300">
	<img src="https://picsum.photos/id/14/300" alt="">
</picture>
<picture>
	<source media="(max-width:600px)"srcset="https://picsum.photos/id/16/600/300">
	<source media="(max-width:1000px)"srcset="https://picsum.photos/id/18/1000/300">
	
	<img src="https://picsum.photos/id/14/300" alt="">
</picture>
```

#### 多媒體 video,audio

```html
	<video controls autoplay width="600">
        <source src="xxx.mp4">
    </video>
    <audio controls autoplay>
        <source src="xxx.mp3">
    </audio>
```

Youtube嵌入

### 補充網頁

* [Picsum](https://picsum.photos/)
* [Unsplash](https://source.unsplash.com/)
* [VisualHunt](https://visualhunt.com/)
* [jQuery UI Datepicker](https://jqueryui.com/datepicker/)
* [HTML input type](https://www.w3schools.com/html/html_form_input_types.asp)
* [HTML Reference](https://htmlreference.io/)

### 快捷鍵

* 向下複製 alt + shift + ↓ 
* 向上複製 alt + shift + ↑
* 註解 ctrl + / 



************************************************************************

* dashed
* inset
* outset
* groove
* ridge

***

#### padding ---內距

邊框到內容之間的距離

* padding-left
* padding-right
* padding-top
* padding-bottom
* padding

***

#### margin--- 外距

邊框以外到下一個元素之間的距離

* margin-left
* margin-right
* margin-top
* margin-bottom
* margin

***

#### 縮寫(僅margin、padding有效):

在margin與padding中可使用縮寫的方式設定不同位置的距離。

```css
margin:10px;                /*上下左右*/
margin:10px 30px;           /*上下10px,左右30px*/
margin:10px 30px 0px;       /*上10px,左右30px,下0px*/
margin:10px 30px 0px 20px;  /*上10px,右30px,下0px,左20px*/
```

***

#### block與inline的差異

##### block

1. block永遠都會往下換行，如果有設定寬度，右方空缺的部分會由margin自動填滿；如果沒有設定寬度，則寬度會視為100%
2. 在block元素中，width、height、margin、padding、border都有作用

##### inline

1. 內容有多少，範圍就有多少
2. width、height、margin-top、margin-bottom沒有作用
3. padding-top、padding-bottom、border-top、border-bottom看的見效果，但不影響實際空間

> 基本上只要是行內元素，就不建議使用width,height,border,margin,padding這些屬性，如果要使用就轉換成block或是inline-block之類的其他模式

#### display --- 轉換元素

* block
* inline
* inline-block
* table
* table-cell
* table-row
* flex
* inline-flex
* grid

### 補充網站

* [Color Hunt](https://colorhunt.co/)
* [Coolors](https://coolors.co/)
* [Nippon Colors](https://nipponcolors.com/)
* [Google Fonts](https://fonts.google.com/)
* [CanIUse](https://caniuse.com/)

******

## CSS

### CSS排版相關

#### box-sizing

元素在預設的狀態時，總寬度=width+border+padding、總高度=height+border+padding，設定box-sizing之後不管padding與border設定多少，寬度依然保持原始的值

```css
* {
    box-sizing: border-box;
}
```

#### inline-block

行內區塊。讓元素保有行內與區塊的特性

##### 產生的問題

1. inline-block之間會有一個約4像素間距

> 解決方式：將父元素的font-size設定為0，

2. 文字會消失

> 解決方式：將元素本體的font-size還原。若區塊中沒有文字需求可省略。 

3. 預設的垂直對齊方式為baseline，區塊對齊在下方。

> 解決方式：設定vertical-align

#### vertical-align 垂直對齊

元素垂直對齊的方式，只對inline-block、table內元素有效

* baseline
* top
* middle
* bottom

#### 區塊置中

預設狀態下，區塊右邊剩餘的空間都是margin，預設為margin-right: auto，在這邊auto可以視為自動填滿margin；若將margin-left設定為auto時，則變成左邊填滿，區塊就會移到右邊；左右同時設定auto，區塊就會置中。

#### calc  運算

如果是有數值的屬性，皆可使用calc()做計算

```css
.container {
    width: calc(100% / 3);
    height: calc(100px + 50px);
}
```

> 在運算子的前後要加上空格，否則會造成解析錯誤

#### float

文繞圖。讓區塊靠左或靠右浮動。

>在float下方的區塊，文字會繞著float物件，但區塊本身會被壓在float物件下方，可使用clear清除。

#### clear

清除元素對浮動的影響。

#### 浮動問題

1. 當前方元素為浮動時，後方元素會受到影響

> 解法
> 設定clear

2. 當子元素都是浮動時，父元素高度會歸零（父元素崩蹋）

> * 解法一：
>   設定高度
> * 解法二：
>   設定overflow:auto到父元素
> * 解法三：
>   設定clearfix到父元素
> * 解法四：
>   設定display: flow-root到父元素

##### clearfix

```css
.clearfix::after {
    content: "";
    display: block;/*可使用table*/
    clear: both
}
```

#### 虛擬元素 before , after

在元素內的前方、後方產生一個虛擬的元素，產生的為行內元素，一定要加上content屬性。

```css
h1::before {
    content:"before";
}
h1::after {
    content:"after";
}
```

### 置中

#### line-height置中

#### table置中

#### inline-block置中

### 選取器

#### 後代選取器

#### 子代選取器

#### nth-of-type()


### Flex 彈性盒子

#### display

```css
.container {
    display: flex;
}
```

#### flex-flow

- flex-wrap 換行 
- flex-direction 排列方向

```css
.container {
    display: flex;
    flex-wrap: wrap;
    /*
        no-wrap 不換行
        wrap    換行
        
    */
    flex-direction: row;
    /*
        row            橫排
        row-reverse    橫排反轉
        column         直排
        column-reverse 直排反轉
    */
}
```


#### justify-content

```css
.container {
    display: flex;
    justify-content: center;
    /*
        flex-start     置左
        center         置中
        flex-end       置右
        space-around   分散對齊，每個區塊左右具有間距
        space-between  分散對齊，左右兩側區塊貼壁
        space-evenly   分散對齊，均分每個間距
    */
}
```

> space-evenly是後期加入的值，相容性差不建議使用

#### align-items 

```css
.container {
    display: flex;
    align-items: center;
    /*
        flex-start    置頂
        center        置中
        flex-end      置底
        stretch       拉伸
        baseline      文字基準線
    */
}
```

#### flex

- flex-grow 元件伸展性
- flex-shrink 元件壓縮性
- flex-basis 元件基準值

```css
.box {
    flex: 0 0 calc(100% / 3);
    /* flex: flex-grow flex-shrink flex-basis */
}
```