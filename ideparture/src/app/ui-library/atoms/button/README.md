# BUTTON


## Flowbite  
- [button](https://flowbite.com/docs/components/buttons)

### Text Only  
A button with minimum styling to appear like an anchor link.  
```html  
<button type="button" class="w-full text-left text-accent-600 bg-transparent hover:text-accent-300 ">Save</button>
```  

### Text + Icon  
See [button with icon](https://flowbite.com/docs/components/buttons/#buttons-with-icon)   
A button with minimum styling to appear like an anchor link with an icon to the right of the text. This SVG will always be a chevron pointing to the right.   
```html  
<button type="button" class="w-full text-left text-accent-600 bg-transparent hover:text-accent-300 inline-flex">
    Save
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 ms-1 mt-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
</button>
```  

### Filled  
See [default](https://flowbite.com/docs/components/buttons/#default-button).  
A default button. Centered text.  
```html  
<button class="flex items-center justify-center bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-1 px-6 rounded transition-all">
    Button
</button>
``` 

### Outline
See [outline](https://flowbite.com/docs/components/buttons/#outline-buttons).  
A default outlined button. Centered text.  
```html  
<button class="border border-secondary-600 flex items-center justify-center hover:bg-secondary-500 text-secondary-600 font-medium text-sm py-1 px-6 rounded transition-all">
    Button
</button>
``` 


### Button + Icon  
A default button (outlined or filled) with an icon to the right of the text. This SVG will always be a chevron pointing to the right.  
```html  
<button class="flex items-center justify-center bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-1 px-6 rounded transition-all">
    Button
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 ml-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
</button>
``` 
  
### Button Sizes  
See [button sizes](https://flowbite.com/docs/components/buttons/#button-sizes)