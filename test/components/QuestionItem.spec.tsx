import '../utils/enzymeConfig';

import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { QuestionItem } from '../../app/components/Questions/QuestionItem';
import { TinyDetails } from '../../app/components/Questions/TinyDetails';
import { Paper, Chip } from 'react-md';
const mock: Array<IQuestions> = require('../../internals/mocks/questionMock.json');

interface IQuestions {
  tags: Array<string>;
  owner: IOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  link: string;
  title: string;
  body: string;
}

interface IOwner {
  reputation: number;
  user_id: number;
  user_type: string;
  accept_rate: number;
  profile_image: string;
  display_name: string;
  link: string;
}

describe('QuestionItem Component', () => {
  let props: IQuestions, mountedQuestionItemScreen: ReactWrapper | undefined;
  const questionItemScreen = (): ReactWrapper => {
    if (!mountedQuestionItemScreen) {
      mountedQuestionItemScreen = mount(<QuestionItem {...props} />);
    }

    return mountedQuestionItemScreen;
  };

  beforeEach(() => {
    props = mock[0];
    mountedQuestionItemScreen = undefined;
  });

  it('should render a Paper wrapper', () => {
    const paperItem = questionItemScreen().find(Paper);
    expect(paperItem.length).toBe(1);
  });

  describe('Rendered Paper Wrapper', () => {
    let paperItem: ReactWrapper;
    beforeEach(() => {
      paperItem = questionItemScreen().find(Paper);
    });

    it('should render two sections', () => {
      const sections = paperItem.find('section');
      expect(sections.length).toBe(2);
    });

    describe('Rendered Tiny Details Section', () => {
      let tinyDetailsSection: ReactWrapper;
      beforeEach(() => {
        tinyDetailsSection = paperItem.find('section').at(0);
      });

      it('should have 3 TinyDetails components', () => {
        const tinyDetails = tinyDetailsSection.find(TinyDetails);
        expect(tinyDetails.length).toBe(3);
      });
    });

    describe('Rendered major details section', () => {
      let majorDetailsSection: ReactWrapper;

      beforeEach(() => {
        majorDetailsSection = paperItem.find('section').at(1);
      });

      it('should have a heading', () => {
        const heading = majorDetailsSection.find('h3');
        expect(heading.length).toBe(1);
        expect(heading.text()).toBe(props.title);
      });

      it('should render chips for tags', () => {
        const chips = majorDetailsSection.find(Chip);
        expect(chips.length).toBe(props.tags.length);
      });
    });
  });
});