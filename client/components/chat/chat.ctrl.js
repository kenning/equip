angular.module('equip')

.controller('ChatCtrl', function($scope, $firebaseArray) {
  var ref = new Firebase("https://mksequip.firebaseIO.com/messages");
  var chatMessages = $firebaseArray(ref);

  console.log(chatMessages);

  this.user = "Test";
  $scope.messages = chatMessages;

  this.addMessage = function() {
    var date = moment().format('YYYY-MM-DD hh:mm');
    $scope.messages.$add({
      chatName: this.user,
      text: this.message,
      createdAt: date
    });

    this.message = "";
  };

  $scope.messages.$loaded(function() {
    console.log("Messages fetched succesfully");
  });
})
