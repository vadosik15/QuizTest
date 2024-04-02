export function toggleCheckbox(event) {
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    event.currentTarget.classList.toggle('active_point', checkbox.checked);
  }

  export const quiz = [
	{
		type: 'single',
		title: 'Question 1',
		description: 'Description 1',
		answers: [
			{
				smile: '🫣',
				text: 'Text 3'
			},
			{
				smile: '🤦‍♂️‍',
				text: 'Text 2'
			},
			{
				smile: '😓',
				text: 'Text 1'
			}
		]
	},
	{
		type: 'multiple',
		title: 'Question 2',
		description: 'Description 2',
		answers: [
			{
				smile: '🤦‍♂️‍',
				text: 'Text 1'
			},
			{
				smile: '🤦‍♂️‍',
				text: 'Text 2'
			},
			{
				smile: '😓',
				text: 'Text 3'
			}
		]
	}
	,{
		type: 'single',
		title: 'Question 3',
		description: 'Description 3',
		answers: [
			{
				smile: '😓',
				text: 'Text 2'
			},
			{
				smile: '😓',
				text: 'Text 3'
			},
			{
				smile: '😓',
				text: 'Text 1'
			}
		]
	},{
		type: 'single',
		title: 'Question 4',
		description: 'Description 4',
		answers: [
			{
				smile: '😓',
				text: 'Text 2'
			},
			{
				smile: '😓',
				text: 'Text 3'
			},
			{
				smile: '😓',
				text: 'Text 1'
			}
		]
	}
	
]

export function nextQuestion(prevId) {
	return
}