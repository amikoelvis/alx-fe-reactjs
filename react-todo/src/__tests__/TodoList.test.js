import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  // Test 2: Adding Todos
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(3);
    expect(input).toHaveValue('');
  });

  // Test 3: Toggling Todos
  test('toggles todo completion status', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText('Learn React');
    
    // Initial state
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
    
    // Toggle to completed
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: line-through');
    
    // Toggle back to incomplete
    fireEvent.click(firstTodo);
    expect(firstTodo).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting Todos
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const initialLength = screen.getAllByRole('listitem').length;

    fireEvent.click(deleteButtons[0]);
    
    expect(screen.getAllByRole('listitem').length).toBe(initialLength - 1);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});