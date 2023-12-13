// Reusable Color Menu Function
function generateColorMenu(containerId) {
    const colors = [
        { name: 'Colorless' },
        { name: 'Black', color: '#000000' },
        { name: 'Blonde', color: '#fbe7a1' },
        { name: 'Brown', color: '#8B4513' },
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
            document.getElementById('productImage1').src = 'img/products/straight/basestraight.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage1').src = 'img/products/straight/blackstraight.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage1').src = 'img/products/straight/blondestraight.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage1').src = 'img/products/straight/brownstraight.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage1').src = 'img/products/straight/blondestraight.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage1').src = 'img/products/straight/redstraight.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage1').src = 'img/products/straight/orangestraight.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage1').src = 'img/products/straight/greenstraight.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage1').src = 'img/products/straight/bluestraight.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage1').src = 'img/products/straight/purplestraight.png';
    }
}
    if (containerId === 'colorMenuContainer2') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage2').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage2').src = 'img/products/2s/2a/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer3') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage3').src = 'img/products/2s/2b/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer4') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage4').src = 'img/products/2s/2c/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer5') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage5').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage5').src = 'img/products/3s/3a/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer6') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage6').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage6').src = 'img/products/3s/3b/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer7') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage7').src = 'img/products/3s/3c/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer8') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage8').src = 'img/products/4s/4a/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer9') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage9').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage9').src = 'img/products/4s/4b/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer10') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/black.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/blonde.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/brown.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage10').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/red.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/orange.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/green.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/blue.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage10').src = 'img/products/4s/4c/purple.png';
        }
    }
    if (containerId === 'colorMenuContainer11') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/basemohawk.png";
        }
        if (color.name === 'Black') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/black.png";
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/blonde.png";
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/brown.png";
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/.png";
        }
        if (color.name === 'Red') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/red.png";
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/orange.png";
        }
        if (color.name === 'Green') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/green.png";
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/blue.png";
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage11').src = "img/products/misc/mohawk/purple.png";
        }
    }
    if (containerId === 'colorMenuContainer12') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage12').src = 'img/products/misc/mullet/base.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/black.png";
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/blonde.png";
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/brown.png";
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage12').src = 'img/base/elvis.jpg';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/red.png";
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/orange.png";
        }
        if (color.name === 'Green') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/GREEN.png";
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/blue.png";
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage12').src = "img/products/misc/mullet/purple.png";
    }
}
    if (containerId === 'colorMenuContainer13') {
        if (color.name === 'Colorless') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/basepom.png';
        }
        if (color.name === 'Black') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/blackpom.png';
        }
        if (color.name === 'Blonde') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/blondepom.png';
        }
        if (color.name === 'Brown') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/brownpom.png';
        }
        if (color.name === 'Light Brown') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/bpom.png';
        }
        if (color.name === 'Red') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/redpom.png';
        }
        if (color.name === 'Copper') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/orangepom.png';
        }
        if (color.name === 'Green') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/greenpom.png';
        }
        if (color.name === 'Blue') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/bluepom.png';
        }
        if (color.name === 'Purple') {
            document.getElementById('productImage13').src = 'img/products/misc/pomp/purplepom.png';
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