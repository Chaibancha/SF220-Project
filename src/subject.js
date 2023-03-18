import {writable} from 'svelte/store';

let subject = {'SF210' : {name : 'SF210', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT', num_student : '21',max_student : '30'},
               'SF220' : {name : 'SF220', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT', num_student : '22',max_student : '30'},
               'SF230' : {name : 'SF230', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT', num_student : '23',max_student : '30'},
               'TU107' : {name : 'TU107', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT', num_student : '17',max_student : '63'},
               'TU109' : {name : 'TU109', sec : 'Section 760001', credit : '3', cost : '5,400 BAHT', num_student : '19',max_student : '63'}}
            
export const sub = writable(subject);