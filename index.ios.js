/**
 * indes.ios.js
 * AutoScheduler by Arman Aydemir
 * https://github.com/facebook/react-native
 * https://www.raywenderlich.com/126063/react-native-tutorial
 * December 23, 2016
 */

//init --------------------------------------
'use strict';
var React = require('react');
var ReactNative = require('react-native');
var AddClassPage = require('./AddClass');
//-------------

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});


function CreateNewClass(name, code, times, credits, subclass){
  var cl = {};
  cl.name = name;
  cl.code = code;
  cl.times = times;
  cl.credits = credits;
  cl.subclass = subclass;
  cl.selected_time = null;
  return cl;
}

function CreateClassTime(start_time, end_time, days){
  var ct = {};
  ct.start_time = start_time;
  ct.end_time = end_time;
  ct.days = days; //array of strings that include 5 days of the week (m, t, w, th,)
  return ct;
}

function CreateSubclass(times, code){
  var sc = {};
  sc.times = times;
  sc.code = code;
}

function CreateSchedule(classes, preferences){
  var schedule = {};

  //have the actual creating schedule algo here
  //
  //
  //ya see
  schedule.classes = classes
}

class Home extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}> Profile, Schedules, New Schedule</ReactNative.Text>;
  }
}

class AutoSchedulerApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Auto-Scheduler',
          component: AddClassPage
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('AutoScheduler', function() { return AutoSchedulerApp });