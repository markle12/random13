# random13

Generate random numbers between 13 and 14

Usage:

r13().then((number) => console.log('The most random number between 13 and 14 is: '+number));
r13().precision(2).then((number) => console.log('The most random number between 13 and 14 with precision of two decimal places is: '+number));
r13().precision(2).count(50).then((numbers) => console.log('Now there are 50 random numbers between 13 and 14 with precision of two decimal places!', numbers));
r13().precision(2).count(50).mode('garbage').then((numbers) => console.log('These 50 use the corner cutting algorithm and are not true artisan quality numbers.', numbers));
r13().precision(2).count(50).mode('pure').then((numbers) => console.log('But these 50 are true top-shelf random numbers between 13 and 14.', numbers));
