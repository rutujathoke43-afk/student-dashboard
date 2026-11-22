import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SummaryCard from '../components/SummaryCard.vue'

describe('SummaryCard', () => {
    it('shows title, value, and description', () => {
        const wrapper = mount(SummaryCard, {
            props: {
                title: 'My Courses',
                value: '3',
                description: 'Active courses this term'
            }
        })

        expect(wrapper.get('h2').text()).toBe('My Courses')
        expect(wrapper.get('strong').text()).toBe('3')
        expect(wrapper.get('p').text()).toBe('Active courses this term')
    })

    it('uses the card section container', () => {
        const wrapper = mount(SummaryCard, {
            props: {
                title: 'Attendance',
                value: '92%',
                description: 'Above the 75% target'
            }
        })

        expect(wrapper.find('section.card').exists()).toBe(true)
    })
})