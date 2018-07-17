import '../utils/enzymeConfig';

import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Questions } from '../../app/components/Questions/Questions';
const mock = require('../../internals/mocks/questionMock.json');


describe('Questions', () => {
  let props: any, mountedQuestionsScreen: ReactWrapper | undefined;
  const questionsScreen = (): ReactWrapper => {
    if (!mountedQuestionsScreen) {
      mountedQuestionsScreen = mount(<Questions {...props} />);
    }

    return mountedQuestionsScreen;
  }

  beforeEach(() => {
    props = {
      items: mock
    };
    mountedQuestionsScreen = undefined;
  });

  it('always renders a section as a wrapper', () => {
    const section = questionsScreen().find('section.question-wrapper');
    expect(section.length).toBe(1);
  });

  it('should have a heading `Top Questions`', () => {
    const heading = questionsScreen().find('section > h2');
    expect(heading.length).toBe(1);
    expect(heading.text()).toBe('Top Questions');
  });

  it('should have props with two questions', () => {
    expect(props.items.length).toBe(2);
  });
});