import childRow from './setup/ChildRow.vue';

describe(suite + ': Child row', () => {

	var firstRowToggler = 'table tbody tr td:first-child span'; 
	
	beforeEach(()=>{

		setOptions({
			childRow,
		});

	});

	it('generates a child row when toggler is clicked, and removes it when clicked again', (done) =>{
		
		click(firstRowToggler); 

		run(function() {
			see('My Child Row ZW','table tbody tr:nth-child(2)');
			click(firstRowToggler);
			see('Zambia','table tbody tr:nth-child(2)');
		},done);

	});

	it('only opens the clicked row', (done) => {
		
		click(firstRowToggler);

		run(function() {
			count('.VueTables__child-row',1);
		},done);

	});

	it('displays the correct toggler icon', (done) => {
		run(function() {
			count('.VueTables__child-row-toggler--closed', 10);
			click(firstRowToggler);
			count('.VueTables__child-row-toggler--closed', 9);
			exists('table tbody tr:first-child .VueTables__child-row-toggler--open');
		},done);
	});

	it('can programmaticaly open a child row', (done)=>{

		vm().toggleChildRow(245);

		run(function() {
			count('.VueTables__child-row',1);
		},done);
	});

	it('can programmaticaly close a child row', (done)=>{

		click(firstRowToggler);
		
		count('.VueTables__child-row',1);

		vm().toggleChildRow(245);

		run(function() {
			count('.VueTables__child-row',0);
		},done);
	});

	it('can use a user-defined key as a unique id', (done)=>{

		setOptions({
			childRow,
			uniqueKey:'code'
		});

		vm().toggleChildRow('ZW');

		run(function() {
			count('.VueTables__child-row',1);
		},done);

	});


});