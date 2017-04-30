/**
 * Created by pshah on 4/26/17.
 */

/*
* Functions are declared with names that are camelCase
*
 */


// FUNCTIONS THAT HAVE NO PARAMETERS

function addItems() {
    var itemType = "SP.Data.EmailsListItem";
    var item = {
        "__metadata": { "type": itemType },
        "Body": body,
        "Title": Name,
        "Month": Number(month),
        "InvoiceNo": String(invoiceNumber),
        "PI_x002d_ID": String(piKey),
        "Year": Number(year),
        "Name": Name,
        "Email": email
    };
    var restURL = hostweburl + "/_api/web/lists/getbytitle('Emails')/items";
    jQuery.ajax({
        url: restURL,
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": myRequestDigest
        },
        success: function (data) {
            if (data.d) {
                itemID = data.d.Id;
            } else { itemID = data.Id }
            //window.location.href = "";
        },
        error: function (data) {
            alert("item failed to save.");
            console.log(data)
        }
    });
};