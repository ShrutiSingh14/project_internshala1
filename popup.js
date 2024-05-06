document.addEventListener('DOMContentLoaded', function() {
    console.log("shruti");
    function filterChats(criteria) {
        console.log("shruti1");
        switch(criteria) {
            case 'all':
                console.log("shruti2");
                // Filter all chats
                var button = document.querySelector('xjb2p0i',' x1ypdohk',' x972fbf','xcfux6l',' x1qhh985','xm0m39n',
                ' xzqyx8i',' xqa96yk',' xvwobac','x1h2y310','x6prxxf ','xo1l8bm ','x1btupbp',' xdxn8r',' xmuu9lm',' x1690sq9 ','x1yrsyyn ','x10b6aqq', 'x1ye3gou ','xn6708d'); 
                if (button) {
                    button.click(); // Perform click action if the button exists
                } 
                break;
            case 'unread':
                // Filter unread chats
                break;
            case 'awaiting-reply':
                // Filter chats awaiting reply
                break;
            case 'needs-reply':
                // Filter chats needing reply
                break;
            

        }
    }

    
    function createCustomFilter(filterName) {
        
        console.log('Creating custom filter:', filterName);
        var customFilterButton = document.createElement('button');
        customFilterButton.textContent = filterName; // Set the text of the button
        customFilterButton.classList.add('custom-filter'); // Add a class for styling
        
        // Add an event listener to the new filter button
        customFilterButton.addEventListener('click', function() {
            filterChats(filterName.toLowerCase()); // Lowercase the filter name and pass it to the filter function
        });

        // Append the new filter button to the "Filter Chats" section
        var filterSection = document.querySelector('.button-group.filter-chats');
        filterSection.appendChild(customFilterButton);
        function showOptions(targetButton) {
            var options = document.createElement('div');
            options.classList.add('options');
    
            // Create delete button
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteFilter(targetButton);
                targetButton.parentNode.removeChild(options);
            });
    
            // Create edit button
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function() {
                editFilter(targetButton);
                targetButton.parentNode.removeChild(options);
            });
    
            // Append buttons to options
            options.appendChild(deleteButton);
            options.appendChild(editButton);
    
            // Append options to the button's parent
            targetButton.parentNode.appendChild(options);
        }
    
        // Function to delete a custom filter
        function deleteFilter(filterButton) {
            filterButton.parentNode.removeChild(filterButton);
        }
    
        // Function to edit a custom filter
        function editFilter(filterButton) {
            var newName = prompt('Enter new filter name:');
            if (newName) {
                filterButton.textContent = newName;
            }
        }
    
    }

    // Function to store contact details and notes
    function storeContactDetails(contact, notes) {
        // Logic to store contact details and notes in the database
        console.log('Storing contact details:', contact, 'Notes:', notes);
    }

    // Event listeners for filter buttons
    document.getElementById('filter-all').addEventListener('click', function() {
    
        filterChats('all');
    });

    document.getElementById('filter-unread').addEventListener('click', function() {
        filterChats('unread');
    });

    document.getElementById('filter-awaiting-reply').addEventListener('click', function() {
        filterChats('awaiting-reply');
    });

    document.getElementById('filter-needs-reply').addEventListener('click', function() {
        filterChats('needs-reply');
    });

    // Event listener for custom filter creation
    document.getElementById('create-custom-filter').addEventListener('click', function() {
        var filterName = prompt('Enter custom filter name:');
        if (filterName) {
            createCustomFilter(filterName);
        }
    });

    // Event listener for storing contact details and notes
    document.getElementById('save-contact-details').addEventListener('click', function() {
        var contact = {}; // Extract contact details from the UI
        var notes = document.getElementById('contact-notes').value;
        storeContactDetails(contact, notes);
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Function to show the modal
        function showModal() {
            var modal = document.getElementById('modal');
            modal.style.display = 'block';
        }
    
        // Function to hide the modal
        function hideModal() {
            var modal = document.getElementById('modal');
            modal.style.display = 'none';
        }
    
        // Event listener for "Save Contact Details" button
        document.getElementById('save-contact-details').addEventListener('click', function() {
            showModal();
        });
    
        // Event listener for "Close" button in the modal
        document.querySelector('.close').addEventListener('click', function() {
            hideModal();
        });
    
        // Event listener for "Save" button in the modal
        document.getElementById('modal-save-contact').addEventListener('click', function() {
            var contactName = document.getElementById('modal-contact-name').value;
            var contactNotes = document.getElementById('modal-contact-notes').value;
            
            // Perform saving logic here
            console.log('Contact Name:', contactName);
            console.log('Contact Notes:', contactNotes);
    
            // Close the modal after saving
            hideModal();
        });
    });
    
});