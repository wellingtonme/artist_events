import { shallowMount } from '@vue/test-utils';
import SearchField from '@/components/SearchField.vue';

describe('AppTitle.vue', () => {
  it('should render the search input field', () => {
    const wrapper = shallowMount(SearchField);
    expect(wrapper.html()).toContain('<input type="text" id="search" placeholder="Enter artist name">');
  });

  it('should have initial data set correctly', () => {
    const wrapper = shallowMount(SearchField);
    const { vm } = wrapper;
    expect(vm.isInFocus).toBe(false);
    expect(vm.artistName).toBe('');
  });
});
