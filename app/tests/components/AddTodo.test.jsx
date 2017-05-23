var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUitls = require('react-addons-test-utils');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop valid data ', () => {
        var todoText = 'Check mail';
        var spy = expect.createSpy();
        var addTodo = TestUitls.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUitls.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should call onAddTodo prop when invalid input ', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUitls.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUitls.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});