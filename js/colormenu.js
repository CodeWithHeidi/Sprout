// Reusable Color Menu Function
function generateColorMenu(containerId) {
    const colors = [
        { name: 'Colorless' },
        { name: 'Black', color: '#000000' },
        { name: 'Blonde', color: '#fbe7a1' },
        { name: 'Brown', color: '#8B4513' },
        { name: 'Light Brown', color: '#D2B48C' },
        { name: 'Red', color: '#FF0000' },
        { name: 'Copper', color: '#FFA500' },
        { name: 'Green', color: '#008000' },
        { name: 'Blue', color: '#0000FF' },
        { name: 'Purple', color: '#800080' },
    ];

    const container = document.getElementById(containerId);

    const wrapper = document.createElement('div');
    wrapper.classList.add('d-flex', 'justify-content-center', 'align-items-center');

    const colorDropdown = document.createElement('div');
    colorDropdown.classList.add('dropdown');

    const colorButton = document.createElement('button');
    colorButton.classList.add('btn', 'btn-outline-primary', 'px-3', 'dropdown-toggle');
    colorButton.type = 'button';
    colorButton.setAttribute('data-bs-toggle', 'dropdown');
    colorButton.innerText = 'Color';

    const colorMenu = document.createElement('ul');
    colorMenu.classList.add('dropdown-menu');

    colors.forEach(color => {
        const colorItem = document.createElement('li');
        const colorLink = document.createElement('a');
        colorLink.classList.add('dropdown-item');

        if (color.color) {
            // colored icon to the left of text
            const icon = document.createElement('span');
            icon.style.width = '12px';
            icon.style.height = '12px';
            icon.style.borderRadius = '50%';
            icon.style.display = 'inline-block';
            icon.style.marginRight = '8px';
            icon.style.backgroundColor = color.color;

            colorLink.appendChild(icon);
        }

        colorLink.innerHTML += color.name;

   // Event listener for color selection
colorLink.addEventListener('click', function () {
    if (containerId === 'colorMenuContainer1') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage1').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage1').src = 'img/base/baaafro.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage1').src = 'img/base/baatub.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage1').src = 'img/base/oig.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage1').src = 'img/base/red.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage1').src = 'img/base/crying.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage1').src = 'img/base/browncurls.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage1').src = 'img/base/blondebangs.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage1').src = 'img/base/sleepypanda.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage1').src = 'img/base/pompodeur.jpg';
        }
    }
    if (containerId === 'colorMenuContainer2') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer3') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage3').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer4') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage4').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer5') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer6') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer7') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage7').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer8') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage8').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer9') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer10') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer11') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage11').src = 'img/base/elvis.jpg';
        }
    }
    if (containerId === 'colorMenuContainer12') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
    }

    colorButton.innerHTML = '';

    if (color.color) {
        // colored icon to the left of text
        const icon = document.createElement('span');
        icon.style.width = '12px';
        icon.style.height = '12px';
        icon.style.borderRadius = '50%';
        icon.style.display = 'inline-block';
        icon.style.marginRight = '8px';
        icon.style.backgroundColor = color.color;

        colorButton.appendChild(icon);
    }

    // color name in button
    colorButton.innerHTML += color.name;
});

        colorItem.appendChild(colorLink);
        colorMenu.appendChild(colorItem);
    });

    colorDropdown.appendChild(colorButton);
    colorDropdown.appendChild(colorMenu);

    wrapper.appendChild(colorDropdown);

    container.appendChild(wrapper);
}
// unique IDs
generateColorMenu('colorMenuContainer1');
generateColorMenu('colorMenuContainer2');
generateColorMenu('colorMenuContainer3');
generateColorMenu('colorMenuContainer4');
generateColorMenu('colorMenuContainer5');
generateColorMenu('colorMenuContainer6');
generateColorMenu('colorMenuContainer7');
generateColorMenu('colorMenuContainer8');
generateColorMenu('colorMenuContainer9');
generateColorMenu('colorMenuContainer10');
generateColorMenu('colorMenuContainer11');
generateColorMenu('colorMenuContainer12');
generateColorMenu('colorMenuContainer13');