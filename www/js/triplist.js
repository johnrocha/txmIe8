var app = angular.module('tableApp', ['ngAnimate']);
app.controller('tableCntr', function($scope){
  
  $scope.TABLES = [];
  
  $scope.initSample = function() {
    var table = new Table("Sample table", ['name','value']);
    table.data.push([1, 'foo', 'h5jc54hdym'],
                    [2, 'hoo','54j5kc6k'],
                    [3, 'goo', 'r0xgu59g4'],
                    [4, 'roo','100010001101110']);
    $scope.TABLES.push(table);
  };
  $scope.initSample();
  
  
   $scope.createTable = function() {
    var name = prompt('Specify name');
    var schema = prompt('provide columns - by comma separated values').split(",");
    schema.map(Function.prototype.call, String.prototype.trim);
    var table = new Table(name, schema);
    $scope.TABLES.push(table);
    
}; 
   $scope.dropTable = function(i) {
   if (confirm("Drop table? Confirm!")) $scope.TABLES.splice(i,1);
 };
   
               
               
               
});


var Table = function(name, schema) {
  this.name = name;
  this.schema = schema;
  this.schema.unshift("id");
  this.data = [];
  
  this.updateId = function () {
    var id = 1;
    var length = this.data.length;
    for (i=0; i < length; i++) {
      this.data[i][0] = id;
      id++
    }
  };
  
  
  this.insert = function() {
    var inp = prompt('Add Row, use CSV style').split(",");
    inp.map(Function.prototype.call, String.prototype.trim);
    inp.unshift(this.data.length +1);
    // filter for exceeding input
    var inpF = inp.slice(0, this.schema.length); 
    // fill in empty cols
    while (inpF.length < this.schema.length) {inpF.push("< null >")}
    this.data.push(inpF);
    this.updateId();
  }
  this.changeName = function() {
    this.name = prompt('Specify new name');
  }
  this.modifyData = function(x,y) {
    var change = prompt("Specify data in this cell").trim();
    this.data[x][y] = change;
  }
  this.deleteRow = function(i) {
    // simple splice(i, 1) cannot delete if only one row exists
    this.data.splice(i, 1);
    this.updateId();
  }
  
  
}


/* function insert(str) {
  var input = str.split(",")
  this.data.push(input);
}

*/


/* increment: calc data[].lenght and add +1
check row: check for schema.lenght -1 (accound for id) and remove all items greater

*/
/*

function customPrompt(text) {
  var response = '';
  var prompt = document.getElementById('prompt');
  var body = document.querySelector('.container');
  prompt.style.display = 'block';
  body.style.opacity = 0.1;
  
  var promptText = document.getElementById('prompt-text');
  
  
  document.getElementById('prompt-h').innerHTML = text;
  
  document.getElementById('prompt-ok').addEventListener('click', function(){
    action(promptText.value);
  });
  promptText.addEventListener('keydown', function(e){
    if (e.keycode === 13) { action(promptText.value); }
  })
  document.getElementById('prompt-cancel').addEventListener('click', function(){
    action(false);
  });
  
  function action(text) {
    promptText.value = '';
    prompt.style.display = 'none';
    body.style.opacity = 1;
    response = text;
  }
  
  var int = setInterval(function(){
    if (!response == '') {
      clearInterval(int);
      return response
    }
  }, 300)
  setInterval(function(){
    
  },200)
}


function triggerPrompt(text) {
  console.log(customPrompt(text));
  
}

function swag(text) {
  var x;
  swal({
    title: text,
    type: 'input',
    showCancelButton: true,
    
  }, function(inputValue){
    x =  inputValue
  });
  
  function check(x) {
    if (!x) check(x)
    else return x
  }

  
  
}

*/