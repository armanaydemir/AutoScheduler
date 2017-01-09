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
  return cl;
}

function CreateClassTime(start_time, end_time){
  var ct = {};
  ct.start_time = start_time;
  ct.end_time = end_time;
  return ct;
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