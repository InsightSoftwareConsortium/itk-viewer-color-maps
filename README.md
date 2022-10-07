# itk-viewer-color-maps

[![npm version](https://badge.fury.io/js/itk-viewer-color-maps.svg)](https://www.npmjs.com/package/itk-viewer-color-maps)

Color maps for itk-viewer.

Select continuous and categorical color maps and their icons sourced from Matplotlib,
VTK.js, VolView, Slicer, Colorcet, and Fiji.

## Colors maps

<table>
  <tbody>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAMZJREFUOE/lk1FOAzEMRJ8T22mbHqtH6P3PQbsbB2UDrSqEBAiQEB+jmSRfo7yRk5x78oIUR9zBbcqM7gqWCVO6JcJHToQJoTL9lpl3OhzCoL9mveeufXsfPsRNQdIga6DaMG24NoqulLyy05VdXtjrwiFf2eeFmi9brumy6ZiHP3GUl3O6UqVRRajJOEhBTnKO/1a4fbiwZZon+h//4fXdwqawYfw1pCe6E/G7fzPSOrD9HNLLm8I2d/yTG46H/Y4t/86GnwGuqRIzRB2bAgAAAABJRU5ErkJggg=="></td>
      <td>Viridis (matplotlib)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAALdJREFUOE/Vk8tuQyEMRI8vYNMq+e58dABXPO4mSpQIddEuRjNmNzqMXPPNLy3xTeTLI5mIeRjKHJhP6ciCIaiACdNDQ6OjqaGpDqXYvZCW4kOOsdDfToVURw7rrd9B593zoYWjZy2Irntl0QJWmd5wq/hwxw2qCS3L8jtyzbe2W3iU/oeF627hLcIPdCfZXyKcG67vCZfdwn+acHZcn3/p+27hLcJ9py82fO74ow1bQdK53c83/APR3iI95n4tVgAAAABJRU5ErkJggg=="></td>
      <td>Plasma (matplotlib)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAL9JREFUOE/lk8FOAzEMRF/srO0spdD+/5dudmMUVVTi1AOIInEYvbmOZqZATSmOSEOlseiKydQLxoqzEtnwNCINL4rLlOBScOUm+WTikpgOXAZ+54Hrgel+p9WO1R1bOsukder0tlGn947ahkZHfUOmolNip0RSQiEcIsjWyFgZ7cSIE6OdGfFG+oXiV6pdsOWdAnX8t8DHUwPrrdnfbHh/auAfnXRjtNeHk+5/KfCydOr88OT87rc+fCb9+uXDHzioyxIGANGjAAAAAElFTkSuQmCC"></td>
      <td>Inferno (matplotlib)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAMBJREFUOE/Vk9tKBDEQBasvSSez//+1bibSiYqCrMKI4kNxOo/FyRHwqVJR7Zh13Dol0YOqB0VuhBzETDptBkEh1AnVjQnVZGUo+62TMPZ73XOnnht7zUHYIHxQF3dKGZQ68DgX1kAXiiwMaY70Ai2p74h9R2O2vDPbykTAz+vCSk25h8Ip/iL5x8LjuvDFhnUQ5Tca7qvh+3Xh/9Xw0yNhlxvtiw2/7Te/tED4T2z4jsf8ZMOy9/utDedu48OGnwEUyX6QPIzOYgAAAABJRU5ErkJggg=="></td>
      <td>Magma (matplotlib)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGJJREFUOE/FUkkKwEAIy6Dj///bldxKKUVNoSc9ZEUHgMPdMecEZ2fvcP7yGwB2NbDKr5ZX/Fh4UwS6X1EtecUreVl4zQiYGSLi8e0z/C8xdy3mYr6MBwsvGeAbRuVXr634nRPFE+jJ30dGAAAAAElFTkSuQmCC"></td>
      <td>Grayscale</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGFJREFUOE/FUksKgFAI9N3/xk9tYnYREeoErXQxX3QBQESYuxvnZJ9w/vJbAA41sMrvllf8WDgVgelXdEte8UpeFo6KQGba3vvx7Sv8LzF3LeZivooHC3sF+IZR+d1rK34nJhJ6JDqdWKIAAAAASUVORK5CYII="></td>
      <td>X Ray</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGNJREFUOE/FkkkKgEAMBGuY5f//daVvIiKZtOApOfRKUoCj0eh0NDN7hvOXXwF2N7DLny3v+Knw5ghkv2K25BXv5FXhNSJQqQzG49tH+F9i7lrKpXwRDxVeIsA3jMufvbbjdwJhzg7tKQp+vQAAAABJRU5ErkJggg=="></td>
      <td>BkMa</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFZJREFUOE9jZGBg+M/AwsLAwMrKAKbJYZOjZ4DsY2RgYPhHlieRHTzEPPx3pHn4D1EeZmZmYGBjw57sBzqGQe4CuY8Id4CS9G9iFOJVQ4RFFNtBpSwEAFzTDu2XWKRnAAAAAElFTkSuQmCC"></td>
      <td>BkCy</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGdJREFUOE/dk0sOgDAIRMvn3sO9/YadFjWSoDEuuiENwzwYArCISGPm8KrqLNyEn9U4m7XXJjObj8x67ZeGAUxVxu5S3gJ+W9s3PH51ww6DiHZRywIKJw1gyDbJ/q/MsKoGCFfx67VXlE4T6Mx6zVUAAAAASUVORK5CYII="></td>
      <td>gray_Matlab</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIxJREFUOE/dk90KgzAMhc/PHthrX8IHdnOSjkmlnYWJKF6UhJA0CV8Ou35404IkKGzuLzGCX7+Wl2qI5j/iqocllI8wy3jMt8olK7XtHHb9MKVBa4tGEwv0vRZ+NcnsXtiQma4gv6KzCD8vRdiEcexJj9uEgw5KDT8EMdf9bw0HyU+PHYRtONftnxqeAXuaE+ghaPQ8AAAAAElFTkSuQmCC"></td>
      <td>bone_Matlab</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJVJREFUOE/lU8kNgDAMs1P2/7AF07APp9I0tPSDOISEeCAXxyClttl37UIhGASGjIiS0/NulrTOJ4zflFqK/afWUTkBGdIjAPxsaO+uKefGAYr1PHN5Xun7rp3/tvB0uLC6rq5s7n/b4bFcWILF+VKk/WI8/o9F2iOcY34n0sOhw7GDAq2O9XvvsKQLeq/DDQBN3fkOr+95E+hSlOqhAAAAAElFTkSuQmCC"></td>
      <td>pink_Matlab</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJRJREFUOE/lU8sOwzAIMw3Q9hv7/1+xRyavIEVMu0ydpqkHCzDhQIylb+gwAF6QHGPtjz3OmbzCg1MDmgNNC9peiwNTwoDJANGIC4B1R49cGIk5ePaTi1ySi7mhlr7hfraFb4csTEV1UPojhamsf13h6yEL17Oe4wN+dtJx1rRCOekLNCwx+vidh2kdvn96N+P/ePgBwdAi6Gro1dYAAAAASUVORK5CYII="></td>
      <td>2hot</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJtJREFUOE/lk80KwkAQg7+Z/fXJeuvj9uXUjkw7tR4EEaqXHkKSWVgIJDJMozWdaWpUJdi1UdRoYnRROkIToTmjT93N3xLOzfXCqy9zJs2FZGXlDeFFKlBB/FfnzVfQDJoCuusUN+cU90W/IGco5S1kmMb5bIHvZwt8OzLwxZT670p7hVX3Wn+o9PXbwB2lxp6P23ADKbHp3234AaZLfOgZ/nd+AAAAAElFTkSuQmCC"></td>
      <td>gist_earth</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKpJREFUOE/FVFsSgyAMDCHpRTwo3rsmdkKQUqstzmj7wQyIm9fuEnhIM6IARQWOCoSa93mh+Ld69r3/55hlcYuLkuNUbLnzs9914Zp6eIXLddQ4z5jrnJav7SvwMCri9P+GqQyxHdQ1DSfpZjgoEJ3BsKlj9iF/UsY1DY9TZfgl+Y8lvcmwSbUM5jxJp/sewxEFbrseNht4MV+ZOuhhyxnf3o3Fp1vq6PfwA4f/NLzUsOdvAAAAAElFTkSuQmCC"></td>
      <td>Haze</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJRJREFUOE/lVEEOwyAMSwKoL+r72L9bwmQIbYp2nFZNPUQBO4DAMbwuubIohaQksZBEJQkuMEekQtyyttwD9dX4jqEW+Dk2vuGVGHvb+p47f9Z7vho+8lQXPI597NwDNz64devyUpbypAvncp/CUIR+rvD+PwrjgZwFPrU0rCmTFa4tnbf7FP6Wh0enTB5O9me4C78BEMgxzBW2/64AAAAASUVORK5CYII="></td>
      <td>Haze_green</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJNJREFUOE/NU1EOhTAI64BreAgv7SV128uARYz6YaLL+2Ks6aArpHlaKlEBcwWxRyogz3tU/O6+8zjy7Hx413HWeI0btveiuYTeQi19W6znA0/2vPM7nuZpKWMEA8TZP+EsWLgiqZjvBecxgs0lc32Aw1JA5LWC483hbYzg/3F4fVtwHM3Xd7jtLLVpyRAG0sMd/gFmtjJDgvNiAgAAAABJRU5ErkJggg=="></td>
      <td>Haze_lime</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKdJREFUOE/lVNEOwyAIpAL1xX92/z3FBdC2WUy2LO32sAcSvRNQOVhyTE0ogKwIQm4VEQQDSNA9gbBbI4JKbFjta8XUxjnFd35w3H09ztHXYveYzrHxns9zjTPmxx2b5mUoR3zz3e+03GKS+pMHr9D0g7/94BxT/bcKl/cqjCax8yR9doVd6i8lnWO6X1Jh1H77sIdN5vMeLuzzwPnn2cFQNCd2fNLDDxElNc+0VPwdAAAAAElFTkSuQmCC"></td>
      <td>Haze_cyan</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAF5JREFUOE/dk7sKgDAMRU8L5irY//9Yn4MVRLBk6BKHcJZkOLlJAg4QYHRhNpDAWjQwgR78mJmUKcZVanN29CRg7yJ6LyyA8BZeeIQygDfhNbxwPXWv8PJL4Zr6++9Pju8T6OHPJKQAAAAASUVORK5CYII="></td>
      <td>Black, Blue and White</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGBJREFUOE/dk8sKgDAMBMeCuwr2/z/WJyI9KJT20Es9hLkkh8kmA3AaENCEAWyQ8pTBghczM8EzKD7lArUUewbgaCKaFtaB8N698BRhvNOvS3jrXjideqXw+kvhlPrn7y+O7xPoT4XzBgAAAABJRU5ErkJggg=="></td>
      <td>Black, Orange and White</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAHJJREFUOE/NkskKwCAMRJ9RSpdTocv/f2dXUuzBngz14CEEwzD4knHA1QMdoP2tUu8mRNNShp8PShgRWWLNSfde5+nMAacVeADazAXVCHxYgS36GoF3C4Bqf11Yo60GhSKeF+kVkemJu0Z6swJb9LVd+Aa1hxPoBN+lKwAAAABJRU5ErkJggg=="></td>
      <td>Black-Body Radiation</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAMdJREFUOE/dkzFuAzEMBOdOInV/8hf8aD/HdZDEJ1LSBZSDdO4cOEgxGLaLXS6n8+WQrSBF72yKFpm3loyUPK0aTqiudyS8oBKACGg+vhlIGmgKd3RtyNrJS9jJOIKTeyUPI3cjtUpqxtrqZPE7mIGFK0dQjWGVsVd6NXp4Dxu+G+1m+M3x8KdjH4a9O/bWqFdnOZ0v42HgLSMz6P8K3PNW0L/WcLQ8m31+w+3lDQ8j+W9P2qnXNiftjwL//O/TJ91QjPSCH/4C4/S8XDmOziUAAAAASUVORK5CYII="></td>
      <td>Cool to Warm</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAANBJREFUOE/dk8tuwkAQBMvenRlIIs58Af9/4OPYmX1ENoYbSg5GinIo9blV3dM1X4adBT1l9EvQT0U+BDkqchTykgclPTGSKfPBmNWYTJnU4IkyxFZ6vtOy0rJRk1JnpSYjECpCdKGOTPSE90y0hLeZaDNeF6aVCPCVgfvAo+O+URruFS+VKI90vARxc6Js3ArTNV/6vyq8FL8txV8XbrsXVmNsdv+KYS9O3QxXO2f0JO+dtNh9zu+e9C8Mx+6Gf/hwS4ajVJbv7vvhx49fTfobIYyqafgnQO0AAAAASUVORK5CYII="></td>
      <td>Warm to Cool</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAN9JREFUOE/lk7tOxDAABCeOn0lIy7fd/xfQQYgd23HsoDvR0EBzguKK1TbbjLTTweVUVqKdoreS3iqkU6hBI0dzazVqbhsrUe7aCu0M5prhK1bjBss4DcyjY54sk1GMWjIbyZNRDEoyy5PnLqKEQMcXWvig+jfaulCXd2oItLBRfaCuG8fiKX5j3yLJb4R1I4ZE8oWcdnIu5FhI6SAfHXsV5NaTT03uNBlJpicLQRY9HVzaowHXRwM+/g/4lRaWP790uQewtprhm8OOycg7OLxSfPzR4T0W4i8OJyHYRc8nQDt6K0KjdXEAAAAASUVORK5CYII="></td>
      <td>Cool to Warm (Extended)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAOpJREFUOE/lk71OwzAURs+9dpPmxy0sHZHyWH13JNSpldhwmpDYjlGYGSIGhGA4D3D0fUfOdLmSQC0JpwtOE24XaYtA21jqRqlqZX+0FM5gncW0BtMotjEYp+hKrWi5w1Qlpimx9UqFqQ7Y6gEtH5HyhBQnxHRczBOveeDKzC0lbtFymS3P48LLqPghkfpI9AviE9kndEjkcUHuEekT6sMn+JnsA9lPLH4i9TMyTuznd2odkTCg8Y7GHjnTLf9NOG0SPliKwy9e+C2Q+20Lx03Cf+jS4SthVwSajQ2vHcu3Gh65Mv1YwxJ7PgBL6YOKfnHF6wAAAABJRU5ErkJggg=="></td>
      <td>Warm to Cool (Extended)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFlJREFUOE/lk8EKwCAMQ58w0O3/v1U35lYpeHJO2XH0UBqS9hCaOhBZgQBof8Mz/eveQgZSrb2De5zOz/ix7kBua4Yva4Zza9gDWxPv/0U6AsfjVTTSp6ULF/z4n/Lum09IAAAAAElFTkSuQmCC"></td>
      <td>Blue to Red Rainbow</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFpJREFUOE/lk1ELgCAMhD8hSPv/v9WKrInWQ6QSPsoexh3b7uHYzQgIOMByY4v/zft0gYkVcm0Pvnmt19rt0RmBS5vhU5vhUBqegeUT77Ei7YG98iop0oemC0cfIJ/ygRlg0wAAAABJRU5ErkJggg=="></td>
      <td>Red to Blue Rainbow</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFBJREFUOE9jbP9f8Z+T4TsDB8MPBhCNzIaJ4aIZfjAwMHxnYKA3TYm1jO3/K/6NNA//HWke/kPIwzB59KRN86QMyy5oaZjSJP2bkIeHUx4GABhjLoaWFMXAAAAAAElFTkSuQmCC"></td>
      <td>jet</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFlJREFUOE/lk80KgDAMg7+BsOn7P6tuOK0UPO2H4lF6KA1JewhNA4KsQAK0z7Clf91bKnC8lQd4xOm8xRt6QLi9Gb68Ga6t4QhsTbx/F+kdKP2raKRPTxd+AJMHn/J+EEzZAAAAAElFTkSuQmCC"></td>
      <td>rainbow</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFlJREFUOE9jZPj//z8Dw2cG8vAXDH0sDN8ZeBkYqIZZvmNxGqa1RDufkeH//39Eq8YImKHp4b8jzcN/aOVhHgYGBj4SkzdIPUgfLFvQIkn/ppWHqZGXqe1hAJ/o0fITXg0nAAAAAElFTkSuQmCC"></td>
      <td>hsv</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAK9JREFUOE/dk7EOgjAURQ8JDiVBSBDH8jn9/5lJXQUsgdBEREMkkSIDbOjwcl67ndx3HaXSpzGaptGMOd5b34UkAnkAGUEy4dEDff6e8vMX7xpkCEkAMpgwhNgFMiAfON0z0BXkFRS1zbyGooK2c9kLYY3vedbbUSrt/kk4EAJ/JD0n/Pg54T7pPtUh6bUJt5sSLoDrzHkvPOklCd9t4RJjblaf13X4Avr07vMGO/wC5lRgaHOSOosAAAAASUVORK5CYII="></td>
      <td>Rainbow Desaturated</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAG9JREFUOE/lk80KQFAQRs9dWOBBFO+DB3ffgiUWFyN/RSEkFncxzfRNTZ2aoxARKqCGTX8rW98xBaDHishI0MRoAicHD3CZ+tG8t7+ZKUQ624Bb24CbP4BDMtKfXtpcAh4cLx+4/oXD/uz/4vOJ1z0/NrjthWgG9gAAAABJRU5ErkJggg=="></td>
      <td>Cold and Hot</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAHhJREFUOE/llMsKgCAQRY+tc9/j/z+t2ku7tEJQUJtaFUEthtHray5HVcAGLdAh52SsVfkUaZnXqgkYLkNjslPPKtAz4Lcbi1xom6mx9LgQadtrsa+A9Wg0mvdlfM+we5OwRLYHmnDnniBs/0Z4eZNw+nikX+RuwjsoyKlSEERyVQAAAABJRU5ErkJggg=="></td>
      <td>Rainbow Blended Black</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAH5JREFUOE/lkzsKgDAQRJ/Wflo/p7LyFt5a7UXIgl+iEUKQWImFxTC7UwwMOxtUdbOJShBJOViliJysHJ0cDhSG7dnWwh5ovYgZHq20ZTwC2q5z2NG2IWKmZDGwZ61de1DVzfq3wMuXge9KUgKZKdIbF56/DOz7jrcqPf0p8A7ulw1h6vPbEQAAAABJRU5ErkJggg=="></td>
      <td>Rainbow Blended Grey</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAHFJREFUOE/lk70KgDAMhD+d7e7P+z+a7V7crJ4UFEopdSoODuGSGw4+knSS5BxYCyVNPY3ABMy3pn3q9Q5Yq2Xwr1Ex0mxAjLOZZp78QGDhuCvto/fMnaTzb8DHl8ClI1mAeEytNhy+BK59Ryvg/U/AF/9VEmHMOHLAAAAAAElFTkSuQmCC"></td>
      <td>Rainbow Blended White</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKVJREFUOE/Vk0sOgzAMBefZgV6OU3FDrkN+VUKEiip1xaIsrPFLVk/WaNnWahaRRUyNCbO9Z40cVHAruAqhM595kpgRs8SE0XPf1ffOMQHO97aHKrwTHOEVwqAXsCysgGc6LzmBJx1/6RhvzEKxogjsB1umcQct21ruKPySCA8pnO8o/KQLpzsKP+nC8WdhTwT+wOHaPP1wejj77bChWIbDzd+rw28mt+mseIsUogAAAABJRU5ErkJggg=="></td>
      <td>nic_CubicL</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIBJREFUOE/lk0EOxDAIA53/v6kPKwa8gjRSdy/tOXuwGHMBK2QoDyETSALhQBDIqg6tnk/f+uXyrZiVAS1fzJg9K84vLi+q+7nYJqePVly6c6/Bayw1x9f6xQbQ1XJPkAKt+gJPYSiP/LfAsVPgMMAeXti3CVyny+eT5jaBX/zhD2KYynrGZBcjAAAAAElFTkSuQmCC"></td>
      <td>Spectral_lowBlue</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJ5JREFUOE/lk7GKAzEMBce7//+1FyJZsvWCnSXVwV2XYothjA2GV0yThqQH0g+lB2A0bFvVoRxp+WJ2tHE0HBbTIA2lf6wMFMnbsc3yuotxvU0UE+WiUApFUSHUi3DhVpvRYQTMXN80PBs9G3F5nT0atg1WJ1YHpgNvJ9ZOnIMmjbrb4Hm3weNug/N/g2P3zG8Nl0E8UfbvNXx1/VfDL/EtyEXrIuyvAAAAAElFTkSuQmCC"></td>
      <td>Yellow 15</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAMVJREFUOE/lk0tuwzAMBccSKdlKjxHkArn/pSzKH9lNCiVpC3TRVVAU7WLw3nbwyO54Ol/DkIjpQEufFDcoLik+uAcdolc0XJAAsffEwX9m69ETpCFEFZLcGVToRejfU/ytR1GCbwTUBXwXHyScO+C6F9ZlJ2cj54LlERvzLSczlmLMZsxlYikT81Soc2VbK9tSqWtjo9bG/tG74+l8+W/Cr39XuN7X/bLw/ruFC9kMG5930tuPCqunFyWKPP+Hp8pWv//hN14dTTr09mHBAAAAAElFTkSuQmCC"></td>
      <td>Asymmtrical Earth Tones (6_21b)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAANpJREFUOE/lk7tSAzEQBFtaSavzBRREJnLkL/D//w4RyT1XknmVDycEBBDxCKZ6066dcYfT8TV1iubEhamLxByJXSAkQZIQ1L/fKhv1mqyeXj07dfTqyNd00aMhkCVu1KBoTGiIZBFUAkmU4HrE7RDf4X3G+UwIt4R0T5EbHmphKI3BGtYapZ0prWHTyjrOrNPMMkzMw8QyTpTZttSlUFejmW2sZaXaQpkfcYfT8eW/CT//VeFqRluMWj9++OlnCd8R0v7zSp8bNn690sUW6rXS5+8LX7Yrv2rDb3obR1RNAWp0AAAAAElFTkSuQmCC"></td>
      <td>Green-Blue Asymmetric Divergent (62Blbc)</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAMdJREFUOE/dk0tuwzAMRMcQf0KMniDnyS73P0W3EkVZdmG76TotigLN4mFI7gbDma63+0ZmSKxIxCDRc2YFEZ83EjAJhPhQZYWyHWoiMNnVMGfDxfLBnPXcVZCFkCXhooS3nDBngKlim95ReoEvDW10tCUQ64JYB2Ib8B7waAc19vmktUDzXTu8Okpx1OLwh1aH14b2SY+OB9P1dl+/ZZgFSv/b8HjG8J6yvkjCyzOGv176BRLuyQz0gw4LK/IvdThGh/9Bhz8AoVe7JmUyOsEAAAAASUVORK5CYII="></td>
      <td>Muted Blue-Green</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGFJREFUOE/FkjsKgEAMRN/i6v3vq64ynQhKkhGskmK+JA04OjADmpW9wvnLrwHDDezys+UdPxXeHYHqV2RLXvFOXhXeIgITsDy8fYT/JeaupVzKF/FQ4TUCfMO4/Oy1Hb8TtNIJ8u4jL68AAAAASUVORK5CYII="></td>
      <td>BkRd</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFVJREFUOE9jZGBg+M/AwsDAwMrAAKbJYZOjZ4DsY2RgYPhHlieRHTzEPPx3pHn4D1EeZmZgYGDDkewHOoZB7gK5jwh3gJL0b2IU4lVDhEUU20GlLAQAr9cJ8oQxyqcAAAAASUVORK5CYII="></td>
      <td>BkGn</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFVJREFUOE9jZGBg+M/AwMLAwMDKAKHJYZOjZ2DsY2RgYPhHnieRHTy0PPx3pHn4D3EeZmZgYGDDkewHOoZB7gK5j7A7QEn6NzEK8ashbBHldlAnCwEAqtwJ8qYMUZsAAAAASUVORK5CYII="></td>
      <td>BkBu</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAI9JREFUOE/lU1sKwzAMk+Td/wD96Hl6p23dsNKEFgp9jDFGP4Jt2ZgYSey74SURCsFxnkfWE77Sjzp/MpKESFBAywn/IWtm7n7OlZl5jooljqnfMAPeUXc59t0wXu3g5ycHRxQ2mjoOsP0rhh/bBwuyvJeS/1dJ333ITfbLeQ+n14v/9r7KsAJpuOLXL3v4Db2DE7vloNCTAAAAAElFTkSuQmCC"></td>
      <td>Purples</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIRJREFUOE/VU9EOgCAIPNT+yl/0i8tqEBQP1tbmmj0wxiHgDY5qyRtCBGKCeG+RY4dL7DCfl3oz66e1Z05rbRZpP+eJ+zdwmcu45AJAbaMb3N5TLXntS3g6PuRJDka49iWsW00JoDE3vPQl/HLDLAtcp/3FSc+PhPkcTVO/0TBrnZo63wElKBNSL+Ki1gAAAABJRU5ErkJggg=="></td>
      <td>Oranges</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJlJREFUOE/lU0EOwyAMi5Pv98yT+ql2axUnMLROExK9TDtUDsREmNpYynrAIFAVJUJgSuQ6a0dlL7iOvuaHQFNpddtjTxrPGj/2LM/WOex3Mz9xOA8Q+FlIYl9L3J+cyk1cyvr8N8GPacH5mr/yh/cxwUZr3mZpC4t9s7Tb2635zpm19DYm+JrheqFrhpXZeuXvvgy7eExk+AQhAhOn78L49wAAAABJRU5ErkJggg=="></td>
      <td>PuBu</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIRJREFUOE/lk0sOgCAMRGeKR/ZSnsYD+Q0tLZK4w426osybkhQYjtN8DCSSEImA17oWfSAKZ/CrV9RbPdYHqK7nttx04yKMlUSzr9x0Zr/2IOrck3VjXle/82DjNO9/G3jrGjgRgne98Ho/sMQ3/dqXXrpeuGSwZtgv6oEMe75Ltp/I8AlQcROs+Zl2nAAAAABJRU5ErkJggg=="></td>
      <td>BuPu</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIxJREFUOE/lU0kKgEAMSzr+2u959EeupFVHFEFQRPFQ0h1KGpZ1NSQOkBVCC19mB/m5Hj1EImG0lT/nMi59iF7NUIaYEypWzaMJqb3KbPI+s6op9k7HqbbZ7zNlXfV/O7jbHwwk9rcwXIgZIrP/AobbQ4b13ti/+tdfurn80hb6yXp+SsMJBoSWT2p4BIvMXWaJdZWAAAAAAElFTkSuQmCC"></td>
      <td>BuGn</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJRJREFUOE/lU1sOgzAM86Nn5WSchGuNPZS0wJimDSQ0CU39cOqkH25sdkN/LxQsY0HDEkyjrFAoMryaV33H6DXM/huu8dO8SJCE4kQNJopa6qhY+8nOiDYTiOQrAvp074b+9m+Cr9sFTxt/dsT5NjxuFywUG8bxgh1e/JGlL7sEf8uwhJIf8prhyD6T35vhzPRBGX4AV9YTp+v+LPwAAAAASUVORK5CYII="></td>
      <td>GnBu</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAHxJREFUOE/lU8sOwCAIa9H9637Lr/SwZ0QWzebJg0u2AynUQiQNjHM44Al4ARO6nCvnCFZ5UyOmE+TeFMrBMNdU/qYRAVLQ0Go++NTb0JJQLa932qyC1NlVHeewNxee7KMfXHgb67AU919yeP2bw8tYh6s773G4vvmOGz4BDBUThB0mRnYAAAAASUVORK5CYII="></td>
      <td>PuRd</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJxJREFUOE/lU1sOwyAMsw07KvfjRt09usFEAlVZpWkf3aRpHyjkgVESm0vKtQahRMJseLI9fshFr6UEBgKi2dkXuIvD8nMdg6ARC46ljjnfHUvjD8Kx2A7cmu93wxxxy/WaJeXysuELUaXjMH644fu/bfj2+Q07HQelGy2x0fbLlL6mvJazNBybbvaaflfD7Q3Q9Dx0a0OZ9HyOhh+ypV5rlJGRwgAAAABJRU5ErkJggg=="></td>
      <td>RdPu</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/VU9EOgzAIvKP9yX6UX2ynSxG0XXyQZFv0gQAHITkOWKeyIiXslhOouRxYXx9iAaQz8sjpOIE9FoutjwloJuYtpvaPmM4Yei13XL2AOvOstuGsU1nihLMt5JmEX3HCfhFGuF2DbvVXCudt9pcUrnHCd1PYF3LtpOc44Q+F/Y9DCne/9scffgN8JhNhoAye9wAAAABJRU5ErkJggg=="></td>
      <td>RdOr</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKtJREFUOE/lUzEOw0AI8/X/7z0pgE1FaZoOHdLqMnVANojFsj3mnHlLAgwMxYEKDAYgB8IB1sQb73uGId2ae/P9lu6QO2gBWfPCx/66x2Pvn4PTixN0NdZsPWGCUzAWJjx690hYCKaEMbEV6kDLxJhz6t8Ec4lgOtKucLhcFeiEyt0FDscSwYsiXbGOivZXkeYz2uci7Z8FE6N6e3GHcxf4S4eruzrbYcESuAOB0SvCTyTezAAAAABJRU5ErkJggg=="></td>
      <td>BuRd</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKZJREFUOE/lU0EKwzAMc///3xwqyR2Kk7YMNjY62GAHI1nJRchaWmtbZEQqY9PWJzvWbu63ZIbMmbUPLutjeOKiuk4jtKP1XUO9dW1y/+2coVWRa2FNcYI1RJDG0w4GrGsg0XeIQSGW1lr+m2FdNqwMwWkeaf9iwhgJ87Jhnzkz8A3DPm2f6zzxF04aTw3n6O1dh93v6q5x9vXTCWfkirc6jGn8QYdvA/ly2u3SplUAAAAASUVORK5CYII="></td>
      <td>GnRP</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJdJREFUOE/lU8sKAjEQS///f627k2SknaLoQUT3sOAh5NFT6KT1fslmAAaaE3Ci/ODyE0qkHhryzJMjN5ILU1fmEDIEB1945IT3Qu666/LrbSO8EboODrhzQhtBFiSVjuVDCBFhgpNVenHr/eJ/K6zDC49r4Hl/mIcXPvlJx8eF15bHnt9vGEiN7f66Yc3tfr/hQNhPG74BKn8oiTVsRysAAAAASUVORK5CYII="></td>
      <td>GYPi</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJhJREFUOE/lU8sOwzAIc/7/d9PDwMBEQqN2l63aDpt2QH5wssCtbz1aGBAEQtESPfnUMbQiDnPUToHbw+weBaY3uBTqxOENLrCxU3DXhVRCaSAdpBVPXdwCag5lgMUn5qA8DJ4efWLrW/d/C2zXAufFZV38Fy/Ma4H19OIrsAsW//KX1o8EPvb4lcDZ7+zv0w7PHs8+v9/hO3NGO9E/J89tAAAAAElFTkSuQmCC"></td>
      <td>GBBr</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJdJREFUOE/lk9FqQzEMQ3X//38DN5Lsoty021s7GO1gBHMskRfFzjHG6EKO4fYX23Hg1vJDba6+7l56ghVexeZFEzMl4vRcvOsH46WYO7uXMCkwpdCLk8bc2jJMw6pFba2t6ztVaBrxjjFG/bfA/ljgTJTvn7BeD1xw81rvn6y0iVN/Z6X5LHC1obf94TyMf/kPG52UKtwAaHln/8s+ZKcAAAAASUVORK5CYII="></td>
      <td>PRGn</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIhJREFUOE/dk0EOw0AIA53//zerBhsqsxupp6g9dg9oGMTFQhxjnFVIJIiCkCUUiIRpdx+QWZ8MCITyAvMFlnnXcl0IzZnZfTOWB0j3s2i2e08gBSoRZvdmLhbIgtpNey5OFwHp3kPPjjHO3CqwA8ZzYG0VuC/9HJhbBf7iwvFr4KoA/c9/+MNvZsVLWOagDjQAAAAASUVORK5CYII="></td>
      <td>PiYG</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKVJREFUOE/lk8EOwzAIQ53//990CTZMNOlaaZrWaqdqB8tAcrHglaXWKGEoboD3D95Q1IFU/pkONazi9EMdbAh2ONuQzdpGr5QRToNSNtzZIXaQAhmgAqK/6m1GYX1LN9/rvc95Wd/pgE0vS63+L4HlQAbWnQKLAZubPb3h7QpmYN4p8C8nvW3YTgf2wfHOcPaP6wwr+X1nePCbLH9hONk+cHuF4SesqNjhaTBIBAAAAABJRU5ErkJggg=="></td>
      <td>OrPu</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAH5JREFUOE/lk7EOAzEMQrn//93c0Bjsilxy7dCh3SplsB7giYGjna1UACvBKqjq1vbOw5eLGnrkmegpdOkzSTxI9HXx8s4j/ItJog9vBoIE329mK08SKWKQRPl0EVObkL1GZn20s+VuhbVbYe5WOH4v7G1fW/6LDcfc7xcbfgLI1llA+jrWCQAAAABJRU5ErkJggg=="></td>
      <td>BrBG</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJZJREFUOE/llEEOwjAMBMeN0ifwJA5ceADP4dOINjZySCGtUKuKqpeenM16Y63kjQAWQ0MMwlDbCZ7lm7HWe9vqram2nnG9XTid7/B4Yp2hCVQF85okY9Pv2e8yp4UrPVp6PjoFGzivFRZAj2Y4Hc1wv6/hd3Q8NqtX2te9/3+lu+0NQwxh9C/8mrFoOGdvXYY9u2kmwy8SMCRoT4yc6wAAAABJRU5ErkJggg=="></td>
      <td>CT-AAA</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKdJREFUOE/Vk1sKwjAQRU8Um4Ddgt+6mex/F+1PayKmjbTTh5aCBUPBj+EOk8nAzZwoa2PkXEFes1nzauo98iBzDZlve9Vd7iSXaKXm5/pqz9v5x71xnp9nqwtwO8C1CzXkCmoNpYFCQ2GgXKpBWRvbzUbHh/lzw01aw4HMxd82fBdihISBjIQbDmkNf0M6oHvkF9jviPRzX8PLfy5E6BXDxjWcEm/4BSfTogOtNpScAAAAAElFTkSuQmCC"></td>
      <td>CT-Bones</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKpJREFUOE9jZGBg+M/KxMjAysTEwMoMoiFsFhAN5jNBxUB8JDaSehaYGiLUg8yVluZmMDYTY9CIW8MwT1iAgYmNk4GJnQtCgzGMzcXAxI4uhqwWTQ+GWqg8WBzCZmRgYPg30jz8l1QPg2KJbRDFMDMo5kAxSGQM/yHVw+jq4UkanA3wZ4HBkKR/U83DWPMwA7QcgJQR2DwMjiHkPMwKiy3kWEPK23C1pOdhAOgjIFnZ4cXIAAAAAElFTkSuQmCC"></td>
      <td>CT-Cardiac</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAItJREFUOE/lk0EOwjAMBCexRQwXToU/9P+/K0lR3JJSKnFsJThE613bkVa2AzCaRs4aMRFq3LgKJnPO9S33Po2ckpDennOLTfvMp+uN1PVY1zvK5U7JMObg6HF5xRNueK0tc23rm7TlnzUPQPk3w3kfw3XaumzBgRN+7GN4vfJHrvTwS4br7eYvN/wEftULaDGHRSsAAAAASUVORK5CYII="></td>
      <td>CT-Chest-Vessels</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAE5JREFUOE/Nz8ENwDAIBMG1RCl0wYNK6L+IxE5aOB6W4L3iNAv4uHQRQVWRmbg7ZnZpSX+7gKPnvXIqePcYej0V/OqEXjkV/PQYej0R/ANlzBPojrx0AQAAAABJRU5ErkJggg=="></td>
      <td>CT-Coronary-Arteries</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAALBJREFUOE9j9PX9/59B/AUDgwQIv4TQcP4Lhp/fmRk+X5UD4y9QGsS+cFqYQXjWPzBmfseACXgYGRgCmBkY/JkZGGyZGRh+MzEw/GGC0MhsmBiKHCMRanCYg8/sP4wMjL6+//8NaQ//ZWJg+EVkYEI9/Jegh6/JMXy+QuMYhjkcHEO0jeE/BD08KJI0IwPDH2jWQE62ZMTwb2I9jJyPycrDKLGIKw+CPIYmR4qnCORhAC/1M/7A+6+gAAAAAElFTkSuQmCC"></td>
      <td>CT-Fat</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFBJREFUOE9jZGBg+M9AI9DqycUgrW/EoO2VyyAsrcfAwsLGwMLKysDKwgqloXxWVgYmJmYauQLVWEYGBoZ/tLJpsHr470jz8J+R5uHfI8nDADacE+hts5OdAAAAAElFTkSuQmCC"></td>
      <td>CT-Liver-Vasculature</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJFJREFUOE9j9PX9///zZwYGdPz15y8Gxf2yDPstWBmYXF8zMDAwMTAyMDIwMIJIKBtEMzIyMIBlmCA0I5TGIQY2B2oGXB+YDzIHYi7YLDQxBkaYHFQd2F6YO5D1IInB3YJwG6Ov7/9/I83Dfz99YmD48gU1lodeDINSHyh2Ccfwn8ETw7DsQtsk/XvweJj2eRgAK1Fc9PV/j0EAAAAASUVORK5CYII="></td>
      <td>CT-Lung</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAADZJREFUOE9jZGBg+M/Nzc1ACubh4SFaPSMjI8NgAiDX/CPFsyC1Q93Df0eah/+MNA//HkkeBgBEvRPor8UDjwAAAABJRU5ErkJggg=="></td>
      <td>CT-MIP</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKFJREFUOE/lk70OwjAMhD8nTQWVEAMDdGFi4w14EN7/PWgc5DRAKiQkfhbUwfLZ5xtO8gmQghOCd+Q+wWXnbT/itsITjfGZK7dPeNQvF55d3+Xa9h2bw4n18Uyz2qMRVIVkPUqekz6w7TKnhSs3Wm7uOoV046xXswA6N8NxboaHvzFs7z58/9KXjwyLEJoq987ReKH9ZYZz9t7LsGU3vsjwFZuGC2gbGbWVAAAAAElFTkSuQmCC"></td>
      <td>CT-Muscle</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGdJREFUOE9jZGBg+M9AAZAU5mbQVxFj0JNiYdBkfccg+oCDQewhBwP3XyGG31pKSFiRgZGNjYGJiQmMGRkZ4WyYGD6aWuoZGRgY/lHgX4ah6OG/I83Df0aah39Ty8NarO8YRAZ5HgYAjpo76FPLrYcAAAAASUVORK5CYII="></td>
      <td>CT-Pulmonary-Arteries</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAE9JREFUOE9jZGBg+M9ARaCtrc1gZWUFx2pqalQ0nXKjGBkYGP5RbgzChKHg4b8jzcN/qOlhLS0tBmtr60GdpH9T08OwJA3ytKWlJcNgy8MA9EwT6BXoKV4AAAAASUVORK5CYII="></td>
      <td>CT-Soft-Tissue</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIpJREFUOE/lVEEOgzAMcy/w/58xvgHXAQMSo1CqdjAkJLT1sEOkynIsOYnrSLID8Kn6E/yMb7j1SAsUNVBaPQDXzFAdoPpaSyS+A77HRDw39g04YqmW1/Scd/0UcyT13wxLDsM2dTJu45cbnnMYDued46SnO4afW26DxiHDFeDab2TYcjom/8G1DC+kW4oVBvkY3wAAAABJRU5ErkJggg=="></td>
      <td>CT-Air</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAACdJREFUOE/lzwcNAAAIwDDwL5kzgo7VQRMgRBJY0Tc+PLZw28JlCh8VJhPo4zq1+gAAAABJRU5ErkJggg=="></td>
      <td>CT-X-ray</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAD5JREFUOE9jZGBg+M9AI/BsTSEDp3MdAyMjI9gGdBqbGDlqYHqIMQ/kkn808i/DYPXw35Hm4T8jzcO/R5KHAWCQE+iExalVAAAAAElFTkSuQmCC"></td>
      <td>MR-Angio</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJBJREFUOE/lk80KwkAMhL/EgyBCG3XFtuKtL9D3fzN/iXb7t95EFHoYCNlJsgMzAtxroKkyTkcjFDmhtCe2B2Ox2iTQ5RoRRUQ60NVtn+nbmO+zrxl15ptdKd95TO7GPyT9dmfah9vcBF/nJvjyHcFuSXftwLqDCPzS0udecE4ojH1p7D7IsLrImEuN9X9k+AF5cRPoaLoh+AAAAABJRU5ErkJggg=="></td>
      <td>MR-Default</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAACdJREFUOE/lzwcNAAAIwDDwL5kzgo7VQRMgRBJY0Tc+PLZw28JlCh8VJhPo4zq1+gAAAABJRU5ErkJggg=="></td>
      <td>MR-MIP</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAIpJREFUOE/lk8EOwiAQRF8tSy/lXHT//xshKmjANrZKTDxWT4/szhwmO3TATb2gk6XwNFMnQb1l4RkhZiFkS0wzc5lZQqUQkn1qVtqNpvibWiG++J0cGKVnrHx/P/arudlqXMPbAfnfAqddBrY9rl70+wtfPwc26HGgVnqp8s4rfWkHNqgffu4P3wG72TD3+2nVeQAAAABJRU5ErkJggg=="></td>
      <td>MR-T2-Brain</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAJlJREFUOE/lk8EKAjEMRF8PSit4aP//G1sQMRVdK9mtuLsU1ENR8BCm0+QyJM8UKOJBAmTV+lZt+lBntL/fIHgyHilh0lqZgJTao/ZGH8YZIxaXWFacvF3/z73ODAcsEUdaacSScLQ0suWIKXD7t8BDj8CiW/3RDV97BG6f9PPsv3nSl3cDnz2cOjCszO6U048YfrA6Z/k1w3fVFUUB3iCsCAAAAABJRU5ErkJggg=="></td>
      <td>DTI-FA-Brain</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAKVJREFUOE/dk+sOwiAMhT8uC2zxj8P3f1EdmAIuuIwsJkajJE1pKYUD5yggUYczmtFqvDV4W+emxCVfzTzHo9TL3kEzB8988QTxwTGdBlJS2WL2NPMS5zyPms5620MuvfZremzPqD3XM5JCAfHvAMuDREXsAF5+HbBwdNljUQfw7duAMz3fSemDH77uAXZWM4lmX9SwaPe80TBVW5/RsOhbTO9S+g4CbFfWAN08/gAAAABJRU5ErkJggg=="></td>
      <td>US-Fetal</td>
    </tr>
  </tbody>
</table>

## Categorical colors

<table>
  <tbody>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAFxJREFUOE9jvMbA8J8BDWyzxhBiKPVhRFfG8F/1GIbY9GArDLGM+osYYjlNdRhiU5Y+wBCLmIapd6V0JIY6hlUtmGJ/P2GIMV5jYPg30jz8d6R5+M9I8/DvkeRhAI3SXfMjCwBaAAAAAElFTkSuQmCC"></td>
      <td>glasbey</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAF1JREFUOE9jvMbA8J8BDWi3o4swMGypxFDGELDmOIbCScFWGGIZy/QxDXw5E0Os6sg0DLH21YUYYutXGGCIPWFvwRBj31uLIcZ4jYHh30jz8N+R5uE/I83Dv0eShwFmt1oGGZZ1OgAAAABJRU5ErkJggg=="></td>
      <td>glasbey_light</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAF5JREFUOE9jvMbA8J8BDWgmfUcXYlhrxYkhdiKlAEPsjucEDLH1gZ0YYhOvYQgx5Dc8xxC8ICCAIbbZaiOGWG37YQyx3ausMcQYrzEw/BtpHv470jz8Z6R5+PdI8jAAYiJbm4xVu1cAAAAASUVORK5CYII="></td>
      <td>glasbey_warm</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAACdJREFUOE/lzwcNAAAIwDDwL5kzgo7VQRMgRBJY0Tc+PLZw28JlCh8VJhPo4zq1+gAAAABJRU5ErkJggg=="></td>
      <td>modulate</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAF1JREFUOE9jvMbA8J8BDWyzxhBiKPVhRFfG8F/1GIbY9GArDLGM+osYYjlNdRhiU5Y+wBBjjM7FEGstOI0hVn3zNoaY/8N9mOZdY2D4N9I8/HekefjPSPPw75HkYQDvC2FUP89MNAAAAABJRU5ErkJggg=="></td>
      <td>glasbey_bw</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAF5JREFUOE9jvMbA8J8BDWyzxhBiKPVhRFfG8F/1GIbYs59WGGKSNy9iiOU01WGIvbHeiCG2UjoSQ0y02xhD7LV8IIbYwtIeDDHGawwM/0aah/+ONA//GWke/j2SPAwAF4Fcch90Y5YAAAAASUVORK5CYII="></td>
      <td>glasbey_dark</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAAGZJREFUOE9j5Mn8/58BDfzR8UMXYvhhOh1DzNN0DYbY9ogLGGJrfOZjiJ08348hdq1PH0PMf9dDDLHfriEYYmv752GI7duGaQcjT+b/fyPNw39Hmof/jDQP/6auh89jycMLBk0eBgANUmrm0LbJrAAAAABJRU5ErkJggg=="></td>
      <td>glasbey_cool</td>
    </tr>
    <tr>
      <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAFCAYAAAAZiY8XAAAAAXNSR0IArs4c6QAAACZJREFUOE/lzwcNAAAIwLDhXzI36FgdNIBFJIARfflw28JlC6cpfP3gBPcLeZbyAAAAAElFTkSuQmCC"></td>
      <td>modulate_dark</td>
    </tr>
  </tbody>
</table>
