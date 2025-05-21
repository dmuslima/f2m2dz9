const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productList = Array.from(document.querySelectorAll('.product'));
    const noResultMessage = document.getElementById('noResultMessage');

    function searchProduct() {
      const searchValue = searchInput.value.toLowerCase().trim();

      const filteredProduct = productList.filter(product => {
        const productName = product.getAttribute('data-name').toLowerCase().trim();
        return productName.includes(searchValue);
      });

      productList.forEach(product => product.style.display = 'none');
      filteredProduct.forEach(product => product.style.display = 'block');

      noResultMessage.style.display = filteredProduct.length === 0 ? 'block' : 'none';
    }

    searchButton.addEventListener('click', searchProduct);
  