import '../utils/enzymeConfig';

import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { TinyDetails, ITinyDetails } from '../../app/components/Questions/TinyDetails';

const mock: Array<ITinyDetails> = [
  {
    title: 'some title',
    subTitle: 'some subtitle'
  },
  {
    title: 'some title',
    subTitle: 'some subtitle',
    type: 'answer',
    answer_count: 4
  },
  {
    title: 'some title',
    subTitle: 'some subtitle',
    type: 'answer',
    answer_count: 4,
    is_answered: true
  }
];

describe('TinyDetails component', () => {
  let props: ITinyDetails, mountedTinyDetailsScreen: ReactWrapper | undefined;
  const tinyDetailsScreen = (): ReactWrapper => {
    if (!mountedTinyDetailsScreen) {
      mountedTinyDetailsScreen = mount(<TinyDetails title={props.title} subTitle={props.subTitle} />);
    }

    return mountedTinyDetailsScreen;
  };

  beforeEach(() => {
    props = mock[0];
    mountedTinyDetailsScreen = undefined;
  });

  it('should render a wrapper div', () => {
    const wrapperDiv = tinyDetailsScreen().find('div').at(0);
    expect(wrapperDiv.length).toBe(1);
    expect(wrapperDiv.prop('className')).toContain('wrapper');
  });

  it('should render a wrapper div with answered class', () => {
    const component = tinyDetailsScreen();
    component.setProps({ ...mock[1] });
    const wrapperDiv = component.find('div').at(0);
    expect(wrapperDiv.length).toBe(1);
    expect(wrapperDiv.prop('className')).toContain('answered');
  });

  it('should render a wrapper div with answered class', () => {
    const component = tinyDetailsScreen();
    component.setProps({ ...mock[2] });
    const wrapperDiv = component.find('div').at(0);
    expect(wrapperDiv.length).toBe(1);
    expect(wrapperDiv.prop('className')).toContain('isSelected');
  });

  describe('Rendered Wrapper Div', () => {
    let wrapperDiv: ReactWrapper;

    beforeEach(() => {
      wrapperDiv = tinyDetailsScreen().find('div').at(0);
    });

    it('should render title', () => {
      const titleDiv = wrapperDiv.find('div').at(0);
      const titleSpan = titleDiv.find('span.font24');
      expect(titleDiv.length).toBe(1);
      expect(titleSpan.prop('className')).toEqual('font24');
      expect(titleSpan.text()).toBe(props.title);
    });

    it('should render sub title', () => {
      const subTitleDiv = tinyDetailsScreen().find('div').at(2);
      const subTitleSpan = subTitleDiv.find('span.font12');
      expect(subTitleDiv.length).toBe(1);
      expect(subTitleSpan.prop('className')).toEqual('font12');
      expect(subTitleSpan.text()).toBe(props.subTitle);
    });
  });
});