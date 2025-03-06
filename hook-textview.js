Java.perform(function() {
    var TextView = Java.use('android.widget.TextView');
    var DsActivity = Java.use('com.ds.testapp.DsActivity');
    var Context = Java.use('android.content.Context');

    // Overriding the onCreate method to intercept the Activity creation
    DsActivity.onCreate.overload('android.os.Bundle').implementation = function(bundle) {
        console.log("onCreate was called!");

        // Call the original onCreate method
        this.onCreate(bundle);

        // Access the TextView with the dsText ID
        var context = this.getApplicationContext();
        var resources = context.getResources();
        var dsTextId = resources.getIdentifier("dsText", "id", context.getPackageName());

        // Check if the ID was found
        if (dsTextId != 0) {
            console.log("dsText ID found: " + dsTextId);

            // Find the View using the dsText ID
            var dsTextView = this.findViewById(dsTextId);

            // Check if the dsTextView is not null and is an instance of TextView
            if (dsTextView !== null) {
                console.log("dsText found, attempting to change the text");

                // Ensure we are working with a valid TextView
                var textViewInstance = Java.cast(dsTextView, TextView);

                // Use the setText() method to change the text
                try {
                    // Pass a valid string to setText()
                    textViewInstance.setText(Java.use('java.lang.String').$new("This text is currently being hooked."));
                    console.log("Text successfully changed!");
                } catch (err) {
                    console.log("Error changing the text: " + err);
                }
            } else {
                console.log("The dsTextView object is null.");
            }
        } else {
            console.log("dsText ID not found!");
        }
    };
});
