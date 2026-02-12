FROM dunglas/frankenphp AS my_app

COPY ./app/index.php /app/public
RUN cat <<EOF >/app/public/lorem.txt
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus dolor, porta vitae odio nec, auctor rhoncus lorem. Duis id enim tortor. Curabitur neque orci, laoreet at lobortis in, vehicula elementum tortor. Donec tincidunt turpis scelerisque nisi ullamcorper hendrerit. Aenean orci enim, facilisis a lacinia in, condimentum at enim. Phasellus tempor, sem ut pretium venenatis, turpis orci pharetra massa, a bibendum sapien nibh a arcu. Donec venenatis ex interdum nibh mattis egestas. Morbi fringilla leo at sapien blandit gravida. Morbi accumsan, libero eu lacinia pulvinar, arcu justo ultricies libero, imperdiet tristique mauris mi et mi. Nullam commodo purus eu urna pulvinar, at sollicitudin justo viverra.

Aenean consectetur diam vel ante venenatis finibus. Sed dui mi, ultrices vitae neque non, vestibulum ullamcorper tortor. Proin urna augue, tincidunt non elit a, lacinia faucibus sem. Cras ac magna nec augue pharetra maximus. Morbi vulputate ut diam ut luctus. Sed eu nibh non nisl tempus auctor. Morbi interdum venenatis eros, et varius erat vulputate eget. Donec commodo justo ligula, nec congue mi tincidunt ac. Duis elementum, magna eget maximus elementum, justo orci placerat arcu, in porttitor lacus neque sed urna. Curabitur magna tellus, consequat sit amet congue eget, elementum in ligula. Nullam semper lacinia diam, quis dignissim neque sagittis at. Sed ac velit nulla. Proin at dui ac erat condimentum ullamcorper.

Donec vel eros imperdiet, egestas magna id, consectetur orci. Sed venenatis nisl nec maximus sagittis. Nam convallis, neque vel molestie viverra, elit nisi fringilla ipsum, eu malesuada orci erat in tortor. Proin non tempus nulla, id pellentesque risus. Integer eu egestas mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dolor purus, nec commodo libero auctor nec. Cras gravida lectus ac diam porttitor, eu consequat dui dignissim. Nunc ut elit porttitor, facilisis lorem rutrum, cursus orci. Maecenas tincidunt, felis sed ullamcorper fringilla, purus dui aliquam purus, at imperdiet purus ante nec quam. Nunc lacinia efficitur odio, a interdum magna tempus sed. Morbi nec interdum nibh, dignissim elementum tellus.

Cras blandit diam vel purus tristique vulputate. Nulla blandit eu velit sed finibus. Proin feugiat faucibus iaculis. Phasellus nisl nulla, facilisis quis varius eu, fringilla et neque. Aliquam malesuada velit eros, eu tincidunt enim volutpat a. Integer blandit porttitor arcu sit amet finibus. Ut dignissim finibus libero, id pharetra velit condimentum non. Fusce sollicitudin odio in elit semper tempus. Integer felis turpis, ultricies non hendrerit ut, posuere vitae nisi. Etiam sit amet eros sit amet sem efficitur aliquet iaculis a arcu. Cras tortor risus, vestibulum ut consectetur ac, dapibus vel arcu. Nullam et urna lobortis, cursus ligula in, gravida lacus.

Nulla pharetra at leo vitae lacinia. Morbi vitae commodo velit. Aenean et lectus vestibulum, porta risus ultricies, fringilla sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu ornare odio. In laoreet nunc leo, at faucibus erat gravida ac. Quisque consequat sed enim ac finibus. Nulla vulputate justo vitae erat elementum bibendum. Sed ac convallis turpis. Maecenas fringilla tortor nulla, in feugiat neque sagittis eu. Suspendisse potenti. 
EOF

RUN cat <<EOF >/app/public/lfi.txt
A file inclusion vulnerability is a type of web vulnerability that is most commonly found to affect web applications that rely on a scripting run time. This issue is caused when an application builds a path to executable code using an attacker-controlled variable in a way that allows the attacker to control which file is executed at run time. A file include vulnerability is distinct from a generic directory traversal attack, in that directory traversal is a way of gaining unauthorized file system access, and a file inclusion vulnerability subverts how an application loads code for execution. Successful exploitation of a file inclusion vulnerability will result in remote code execution on the web server that runs the affected web application. An attacker can use remote code execution to create a web shell on the web server, which can be used for website defacement.
Types of Inclusion
Remote file inclusion

Remote file inclusion (RFI) occurs when the web application downloads and executes a remote file. These remote files are usually obtained in the form of an HTTP or FTP URI as a user-supplied parameter to the web application.
Local file inclusion

Local file inclusion (LFI) is similar to a remote file inclusion vulnerability except instead of including remote files, only local files i.e. files on the current server can be included for execution. This issue can still lead to remote code execution by including a file that contains attacker-controlled data such as the web server's access logs. 
EOF

RUN echo 'Well played, you win' > /app/flag.txt

