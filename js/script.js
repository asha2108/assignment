/* to get json file and to append in the table */
$(function () {
    $.getJSON('data.json', function (data) {
        var table = $("#Table");
        $.each(data, function (i, member) {
            $("<tr>", {
                html: [
                    $("<td>", { html: member.name }),
                    $("<td>", { html: member.price }),
                    $("<td>", { html: member.category })
                ],
                appendTo: table
            });
        });
    });
});

/* For the Product name column sorting and for the arrow toggle */
$('#name').click(function () {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) {
        rows = rows.reverse();
        $('#name').removeClass('arrow_down_grey').addClass('arrow_down');
        $('#price').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
        $('#category').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
    } else {
        $('#name').removeClass('arrow_down').addClass('arrow_up');
        $('#price').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
        $('#category').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
    }
    for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
})

/* For the Price column sorting and for the arrow toggle */
$('#price').click(function () {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) {
        rows = rows.reverse();
        $('#price').removeClass('arrow_up').addClass('arrow_down');
        $('#name').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
        $('#category').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
    } else {
        $('#price').removeClass('arrow_down').addClass('arrow_up');
        $('#name').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
        $('#category').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
    }
    for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
})

/* For the Category column sorting and for the arrow toggle */
$('#category').click(function () {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) {
        rows = rows.reverse();
        $('#category').removeClass('arrow_up').addClass('arrow_down');
        $('#name').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
        $('#price').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
    } else {
        $('#category').removeClass('arrow_down').addClass('arrow_up');
        $('#name').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
        $('#price').removeClass('arrow_down arrow_up').addClass('arrow_down_grey');
    }
    for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
})

//to compare all row values and return largest values 
function comparer(index) {
    return function (a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
}
function getCellValue(row, index) { return $(row).children('td').eq(index).text() }