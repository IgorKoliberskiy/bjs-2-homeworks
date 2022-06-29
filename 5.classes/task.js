class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(instanceState) {
        if (instanceState < 0) {
            this._state = 0;
        } else if (instanceState > 100) {
            this._state = 100;
        } else {
            this._state = instanceState;  
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(type) {
        super(type);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(type) {
        super(type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(type) {
        super(type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(type) {
        super(type);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
        this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);

        if (book === undefined) {
        return null;
        }

        return book; 
    }

    giveBookByName(bookName) {
        let book = this.books.find(book => book.name === bookName);
        
        if (book === undefined) {
        return null;
        } else {
        this.books.splice(this.books.indexOf(book), 1);
        return book;
        } 
    }
}

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
	}

	setSubject(subjectName) {
		this.subject = subjectName;
	}

	addMark(mark) {
		if (this.marks === undefined) {
		    this.marks = [mark];
		} else {
		    this.marks.push(mark);
		}
	}

	addMarks(...mark) {
		if (this.marks === undefined) {
    		this.marks = [...mark];
  		} else {
   			this.marks.push(...mark);
  		}
	}

	getAverageBySubject() {
		let subjectMarks = 0;
        for (let i = 0; i < this.marks.length; i += 1) {
		    subjectMarks += this.marks[i];
		}
		return subjectMarks / this.marks.length
	}	

	getAverage() {
		let sum = 0;
		for (let i = 0; i < this.marks.length; i += 1) {
		    sum += this.marks[i];
		}
		return sum / this.marks.length
	}
}
