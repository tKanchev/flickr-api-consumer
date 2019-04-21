import React from "react";
import 'react-testing-library/cleanup-after-each';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Navbar from './navbar';
import { NAVBAR_CONSTANTS } from "./config/navbar.constants";

afterEach(cleanup);

it('Navbar text is correct', () => {
    const { navbarText } = NAVBAR_CONSTANTS;
    const testId = 'navbar-text';
    const { getByTestId } = render(<Navbar/>);
    
    expect(getByTestId(testId)).toHaveTextContent(navbarText);
});